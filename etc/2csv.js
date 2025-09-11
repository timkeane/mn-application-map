
function csv(features) {
  const rows = [];
  features.forEach(feature=>{
    const props = feature.getProperties();
    const coord = feature.getGeometry().getCoordinates();
    rows.push({
      OBJECTID: props.OBJECTID,
      locationid: props.locationid,
      geometry: `POINT([${coord[0]},${coord[1]}])`,
      busname: props.busname,
      streetaddress: props.streetaddress,
      city: props.city,
      state: 'MN',
      zipcode: props.zipcode,
      apptype: props.apptype,
      multunit: props.multunit
    });
  });
  console.warn(papa.unparse(rows));
}
