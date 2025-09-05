import VectorSource from 'ol/source/Vector';

export default class Source extends VectorSource {
  constructor(options) {
    super(options);
    this.filterUrl = options.url;
  }
  loadFeatures(extent, resolution, projection) {
    if (this.loading) {
      const i = setInterval(() => {
        if (!this.loading) {
          clearInterval(i);
          this.dispatchEvent('loadcomplete');
        }
      }, 100);
    }
    super.loadFeatures(extent, resolution, projection);
  }
  filter(where) {
    this.setUrl((extent, resolution, projection) => {
      return this.filterUrl(extent, resolution, projection, where);
    });
    this.refresh();
  }
}
