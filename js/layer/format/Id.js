import GeoJSON from 'ol/format/GeoJSON.js';

export default class Id extends GeoJSON {
  constructor(options) {
    super(options);
    this.idPrefix = options.idPrefix;
    this.idProp = options.idProp;
  }
  readFeatureFromObject(object, options) {
    const feature = super.readFeatureFromObject(object, options);
    feature.setId(this.idPrefix + feature.get(this.idProp));
    return feature;
  }
}
