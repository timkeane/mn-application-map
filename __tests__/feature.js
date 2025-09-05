import GeoJSON from 'ol/format/GeoJSON';
import VectorSource from 'ol/source/Vector';

const format = new GeoJSON();

export const featureCollection = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9759557.5351,
          5164289.293200001
        ]
      },
      "properties": {
        "name": "FAMILY MATTERS INC",
        "type": "C",
        "city": "CHICAGO",
        "lid": 17029,
        "addr": "7731 N MARSHFIELD AVE",
        "zip": 60626,
        "eligible": "N",
        "max_down": "1200",
        "max_up": "35",
        "challenge": true
      },
      "id": "cai-17029"
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9759558.6293,
          5164273.536800005
        ]
      },
      "properties": {
        "city": "CHICAGO",
        "mdu": 0,
        "lid": 1327378106,
        "addr": "7727 N MARSHFIELD AVE",
        "zip": 60626,
        "service": "SERVED",
        "enforce": 1,
        "challenge": true
      },
      "id": "bsl-1327378106"
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9759557.4037,
          5164299.6281
        ]
      },
      "properties": {
        "city": "CHICAGO",
        "mdu": 3,
        "lid": 1327378103,
        "addr": "7733 N MARSHFIELD AVE",
        "zip": 60626,
        "service": "SERVED",
        "enforce": 0,
        "challenge": true
      },
      "id": "bsl-1327378103"
    }
  ]
};

export const features = format.readFeatures(featureCollection);

export const source = new VectorSource({features});

export const csv = `FID_DO_NOT_EDIT,COORDINATE_DO_NOT_EDIT,NAME,ADDRESS,CITY,STATE,ZIP,LOCATION_ID,TYPE,ELIGIBILITY,MAX_UPLOAD_SPEED,MAX_DOWNLOAD_SPEED,MULTI_DWELLING_UNITS,SERVICEABILITY,ENFORCEABLE_COMMITMENT,FEDERAL_FUNDING,STATE_FUNDING
cai-17029,"[-9759557.5351,5164289.293200001]",FAMILY MATTERS INC,7731 N MARSHFIELD AVE,CHICAGO,,60626,17029,C,N,35,1200,,,,,
bsl-1327378106,"[-9759558.6293,5164273.536800005]",,7727 N MARSHFIELD AVE,CHICAGO,,60626,1327378106,,,,,0,SERVED,1,,
bsl-1327378103,"[-9759557.4037,5164299.6281]",,7733 N MARSHFIELD AVE,CHICAGO,,60626,1327378103,,,,,3,SERVED,0,,`;
