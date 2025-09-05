export default {
  "glyphs": "https://basemaps-api.arcgis.com/arcgis/rest/services/OpenStreetMap_v2/VectorTileServer/resources/fonts/{fontstack}/{range}.pbf?token=AAPK075a045352e64bd583ef4645224e213fBIBCnmrqPubNPP2Sxmi9DxqvDgDZBX1Toq4nMJu4bYGkd_TyL-Oaf426BVzX5-UW",
  "layers": [
      {
          "id": "background",
          "paint": {
              "background-color": "#ececec"
          },
          "type": "background"
      },
      {
          "id": "protected area/fill",
          "layout": {},
          "minzoom": 7,
          "paint": {
              "fill-antialias": false,
              "fill-color": {
                  "stops": [
                      [
                          8,
                          "#eff1ef"
                      ],
                      [
                          11,
                          "#e7e9e5"
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "protected area",
          "type": "fill"
      },
      {
          "id": "country boundary (small scale)",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "maxzoom": 3,
          "minzoom": 1,
          "paint": {
              "line-color": "#a9b4c4",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          0,
                          0.2
                      ],
                      [
                          1,
                          0.3
                      ],
                      [
                          2,
                          0.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "country boundary (small scale)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              48
          ],
          "id": "landcover/park",
          "layout": {},
          "minzoom": 9,
          "paint": {
              "fill-antialias": false,
              "fill-color": {
                  "stops": [
                      [
                          8,
                          "#eff1ef"
                      ],
                      [
                          11,
                          "#e7e9e5"
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "landcover",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              47
          ],
          "id": "landcover/golf course",
          "layout": {},
          "minzoom": 9,
          "paint": {
              "fill-color": {
                  "stops": [
                      [
                          8,
                          "#eff1ef"
                      ],
                      [
                          11,
                          "#e7e9e5"
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "landcover",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              49
          ],
          "id": "landcover/green area",
          "layout": {},
          "minzoom": 9,
          "paint": {
              "fill-antialias": false,
              "fill-color": {
                  "stops": [
                      [
                          8,
                          "#eff1ef"
                      ],
                      [
                          11,
                          "#e7e9e5"
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "landcover",
          "type": "fill"
      },
      {
          "id": "cemetery",
          "layout": {},
          "minzoom": 9,
          "paint": {
              "fill-color": {
                  "stops": [
                      [
                          8,
                          "#eff1ef"
                      ],
                      [
                          11,
                          "#e7e9e5"
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "cemetery",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              7
          ],
          "id": "transportation area/helipad",
          "layout": {},
          "minzoom": 15,
          "paint": {
              "fill-color": "#e1e2dd"
          },
          "source": "esri",
          "source-layer": "transportation area",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              6
          ],
          "id": "transportation area/taxiway",
          "layout": {},
          "minzoom": 12,
          "paint": {
              "fill-color": "#e1e2dd"
          },
          "source": "esri",
          "source-layer": "transportation area",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "transportation area/runway",
          "layout": {},
          "minzoom": 10,
          "paint": {
              "fill-color": "#e1e2dd"
          },
          "source": "esri",
          "source-layer": "transportation area",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "transportation area/service",
          "layout": {},
          "minzoom": 13,
          "paint": {
              "fill-color": "#ffffff"
          },
          "source": "esri",
          "source-layer": "transportation area",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "transportation area/pedestrian",
          "layout": {},
          "minzoom": 14,
          "paint": {
              "fill-color": "#ffffff"
          },
          "source": "esri",
          "source-layer": "transportation area",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "transportation area/living street",
          "layout": {},
          "minzoom": 13,
          "paint": {
              "fill-color": "#ffffff"
          },
          "source": "esri",
          "source-layer": "transportation area",
          "type": "fill"
      },
      {
          "id": "Antarctica",
          "layout": {},
          "minzoom": 4,
          "paint": {
              "fill-color": {
                  "stops": [
                      [
                          0,
                          "#f4f4f4"
                      ],
                      [
                          7,
                          "#efefef"
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Antarctica",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "administrative boundary/level 6/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(170,180,190,0.1)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          5
                      ],
                      [
                          15,
                          15
                      ],
                      [
                          20,
                          24
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "administrative boundary",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "administrative boundary/level 5/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(170,180,190,0.1)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          5
                      ],
                      [
                          15,
                          15
                      ],
                      [
                          20,
                          24
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "administrative boundary",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "administrative boundary/level 4/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(170,180,190,0.1)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          5
                      ],
                      [
                          15,
                          15
                      ],
                      [
                          20,
                          24
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "administrative boundary",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "administrative boundary/level 3/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(170,180,190,0.1)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          5
                      ],
                      [
                          15,
                          15
                      ],
                      [
                          20,
                          24
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "administrative boundary",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "administrative boundary/level 2/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 3,
          "paint": {
              "line-color": {
                  "stops": [
                      [
                          5,
                          "rgba(160,170,180,0.2)"
                      ],
                      [
                          6,
                          "rgba(160,170,180,0.1)"
                      ]
                  ]
              },
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          3,
                          1.2
                      ],
                      [
                          5,
                          1.8
                      ],
                      [
                          6,
                          2
                      ],
                      [
                          7,
                          3
                      ],
                      [
                          8,
                          3.2
                      ],
                      [
                          9,
                          6
                      ],
                      [
                          11,
                          8
                      ],
                      [
                          14,
                          16
                      ],
                      [
                          16,
                          30
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "administrative boundary",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "administrative boundary/level 6/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": {
                  "stops": [
                      [
                          8,
                          "#c3ccd5"
                      ],
                      [
                          11,
                          "#b9b9b9"
                      ]
                  ]
              },
              "line-dasharray": [
                  6,
                  4
              ],
              "line-width": 1
          },
          "source": "esri",
          "source-layer": "administrative boundary",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "administrative boundary/level 5/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": {
                  "stops": [
                      [
                          8,
                          "#c3ccd5"
                      ],
                      [
                          11,
                          "#b9b9b9"
                      ]
                  ]
              },
              "line-dasharray": [
                  6,
                  4
              ],
              "line-width": 1
          },
          "source": "esri",
          "source-layer": "administrative boundary",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "administrative boundary/level 4/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 6,
          "paint": {
              "line-color": "rgba(160,170,180,0.4)",
              "line-dasharray": {
                  "stops": [
                      [
                          5.5,
                          [
                              1,
                              0
                          ]
                      ],
                      [
                          5.6,
                          [
                              4,
                              3
                          ]
                      ],
                      [
                          8,
                          [
                              2.1,
                              1.6
                          ]
                      ],
                      [
                          9,
                          [
                              1.7,
                              1.3
                          ]
                      ],
                      [
                          11,
                          [
                              1.5,
                              1
                          ]
                      ]
                  ]
              },
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          6,
                          1
                      ],
                      [
                          8,
                          1.8
                      ],
                      [
                          9,
                          2.5
                      ],
                      [
                          11,
                          3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "administrative boundary",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "administrative boundary/level 3/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 6,
          "paint": {
              "line-color": "rgba(160,170,180,0.4)",
              "line-dasharray": {
                  "stops": [
                      [
                          8.5,
                          [
                              1,
                              0
                          ]
                      ],
                      [
                          8.6,
                          [
                              4,
                              2
                          ]
                      ]
                  ]
              },
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          3,
                          0.6
                      ],
                      [
                          6,
                          1.2
                      ],
                      [
                          9,
                          4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "administrative boundary",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "administrative boundary/level 2/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 6,
          "paint": {
              "line-color": "#bbbbbb",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          6,
                          0.75
                      ],
                      [
                          8,
                          1
                      ],
                      [
                          9,
                          2
                      ],
                      [
                          11,
                          3
                      ],
                      [
                          14,
                          3
                      ],
                      [
                          16,
                          3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "administrative boundary",
          "type": "line"
      },
      {
          "id": "ocean (small scale)",
          "maxzoom": 9,
          "paint": {
              "fill-antialias": false,
              "fill-color": "#cacecf"
          },
          "source": "esri",
          "source-layer": "ocean (small scale)",
          "type": "fill"
      },
      {
          "id": "ocean (large scale)",
          "minzoom": 9,
          "paint": {
              "fill-antialias": false,
              "fill-color": "#cacecf"
          },
          "source": "esri",
          "source-layer": "ocean (large scale)",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              6
          ],
          "id": "water area/water",
          "layout": {},
          "minzoom": 0,
          "paint": {
              "fill-antialias": false,
              "fill-color": "#cacecf"
          },
          "source": "esri",
          "source-layer": "water area",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "wetland/swamp/pattern",
          "layout": {},
          "minzoom": 9,
          "paint": {
              "fill-antialias": false,
              "fill-opacity": {
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          15,
                          1
                      ]
                  ]
              },
              "fill-pattern": {
                  "stops": [
                      [
                          11.5,
                          "wetland/other"
                      ],
                      [
                          11.6,
                          "wetland/swamp"
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "wetland",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "wetland/salt marsh",
          "layout": {},
          "minzoom": 11,
          "paint": {
              "fill-antialias": false,
              "fill-opacity": {
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          15,
                          1
                      ]
                  ]
              },
              "fill-pattern": {
                  "stops": [
                      [
                          11.5,
                          "wetland/other"
                      ],
                      [
                          11.6,
                          "wetland/swamp"
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "wetland",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "wetland/mangrove",
          "layout": {},
          "minzoom": 11,
          "paint": {
              "fill-antialias": false,
              "fill-opacity": {
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          15,
                          1
                      ]
                  ]
              },
              "fill-pattern": {
                  "stops": [
                      [
                          11.5,
                          "wetland/other"
                      ],
                      [
                          11.6,
                          "wetland/swamp"
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "wetland",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "waterway/dock",
          "layout": {},
          "minzoom": 8,
          "paint": {
              "fill-antialias": false,
              "fill-color": "#cacecf"
          },
          "source": "esri",
          "source-layer": "waterway",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "water area/water (intermittent)",
          "layout": {},
          "minzoom": 3,
          "paint": {
              "fill-antialias": false,
              "fill-pattern": "water area/water (intermittent)"
          },
          "source": "esri",
          "source-layer": "water area",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "water area/reservoir",
          "layout": {},
          "minzoom": 0,
          "paint": {
              "fill-antialias": false,
              "fill-color": "#cacecf"
          },
          "source": "esri",
          "source-layer": "water area",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "water area/reservoir (intermittent)",
          "layout": {},
          "minzoom": 6,
          "paint": {
              "fill-antialias": false,
              "fill-pattern": "water area/water (intermittent)"
          },
          "source": "esri",
          "source-layer": "water area",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "water area/basin",
          "layout": {},
          "minzoom": 6,
          "paint": {
              "fill-antialias": false,
              "fill-color": "#cacecf"
          },
          "source": "esri",
          "source-layer": "water area",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "water area/basin (intermittent)",
          "layout": {},
          "minzoom": 6,
          "paint": {
              "fill-antialias": false,
              "fill-pattern": "water area/water (intermittent)"
          },
          "source": "esri",
          "source-layer": "water area",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              9
          ],
          "id": "water line (intermittent)/ditch, drain (tunnel)/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#e0e4e6",
              "line-dasharray": [
                  7,
                  3
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.8
                      ],
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (intermittent)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              8
          ],
          "id": "water line (intermittent)/stream (tunnel)/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#e0e4e6",
              "line-dasharray": [
                  7,
                  3
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.8
                      ],
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (intermittent)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              7
          ],
          "id": "water line (intermittent)/river, canal (tunnel)/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#e0e4e6",
              "line-dasharray": [
                  7,
                  3
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.8
                      ],
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (intermittent)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              6
          ],
          "id": "water line (intermittent)/ditch, drain/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#c5cbcc",
              "line-dasharray": [
                  7,
                  3
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.8
                      ],
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (intermittent)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "water line (intermittent)/stream/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#c5cbcc",
              "line-dasharray": [
                  7,
                  3
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.8
                      ],
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (intermittent)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "water line (intermittent)/canal",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#c5cbcc",
              "line-dasharray": [
                  7,
                  3
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.8
                      ],
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (intermittent)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "water line (intermittent)/river",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#c5cbcc",
              "line-dasharray": [
                  7,
                  3
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.8
                      ],
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (intermittent)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              9
          ],
          "id": "water line (perennial)/ditch, drain (tunnel)/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#e0e4e6",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          10,
                          0.8
                      ],
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (perennial)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              8
          ],
          "id": "water line (perennial)/stream (tunnel)/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#e0e4e6",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (perennial)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              7
          ],
          "id": "water line (perennial)/river, canal (tunnel)/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#e0e4e6",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          10,
                          0.8
                      ],
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (perennial)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              6
          ],
          "id": "water line (perennial)/ditch, drain/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#c5cbcc",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          10,
                          0.8
                      ],
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (perennial)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "water line (perennial)/stream/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#c5cbcc",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          10,
                          0.8
                      ],
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (perennial)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "water line (perennial)/canal",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#c5cbcc",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          10,
                          0.8
                      ],
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (perennial)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "water line (perennial)/river",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 10,
          "paint": {
              "line-color": "#c5cbcc",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          10,
                          0.8
                      ],
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (perennial)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "pier area/pier",
          "layout": {},
          "minzoom": 11,
          "paint": {
              "fill-color": "#eaebeb"
          },
          "source": "esri",
          "source-layer": "pier area",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "pier area/breakwater, groyne",
          "layout": {},
          "minzoom": 11,
          "paint": {
              "fill-color": "#eaebeb"
          },
          "source": "esri",
          "source-layer": "pier area",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "pier line/pier",
          "layout": {
              "line-cap": "square",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#eaebeb",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.5
                      ],
                      [
                          12,
                          1
                      ],
                      [
                          14,
                          2
                      ],
                      [
                          16,
                          4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "pier line",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "transportation area/bridge",
          "layout": {},
          "minzoom": 11,
          "paint": {
              "fill-color": "#efefef"
          },
          "source": "esri",
          "source-layer": "transportation area",
          "type": "fill"
      },
      {
          "id": "Daylight building/fill",
          "layout": {},
          "minzoom": 15,
          "paint": {
              "fill-color": "#dfe1e2",
              "fill-outline-color": "#efefef"
          },
          "source": "esri",
          "source-layer": "Daylight building",
          "type": "fill"
      },
      {
          "id": "OSM building/fill",
          "layout": {},
          "minzoom": 15,
          "paint": {
              "fill-color": "#dfe1e2",
              "fill-outline-color": "#efefef"
          },
          "source": "esri",
          "source-layer": "OSM building",
          "type": "fill"
      },
      {
          "id": "OSM major building/fill",
          "layout": {},
          "minzoom": 14,
          "paint": {
              "fill-color": "#dfe1e2",
              "fill-outline-color": "#efefef"
          },
          "source": "esri",
          "source-layer": "OSM major building",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "railway (tunnel)/subway",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "rgba(198,199,197,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          17,
                          1.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "railway (tunnel)/tram-service",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "rgba(198,199,197,0.5)",
              "line-dasharray": [
                  2,
                  2
              ],
              "line-width": 2
          },
          "source": "esri",
          "source-layer": "railway (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "railway (tunnel)/tram",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "rgba(198,199,197,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          17,
                          1.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "railway (tunnel)/light rail, funicular, narrow gauge",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "rgba(198,199,197,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          17,
                          1.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "railway (tunnel)/rail/tunnel",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "rgba(198,199,197,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          17,
                          1.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway (tunnel)",
          "type": "line"
      },
      {
          "id": "track (tunnel)/other/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": 3.5
          },
          "source": "esri",
          "source-layer": "track (tunnel)",
          "type": "line"
      },
      {
          "id": "track (tunnel)/other/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-dasharray": [
                  3.5,
                  3
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          14,
                          1.2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "track (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "other path (tunnel)/steps/casing",
          "layout": {},
          "minzoom": 15,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-dasharray": [
                  0.5,
                  0.4
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          4.7
                      ],
                      [
                          14,
                          7
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "other path (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "other path (tunnel)/steps/line",
          "layout": {},
          "minzoom": 15,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-dasharray": [
                  0.5,
                  0.4
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          0.7
                      ],
                      [
                          14,
                          3.2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "other path (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "other path (tunnel)/bridleway/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          4.3
                      ],
                      [
                          14,
                          5.2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "other path (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "other path (tunnel)/bridleway/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.3
                      ],
                      [
                          14,
                          1.2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "other path (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "path (tunnel)/footway/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          4.7
                      ],
                      [
                          14,
                          5
                      ],
                      [
                          15,
                          5.3
                      ],
                      [
                          17,
                          5.3
                      ],
                      [
                          18,
                          5.6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "path (tunnel)/footway/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          0.8
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          15,
                          1.3
                      ],
                      [
                          17,
                          1.3
                      ],
                      [
                          18,
                          1.6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "path (tunnel)/cycleway/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          4.3
                      ],
                      [
                          14,
                          4.9
                      ],
                      [
                          15,
                          4.9
                      ],
                      [
                          17,
                          5
                      ],
                      [
                          18,
                          5.3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "path (tunnel)/cycleway/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.7
                      ],
                      [
                          14,
                          0.9
                      ],
                      [
                          15,
                          0.9
                      ],
                      [
                          17,
                          1
                      ],
                      [
                          18,
                          1.3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "service road (tunnel)/minor/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          15,
                          2
                      ],
                      [
                          16,
                          3.5
                      ],
                      [
                          17,
                          4.75
                      ],
                      [
                          18,
                          5.5
                      ],
                      [
                          19,
                          8.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "service road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "service road (tunnel)/minor/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          15,
                          0.8
                      ],
                      [
                          16,
                          1.9
                      ],
                      [
                          17,
                          3.15
                      ],
                      [
                          18,
                          3.9
                      ],
                      [
                          19,
                          6.9
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "service road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "service road (tunnel)/normal/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          2
                      ],
                      [
                          15,
                          3.5
                      ],
                      [
                          16,
                          7
                      ],
                      [
                          17,
                          8.5
                      ],
                      [
                          18,
                          11
                      ],
                      [
                          19,
                          12
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "service road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "service road (tunnel)/normal/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          0.9
                      ],
                      [
                          15,
                          2.3
                      ],
                      [
                          16,
                          5.4
                      ],
                      [
                          17,
                          6.9
                      ],
                      [
                          18,
                          9.4
                      ],
                      [
                          19,
                          10.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "service road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              8
          ],
          "id": "road (tunnel)/pedestrian/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          3
                      ],
                      [
                          14,
                          5
                      ],
                      [
                          15,
                          6
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          17
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              8
          ],
          "id": "road (tunnel)/pedestrian/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          1.9
                      ],
                      [
                          14,
                          3.8
                      ],
                      [
                          15,
                          4.8
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          15.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              7
          ],
          "id": "road (tunnel)/other/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          2
                      ],
                      [
                          15,
                          3.5
                      ],
                      [
                          16,
                          7
                      ],
                      [
                          17,
                          8.5
                      ],
                      [
                          18,
                          11
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              7
          ],
          "id": "road (tunnel)/other/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          0.9
                      ],
                      [
                          15,
                          2.3
                      ],
                      [
                          16,
                          5.4
                      ],
                      [
                          17,
                          6.9
                      ],
                      [
                          18,
                          9.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              6
          ],
          "id": "road (tunnel)/living street/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          2
                      ],
                      [
                          13,
                          3
                      ],
                      [
                          14,
                          5
                      ],
                      [
                          15,
                          6
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          17
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              6
          ],
          "id": "road (tunnel)/living street/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          1
                      ],
                      [
                          13,
                          1.9
                      ],
                      [
                          14,
                          3.8
                      ],
                      [
                          15,
                          4.8
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          15.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "road (tunnel)/residential, unclassified/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          2.5
                      ],
                      [
                          13,
                          3
                      ],
                      [
                          14,
                          5
                      ],
                      [
                          15,
                          6
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          17
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "road (tunnel)/residential, unclassified/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          1.5
                      ],
                      [
                          13,
                          1.9
                      ],
                      [
                          14,
                          3.8
                      ],
                      [
                          15,
                          4.8
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          15.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "road link (tunnel)/tertiary/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.5
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "road (tunnel)/tertiary/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          2.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          13,
                          5
                      ],
                      [
                          14,
                          9
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "road link (tunnel)/tertiary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          2
                      ],
                      [
                          14,
                          5.8
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "road (tunnel)/tertiary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.9
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          13,
                          3.9
                      ],
                      [
                          14,
                          7.8
                      ],
                      [
                          15,
                          8.8
                      ],
                      [
                          16,
                          16.4
                      ],
                      [
                          17,
                          19.4
                      ],
                      [
                          18,
                          25.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "road link (tunnel)/secondary/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "road (tunnel)/secondary/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          3.5
                      ],
                      [
                          12,
                          5
                      ],
                      [
                          13,
                          5
                      ],
                      [
                          14,
                          9
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "road link (tunnel)/primary/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          13,
                          4
                      ],
                      [
                          14,
                          7.8
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "road (tunnel)/primary/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          3.5
                      ],
                      [
                          12,
                          5
                      ],
                      [
                          13,
                          5
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "road link (tunnel)/trunk/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          14,
                          7.8
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "road (tunnel)/trunk/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          3.5
                      ],
                      [
                          12,
                          6
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "road link (tunnel)/motorway/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          14,
                          7.8
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ],
                      [
                          19,
                          17
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "road (tunnel)/motorway/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(227,229,226,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          3.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ],
                      [
                          19,
                          33
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "road link (tunnel)/secondary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          5.8
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "road (tunnel)/secondary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 10,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          8,
                          1
                      ],
                      [
                          9,
                          1.1
                      ],
                      [
                          10,
                          1.1
                      ],
                      [
                          11,
                          2.9
                      ],
                      [
                          12,
                          4.3
                      ],
                      [
                          13,
                          4.3
                      ],
                      [
                          14,
                          7.6
                      ],
                      [
                          15,
                          8.6
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "road link (tunnel)/primary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          13,
                          3
                      ],
                      [
                          14,
                          6.6
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "road (tunnel)/primary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 8,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          7,
                          1
                      ],
                      [
                          8,
                          1.4
                      ],
                      [
                          9,
                          1.8
                      ],
                      [
                          10,
                          1.8
                      ],
                      [
                          11,
                          2
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          13,
                          4
                      ],
                      [
                          15,
                          8.6
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "road link (tunnel)/trunk/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          6.6
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "road (tunnel)/trunk/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 6,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          5,
                          0.4
                      ],
                      [
                          6,
                          0.6
                      ],
                      [
                          7,
                          1
                      ],
                      [
                          8,
                          1.4
                      ],
                      [
                          9,
                          1.9
                      ],
                      [
                          10,
                          1.9
                      ],
                      [
                          11,
                          4.5
                      ],
                      [
                          12,
                          5
                      ],
                      [
                          15,
                          8.6
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "road link (tunnel)/motorway/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          8,
                          0.7
                      ],
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          6.6
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ],
                      [
                          19,
                          15.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "road (tunnel)/motorway/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 5,
          "paint": {
              "line-color": "rgba(255,255,254,0.5)",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          5,
                          0.4
                      ],
                      [
                          6,
                          0.8
                      ],
                      [
                          7,
                          1
                      ],
                      [
                          8,
                          1.4
                      ],
                      [
                          9,
                          1.9
                      ],
                      [
                          10,
                          2
                      ],
                      [
                          11,
                          2.5
                      ],
                      [
                          12,
                          5
                      ],
                      [
                          15,
                          8.6
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ],
                      [
                          19,
                          31
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (tunnel)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              13
          ],
          "id": "Daylight road/track/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": {
                  "base": 1,
                  "stops": [
                      [
                          12,
                          "#e1e2e1"
                      ],
                      [
                          14,
                          "#d2d4d1"
                      ]
                  ]
              },
              "line-width": {
                  "base": 1,
                  "stops": [
                      [
                          12,
                          0.75
                      ],
                      [
                          13,
                          3.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "id": "track/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": {
                  "base": 1,
                  "stops": [
                      [
                          12,
                          "#e1e2e1"
                      ],
                      [
                          14,
                          "#d2d4d1"
                      ]
                  ]
              },
              "line-width": {
                  "base": 1,
                  "stops": [
                      [
                          12,
                          0.75
                      ],
                      [
                          13,
                          3.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "track",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              16
          ],
          "id": "Daylight road/steps/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": 5
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              15
          ],
          "id": "Daylight road/bridleway/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": 3.2
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "other path/steps/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": 5
          },
          "source": "esri",
          "source-layer": "other path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "other path/bridleway/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": 3.2
          },
          "source": "esri",
          "source-layer": "other path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "Daylight path/footway (other surface)/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          3
                      ],
                      [
                          15,
                          3.3
                      ],
                      [
                          17,
                          3.3
                      ],
                      [
                          18,
                          3.6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "Daylight path/footway (unpaved)/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          3
                      ],
                      [
                          15,
                          3.3
                      ],
                      [
                          17,
                          3.3
                      ],
                      [
                          18,
                          3.6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "Daylight path/footway (paved)/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          3
                      ],
                      [
                          15,
                          3.3
                      ],
                      [
                          17,
                          3.3
                      ],
                      [
                          18,
                          3.6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "Daylight path/cycleway (other surface)/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          2.9
                      ],
                      [
                          15,
                          2.9
                      ],
                      [
                          17,
                          3
                      ],
                      [
                          18,
                          3.3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "Daylight path/cycleway (unpaved)/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          2.9
                      ],
                      [
                          15,
                          2.9
                      ],
                      [
                          17,
                          3
                      ],
                      [
                          18,
                          3.3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "Daylight path/cycleway (paved)/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          2.9
                      ],
                      [
                          15,
                          2.9
                      ],
                      [
                          17,
                          3
                      ],
                      [
                          18,
                          3.3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "path/footway (other surface)/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          3
                      ],
                      [
                          15,
                          3.3
                      ],
                      [
                          17,
                          3.3
                      ],
                      [
                          18,
                          3.6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "path/footway (unpaved)/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          3
                      ],
                      [
                          15,
                          3.3
                      ],
                      [
                          17,
                          3.3
                      ],
                      [
                          18,
                          3.6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "path/footway (paved)/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          3
                      ],
                      [
                          15,
                          3.3
                      ],
                      [
                          17,
                          3.3
                      ],
                      [
                          18,
                          3.6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "path/cycleway (other surface)/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          2.9
                      ],
                      [
                          15,
                          2.9
                      ],
                      [
                          17,
                          3
                      ],
                      [
                          18,
                          3.3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "path/cycleway (unpaved)/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          2.9
                      ],
                      [
                          15,
                          2.9
                      ],
                      [
                          17,
                          3
                      ],
                      [
                          18,
                          3.3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "path/cycleway (paved)/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          2.9
                      ],
                      [
                          15,
                          2.9
                      ],
                      [
                          17,
                          3
                      ],
                      [
                          18,
                          3.3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              9
          ],
          "id": "Daylight road/tertiary link/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.5
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "road link/tertiary/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.5
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              7
          ],
          "id": "Daylight road/secondary link/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "road link/secondary/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "Daylight road/primary link/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          13,
                          4
                      ],
                      [
                          14,
                          7.8
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "road link/primary/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          13,
                          4
                      ],
                      [
                          14,
                          7.8
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "Daylight road/trunk link/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          14,
                          7.8
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "road link/trunk/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          14,
                          7.8
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "Daylight road/motorway link/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          14,
                          7.8
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ],
                      [
                          19,
                          17
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "road link/motorway/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          14,
                          7.8
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ],
                      [
                          19,
                          17
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              12
          ],
          "id": "Daylight road/service/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          15,
                          2
                      ],
                      [
                          16,
                          3.5
                      ],
                      [
                          17,
                          4.75
                      ],
                      [
                          18,
                          5.5
                      ],
                      [
                          19,
                          8.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "service road/minor/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          15,
                          2
                      ],
                      [
                          16,
                          3.5
                      ],
                      [
                          17,
                          4.75
                      ],
                      [
                          18,
                          5.5
                      ],
                      [
                          19,
                          8.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "service road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "service road/normal/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          2
                      ],
                      [
                          15,
                          3.5
                      ],
                      [
                          16,
                          7
                      ],
                      [
                          17,
                          8.5
                      ],
                      [
                          18,
                          11
                      ],
                      [
                          19,
                          12
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "service road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              14
          ],
          "id": "Daylight road/pedestrian/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          3
                      ],
                      [
                          14,
                          5
                      ],
                      [
                          15,
                          6
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          17
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              8
          ],
          "id": "road/pedestrian/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          3
                      ],
                      [
                          14,
                          5
                      ],
                      [
                          15,
                          6
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          17
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              7
          ],
          "id": "road/other/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          2
                      ],
                      [
                          15,
                          3.5
                      ],
                      [
                          16,
                          7
                      ],
                      [
                          17,
                          8.5
                      ],
                      [
                          18,
                          11
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              11
          ],
          "id": "Daylight road/living street/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          3
                      ],
                      [
                          14,
                          5
                      ],
                      [
                          15,
                          6
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          17
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              6
          ],
          "id": "road/living street/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          3
                      ],
                      [
                          14,
                          5
                      ],
                      [
                          15,
                          6
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          17
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              10
          ],
          "id": "Daylight road/residential, unclassified/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          3
                      ],
                      [
                          14,
                          5
                      ],
                      [
                          15,
                          6
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          17
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "road/residential, unclassified/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          3
                      ],
                      [
                          14,
                          5
                      ],
                      [
                          15,
                          6
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          17
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              8
          ],
          "id": "Daylight road/tertiary/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          2
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "road/tertiary/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          2
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              6
          ],
          "id": "Daylight road/secondary/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.6
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          9
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "road/secondary/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.6
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          9
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "Daylight road/primary/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 10,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          2.4
                      ],
                      [
                          12,
                          5
                      ],
                      [
                          13,
                          5
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "road/primary/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 10,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          2.4
                      ],
                      [
                          12,
                          5
                      ],
                      [
                          13,
                          5
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "Daylight road/trunk/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          3.5
                      ],
                      [
                          12,
                          6
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "road/trunk/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          3.5
                      ],
                      [
                          12,
                          6
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "Daylight road/motorway/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          3.5
                      ],
                      [
                          12,
                          6
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ],
                      [
                          19,
                          33
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "road/motorway/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          3.5
                      ],
                      [
                          12,
                          6
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ],
                      [
                          19,
                          33
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              13
          ],
          "id": "Daylight road/track/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#fffffe",
              "line-dasharray": [
                  3.5,
                  3
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          14,
                          1.2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "id": "track/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#fffffe",
              "line-dasharray": [
                  3.5,
                  3
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          14,
                          1.2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "track",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              16
          ],
          "id": "Daylight road/steps/line",
          "layout": {},
          "minzoom": 15,
          "paint": {
              "line-color": "#fffffe",
              "line-dasharray": [
                  0.7,
                  0.5
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          0.7
                      ],
                      [
                          14,
                          3.2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              15
          ],
          "id": "Daylight road/bridleway/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          0.8
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          15,
                          1.3
                      ],
                      [
                          17,
                          1.3
                      ],
                      [
                          18,
                          1.6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "other path/steps/line",
          "layout": {},
          "minzoom": 15,
          "paint": {
              "line-color": "#fffffe",
              "line-dasharray": [
                  0.7,
                  0.5
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          0.7
                      ],
                      [
                          14,
                          3.2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "other path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "other path/bridleway/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          0.8
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          15,
                          1.3
                      ],
                      [
                          17,
                          1.3
                      ],
                      [
                          18,
                          1.6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "other path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "Daylight path/footway (other surface)/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          0.8
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          15,
                          1.3
                      ],
                      [
                          17,
                          1.3
                      ],
                      [
                          18,
                          1.6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "Daylight path/footway (unpaved)/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          0.8
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          15,
                          1.3
                      ],
                      [
                          17,
                          1.3
                      ],
                      [
                          18,
                          1.6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "Daylight path/footway (paved)/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          0.8
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          15,
                          1.3
                      ],
                      [
                          17,
                          1.3
                      ],
                      [
                          18,
                          1.6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "Daylight path/cycleway (other surface)/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.7
                      ],
                      [
                          14,
                          0.9
                      ],
                      [
                          15,
                          0.9
                      ],
                      [
                          17,
                          1
                      ],
                      [
                          18,
                          1.3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "Daylight path/cycleway (unpaved)/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.7
                      ],
                      [
                          14,
                          0.9
                      ],
                      [
                          15,
                          0.9
                      ],
                      [
                          17,
                          1
                      ],
                      [
                          18,
                          1.3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "Daylight path/cycleway (paved)/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.7
                      ],
                      [
                          14,
                          0.9
                      ],
                      [
                          15,
                          0.9
                      ],
                      [
                          17,
                          1
                      ],
                      [
                          18,
                          1.3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "path/footway (other surface)/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          0.8
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          15,
                          1.3
                      ],
                      [
                          17,
                          1.3
                      ],
                      [
                          18,
                          1.6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "path/footway (unpaved)/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          0.8
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          15,
                          1.3
                      ],
                      [
                          17,
                          1.3
                      ],
                      [
                          18,
                          1.6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "path/footway (paved)/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          0.8
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          15,
                          1.3
                      ],
                      [
                          17,
                          1.3
                      ],
                      [
                          18,
                          1.6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "path/cycleway (other surface)/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.7
                      ],
                      [
                          14,
                          0.9
                      ],
                      [
                          15,
                          0.9
                      ],
                      [
                          17,
                          1
                      ],
                      [
                          18,
                          1.3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "path/cycleway (unpaved)/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.7
                      ],
                      [
                          14,
                          0.9
                      ],
                      [
                          15,
                          0.9
                      ],
                      [
                          17,
                          1
                      ],
                      [
                          18,
                          1.3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "path/cycleway (paved)/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.7
                      ],
                      [
                          14,
                          0.9
                      ],
                      [
                          15,
                          0.9
                      ],
                      [
                          17,
                          1
                      ],
                      [
                          18,
                          1.3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              12
          ],
          "id": "Daylight road/service/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#fdfdfd",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          0.75
                      ],
                      [
                          14,
                          1.33
                      ],
                      [
                          18,
                          20
                      ],
                      [
                          22,
                          35
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "service road/minor/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          15,
                          0.8
                      ],
                      [
                          16,
                          1.9
                      ],
                      [
                          17,
                          3.15
                      ],
                      [
                          18,
                          3.9
                      ],
                      [
                          19,
                          6.9
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "service road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "service road/normal/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          0.9
                      ],
                      [
                          15,
                          2.3
                      ],
                      [
                          16,
                          5.4
                      ],
                      [
                          17,
                          6.9
                      ],
                      [
                          18,
                          9.4
                      ],
                      [
                          19,
                          10.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "service road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              9
          ],
          "id": "road/raceway",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.2
                      ],
                      [
                          12,
                          2
                      ],
                      [
                          13,
                          3
                      ],
                      [
                          14,
                          6
                      ],
                      [
                          17,
                          8
                      ],
                      [
                          18,
                          12
                      ],
                      [
                          19,
                          24
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              14
          ],
          "id": "Daylight road/pedestrian/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          1.9
                      ],
                      [
                          14,
                          3.8
                      ],
                      [
                          15,
                          4.8
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          15.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              8
          ],
          "id": "road/pedestrian/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          1.9
                      ],
                      [
                          14,
                          3.8
                      ],
                      [
                          15,
                          4.8
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          15.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "transportation area/platform",
          "layout": {},
          "minzoom": 13,
          "paint": {
              "fill-color": "#e8e8e8"
          },
          "source": "esri",
          "source-layer": "transportation area",
          "type": "fill"
      },
      {
          "filter": [
              "==",
              "_symbol",
              7
          ],
          "id": "road/other/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          9,
                          1
                      ],
                      [
                          13,
                          0.9
                      ],
                      [
                          15,
                          2.3
                      ],
                      [
                          16,
                          5.4
                      ],
                      [
                          17,
                          6.9
                      ],
                      [
                          18,
                          9.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              11
          ],
          "id": "Daylight road/living street/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          1
                      ],
                      [
                          13,
                          1.9
                      ],
                      [
                          14,
                          3.8
                      ],
                      [
                          15,
                          4.8
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          15.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              6
          ],
          "id": "road/living street/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          1
                      ],
                      [
                          13,
                          1.9
                      ],
                      [
                          14,
                          3.8
                      ],
                      [
                          15,
                          4.8
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          15.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              10
          ],
          "id": "Daylight road/residential, unclassified/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          1
                      ],
                      [
                          13,
                          1.9
                      ],
                      [
                          14,
                          3.8
                      ],
                      [
                          15,
                          4.8
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          15.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "road/residential, unclassified/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          1
                      ],
                      [
                          13,
                          1.9
                      ],
                      [
                          14,
                          3.8
                      ],
                      [
                          15,
                          4.8
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          15.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              8
          ],
          "id": "Daylight road/tertiary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.75
                      ],
                      [
                          14,
                          5
                      ],
                      [
                          15,
                          8
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "road/tertiary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.75
                      ],
                      [
                          14,
                          5
                      ],
                      [
                          15,
                          8
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              9
          ],
          "id": "Daylight road/tertiary link/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          2
                      ],
                      [
                          14,
                          5.8
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "road link/tertiary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          2
                      ],
                      [
                          14,
                          5.8
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              7
          ],
          "id": "Daylight road/secondary link/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          5.8
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "road link/secondary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          5.8
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "Daylight road/primary link/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          13,
                          3
                      ],
                      [
                          14,
                          6.6
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "road link/primary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          13,
                          3
                      ],
                      [
                          14,
                          6.6
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "Daylight road/trunk link/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          6.6
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "road link/trunk/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          6.6
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "Daylight road/motorway link/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 8,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          8,
                          0.7
                      ],
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          6.6
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ],
                      [
                          19,
                          15.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "road link/motorway/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 8,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          8,
                          0.7
                      ],
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          6.6
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ],
                      [
                          19,
                          15.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              6
          ],
          "id": "Daylight road/secondary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 10,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.6
                      ],
                      [
                          12,
                          1.4
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          15,
                          8
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "road/secondary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 10,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.6
                      ],
                      [
                          12,
                          1.4
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          15,
                          8
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "Daylight road/primary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 8,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          10,
                          0.6
                      ],
                      [
                          11,
                          1.4
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          15,
                          8
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "road/primary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 8,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          10,
                          0.6
                      ],
                      [
                          11,
                          1.4
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          15,
                          8
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "Daylight road/trunk/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 6,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          8,
                          0.6
                      ],
                      [
                          9,
                          1
                      ],
                      [
                          10,
                          1.4
                      ],
                      [
                          11,
                          2.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          15,
                          8
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "road/trunk/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 6,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          8,
                          0.6
                      ],
                      [
                          9,
                          1
                      ],
                      [
                          10,
                          1.4
                      ],
                      [
                          11,
                          2.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          15,
                          8
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "Daylight road/motorway/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 5,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          6,
                          0.6
                      ],
                      [
                          7,
                          1
                      ],
                      [
                          8,
                          1.4
                      ],
                      [
                          9,
                          1.9
                      ],
                      [
                          10,
                          2
                      ],
                      [
                          11,
                          2.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          15,
                          8
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ],
                      [
                          19,
                          31
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "Daylight road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "road/motorway/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 5,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          6,
                          0.6
                      ],
                      [
                          7,
                          1
                      ],
                      [
                          8,
                          1.4
                      ],
                      [
                          9,
                          1.9
                      ],
                      [
                          10,
                          2
                      ],
                      [
                          11,
                          2.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          15,
                          8
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ],
                      [
                          19,
                          31
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              9
          ],
          "id": "railway/monorail/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#efefef",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          1.75
                      ],
                      [
                          14,
                          2.5
                      ],
                      [
                          17,
                          3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              9
          ],
          "id": "railway/monorail/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": {
                  "stops": [
                      [
                          14,
                          "#dcddda"
                      ],
                      [
                          16,
                          "#c6c7c5"
                      ]
                  ]
              },
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          0.75
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          17,
                          1.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              6
          ],
          "id": "railway/subway",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": {
                  "stops": [
                      [
                          14,
                          "#dcddda"
                      ],
                      [
                          16,
                          "#c6c7c5"
                      ]
                  ]
              },
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          17,
                          1.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "railway/tram-service",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": {
                  "stops": [
                      [
                          14,
                          "#dcddda"
                      ],
                      [
                          16,
                          "#c6c7c5"
                      ]
                  ]
              },
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          1
                      ],
                      [
                          17,
                          1.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "railway/tram",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": {
                  "stops": [
                      [
                          14,
                          "#dcddda"
                      ],
                      [
                          16,
                          "#c6c7c5"
                      ]
                  ]
              },
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          17,
                          1.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "railway/light rail, funicular, narrow gauge",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": {
                  "stops": [
                      [
                          14,
                          "#dcddda"
                      ],
                      [
                          16,
                          "#c6c7c5"
                      ]
                  ]
              },
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          17,
                          1.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "railway/rail/casing",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#efefef",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          1.5
                      ],
                      [
                          14,
                          2.5
                      ],
                      [
                          17,
                          3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "railway/rail/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": {
                  "stops": [
                      [
                          14,
                          "#dcddda"
                      ],
                      [
                          16,
                          "#c6c7c5"
                      ]
                  ]
              },
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          17,
                          1.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "water line (intermittent)/ditch, drain (bridge)/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#efefef",
              "line-width": 3
          },
          "source": "esri",
          "source-layer": "water line (intermittent)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "water line (intermittent)/ditch, drain (bridge)/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#c5cbcc",
              "line-dasharray": [
                  7,
                  3
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (intermittent)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "water line (intermittent)/stream (bridge)/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#efefef",
              "line-width": 3
          },
          "source": "esri",
          "source-layer": "water line (intermittent)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "water line (intermittent)/stream (bridge)/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#c5cbcc",
              "line-dasharray": [
                  7,
                  3
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (intermittent)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "water line (intermittent)/river, canal (bridge)/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#efefef",
              "line-width": 3
          },
          "source": "esri",
          "source-layer": "water line (intermittent)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "water line (intermittent)/river, canal (bridge)/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#c5cbcc",
              "line-dasharray": [
                  7,
                  3
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (intermittent)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "water line (perennial)/ditch, drain (bridge)/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#efefef",
              "line-width": 3
          },
          "source": "esri",
          "source-layer": "water line (perennial)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "water line (perennial)/ditch, drain (bridge)/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#c5cbcc",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (perennial)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "water line (perennial)/stream (bridge)/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#efefef",
              "line-width": 3
          },
          "source": "esri",
          "source-layer": "water line (perennial)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "water line (perennial)/stream (bridge)/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#c5cbcc",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (perennial)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "water line (perennial)/river, canal (bridge)/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#efefef",
              "line-width": 3
          },
          "source": "esri",
          "source-layer": "water line (perennial)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "water line (perennial)/river, canal (bridge)/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#c5cbcc",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          14,
                          0.8
                      ],
                      [
                          17,
                          2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "water line (perennial)",
          "type": "line"
      },
      {
          "id": "track (bridge)/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": 3.5
          },
          "source": "esri",
          "source-layer": "track (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "service road (bridge)/minor/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          15,
                          2
                      ],
                      [
                          16,
                          3.5
                      ],
                      [
                          17,
                          4.75
                      ],
                      [
                          18,
                          5.5
                      ],
                      [
                          19,
                          8.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "service road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "service road (bridge)/normal/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          2
                      ],
                      [
                          15,
                          3.5
                      ],
                      [
                          16,
                          7
                      ],
                      [
                          17,
                          8.5
                      ],
                      [
                          18,
                          11
                      ],
                      [
                          19,
                          12
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "service road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              8
          ],
          "id": "road (bridge)/pedestrian/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          3
                      ],
                      [
                          14,
                          5
                      ],
                      [
                          15,
                          6
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          17
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              7
          ],
          "id": "road (bridge)/other/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          2
                      ],
                      [
                          15,
                          3.5
                      ],
                      [
                          16,
                          7
                      ],
                      [
                          17,
                          8.5
                      ],
                      [
                          18,
                          11
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              6
          ],
          "id": "road (bridge)/living street/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          3
                      ],
                      [
                          14,
                          5
                      ],
                      [
                          15,
                          6
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          17
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "road (bridge)/residential, unclassified/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          3
                      ],
                      [
                          14,
                          5
                      ],
                      [
                          15,
                          6
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          17
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "road link (bridge)/tertiary/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "road (bridge)/tertiary/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          5
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "road link (bridge)/secondary/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          4
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "road (bridge)/secondary/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          9
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "road link (bridge)/primary/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          2.4
                      ],
                      [
                          13,
                          4
                      ],
                      [
                          14,
                          7.8
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "road (bridge)/primary/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          5
                      ],
                      [
                          13,
                          5
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "road link (bridge)/trunk/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          4
                      ],
                      [
                          14,
                          7.8
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "road (bridge)/trunk/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          6
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "road link (bridge)/motorway/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          4
                      ],
                      [
                          14,
                          7.8
                      ],
                      [
                          16,
                          12
                      ],
                      [
                          17,
                          13
                      ],
                      [
                          18,
                          16
                      ],
                      [
                          19,
                          17
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "road (bridge)/motorway/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#e3e5e2",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          6
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          16,
                          18
                      ],
                      [
                          17,
                          21
                      ],
                      [
                          18,
                          27
                      ],
                      [
                          19,
                          33
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              9
          ],
          "id": "railway (bridge)/monorail/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#efefef",
              "line-width": 5
          },
          "source": "esri",
          "source-layer": "railway (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              9
          ],
          "id": "railway (bridge)/monorail/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": {
                  "stops": [
                      [
                          14,
                          "#dcddda"
                      ],
                      [
                          16,
                          "#c6c7c5"
                      ]
                  ]
              },
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          17,
                          1.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              6
          ],
          "id": "railway (bridge)/subway/bridge casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#ececec",
              "line-width": 5.5
          },
          "source": "esri",
          "source-layer": "railway (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              6
          ],
          "id": "railway (bridge)/subway/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#efefef",
              "line-width": 4
          },
          "source": "esri",
          "source-layer": "railway (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              6
          ],
          "id": "railway (bridge)/subway/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": {
                  "stops": [
                      [
                          14,
                          "#dcddda"
                      ],
                      [
                          16,
                          "#c6c7c5"
                      ]
                  ]
              },
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          17,
                          1.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "railway (bridge)/tram-service/bridge casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#ececec",
              "line-width": 5
          },
          "source": "esri",
          "source-layer": "railway (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "railway (bridge)/tram-service/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#FFFFFF",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "railway (bridge)/tram-service/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": {
                  "stops": [
                      [
                          14,
                          "#dcddda"
                      ],
                      [
                          16,
                          "#c6c7c5"
                      ]
                  ]
              },
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          17,
                          1.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "railway (bridge)/tram/bridge casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#ececec",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          4
                      ],
                      [
                          14,
                          5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "railway (bridge)/tram/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#ffffff",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "railway (bridge)/tram/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": {
                  "stops": [
                      [
                          14,
                          "#dcddda"
                      ],
                      [
                          16,
                          "#c6c7c5"
                      ]
                  ]
              },
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          17,
                          1.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "railway (bridge)/rail/bridge casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#ececec",
              "line-width": 6.5
          },
          "source": "esri",
          "source-layer": "railway (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "railway (bridge)/rail/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#ffffff",
              "line-width": 5
          },
          "source": "esri",
          "source-layer": "railway (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "railway (bridge)/rail/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": {
                  "stops": [
                      [
                          14,
                          "#dcddda"
                      ],
                      [
                          16,
                          "#c6c7c5"
                      ]
                  ]
              },
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          14,
                          1
                      ],
                      [
                          17,
                          1.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "railway (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "track (bridge)/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#fffffe",
              "line-dasharray": [
                  3.5,
                  3
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.5
                      ],
                      [
                          14,
                          1.2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "track (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "other path (bridge)/steps/inner casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#fffffe",
              "line-width": 5
          },
          "source": "esri",
          "source-layer": "other path (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "other path (bridge)/steps/line",
          "layout": {},
          "minzoom": 15,
          "paint": {
              "line-color": "#fffffe",
              "line-dasharray": [
                  0.7,
                  0.5
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.7
                      ],
                      [
                          14,
                          3.2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "other path (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "other path (bridge)/bridleway/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#efefef",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          2.3
                      ],
                      [
                          14,
                          3.2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "other path (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "other path (bridge)/bridleway/line",
          "layout": {},
          "minzoom": 14,
          "paint": {
              "line-color": "#fffffe",
              "line-dasharray": [
                  4,
                  2
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.3
                      ],
                      [
                          14,
                          1.2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "other path (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "path (bridge)/footway/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#efefef",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          2.7
                      ],
                      [
                          14,
                          3
                      ],
                      [
                          15,
                          3.3
                      ],
                      [
                          17,
                          3.3
                      ],
                      [
                          18,
                          3.6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "path (bridge)/footway/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#fffffe",
              "line-dasharray": [
                  4,
                  2
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.3
                      ],
                      [
                          14,
                          1.2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "path (bridge)/cycleway/casing",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#efefef",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          2.7
                      ],
                      [
                          14,
                          2.9
                      ],
                      [
                          15,
                          2.9
                      ],
                      [
                          17,
                          3
                      ],
                      [
                          18,
                          3.3
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "path (bridge)/cycleway/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 14,
          "paint": {
              "line-color": "#fffffe",
              "line-dasharray": [
                  4,
                  2
              ],
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          0.3
                      ],
                      [
                          14,
                          1.2
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "path (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "service road (bridge)/minor/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          15,
                          0.5
                      ],
                      [
                          16,
                          1.9
                      ],
                      [
                          17,
                          3.15
                      ],
                      [
                          18,
                          3.9
                      ],
                      [
                          19,
                          6.9
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "service road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "service road (bridge)/normal/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          1
                      ],
                      [
                          15,
                          2
                      ],
                      [
                          16,
                          5.4
                      ],
                      [
                          17,
                          6.9
                      ],
                      [
                          18,
                          9.4
                      ],
                      [
                          19,
                          10.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "service road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              8
          ],
          "id": "road (bridge)/pedestrian/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 15,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          2
                      ],
                      [
                          14,
                          3.5
                      ],
                      [
                          15,
                          4.5
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          15.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              7
          ],
          "id": "road (bridge)/other/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 13,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          1
                      ],
                      [
                          15,
                          2
                      ],
                      [
                          16,
                          5.4
                      ],
                      [
                          17,
                          6.9
                      ],
                      [
                          18,
                          9.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              6
          ],
          "id": "road (bridge)/living street/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          1
                      ],
                      [
                          13,
                          2
                      ],
                      [
                          14,
                          3.5
                      ],
                      [
                          15,
                          4.5
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          15.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              5
          ],
          "id": "road (bridge)/residential, unclassified/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 12,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          12,
                          1.5
                      ],
                      [
                          13,
                          2
                      ],
                      [
                          14,
                          3.5
                      ],
                      [
                          15,
                          4.5
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          15.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "road link (bridge)/tertiary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.3
                      ],
                      [
                          12,
                          2
                      ],
                      [
                          14,
                          5.5
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              4
          ],
          "id": "road (bridge)/tertiary/line",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          2.3
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          13,
                          4
                      ],
                      [
                          14,
                          7.5
                      ],
                      [
                          15,
                          8.5
                      ],
                      [
                          16,
                          16.4
                      ],
                      [
                          17,
                          19.4
                      ],
                      [
                          18,
                          25.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "road link (bridge)/secondary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          5.8
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "road link (bridge)/primary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          1.3
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          13,
                          3
                      ],
                      [
                          14,
                          6.3
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "road link (bridge)/trunk/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          6.6
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "road link (bridge)/motorway/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          8,
                          0.7
                      ],
                      [
                          11,
                          0.9
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          14,
                          6.6
                      ],
                      [
                          16,
                          10.4
                      ],
                      [
                          17,
                          11.4
                      ],
                      [
                          18,
                          14.4
                      ],
                      [
                          19,
                          15.4
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road link (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "road (bridge)/secondary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 10,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          11,
                          0.6
                      ],
                      [
                          12,
                          1.4
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          15,
                          8
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "road (bridge)/primary/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 8,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          10,
                          0.6
                      ],
                      [
                          11,
                          1.4
                      ],
                      [
                          12,
                          3
                      ],
                      [
                          15,
                          8
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "road (bridge)/trunk/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 7,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          8,
                          0.6
                      ],
                      [
                          9,
                          1
                      ],
                      [
                          10,
                          1.4
                      ],
                      [
                          11,
                          2.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          15,
                          8
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "road (bridge)/motorway/line",
          "layout": {
              "line-cap": "round",
              "line-join": "round"
          },
          "minzoom": 7,
          "paint": {
              "line-color": "#fffffe",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          6,
                          0.6
                      ],
                      [
                          7,
                          1
                      ],
                      [
                          8,
                          1.4
                      ],
                      [
                          9,
                          1.9
                      ],
                      [
                          10,
                          2
                      ],
                      [
                          11,
                          2.5
                      ],
                      [
                          12,
                          4
                      ],
                      [
                          15,
                          8
                      ],
                      [
                          16,
                          16
                      ],
                      [
                          17,
                          19
                      ],
                      [
                          18,
                          25
                      ],
                      [
                          19,
                          31
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "road (bridge)",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              1
          ],
          "id": "aeroway/taxiway",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#d6d8de",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          10,
                          1
                      ],
                      [
                          12,
                          2
                      ],
                      [
                          13,
                          4
                      ],
                      [
                          14,
                          5
                      ],
                      [
                          15,
                          6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "aeroway",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              0
          ],
          "id": "aeroway/runway",
          "layout": {
              "line-join": "round"
          },
          "minzoom": 11,
          "paint": {
              "line-color": "#d6d8de",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          10,
                          2
                      ],
                      [
                          11,
                          4
                      ],
                      [
                          12,
                          6
                      ],
                      [
                          13,
                          12
                      ],
                      [
                          14,
                          18
                      ],
                      [
                          15,
                          24
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "aeroway",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              3
          ],
          "id": "aeroway/taxiway (bridge)",
          "layout": {},
          "minzoom": 11,
          "paint": {
              "line-color": "#efefef",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          13,
                          5.5
                      ],
                      [
                          14,
                          6.5
                      ],
                      [
                          15,
                          7.5
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "aeroway",
          "type": "line"
      },
      {
          "filter": [
              "==",
              "_symbol",
              2
          ],
          "id": "aeroway/runway (bridge)",
          "layout": {},
          "minzoom": 11,
          "paint": {
              "line-color": "#d6d8de",
              "line-width": {
                  "base": 1.2,
                  "stops": [
                      [
                          10,
                          1
                      ],
                      [
                          12,
                          2
                      ],
                      [
                          13,
                          4
                      ],
                      [
                          14,
                          5
                      ],
                      [
                          15,
                          6
                      ]
                  ]
              }
          },
          "source": "esri",
          "source-layer": "aeroway",
          "type": "line"
      },
      {
          "id": "Daylight building/label/Default",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.08,
              "text-line-height": 1,
              "text-max-width": 6,
              "text-optional": true,
              "text-padding": 3,
              "text-size": 10
          },
          "minzoom": 17,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "Daylight building/label",
          "type": "symbol"
      },
      {
          "id": "OSM major building/label/Default",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.08,
              "text-line-height": 1,
              "text-max-width": 6,
              "text-optional": true,
              "text-padding": 3,
              "text-size": 10
          },
          "minzoom": 17,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "OSM major building/label",
          "type": "symbol"
      },
      {
          "id": "OSM building/label/Default",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.08,
              "text-line-height": 1,
              "text-max-width": 6,
              "text-optional": true,
              "text-padding": 3,
              "text-size": 10
          },
          "minzoom": 17,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "OSM building/label",
          "type": "symbol"
      },
      {
          "id": "other path (tunnel)/label/Default",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-offset": [
                  0,
                  -0.9
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "other path (tunnel)/label",
          "type": "symbol"
      },
      {
          "id": "path (tunnel)/label/Default",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-offset": [
                  0,
                  -0.9
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "path (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              1
          ],
          "id": "track (tunnel)/label/alternate name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-offset": [
                  0,
                  0.8
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "track (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              0
          ],
          "id": "track (tunnel)/label/name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-offset": [
                  0,
                  0.8
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "track (tunnel)/label",
          "type": "symbol"
      },
      {
          "id": "service road (tunnel)/label/Default",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "service road (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              13
          ],
          "id": "road (tunnel)/label/pedestrian",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              12
          ],
          "id": "road (tunnel)/label/living street",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          14,
                          8
                      ],
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              10
          ],
          "id": "road (tunnel)/label/residential, unclassified shield text",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          14,
                          8
                      ],
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666"
          },
          "source": "esri",
          "source-layer": "road (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              11
          ],
          "id": "road (tunnel)/label/residential, unclassified name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": {
                  "stops": [
                      [
                          14,
                          300
                      ],
                      [
                          16,
                          400
                      ]
                  ]
              },
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          14,
                          8
                      ],
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              9
          ],
          "id": "road (tunnel)/label/tertiary name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          13,
                          9
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              8
          ],
          "id": "road (tunnel)/label/secondary name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          8
                      ],
                      [
                          13,
                          9
                      ],
                      [
                          14,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              7
          ],
          "id": "road (tunnel)/label/primary name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          8
                      ],
                      [
                          13,
                          9
                      ],
                      [
                          14,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              6
          ],
          "id": "road (tunnel)/label/trunk name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          8
                      ],
                      [
                          13,
                          9
                      ],
                      [
                          14,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 13,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              5
          ],
          "id": "road (tunnel)/label/motorway name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          8
                      ],
                      [
                          13,
                          9
                      ],
                      [
                          14,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 13,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              4
          ],
          "id": "road (tunnel)/label/tertiary shield",
          "layout": {
              "icon-image": "road (tunnel)/tertiary shield/{_len}",
              "icon-rotation-alignment": "viewport",
              "icon-size": {
                  "stops": [
                      [
                          11,
                          1
                      ],
                      [
                          15,
                          1.2
                      ],
                      [
                          17,
                          1.6
                      ]
                  ]
              },
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-rotation-alignment": "viewport",
              "text-size": {
                  "stops": [
                      [
                          11,
                          8
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          17,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#666666"
          },
          "source": "esri",
          "source-layer": "road (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              3
          ],
          "id": "road (tunnel)/label/secondary shield",
          "layout": {
              "icon-image": "road (tunnel)/secondary shield/{_len}",
              "icon-rotation-alignment": "viewport",
              "icon-size": {
                  "stops": [
                      [
                          11,
                          1
                      ],
                      [
                          15,
                          1.2
                      ],
                      [
                          17,
                          1.6
                      ]
                  ]
              },
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-rotation-alignment": "viewport",
              "text-size": {
                  "stops": [
                      [
                          11,
                          8
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          17,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#737373"
          },
          "source": "esri",
          "source-layer": "road (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              2
          ],
          "id": "road (tunnel)/label/primary shield",
          "layout": {
              "icon-image": "road (tunnel)/primary shield/{_len}",
              "icon-rotation-alignment": "viewport",
              "icon-size": {
                  "stops": [
                      [
                          11,
                          1
                      ],
                      [
                          15,
                          1.2
                      ],
                      [
                          17,
                          1.6
                      ]
                  ]
              },
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-rotation-alignment": "viewport",
              "text-size": {
                  "stops": [
                      [
                          11,
                          8
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          17,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#737373"
          },
          "source": "esri",
          "source-layer": "road (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              1
          ],
          "id": "road (tunnel)/label/trunk shield",
          "layout": {
              "icon-image": "road (tunnel)/trunk shield/{_len}",
              "icon-rotation-alignment": "viewport",
              "icon-size": {
                  "stops": [
                      [
                          11,
                          1
                      ],
                      [
                          15,
                          1.2
                      ],
                      [
                          17,
                          1.6
                      ]
                  ]
              },
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-rotation-alignment": "viewport",
              "text-size": {
                  "stops": [
                      [
                          11,
                          8
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          17,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#737373"
          },
          "source": "esri",
          "source-layer": "road (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              0
          ],
          "id": "road (tunnel)/label/motorway shield",
          "layout": {
              "icon-image": "road (tunnel)/motorway shield/{_len}",
              "icon-rotation-alignment": "viewport",
              "icon-size": {
                  "stops": [
                      [
                          11,
                          1
                      ],
                      [
                          15,
                          1.2
                      ],
                      [
                          17,
                          1.6
                      ]
                  ]
              },
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-rotation-alignment": "viewport",
              "text-size": {
                  "stops": [
                      [
                          11,
                          8
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          17,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 9,
          "paint": {
              "text-color": "#737373"
          },
          "source": "esri",
          "source-layer": "road (tunnel)/label",
          "type": "symbol"
      },
      {
          "id": "other path/label/Default",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "other path/label",
          "type": "symbol"
      },
      {
          "id": "path/label/Default",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "path/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              1
          ],
          "id": "track/label/alternate name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "track/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              0
          ],
          "id": "track/label/name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "track/label",
          "type": "symbol"
      },
      {
          "id": "service road/label/Default",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "service road/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              14
          ],
          "id": "road/label/raceway",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              13
          ],
          "id": "road/label/pedestrian",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              12
          ],
          "id": "road/label/living street",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          14,
                          8
                      ],
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              10
          ],
          "id": "road/label/residential, unclassified shield text",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          14,
                          8
                      ],
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              11
          ],
          "id": "road/label/residential, unclassified name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": {
                  "stops": [
                      [
                          14,
                          300
                      ],
                      [
                          16,
                          400
                      ]
                  ]
              },
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          14,
                          8
                      ],
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              9
          ],
          "id": "road/label/tertiary name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          13,
                          9
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 13,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              8
          ],
          "id": "road/label/secondary name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          8
                      ],
                      [
                          13,
                          9
                      ],
                      [
                          14,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 12,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              7
          ],
          "id": "road/label/primary name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          8
                      ],
                      [
                          13,
                          9
                      ],
                      [
                          14,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 12,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              6
          ],
          "id": "road/label/trunk name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          8
                      ],
                      [
                          13,
                          9
                      ],
                      [
                          14,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 12,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              5
          ],
          "id": "road/label/motorway name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          8
                      ],
                      [
                          13,
                          9
                      ],
                      [
                          14,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 12,
          "paint": {
              "text-color": "#505050",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              4
          ],
          "id": "road/label/tertiary shield",
          "layout": {
              "icon-image": "road/tertiary shield/{_len}",
              "icon-rotation-alignment": "viewport",
              "icon-size": {
                  "stops": [
                      [
                          11,
                          1
                      ],
                      [
                          15,
                          1.2
                      ],
                      [
                          17,
                          1.6
                      ]
                  ]
              },
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-rotation-alignment": "viewport",
              "text-size": {
                  "stops": [
                      [
                          11,
                          8
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          17,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#737373"
          },
          "source": "esri",
          "source-layer": "road/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              3
          ],
          "id": "road/label/secondary shield",
          "layout": {
              "icon-image": "road/secondary shield/{_len}",
              "icon-rotation-alignment": "viewport",
              "icon-size": {
                  "stops": [
                      [
                          11,
                          1
                      ],
                      [
                          15,
                          1.2
                      ],
                      [
                          17,
                          1.6
                      ]
                  ]
              },
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-rotation-alignment": "viewport",
              "text-size": {
                  "stops": [
                      [
                          11,
                          8
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          17,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#737373"
          },
          "source": "esri",
          "source-layer": "road/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              2
          ],
          "id": "road/label/primary shield",
          "layout": {
              "icon-image": "road/primary shield/{_len}",
              "icon-rotation-alignment": "viewport",
              "icon-size": {
                  "stops": [
                      [
                          11,
                          1
                      ],
                      [
                          15,
                          1.2
                      ],
                      [
                          17,
                          1.6
                      ]
                  ]
              },
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-rotation-alignment": "viewport",
              "text-size": {
                  "stops": [
                      [
                          11,
                          8
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          17,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#737373"
          },
          "source": "esri",
          "source-layer": "road/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              1
          ],
          "id": "road/label/trunk shield",
          "layout": {
              "icon-image": "road/trunk shield/{_len}",
              "icon-rotation-alignment": "viewport",
              "icon-size": {
                  "stops": [
                      [
                          11,
                          1
                      ],
                      [
                          15,
                          1.2
                      ],
                      [
                          17,
                          1.6
                      ]
                  ]
              },
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-rotation-alignment": "viewport",
              "text-size": {
                  "stops": [
                      [
                          11,
                          8
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          17,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#737373"
          },
          "source": "esri",
          "source-layer": "road/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              0
          ],
          "id": "road/label/motorway shield",
          "layout": {
              "icon-image": "road/motorway shield/{_len}",
              "icon-rotation-alignment": "viewport",
              "icon-size": {
                  "stops": [
                      [
                          11,
                          1
                      ],
                      [
                          15,
                          1.2
                      ],
                      [
                          17,
                          1.6
                      ]
                  ]
              },
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-rotation-alignment": "viewport",
              "text-size": {
                  "stops": [
                      [
                          11,
                          8
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          17,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 9,
          "paint": {
              "text-color": "#737373"
          },
          "source": "esri",
          "source-layer": "road/label",
          "type": "symbol"
      },
      {
          "id": "other path (bridge)/label/Default",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-offset": [
                  0,
                  -0.9
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "other path (bridge)/label",
          "type": "symbol"
      },
      {
          "id": "path (bridge)/label/Default",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-offset": [
                  0,
                  -0.9
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "path (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              1
          ],
          "id": "track (bridge)/label/alternate name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-offset": [
                  0,
                  -0.9
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "track (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              0
          ],
          "id": "track (bridge)/label/name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-offset": [
                  0,
                  0.8
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "track (bridge)/label",
          "type": "symbol"
      },
      {
          "id": "service road (bridge)/label/Default",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-offset": [
                  0,
                  0.8
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "service road (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              13
          ],
          "id": "road (bridge)/label/pedestrian",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              12
          ],
          "id": "road (bridge)/label/living street",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          14,
                          8
                      ],
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              10
          ],
          "id": "road (bridge)/label/residential, unclassified shield text",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          14,
                          8
                      ],
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              11
          ],
          "id": "road (bridge)/label/residential, unclassified name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": {
                  "stops": [
                      [
                          14,
                          300
                      ],
                      [
                          16,
                          400
                      ]
                  ]
              },
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          14,
                          8
                      ],
                      [
                          15,
                          9
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              9
          ],
          "id": "road (bridge)/label/tertiary name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          13,
                          9
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 13,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              8
          ],
          "id": "road (bridge)/label/secondary name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          8
                      ],
                      [
                          13,
                          9
                      ],
                      [
                          14,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 12,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              7
          ],
          "id": "road (bridge)/label/primary name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          8
                      ],
                      [
                          13,
                          9
                      ],
                      [
                          14,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 12,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              6
          ],
          "id": "road (bridge)/label/trunk name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          8
                      ],
                      [
                          13,
                          9
                      ],
                      [
                          14,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 12,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              5
          ],
          "id": "road (bridge)/label/motorway name",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 300,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          8
                      ],
                      [
                          13,
                          9
                      ],
                      [
                          14,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 12,
          "paint": {
              "text-color": "#666666",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "road (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              4
          ],
          "id": "road (bridge)/label/tertiary shield",
          "layout": {
              "icon-image": "road (bridge)/tertiary shield/{_len}",
              "icon-rotation-alignment": "viewport",
              "icon-size": {
                  "stops": [
                      [
                          11,
                          1
                      ],
                      [
                          15,
                          1.2
                      ],
                      [
                          17,
                          1.6
                      ]
                  ]
              },
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-rotation-alignment": "viewport",
              "text-size": {
                  "stops": [
                      [
                          11,
                          8
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          17,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#737373"
          },
          "source": "esri",
          "source-layer": "road (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              3
          ],
          "id": "road (bridge)/label/secondary shield",
          "layout": {
              "icon-image": "road (bridge)/secondary shield/{_len}",
              "icon-rotation-alignment": "viewport",
              "icon-size": {
                  "stops": [
                      [
                          11,
                          1
                      ],
                      [
                          15,
                          1.2
                      ],
                      [
                          17,
                          1.6
                      ]
                  ]
              },
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-rotation-alignment": "viewport",
              "text-size": {
                  "stops": [
                      [
                          11,
                          8
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          17,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#737373"
          },
          "source": "esri",
          "source-layer": "road (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              2
          ],
          "id": "road (bridge)/label/primary shield",
          "layout": {
              "icon-image": "road (bridge)/primary shield/{_len}",
              "icon-rotation-alignment": "viewport",
              "icon-size": {
                  "stops": [
                      [
                          11,
                          1
                      ],
                      [
                          15,
                          1.2
                      ],
                      [
                          17,
                          1.6
                      ]
                  ]
              },
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-rotation-alignment": "viewport",
              "text-size": {
                  "stops": [
                      [
                          11,
                          8
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          17,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#737373"
          },
          "source": "esri",
          "source-layer": "road (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              1
          ],
          "id": "road (bridge)/label/trunk shield",
          "layout": {
              "icon-image": "road (bridge)/trunk shield/{_len}",
              "icon-rotation-alignment": "viewport",
              "icon-size": {
                  "stops": [
                      [
                          11,
                          1
                      ],
                      [
                          15,
                          1.2
                      ],
                      [
                          17,
                          1.6
                      ]
                  ]
              },
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-rotation-alignment": "viewport",
              "text-size": {
                  "stops": [
                      [
                          11,
                          8
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          17,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#737373"
          },
          "source": "esri",
          "source-layer": "road (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              0
          ],
          "id": "road (bridge)/label/motorway shield",
          "layout": {
              "icon-image": "road (bridge)/motorway shield/{_len}",
              "icon-rotation-alignment": "viewport",
              "icon-size": {
                  "stops": [
                      [
                          11,
                          1
                      ],
                      [
                          15,
                          1.2
                      ],
                      [
                          17,
                          1.6
                      ]
                  ]
              },
              "symbol-placement": "line",
              "symbol-spacing": 760,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-rotation-alignment": "viewport",
              "text-size": {
                  "stops": [
                      [
                          11,
                          8
                      ],
                      [
                          15,
                          10
                      ],
                      [
                          17,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#737373"
          },
          "source": "esri",
          "source-layer": "road (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              1
          ],
          "id": "railway (tunnel)/label/main rail",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": {
                  "stops": [
                      [
                          13,
                          300
                      ],
                      [
                          16,
                          600
                      ]
                  ]
              },
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.1,
              "text-max-width": 8,
              "text-offset": [
                  0,
                  0.8
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          13,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "railway (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              0
          ],
          "id": "railway (tunnel)/label/highspeed rail",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": {
                  "stops": [
                      [
                          13,
                          300
                      ],
                      [
                          16,
                          600
                      ]
                  ]
              },
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.1,
              "text-max-width": 8,
              "text-offset": [
                  0,
                  0.8
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          13,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "railway (tunnel)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              1
          ],
          "id": "railway/label/main rail",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": {
                  "stops": [
                      [
                          13,
                          300
                      ],
                      [
                          16,
                          600
                      ]
                  ]
              },
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.1,
              "text-max-width": 8,
              "text-offset": [
                  0,
                  0.8
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          13,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "railway/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              0
          ],
          "id": "railway/label/highspeed rail",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": {
                  "stops": [
                      [
                          13,
                          300
                      ],
                      [
                          16,
                          600
                      ]
                  ]
              },
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.1,
              "text-max-width": 8,
              "text-offset": [
                  0,
                  0.8
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          13,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "railway/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              1
          ],
          "id": "railway (bridge)/label/main rail",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": {
                  "stops": [
                      [
                          13,
                          300
                      ],
                      [
                          16,
                          600
                      ]
                  ]
              },
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.1,
              "text-max-width": 8,
              "text-offset": [
                  0,
                  0.8
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          13,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "railway (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              0
          ],
          "id": "railway (bridge)/label/highspeed rail",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": {
                  "stops": [
                      [
                          13,
                          300
                      ],
                      [
                          16,
                          600
                      ]
                  ]
              },
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.1,
              "text-max-width": 8,
              "text-offset": [
                  0,
                  0.8
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          13,
                          10
                      ],
                      [
                          16,
                          11
                      ],
                      [
                          18,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "railway (bridge)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              0
          ],
          "id": "water area/label/water, basin, reservoir",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-line-height": {
                  "stops": [
                      [
                          7,
                          1
                      ],
                      [
                          8,
                          1.13
                      ],
                      [
                          12,
                          1.16
                      ],
                      [
                          16,
                          1.2
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          7,
                          6
                      ],
                      [
                          8,
                          7
                      ],
                      [
                          12,
                          8
                      ],
                      [
                          16,
                          9
                      ]
                  ]
              },
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          7,
                          10
                      ],
                      [
                          8,
                          11
                      ],
                      [
                          12,
                          12
                      ],
                      [
                          16,
                          13
                      ]
                  ]
              }
          },
          "minzoom": 7,
          "paint": {
              "text-color": "#788088",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "water area/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              31
          ],
          "id": "landcover/label/forest",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-line-height": {
                  "stops": [
                      [
                          12,
                          1
                      ],
                      [
                          12,
                          1.15
                      ],
                      [
                          15,
                          1.2
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          12,
                          5
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          16,
                          8
                      ]
                  ]
              },
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          11
                      ],
                      [
                          15,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 12,
          "paint": {
              "text-color": "#889182",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "landcover/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              29
          ],
          "id": "landcover/label/park",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-line-height": {
                  "stops": [
                      [
                          12,
                          1
                      ],
                      [
                          12,
                          1.1
                      ],
                      [
                          15,
                          1.2
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          12,
                          5
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          16,
                          8
                      ]
                  ]
              },
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          11
                      ],
                      [
                          15,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 12,
          "paint": {
              "text-color": "#889182",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "landcover/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              12
          ],
          "id": "landcover/label/education",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-line-height": {
                  "stops": [
                      [
                          9,
                          1
                      ],
                      [
                          12,
                          1.15
                      ],
                      [
                          15,
                          1.2
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          9,
                          5
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          16,
                          8
                      ]
                  ]
              },
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          9,
                          10
                      ],
                      [
                          15,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 12,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "landcover/label",
          "type": "symbol"
      },
      {
          "id": "cemetery/label/Default",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-line-height": {
                  "stops": [
                      [
                          9,
                          1
                      ],
                      [
                          13,
                          1.15
                      ],
                      [
                          16,
                          1.2
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          9,
                          5
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          16,
                          8
                      ]
                  ]
              },
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          9,
                          10
                      ],
                      [
                          13,
                          11
                      ],
                      [
                          16,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 12,
          "paint": {
              "text-color": "#889182",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1.5
          },
          "source": "esri",
          "source-layer": "cemetery/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              5
          ],
          "id": "landcover/label/sports",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-line-height": {
                  "stops": [
                      [
                          12,
                          1.15
                      ],
                      [
                          15,
                          1.2
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          14,
                          7
                      ],
                      [
                          16,
                          8
                      ]
                  ]
              },
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          11
                      ],
                      [
                          15,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "landcover/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              1
          ],
          "id": "landcover/label/military",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-line-height": {
                  "stops": [
                      [
                          7,
                          1
                      ],
                      [
                          10,
                          1.15
                      ],
                      [
                          13,
                          1.2
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          7,
                          5
                      ],
                      [
                          11,
                          7
                      ],
                      [
                          14,
                          8
                      ]
                  ]
              },
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          7,
                          10
                      ],
                      [
                          10,
                          11
                      ],
                      [
                          13,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 9,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "landcover/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              0
          ],
          "id": "landcover/label/amusement park",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-line-height": {
                  "stops": [
                      [
                          12,
                          1.15
                      ],
                      [
                          15,
                          1.2
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          9,
                          5
                      ],
                      [
                          14,
                          7
                      ],
                      [
                          16,
                          8
                      ]
                  ]
              },
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          12
                      ],
                      [
                          15,
                          15
                      ]
                  ]
              }
          },
          "minzoom": 13,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "landcover/label",
          "type": "symbol"
      },
      {
          "id": "aboriginal land/label/Default",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-width": 6,
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          10,
                          10
                      ],
                      [
                          12,
                          12
                      ],
                      [
                          15,
                          15
                      ]
                  ]
              }
          },
          "minzoom": 10,
          "paint": {
              "text-color": "#a0a19f",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "aboriginal land/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              1
          ],
          "id": "island/label/islet",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.05,
              "text-line-height": {
                  "stops": [
                      [
                          10,
                          1
                      ],
                      [
                          14,
                          1.2
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          11,
                          7
                      ],
                      [
                          14,
                          8
                      ]
                  ]
              },
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          11,
                          9
                      ],
                      [
                          12,
                          10
                      ],
                      [
                          14,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 11,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "island/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              0
          ],
          "id": "island/label/island",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.05,
              "text-line-height": {
                  "stops": [
                      [
                          10,
                          1.15
                      ],
                      [
                          13,
                          1.2
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          11,
                          7
                      ],
                      [
                          14,
                          8
                      ]
                  ]
              },
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          10,
                          11
                      ],
                      [
                          13,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 11,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "island/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              3
          ],
          "id": "water line (intermittent)/label/ditch, drain",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 1000,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-offset": [
                  0,
                  -0.5
              ],
              "text-optional": true,
              "text-size": 11
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "water line (intermittent)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              2
          ],
          "id": "water line (intermittent)/label/stream",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 1000,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-offset": [
                  0,
                  -0.5
              ],
              "text-optional": true,
              "text-size": 11
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "water line (intermittent)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              1
          ],
          "id": "water line (intermittent)/label/canal",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 1000,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-offset": [
                  0,
                  -0.5
              ],
              "text-optional": true,
              "text-size": 11
          },
          "minzoom": 12,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "water line (intermittent)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              0
          ],
          "id": "water line (intermittent)/label/river",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 1000,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-offset": [
                  0,
                  -0.5
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          11
                      ],
                      [
                          13,
                          13
                      ]
                  ]
              }
          },
          "minzoom": 12,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "water line (intermittent)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              3
          ],
          "id": "water line (perennial)/label/ditch, drain",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 1000,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-offset": [
                  0,
                  -0.5
              ],
              "text-optional": true,
              "text-size": 10
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "water line (perennial)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              2
          ],
          "id": "water line (perennial)/label/stream",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 1000,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-offset": [
                  0,
                  -0.5
              ],
              "text-optional": true,
              "text-size": 11
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "water line (perennial)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              1
          ],
          "id": "water line (perennial)/label/canal",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 1000,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-offset": [
                  0,
                  -0.5
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          11
                      ],
                      [
                          13,
                          13
                      ]
                  ]
              }
          },
          "minzoom": 12,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "water line (perennial)/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              0
          ],
          "id": "water line (perennial)/label/river",
          "layout": {
              "symbol-placement": "line",
              "symbol-spacing": 1000,
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-max-angle": 30,
              "text-offset": [
                  0,
                  -0.5
              ],
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          12,
                          11
                      ],
                      [
                          13,
                          13
                      ]
                  ]
              }
          },
          "minzoom": 12,
          "paint": {
              "text-color": "#788088",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "water line (perennial)/label",
          "type": "symbol"
      },
      {
          "id": "junction area/label/Default",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-line-height": {
                  "stops": [
                      [
                          14,
                          1
                      ],
                      [
                          16,
                          1.1
                      ]
                  ]
              },
              "text-max-width": 6,
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          14,
                          10
                      ],
                      [
                          16,
                          11
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1
          },
          "source": "esri",
          "source-layer": "junction area/label",
          "type": "symbol"
      },
      {
          "id": "railway station area/label/Default",
          "layout": {
              "text-anchor": "top",
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-line-height": {
                  "stops": [
                      [
                          13,
                          1
                      ],
                      [
                          14,
                          1.1
                      ]
                  ]
              },
              "text-max-width": 5,
              "text-offset": [
                  0,
                  0.8
              ],
              "text-optional": false,
              "text-size": {
                  "stops": [
                      [
                          13,
                          10
                      ],
                      [
                          14,
                          11
                      ],
                      [
                          15,
                          13
                      ]
                  ]
              }
          },
          "minzoom": 13,
          "paint": {
              "text-color": "#808080",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1.5
          },
          "source": "esri",
          "source-layer": "railway station area/label",
          "type": "symbol"
      },
      {
          "id": "place (small)/locality",
          "layout": {
              "text-field": "{_name6}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.05,
              "text-line-height": {
                  "stops": [
                      [
                          14,
                          1.1
                      ],
                      [
                          15,
                          1.2
                      ]
                  ]
              },
              "text-max-width": 7,
              "text-optional": true,
              "text-padding": {
                  "stops": [
                      [
                          14,
                          7
                      ],
                      [
                          15,
                          8.4
                      ]
                  ]
              },
              "text-size": {
                  "stops": [
                      [
                          14,
                          10
                      ],
                      [
                          15,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 15,
          "paint": {
              "text-color": "#35334b",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1.5
          },
          "source": "esri",
          "source-layer": "place (small)",
          "type": "symbol"
      },
      {
          "id": "place (small)/neighborhood",
          "layout": {
              "text-field": "{_name5}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.05,
              "text-line-height": {
                  "stops": [
                      [
                          14,
                          1.1
                      ],
                      [
                          15,
                          1.2
                      ]
                  ]
              },
              "text-max-width": 7,
              "text-optional": true,
              "text-padding": {
                  "stops": [
                      [
                          14,
                          7
                      ],
                      [
                          15,
                          8.4
                      ]
                  ]
              },
              "text-size": {
                  "stops": [
                      [
                          14,
                          10
                      ],
                      [
                          15,
                          12
                      ]
                  ]
              }
          },
          "minzoom": 14,
          "paint": {
              "text-color": "#35334b",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1.5
          },
          "source": "esri",
          "source-layer": "place (small)",
          "type": "symbol"
      },
      {
          "id": "place (small)/quarter",
          "layout": {
              "text-field": "{_name4}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.05,
              "text-line-height": {
                  "stops": [
                      [
                          13,
                          1
                      ],
                      [
                          14,
                          1.1
                      ],
                      [
                          15,
                          1.2
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          13,
                          5
                      ],
                      [
                          14,
                          8
                      ],
                      [
                          15,
                          15
                      ]
                  ]
              },
              "text-optional": true,
              "text-padding": {
                  "stops": [
                      [
                          13,
                          7.7
                      ],
                      [
                          14,
                          8.4
                      ],
                      [
                          15,
                          9.8
                      ]
                  ]
              },
              "text-size": {
                  "stops": [
                      [
                          13,
                          11
                      ],
                      [
                          14,
                          12
                      ],
                      [
                          15,
                          14
                      ]
                  ]
              }
          },
          "maxzoom": 16,
          "minzoom": 13,
          "paint": {
              "text-color": "#35334b",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1.5
          },
          "source": "esri",
          "source-layer": "place (small)",
          "type": "symbol"
      },
      {
          "id": "place (small)/square",
          "layout": {
              "text-field": "{_name3}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.05,
              "text-line-height": 1.1,
              "text-max-width": 6,
              "text-optional": true,
              "text-size": 11
          },
          "minzoom": 16,
          "paint": {
              "text-color": "#35334b",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1.5
          },
          "source": "esri",
          "source-layer": "place (small)",
          "type": "symbol"
      },
      {
          "id": "place (small)/hamlet",
          "layout": {
              "text-field": "{_name2}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.05,
              "text-line-height": {
                  "stops": [
                      [
                          14,
                          1.1
                      ],
                      [
                          15,
                          1.2
                      ]
                  ]
              },
              "text-max-width": 7,
              "text-optional": true,
              "text-padding": {
                  "stops": [
                      [
                          14,
                          7
                      ],
                      [
                          15,
                          8.4
                      ]
                  ]
              },
              "text-size": {
                  "stops": [
                      [
                          14,
                          10
                      ],
                      [
                          15,
                          12
                      ]
                  ]
              }
          },
          "maxzoom": 17,
          "minzoom": 13,
          "paint": {
              "text-color": "#35334b",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1.5
          },
          "source": "esri",
          "source-layer": "place (small)",
          "type": "symbol"
      },
      {
          "id": "place (small)/village",
          "layout": {
              "text-field": "{_name1}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.05,
              "text-line-height": {
                  "stops": [
                      [
                          11,
                          1
                      ],
                      [
                          15,
                          1.2
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          11,
                          11
                      ],
                      [
                          15,
                          15
                      ]
                  ]
              },
              "text-optional": true,
              "text-padding": {
                  "stops": [
                      [
                          11,
                          7
                      ],
                      [
                          15,
                          10.5
                      ]
                  ]
              },
              "text-size": {
                  "stops": [
                      [
                          11,
                          10
                      ],
                      [
                          15,
                          15
                      ]
                  ]
              }
          },
          "maxzoom": 16,
          "minzoom": 11,
          "paint": {
              "text-color": "#35334b",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1.5
          },
          "source": "esri",
          "source-layer": "place (small)",
          "type": "symbol"
      },
      {
          "id": "place (small)/suburb",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-letter-spacing": 0.05,
              "text-line-height": {
                  "stops": [
                      [
                          11,
                          1
                      ],
                      [
                          12,
                          1.12
                      ],
                      [
                          13,
                          1.15
                      ],
                      [
                          14,
                          1.17
                      ],
                      [
                          15,
                          1.2
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          11,
                          12
                      ],
                      [
                          12,
                          13
                      ],
                      [
                          13,
                          14
                      ],
                      [
                          15,
                          15
                      ]
                  ]
              },
              "text-optional": true,
              "text-padding": {
                  "stops": [
                      [
                          11,
                          7.7
                      ],
                      [
                          12,
                          8.4
                      ],
                      [
                          13,
                          9.8
                      ],
                      [
                          15,
                          10.5
                      ]
                  ]
              },
              "text-size": {
                  "stops": [
                      [
                          11,
                          11
                      ],
                      [
                          12,
                          12
                      ],
                      [
                          13,
                          14
                      ],
                      [
                          15,
                          15
                      ]
                  ]
              }
          },
          "maxzoom": 16,
          "minzoom": 11,
          "paint": {
              "text-color": "#35334b",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1.5
          },
          "source": "esri",
          "source-layer": "place (small)",
          "type": "symbol"
      },
      {
          "id": "place (low importance)",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-line-height": {
                  "stops": [
                      [
                          8,
                          1
                      ],
                      [
                          10,
                          1.13
                      ],
                      [
                          11,
                          1.16
                      ],
                      [
                          13,
                          1.2
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          8,
                          9
                      ],
                      [
                          10,
                          10
                      ],
                      [
                          11,
                          11
                      ],
                      [
                          13,
                          12
                      ]
                  ]
              },
              "text-optional": true,
              "text-padding": {
                  "stops": [
                      [
                          8,
                          7
                      ],
                      [
                          10,
                          7.7
                      ],
                      [
                          11,
                          8.4
                      ],
                      [
                          13,
                          10.5
                      ]
                  ]
              },
              "text-size": {
                  "stops": [
                      [
                          8,
                          10
                      ],
                      [
                          10,
                          11
                      ],
                      [
                          11,
                          13
                      ],
                      [
                          13,
                          15
                      ]
                  ]
              }
          },
          "maxzoom": 15,
          "minzoom": 8,
          "paint": {
              "text-color": "#35334b",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1.5
          },
          "source": "esri",
          "source-layer": "place (low importance)",
          "type": "symbol"
      },
      {
          "id": "place (medium importance)",
          "layout": {
              "text-field": "{_name}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-line-height": {
                  "stops": [
                      [
                          4,
                          1
                      ],
                      [
                          7,
                          1.12
                      ],
                      [
                          8,
                          1.14
                      ],
                      [
                          9,
                          1.16
                      ],
                      [
                          10,
                          1.2
                      ]
                  ]
              },
              "text-max-width": 8,
              "text-padding": {
                  "stops": [
                      [
                          4,
                          7
                      ],
                      [
                          8,
                          8.4
                      ],
                      [
                          9,
                          9.1
                      ],
                      [
                          10,
                          9.8
                      ],
                      [
                          13,
                          10.5
                      ]
                  ]
              },
              "text-size": {
                  "stops": [
                      [
                          4,
                          10
                      ],
                      [
                          8,
                          12
                      ],
                      [
                          9,
                          13
                      ],
                      [
                          10,
                          14
                      ],
                      [
                          13,
                          15
                      ]
                  ]
              }
          },
          "maxzoom": 14,
          "minzoom": 4,
          "paint": {
              "text-color": "#35334b",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1.5
          },
          "source": "esri",
          "source-layer": "place (medium importance)",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              3
          ],
          "id": "administrative label/county level 6",
          "layout": {
              "text-field": "{name_en}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-line-height": {
                  "stops": [
                      [
                          9,
                          1.12
                      ],
                      [
                          11,
                          1.15
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          9,
                          13
                      ],
                      [
                          11,
                          14
                      ]
                  ]
              },
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          9,
                          10
                      ],
                      [
                          11,
                          11
                      ]
                  ]
              },
              "text-transform": "uppercase"
          },
          "minzoom": 9,
          "paint": {
              "text-color": "#959996",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1.5
          },
          "source": "esri",
          "source-layer": "administrative label/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              2
          ],
          "id": "administrative label/county level 5",
          "layout": {
              "text-field": "{name_en}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-line-height": {
                  "stops": [
                      [
                          7,
                          1
                      ],
                      [
                          8,
                          1.12
                      ],
                      [
                          9,
                          1.15
                      ],
                      [
                          11,
                          1.17
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          7,
                          12
                      ],
                      [
                          8,
                          13
                      ],
                      [
                          9,
                          14
                      ],
                      [
                          11,
                          15
                      ]
                  ]
              },
              "text-optional": true,
              "text-size": {
                  "stops": [
                      [
                          7,
                          10
                      ],
                      [
                          9,
                          12
                      ],
                      [
                          11,
                          13
                      ]
                  ]
              },
              "text-transform": "uppercase"
          },
          "minzoom": 7,
          "paint": {
              "text-color": "#959996",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1.5
          },
          "source": "esri",
          "source-layer": "administrative label/label",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              1
          ],
          "id": "administrative label/state",
          "layout": {
              "text-field": "{name_en}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-line-height": {
                  "stops": [
                      [
                          4,
                          1
                      ],
                      [
                          6,
                          1.2
                      ],
                      [
                          8,
                          1.6
                      ],
                      [
                          10,
                          1.8
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          4,
                          8
                      ],
                      [
                          6,
                          10
                      ]
                  ]
              },
              "text-optional": true,
              "text-padding": {
                  "stops": [
                      [
                          4,
                          7
                      ],
                      [
                          6,
                          7.7
                      ]
                  ]
              },
              "text-size": {
                  "stops": [
                      [
                          4,
                          10
                      ],
                      [
                          6,
                          11
                      ],
                      [
                          8,
                          12
                      ],
                      [
                          9,
                          13
                      ],
                      [
                          11,
                          15
                      ]
                  ]
              },
              "text-transform": "uppercase"
          },
          "maxzoom": 10,
          "minzoom": 6,
          "paint": {
              "text-color": "#959996",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1.5
          },
          "source": "esri",
          "source-layer": "administrative label/label",
          "type": "symbol"
      },
      {
          "id": "place (high importance)",
          "layout": {
              "text-field": "{name_en}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-line-height": {
                  "stops": [
                      [
                          3,
                          1
                      ],
                      [
                          4,
                          1.12
                      ],
                      [
                          5,
                          1.14
                      ],
                      [
                          7,
                          1.16
                      ],
                      [
                          9,
                          1.18
                      ],
                      [
                          10,
                          1.2
                      ]
                  ]
              },
              "text-max-width": 7,
              "text-padding": {
                  "stops": [
                      [
                          3,
                          7.7
                      ],
                      [
                          5,
                          8.4
                      ],
                      [
                          7,
                          9.1
                      ],
                      [
                          9,
                          9.8
                      ],
                      [
                          10,
                          10.5
                      ]
                  ]
              },
              "text-size": {
                  "stops": [
                      [
                          3,
                          11
                      ],
                      [
                          5,
                          12
                      ],
                      [
                          7,
                          13
                      ],
                      [
                          9,
                          14
                      ],
                      [
                          10,
                          15
                      ]
                  ]
              }
          },
          "maxzoom": 13,
          "minzoom": 3,
          "paint": {
              "text-color": "#35334b",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1.5
          },
          "source": "esri",
          "source-layer": "place (high importance)",
          "type": "symbol"
      },
      {
          "id": "capital",
          "layout": {
              "text-field": "{name_en}",
              "text-font": [
                  "Arial Unicode MS Regular"
              ],
              "text-line-height": {
                  "stops": [
                      [
                          3,
                          1
                      ],
                      [
                          4,
                          1.12
                      ],
                      [
                          5,
                          1.14
                      ],
                      [
                          7,
                          1.16
                      ],
                      [
                          9,
                          1.18
                      ],
                      [
                          10,
                          1.2
                      ]
                  ]
              },
              "text-max-width": 6,
              "text-padding": {
                  "stops": [
                      [
                          3,
                          7.7
                      ],
                      [
                          5,
                          8.4
                      ],
                      [
                          7,
                          9.1
                      ],
                      [
                          9,
                          9.8
                      ],
                      [
                          10,
                          10.5
                      ]
                  ]
              },
              "text-size": {
                  "stops": [
                      [
                          3,
                          11
                      ],
                      [
                          5,
                          12
                      ],
                      [
                          7,
                          13
                      ],
                      [
                          9,
                          14
                      ],
                      [
                          10,
                          15
                      ]
                  ]
              }
          },
          "maxzoom": 15,
          "minzoom": 3,
          "paint": {
              "text-color": "#35334b",
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1.5
          },
          "source": "esri",
          "source-layer": "capital",
          "type": "symbol"
      },
      {
          "filter": [
              "==",
              "_label_class",
              0
          ],
          "id": "administrative label/country",
          "layout": {
              "text-field": "{name_en}",
              "text-font": [
                  "Arial Unicode MS Bold"
              ],
              "text-letter-spacing": 0.2,
              "text-line-height": {
                  "stops": [
                      [
                          2,
                          1.2
                      ],
                      [
                          3,
                          1.3
                      ],
                      [
                          4,
                          1.4
                      ],
                      [
                          6,
                          1.6
                      ],
                      [
                          9,
                          1.8
                      ]
                  ]
              },
              "text-max-width": {
                  "stops": [
                      [
                          2,
                          6
                      ],
                      [
                          3,
                          7
                      ],
                      [
                          4,
                          8
                      ],
                      [
                          6,
                          9
                      ],
                      [
                          9,
                          10
                      ]
                  ]
              },
              "text-optional": true,
              "text-padding": {
                  "stops": [
                      [
                          2,
                          7
                      ],
                      [
                          3,
                          7.7
                      ],
                      [
                          4,
                          8.4
                      ],
                      [
                          6,
                          9.1
                      ]
                  ]
              },
              "text-size": {
                  "stops": [
                      [
                          2,
                          9.5
                      ],
                      [
                          3,
                          10.5
                      ],
                      [
                          4,
                          11.5
                      ],
                      [
                          6,
                          13
                      ],
                      [
                          9,
                          14
                      ]
                  ]
              },
              "text-transform": "uppercase"
          },
          "maxzoom": 10,
          "minzoom": 2,
          "paint": {
              "text-color": "#969b98",
              "text-halo-blur": 1,
              "text-halo-color": "rgba(255,255,255,0.5)",
              "text-halo-width": 1.5
          },
          "source": "esri",
          "source-layer": "administrative label/label",
          "type": "symbol"
      }
  ],
  "sources": {
      "esri": {
          "attribution": "Map data (c) OpenStreetMap contributors, Microsoft, Facebook, Inc. and its affiliates, Esri Community Maps contributors, Map layer by Esri",
          "copyrightText": "Map data (c) OpenStreetMap contributors, Microsoft, Facebook, Inc. and its affiliates, Esri Community Maps contributors, Map layer by Esri",
          "maxzoom": 16,
          "minzoom": 0,
          "tiles": [
              "https://basemaps-api.arcgis.com/arcgis/rest/services/OpenStreetMap_v2/VectorTileServer/tile/{z}/{y}/{x}.pbf?token=AAPK075a045352e64bd583ef4645224e213fBIBCnmrqPubNPP2Sxmi9DxqvDgDZBX1Toq4nMJu4bYGkd_TyL-Oaf426BVzX5-UW"
          ],
          "type": "vector",
          "url": "https://basemaps-api.arcgis.com/arcgis/rest/services/OpenStreetMap_v2/VectorTileServer"
      }
  },
  "sprite": "https://cdn.arcgis.com/sharing/rest/content/items/29a71939af7a498584f44c4feca7249b/resources/styles/../sprites/sprite",
  "version": 8
};
