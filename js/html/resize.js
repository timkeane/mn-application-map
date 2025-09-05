import $ from 'jquery';

const threeTabBreakPoint = 972;

function dealWithMap(event) {
  const clicked = $(event.target);
  const mapTabBtn = $('#map-tab');
  const mapTab = $('#map');
  const map = $('#map-container');
  const mapActive = clicked.get(0) === mapTabBtn.get(0);
  const threeTabLayout = mapTabBtn.is(':visible');
  if (threeTabLayout && !mapActive) {
    $('body').append(map.addClass('wayout'));
  } else if (threeTabLayout && mapActive) {
    mapTab.append(map.removeClass('wayout'));
  } else {
    map.removeClass('wayout');
  }
}

function tabContentHeight(event) {
  const isMapTab = event?.target.id === 'map-tab' || $('#map-tab').hasClass('active');
  const isChallengeTab = $('#challenge-tab').hasClass('active');
  const isLayersTab = false //$('#layers-tab').hasClass('active');
  const isSmall = $(window).width() < threeTabBreakPoint;
  const hideLocate = isSmall && (isChallengeTab || isLayersTab); 

  $('#legend')[isSmall ? 'addClass' : 'removeClass']('solo');
  $('#locate')[hideLocate ? 'hide' : 'show']();
  $('#tab-content, #tab-col')[isMapTab ? 'addClass' : 'removeClass']('map-active');

  const windowHeight = $(window).outerHeight(true);
  const windowWidth = $(window).outerWidth(true);
  const bannerHeight = $('#banner').outerHeight(true);
  const navHeight = $('#nav').outerHeight(true);
  const locateHeight = (isChallengeTab || isLayersTab) ? 0 : $('#locate').outerHeight(true);
  const extra = windowWidth < threeTabBreakPoint ? 5 : 30;
  const subtract = bannerHeight + navHeight + locateHeight + extra;
  const height = windowHeight - subtract;

  $('#tab-content').css('height', `${height}px`);

  if ($(window).width() > threeTabBreakPoint) {
    $('#map-container').css('height', `${height + locateHeight + extra}px`);
  } else {
    $('#map-container').css('height', `${height + extra}px`);
  }
}

function dealWithTabIndex() {
  const mapContainer = $('#map-container');
  mapContainer.find('button').each((i, button) => {
    const current = $(button).attr('tabindex');
    const stored = $(button).data('tabindex');
    $(button).attr('tabindex', -1);
    if (mapContainer.hasClass('wayout')) {
       if (current !== undefined) {
        $(button).data('tabindex', current);
      }
    } else if (stored !== undefined) {
      $(button).attr('tabindex', stored);
    } else {
      $(button).removeAttr('tabindex')
    }
  });
}

new MutationObserver(dealWithTabIndex)
  .observe($('#map-container').get(0), {attributes: true});

export function createResizeHandler() {
  let first = true;
  const leftColumn = $('.col-sm-4');
  $(window).on('resize', event => {
    const map = $('#map-container');
    if ($(window).width() > threeTabBreakPoint) {
      $('.col-sm-8').append(map);
      leftColumn.addClass('col-sm-4');
      $('#locations-tab').trigger('click');
    } else {
      leftColumn.removeClass('col-sm-4');
      if (!$('#map-tab').hasClass('active')) {
        $('body').append(map.addClass('wayout'));
      }
    }
    tabContentHeight();
  });

  $(window).trigger('resize');
}

$('.nav-link').on('click', dealWithMap).on('click', tabContentHeight);
