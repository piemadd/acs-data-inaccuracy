let mapStyle = {
  "version": 8,
  "name": "OSM Liberty",
  "metadata": {
    "maputnik:license": "https://github.com/maputnik/osm-liberty/blob/gh-pages/LICENSE.md",
    "maputnik:renderer": "mbgljs",
    "protomaps:version": "3.x"
  },
  "sources": {},
  "sprite": "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
  "glyphs": "https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key={key}",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "#111111"
      }
    },
    {
      "id": "earth",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "earth",
      "paint": {
        "fill-color": "#111111"
      }
    },
    {
      "id": "water",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "water",
      "filter": [
        "all"
      ],
      "paint": {
        "fill-color": "#000d1c"
      }
    },
    {
      "id": "park",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "park",
      "paint": {
        "fill-color": "rgba(30, 43, 10, 1)",
        "fill-opacity": 0.4,
        "fill-outline-color": "rgba(39, 56, 11, 1)"
      }
    },
    {
      "id": "park_outline",
      "type": "line",
      "source": "protomaps",
      "source-layer": "park",
      "paint": {
        "line-dasharray": [
          1,
          1.5
        ],
        "line-color": "rgba(39, 56, 11, 1)",
        "line-opacity": 0.4
      }
    },
    {
      "id": "landuse_residential",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "maxzoom": 8,
      "filter": [
        "==",
        "class",
        "residential"
      ],
      "paint": {
        "fill-color": "#222"
      }
    },
    {
      "id": "landcover_wood",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landcover",
      "filter": [
        "all",
        [
          "==",
          "class",
          "wood"
        ]
      ],
      "paint": {
        "fill-antialias": false,
        "fill-color": "rgba(30, 43, 10, 1)",
        "fill-opacity": 0.4
      }
    },
    {
      "id": "landcover_grass",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landcover",
      "filter": [
        "all",
        [
          "==",
          "class",
          "grass"
        ]
      ],
      "paint": {
        "fill-antialias": false,
        "fill-color": "rgba(30, 43, 10, 1)",
        "fill-opacity": 1
      }
    },
    {
      "id": "landcover_ice",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landcover",
      "filter": [
        "all",
        [
          "==",
          "class",
          "ice"
        ]
      ],
      "paint": {
        "fill-antialias": false,
        "fill-color": "#333",
        "fill-opacity": 0.8
      }
    },
    {
      "id": "landuse_cemetery",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "==",
        "class",
        "cemetery"
      ],
      "paint": {
        "fill-color": "#111"
      }
    },
    {
      "id": "landuse_hospital",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "==",
        "class",
        "hospital"
      ],
      "paint": {
        "fill-color": "#111"
      }
    },
    {
      "id": "landuse_school",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "==",
        "class",
        "school"
      ],
      "paint": {
        "fill-color": "#111"
      }
    },
    {
      "id": "waterway_tunnel",
      "type": "line",
      "source": "protomaps",
      "source-layer": "waterway",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "paint": {
        "line-color": "rgba(0, 13, 28, 1)",
        "line-dasharray": [
          3,
          3
        ],
        "line-gap-width": {
          "stops": [
            [
              12,
              0
            ],
            [
              20,
              6
            ]
          ]
        },
        "line-opacity": 1,
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              8,
              1
            ],
            [
              20,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "waterway_river",
      "type": "line",
      "source": "protomaps",
      "source-layer": "waterway",
      "filter": [
        "all",
        [
          "==",
          "class",
          "river"
        ],
        [
          "!=",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round"
      },
      "paint": {
        "line-color": "rgba(0, 13, 28, 1)",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.5
            ],
            [
              20,
              6
            ]
          ]
        }
      }
    },
    {
      "id": "waterway_other",
      "type": "line",
      "source": "protomaps",
      "source-layer": "waterway",
      "filter": [
        "all",
        [
          "!=",
          "class",
          "river"
        ],
        [
          "!=",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-cap": "round"
      },
      "paint": {
        "line-color": "rgba(0, 13, 28, 1)",
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              13,
              0.5
            ],
            [
              20,
              6
            ]
          ]
        }
      }
    },
    {
      "id": "landcover_sand",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landcover",
      "filter": [
        "all",
        [
          "==",
          "class",
          "sand"
        ]
      ],
      "paint": {
        "fill-color": "rgba(51, 49, 0, 1)"
      }
    },
    {
      "id": "aeroway_fill",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "aeroway",
      "minzoom": 11,
      "filter": [
        "==",
        "$type",
        "Polygon"
      ],
      "paint": {
        "fill-color": "#111",
        "fill-opacity": 0.7
      }
    },
    {
      "id": "aeroway_runway",
      "type": "line",
      "source": "protomaps",
      "source-layer": "aeroway",
      "minzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "==",
          "class",
          "runway"
        ]
      ],
      "paint": {
        "line-color": "#333",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              3
            ],
            [
              20,
              16
            ]
          ]
        }
      }
    },
    {
      "id": "aeroway_taxiway",
      "type": "line",
      "source": "protomaps",
      "source-layer": "aeroway",
      "minzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "==",
          "class",
          "taxiway"
        ]
      ],
      "paint": {
        "line-color": "#333",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.5
            ],
            [
              20,
              6
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_motorway_link_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "==",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-dasharray": [
          0.5,
          0.25
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_service_track_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "service",
          "track"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-dasharray": [
          0.5,
          0.25
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1
            ],
            [
              16,
              4
            ],
            [
              20,
              11
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_link_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_street_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "street",
          "street_limited"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-opacity": {
          "stops": [
            [
              12,
              0
            ],
            [
              12.5,
              1
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
              13,
              1
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_secondary_tertiary_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              1.5
            ],
            [
              20,
              17
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_trunk_primary_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "primary",
          "trunk"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.4
            ],
            [
              6,
              0.7
            ],
            [
              7,
              1.75
            ],
            [
              20,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_motorway_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-dasharray": [
          0.5,
          0.25
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.4
            ],
            [
              6,
              0.7
            ],
            [
              7,
              1.75
            ],
            [
              20,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_path_pedestrian",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "path",
          "pedestrian"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-dasharray": [
          1,
          0.75
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              0.5
            ],
            [
              20,
              10
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_motorway_link",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "==",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_service_track",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "service",
          "track"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15.5,
              0
            ],
            [
              16,
              2
            ],
            [
              20,
              7.5
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_link",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_minor",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "minor"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              13.5,
              0
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_secondary_tertiary",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              10
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_trunk_primary",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "primary",
          "trunk"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_motorway",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "tunnel"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_major_rail",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "rail"
        ]
      ],
      "paint": {
        "line-color": "#777",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14,
              0.4
            ],
            [
              15,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_major_rail_hatching",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "==",
          "class",
          "rail"
        ]
      ],
      "paint": {
        "line-color": "#777",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14.5,
              0
            ],
            [
              15,
              3
            ],
            [
              20,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_transit_rail",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "in",
          "class",
          "transit"
        ]
      ],
      "paint": {
        "line-color": "#777",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14,
              0.4
            ],
            [
              15,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "tunnel_transit_rail_hatching",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "tunnel"
        ],
        [
          "==",
          "class",
          "transit"
        ]
      ],
      "paint": {
        "line-color": "#777",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14.5,
              0
            ],
            [
              15,
              3
            ],
            [
              20,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "road_area_pattern",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ]
      ],
      "paint": {
        "fill-color": "#111111",
        "fill-opacity": 1
      }
    },
    {
      "id": "road_motorway_link_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "==",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "road_service_track_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "service",
          "track"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1
            ],
            [
              16,
              4
            ],
            [
              20,
              11
            ]
          ]
        }
      }
    },
    {
      "id": "road_link_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "!in",
          "class",
          "pedestrian",
          "path",
          "track",
          "service",
          "motorway"
        ],
        [
          "==",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "road_minor_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "minor"
        ],
        [
          "!=",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-opacity": {
          "stops": [
            [
              12,
              0
            ],
            [
              12.5,
              1
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
              13,
              1
            ],
            [
              14,
              4
            ],
            [
              20,
              20
            ]
          ]
        }
      }
    },
    {
      "id": "road_secondary_tertiary_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ],
        [
          "!=",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              1.5
            ],
            [
              20,
              17
            ]
          ]
        }
      }
    },
    {
      "id": "road_trunk_primary_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "primary",
          "trunk"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.4
            ],
            [
              6,
              0.7
            ],
            [
              7,
              1.75
            ],
            [
              20,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "road_motorway_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.4
            ],
            [
              6,
              0.7
            ],
            [
              7,
              1.75
            ],
            [
              20,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "road_path_pedestrian",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "minzoom": 14,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "path",
          "pedestrian"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-dasharray": [
          1,
          0.7
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              1
            ],
            [
              20,
              10
            ]
          ]
        }
      }
    },
    {
      "id": "road_motorway_link",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "==",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "road_service_track",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "service",
          "track"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15.5,
              0
            ],
            [
              16,
              2
            ],
            [
              20,
              7.5
            ]
          ]
        }
      }
    },
    {
      "id": "road_link",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "ramp",
          1
        ],
        [
          "!in",
          "class",
          "pedestrian",
          "path",
          "track",
          "service",
          "motorway"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "road_minor",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "minor"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              13.5,
              0
            ],
            [
              14,
              2.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "road_secondary_tertiary",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              8,
              0.5
            ],
            [
              20,
              13
            ]
          ]
        }
      }
    },
    {
      "id": "road_trunk_primary",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "primary",
          "trunk"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "road_motorway",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "base": 1,
          "stops": [
            [
              5,
              "#111111"
            ],
            [
              6,
              "#111111"
            ]
          ]
        },
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "road_major_rail",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "class",
          "rail"
        ]
      ],
      "paint": {
        "line-color": "#777",
        "line-width": {
          "stops": [
            [
              1,
              4
            ],
            [
              6,
              2
            ],
            [
              10,
              1.4
            ],
            [
              14,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "road_major_rail_hatching",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "class",
          "rail"
        ]
      ],
      "paint": {
        "line-color": "#777",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14,
              0.4
            ],
            [
              15,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "road_transit_rail",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "class",
          "transit"
        ]
      ],
      "paint": {
        "line-color": "#777",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14,
              0.4
            ],
            [
              15,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "road_transit_rail_hatching",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "class",
          "transit"
        ]
      ],
      "paint": {
        "line-color": "#777",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14.5,
              0
            ],
            [
              15,
              3
            ],
            [
              20,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "road_one_way_arrow",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "transportation",
      "minzoom": 15,
      "filter": [
        "==",
        "oneway",
        1
      ],
      "layout": {
        "icon-image": "arrow",
        "symbol-placement": "line"
      }
    },
    {
      "id": "road_one_way_arrow_opposite",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "transportation",
      "minzoom": 15,
      "filter": [
        "==",
        "oneway",
        -1
      ],
      "layout": {
        "icon-image": "arrow",
        "symbol-placement": "line",
        "icon-rotate": 180
      }
    },
    {
      "id": "bridge_motorway_link_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "==",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_service_track_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "service",
          "track"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1
            ],
            [
              16,
              4
            ],
            [
              20,
              11
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_link_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "class",
          "link"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_street_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "street",
          "street_limited"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-opacity": {
          "stops": [
            [
              12,
              0
            ],
            [
              12.5,
              1
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
              13,
              1
            ],
            [
              14,
              4
            ],
            [
              20,
              25
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_path_pedestrian_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "path",
          "pedestrian"
        ]
      ],
      "paint": {
        "line-color": "#333333",
        "line-dasharray": [
          1,
          0
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              1.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_secondary_tertiary_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              1.5
            ],
            [
              20,
              17
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_trunk_primary_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "primary",
          "trunk"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.4
            ],
            [
              6,
              0.7
            ],
            [
              7,
              1.75
            ],
            [
              20,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_motorway_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#333333",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.4
            ],
            [
              6,
              0.7
            ],
            [
              7,
              1.75
            ],
            [
              20,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_path_pedestrian",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "path",
          "pedestrian"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-dasharray": [
          1,
          0.3
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              0.5
            ],
            [
              20,
              10
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_motorway_link",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "==",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_service_track",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "service",
          "track"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15.5,
              0
            ],
            [
              16,
              2
            ],
            [
              20,
              7.5
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_link",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "class",
          "link"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_street",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "minor"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              13.5,
              0
            ],
            [
              14,
              2.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_secondary_tertiary",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              10
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_trunk_primary",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "brunnel",
          "bridge"
        ],
        [
          "in",
          "class",
          "primary",
          "trunk"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_motorway",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!=",
          "ramp",
          1
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#111111",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_major_rail",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "class",
          "rail"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "paint": {
        "line-color": "#777",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14,
              0.4
            ],
            [
              15,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_major_rail_hatching",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "class",
          "rail"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "paint": {
        "line-color": "#777",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14.5,
              0
            ],
            [
              15,
              3
            ],
            [
              20,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_transit_rail",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "class",
          "transit"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "paint": {
        "line-color": "#777",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14,
              0.4
            ],
            [
              15,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "bridge_transit_rail_hatching",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "class",
          "transit"
        ],
        [
          "==",
          "brunnel",
          "bridge"
        ]
      ],
      "paint": {
        "line-color": "#777",
        "line-dasharray": [
          0.2,
          8
        ],
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              14.5,
              0
            ],
            [
              15,
              3
            ],
            [
              20,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "building",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "buildings",
      "minzoom": 13,
      "maxzoom": 24,
      "paint": {
        "fill-color": "#111111",
        "fill-outline-color": "rgba(68, 68, 68, 1)"
      }
    },
    {
      "id": "boundary_3",
      "type": "line",
      "source": "protomaps",
      "source-layer": "boundary",
      "minzoom": 0,
      "filter": [
        "all",
        [
          "in",
          "admin_level",
          3,
          4
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#aaa",
        "line-dasharray": [
          5,
          1
        ],
        "line-width": {
          "base": 1,
          "stops": [
            [
              4,
              0.4
            ],
            [
              5,
              1
            ],
            [
              12,
              1.8
            ]
          ]
        }
      }
    },
    {
      "id": "boundary_2_z0-4",
      "type": "line",
      "source": "protomaps",
      "source-layer": "boundary",
      "maxzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          2
        ],
        [
          "!has",
          "claimed_by"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#aaa",
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              0,
              0.4
            ],
            [
              4,
              1
            ]
          ]
        },
        "line-width": {
          "base": 1,
          "stops": [
            [
              3,
              1
            ],
            [
              5,
              1.2
            ],
            [
              12,
              3
            ]
          ]
        }
      }
    },
    {
      "id": "boundary_2_z5-",
      "type": "line",
      "source": "protomaps",
      "source-layer": "boundary",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          2
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#aaa",
        "line-opacity": {
          "base": 1,
          "stops": [
            [
              0,
              0.4
            ],
            [
              4,
              1
            ]
          ]
        },
        "line-width": {
          "base": 1,
          "stops": [
            [
              3,
              1
            ],
            [
              5,
              1.2
            ],
            [
              12,
              3
            ]
          ]
        }
      }
    },
    {
      "id": "water_name_line",
      "minzoom": 12,
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "waterway",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "text-field": "{name:latin}",
        "text-font": [
          "Open Sans Regular"
        ],
        "text-max-width": 5,
        "text-size": 12,
        "symbol-placement": "line"
      },
      "paint": {
        "text-color": "#aaa",
        "text-halo-color": "#000",
        "text-halo-width": 1
      }
    },
    {
      "id": "water_name_point",
      "minzoom": 12,
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "water_name",
      "filter": [
        "==",
        "$type",
        "Point"
      ],
      "layout": {
        "text-field": "{name:latin}",
        "text-font": [
          "Open Sans Regular"
        ],
        "text-max-width": 5,
        "text-size": 12
      },
      "paint": {
        "text-color": "#aaa",
        "text-halo-color": "#000",
        "text-halo-width": 1
      }
    },
    {
      "id": "water_name",
      "minzoom": 12,
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "water_name",
      "filter": [
        "all"
      ],
      "layout": {
        "text-field": "{name:latin}",
        "text-font": [
          "Open Sans Regular"
        ],
        "text-max-width": 5,
        "text-size": 12
      },
      "paint": {
        "text-color": "#aaa",
        "text-halo-color": "#000",
        "text-halo-width": 1
      }
    },
    {
      "id": "poi",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "poi",
      "minzoom": 16,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ]
      ],
      "layout": {
        "text-anchor": "top",
        "text-field": "{name:latin}",
        "text-font": [
          "Open Sans Regular"
        ],
        "text-max-width": 9,
        "text-offset": [
          0,
          0.6
        ],
        "text-size": 12
      },
      "paint": {
        "text-color": "#fff",
        "text-halo-blur": 0.5,
        "text-halo-color": "#000",
        "text-halo-width": 1
      }
    },
    {
      "id": "poi_transit",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "poi",
      "filter": [
        "all",
        [
          "in",
          "class",
          "rail",
          "airport",
          "railway"
        ]
      ],
      "layout": {
        "text-anchor": "left",
        "text-field": "{name:latin}",
        "text-font": [
          "Open Sans Regular"
        ],
        "text-max-width": 9,
        "text-offset": [
          0,
          0
        ],
        "text-size": 16
      },
      "paint": {
        "text-color": "#fff",
        "text-halo-blur": 0.5,
        "text-halo-color": "#000",
        "text-halo-width": 1,
        "icon-color": "rgba(108, 101, 101, 1)",
        "icon-opacity": 0
      }
    },
    {
      "id": "road_label",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "transportation_name",
      "filter": [
        "all"
      ],
      "layout": {
        "symbol-placement": "line",
        "text-anchor": "center",
        "text-field": "{name:latin}",
        "text-font": [
          "Open Sans Regular"
        ],
        "text-offset": [
          0,
          0.15
        ],
        "text-size": {
          "base": 1,
          "stops": [
            [
              13,
              10
            ],
            [
              14,
              10
            ]
          ]
        }
      },
      "paint": {
        "text-color": "rgba(92, 92, 92, 1)",
        "text-halo-blur": 0,
        "text-halo-width": 0,
        "text-halo-color": "#000"
      }
    },
    {
      "id": "road_shield",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "transportation_name",
      "minzoom": 7,
      "filter": [
        "all",
        [
          "<=",
          "ref_length",
          6
        ]
      ],
      "layout": {
        "icon-rotation-alignment": "viewport",
        "symbol-placement": {
          "base": 1,
          "stops": [
            [
              10,
              "point"
            ],
            [
              11,
              "line"
            ]
          ]
        },
        "symbol-spacing": 500,
        "text-field": "{ref}",
        "text-font": [
          "Open Sans Regular"
        ],
        "text-offset": [
          0,
          0.1
        ],
        "text-rotation-alignment": "viewport",
        "text-size": 10,
        "icon-size": 0.8
      },
      "paint": {
        "text-color": "#999",
        "text-halo-color": "#000",
        "text-halo-width": 1,
        "text-opacity": 1,
        "icon-opacity": 0,
        "text-halo-blur": 0.5
      }
    },
    {
      "id": "place",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "place",
      "filter": [
        "all",
        [
          "in",
          "class",
          "hamlet",
          "island",
          "islet",
          "neighbourhood",
          "suburb",
          "quarter"
        ]
      ],
      "layout": {
        "text-field": "{name:latin}",
        "text-font": [
          "Open Sans Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 9,
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              12,
              10
            ],
            [
              15,
              14
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#999",
        "text-halo-color": "#000",
        "text-halo-width": 1.2
      }
    },
    {
      "id": "place_neighborhood",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "place",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "in",
          "class",
          "neighbourhood",
          "suburb",
          "island"
        ]
      ],
      "layout": {
        "text-field": "{name:latin}",
        "text-font": [
          "Open Sans Semibold"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 9,
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              12,
              12
            ],
            [
              15,
              16
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "#000",
        "text-halo-width": 1.2
      }
    },
    {
      "id": "place_other",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "place",
      "filter": [
        "all",
        [
          "in",
          "class",
          "hamlet",
          "islet",
          "quarter"
        ]
      ],
      "layout": {
        "text-field": "{name:latin}",
        "text-font": [
          "Open Sans Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 9,
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              12,
              10
            ],
            [
              15,
              14
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#999",
        "text-halo-color": "#000",
        "text-halo-width": 1.2
      }
    },
    {
      "id": "place_village",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "place",
      "minzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "class",
          "village"
        ]
      ],
      "layout": {
        "text-field": "{name:latin}",
        "text-font": [
          "Open Sans Regular"
        ],
        "text-max-width": 8,
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              10,
              12
            ],
            [
              15,
              22
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#999",
        "text-halo-color": "#000",
        "text-halo-width": 1.2
      }
    },
    {
      "id": "place_town",
      "type": "symbol",
      "minzoom": 11,
      "source": "protomaps",
      "source-layer": "place",
      "filter": [
        "all",
        [
          "==",
          "class",
          "town"
        ]
      ],
      "layout": {
        "icon-image": {
          "base": 1,
          "stops": [
            [
              0,
              "dot_9"
            ],
            [
              8,
              ""
            ]
          ]
        },
        "text-anchor": "bottom",
        "text-field": "{name:latin}",
        "text-font": [
          "Open Sans Regular"
        ],
        "text-max-width": 8,
        "text-offset": [
          0,
          0
        ],
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              7,
              12
            ],
            [
              11,
              16
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#999",
        "text-halo-color": "#000",
        "text-halo-width": 1.2
      }
    },
    {
      "id": "place_city",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "place",
      "minzoom": 6,
      "filter": [
        "all",
        [
          "==",
          "class",
          "city"
        ]
      ],
      "layout": {
        "icon-image": "",
        "text-anchor": "bottom",
        "text-field": "{name:latin}",
        "text-font": [
          "Open Sans Bold"
        ],
        "text-max-width": 8,
        "text-offset": [
          0,
          0
        ],
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              7,
              14
            ],
            [
              11,
              24
            ]
          ]
        },
        "icon-allow-overlap": false,
        "icon-optional": false,
        "text-allow-overlap": false
      },
      "paint": {
        "text-color": "#ddd",
        "text-halo-color": "#000",
        "text-halo-width": 1.2
      }
    },
    {
      "id": "state",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "place",
      "maxzoom": 6,
      "filter": [
        "all",
        [
          "==",
          "class",
          "state"
        ]
      ],
      "layout": {
        "text-field": "{name:latin}",
        "text-font": [
          "Open Sans Bold"
        ],
        "text-size": {
          "stops": [
            [
              4,
              11
            ],
            [
              6,
              15
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#eee",
        "text-halo-color": "#000",
        "text-halo-width": 1
      }
    },
    {
      "id": "country_3",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "place",
      "filter": [
        "all",
        [
          ">=",
          "rank",
          3
        ],
        [
          "==",
          "class",
          "country"
        ]
      ],
      "layout": {
        "text-field": "{name:latin}",
        "text-font": [
          "Open Sans Extra Bold"
        ],
        "text-max-width": 6.25,
        "text-size": {
          "stops": [
            [
              3,
              11
            ],
            [
              7,
              17
            ]
          ]
        },
        "text-transform": "none"
      },
      "paint": {
        "text-color": "#eee",
        "text-halo-blur": 1,
        "text-halo-color": "#000",
        "text-halo-width": 1
      }
    },
    {
      "id": "country_2",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "place",
      "filter": [
        "all",
        [
          "==",
          "rank",
          2
        ],
        [
          "==",
          "class",
          "country"
        ]
      ],
      "layout": {
        "text-field": "{name:latin}",
        "text-font": [
          "Open Sans Extra Bold"
        ],
        "text-max-width": 6.25,
        "text-size": {
          "stops": [
            [
              2,
              11
            ],
            [
              5,
              17
            ]
          ]
        },
        "text-transform": "none"
      },
      "paint": {
        "text-color": "#eee",
        "text-halo-blur": 1,
        "text-halo-color": "#000",
        "text-halo-width": 1
      }
    },
    {
      "id": "country_1",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "place",
      "filter": [
        "all",
        [
          "==",
          "rank",
          1
        ],
        [
          "==",
          "class",
          "country"
        ]
      ],
      "layout": {
        "text-field": "{name:latin}",
        "text-font": [
          "Open Sans Extra Bold"
        ],
        "text-max-width": 6.25,
        "text-size": {
          "stops": [
            [
              1,
              11
            ],
            [
              4,
              17
            ]
          ]
        },
        "text-transform": "none"
      },
      "paint": {
        "text-color": "#eee",
        "text-halo-blur": 1,
        "text-halo-color": "#000",
        "text-halo-width": 1
      }
    },
    {
      "id": "continent",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "place",
      "maxzoom": 1,
      "filter": [
        "all",
        [
          "==",
          "class",
          "continent"
        ]
      ],
      "layout": {
        "text-field": "{name:latin}",
        "text-font": [
          "Open Sans Extra Bold"
        ],
        "text-size": 13,
        "text-transform": "uppercase",
        "text-justify": "center"
      },
      "paint": {
        "text-color": "#fff",
        "text-halo-color": "#000",
        "text-halo-width": 1
      }
    },
    {
      "id": "landuse_park",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "any",
        [
          "==",
          "pmap:kind",
          "park"
        ],
        [
          "==",
          "landuse",
          "cemetery"
        ]
      ],
      "paint": {
        "fill-color": "#1d3e2e"
      }
    },
    {
      "id": "landuse_industrial",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "any",
        [
          "==",
          "pmap:kind",
          "industrial"
        ]
      ],
      "paint": {
        "fill-color": "#20201e"
      }
    },
    {
      "id": "natural_wood",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "natural",
      "filter": [
        "any",
        [
          "==",
          "natural",
          "wood"
        ],
        [
          "==",
          "leisure",
          "nature_reserve"
        ],
        [
          "==",
          "landuse",
          "forest"
        ]
      ],
      "paint": {
        "fill-color": "#212e25"
      }
    },
    {
      "id": "landuse_pedestrian",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "any",
        [
          "==",
          "highway",
          "footway"
        ]
      ],
      "paint": {
        "fill-color": "#1a1a1a"
      }
    },
    {
      "id": "natural_scrub",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "natural",
      "filter": [
        "in",
        "natural",
        "scrub",
        "grassland"
      ],
      "paint": {
        "fill-color": "#27362a"
      }
    },
    {
      "id": "natural_glacier",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "natural",
      "filter": [
        "==",
        "natural",
        "glacier"
      ],
      "paint": {
        "fill-color": "#1c1c1c"
      }
    },
    {
      "id": "natural_sand",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "natural",
      "filter": [
        "==",
        "natural",
        "sand"
      ],
      "paint": {
        "fill-color": "#374238"
      }
    },
    {
      "id": "landuse_aerodrome",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "==",
        "aeroway",
        "aerodrome"
      ],
      "paint": {
        "fill-color": "#111111"
      }
    },
    {
      "id": "transit_runway",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transit",
      "filter": [
        "has",
        "aeroway"
      ],
      "paint": {
        "line-color": "#111111",
        "line-width": 6
      }
    },
    {
      "id": "landuse_runway",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "landuse",
      "filter": [
        "any",
        [
          "==",
          "aeroway",
          "runway"
        ],
        [
          "==",
          "area:aeroway",
          "runway"
        ],
        [
          "==",
          "area:aeroway",
          "taxiway"
        ]
      ],
      "paint": {
        "fill-color": "#111111"
      }
    },
    {
      "id": "roads_tunnels_other_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "<",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "other"
        ]
      ],
      "paint": {
        "line-color": "#ffffff",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          14,
          0,
          14.5,
          0.5,
          20,
          12
        ]
      }
    },
    {
      "id": "roads_tunnels_other",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "<",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "other"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-dasharray": [
          1,
          1
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          14,
          0,
          14.5,
          0.5,
          20,
          12
        ]
      }
    },
    {
      "id": "roads_tunnels_minor_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "<",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "minor_road"
        ]
      ],
      "paint": {
        "line-color": "#ffffff",
        "line-dasharray": [
          3,
          2
        ],
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          12,
          0,
          12.5,
          0.5,
          20,
          32
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          12,
          0,
          12.5,
          1
        ]
      }
    },
    {
      "id": "roads_tunnels_minor",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "<",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "minor_road"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          12,
          0,
          12.5,
          0.5,
          20,
          32
        ]
      }
    },
    {
      "id": "roads_tunnels_medium_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "<",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "medium_road"
        ]
      ],
      "paint": {
        "line-color": "#ffffff",
        "line-dasharray": [
          3,
          2
        ],
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          0.5,
          20,
          32
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          10,
          0,
          10.5,
          1
        ]
      }
    },
    {
      "id": "roads_tunnels_medium",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "<",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "medium_road"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          0.5,
          20,
          32
        ]
      }
    },
    {
      "id": "roads_tunnels_major_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "<",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "major_road"
        ]
      ],
      "paint": {
        "line-color": "#ffffff",
        "line-dasharray": [
          3,
          2
        ],
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          0.5,
          19,
          32
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          9,
          0,
          9.5,
          1
        ]
      }
    },
    {
      "id": "roads_tunnels_major",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "<",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "major_road"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          0.5,
          19,
          32
        ]
      }
    },
    {
      "id": "roads_tunnels_highway_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "<",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "highway"
        ]
      ],
      "paint": {
        "line-color": "#ffffff",
        "line-dasharray": [
          3,
          2
        ],
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          3,
          0,
          3.5,
          0.5,
          18,
          32
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          1
        ]
      }
    },
    {
      "id": "roads_tunnels_highway",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "<",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "highway"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          3,
          0,
          3.5,
          0.5,
          18,
          32
        ]
      }
    },
    {
      "id": "physical_line_waterway",
      "type": "line",
      "source": "protomaps",
      "source-layer": "physical_line",
      "filter": [
        "==",
        [
          "get",
          "pmap:kind"
        ],
        "waterway"
      ],
      "paint": {
        "line-color": "#1e293b",
        "line-width": 0.5
      }
    },
    {
      "id": "roads_other",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "==",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "other"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-dasharray": [
          2,
          1
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          14,
          0,
          14.5,
          0.5,
          20,
          12
        ]
      }
    },
    {
      "id": "roads_minor_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "==",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "minor_road"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          12,
          0,
          12.5,
          0.5,
          20,
          32
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          12,
          0,
          12.5,
          1
        ]
      }
    },
    {
      "id": "roads_minor",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "==",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "minor_road"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          12,
          0,
          12.5,
          0.5,
          20,
          32
        ]
      }
    },
    {
      "id": "roads_medium_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "==",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "medium_road"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          0.5,
          20,
          32
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          10,
          0,
          10.5,
          1
        ]
      }
    },
    {
      "id": "roads_medium",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "==",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "medium_road"
        ]
      ],
      "paint": {
        "line-color": "#282828",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          0.5,
          20,
          32
        ]
      }
    },
    {
      "id": "roads_major_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "==",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "major_road"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          0.5,
          19,
          32
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          9,
          0,
          9.5,
          1
        ]
      }
    },
    {
      "id": "roads_major",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "==",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "major_road"
        ]
      ],
      "paint": {
        "line-color": "#2f2f2f",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          0.5,
          19,
          32
        ]
      }
    },
    {
      "id": "roads_highway_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "==",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "highway"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          3,
          0,
          3.5,
          0.5,
          18,
          32
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          1
        ]
      }
    },
    {
      "id": "roads_highway",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "==",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "highway"
        ]
      ],
      "paint": {
        "line-color": "#3b3b3b",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          3,
          0,
          3.5,
          0.5,
          18,
          32
        ]
      }
    },
    {
      "id": "transit_railway",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transit",
      "filter": [
        "all",
        [
          "has",
          "railway"
        ]
      ],
      "paint": {
        "line-color": "#aaa",
        "line-width": 1
      }
    },
    {
      "id": "transit_railway_tracks",
      "type": "line",
      "source": "protomaps",
      "source-layer": "transit",
      "filter": [
        "all",
        [
          "==",
          "pmap:kind",
          "railway"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-width": 0.8,
        "line-dasharray": [
          6,
          10
        ]
      }
    },
    {
      "id": "boundaries",
      "type": "line",
      "source": "protomaps",
      "source-layer": "boundaries",
      "paint": {
        "line-color": "#aaa",
        "line-width": 0.5,
        "line-dasharray": [
          3,
          2
        ]
      }
    },
    {
      "id": "physical_line_waterway_label",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "physical_line",
      "minzoom": 14,
      "layout": {
        "symbol-placement": "line",
        "text-font": [
          "NotoSans-Regular"
        ],
        "text-field": [
          "get",
          "name"
        ],
        "text-size": 14,
        "text-letter-spacing": 0.3
      },
      "paint": {
        "text-color": "#ffffff",
        "text-halo-color": "#111111",
        "text-halo-width": 2
      }
    },
    {
      "id": "roads_bridges_other_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          ">",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "other"
        ]
      ],
      "paint": {
        "line-color": "#ffffff",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          14,
          0,
          14.5,
          0.5,
          20,
          12
        ]
      }
    },
    {
      "id": "roads_bridges_other",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          ">",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "other"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-dasharray": [
          2,
          1
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          14,
          0,
          14.5,
          0.5,
          20,
          12
        ]
      }
    },
    {
      "id": "roads_bridges_minor_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          ">",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "minor_road"
        ]
      ],
      "paint": {
        "line-color": "#ffffff",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          12,
          0,
          12.5,
          0.5,
          20,
          32
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          12,
          0,
          12.5,
          1
        ]
      }
    },
    {
      "id": "roads_bridges_minor",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          ">",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "minor_road"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          12,
          0,
          12.5,
          0.5,
          20,
          32
        ]
      }
    },
    {
      "id": "roads_bridges_medium_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          ">",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "medium_road"
        ]
      ],
      "paint": {
        "line-color": "#ffffff",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          0.5,
          20,
          32
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          10,
          0,
          10.5,
          1
        ]
      }
    },
    {
      "id": "roads_bridges_medium",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          ">",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "medium_road"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          0.5,
          20,
          32
        ]
      }
    },
    {
      "id": "roads_bridges_major_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          ">",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "major_road"
        ]
      ],
      "paint": {
        "line-color": "#ffffff",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          0.5,
          19,
          32
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          9,
          0,
          9.5,
          1
        ]
      }
    },
    {
      "id": "roads_bridges_major",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          ">",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "major_road"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          0.5,
          19,
          32
        ]
      }
    },
    {
      "id": "roads_bridges_highway_casing",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          ">",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "highway"
        ]
      ],
      "paint": {
        "line-color": "#ffffff",
        "line-gap-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          3,
          0,
          3.5,
          0.5,
          18,
          32
        ],
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          7,
          0,
          7.5,
          1
        ]
      }
    },
    {
      "id": "roads_bridges_highway",
      "type": "line",
      "source": "protomaps",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          ">",
          "pmap:level",
          0
        ],
        [
          "==",
          "pmap:kind",
          "highway"
        ]
      ],
      "paint": {
        "line-color": "#111111",
        "line-width": [
          "interpolate",
          [
            "exponential",
            1.6
          ],
          [
            "zoom"
          ],
          3,
          0,
          3.5,
          0.5,
          18,
          32
        ]
      }
    },
    {
      "id": "roads_labels",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "roads",
      "layout": {
        "symbol-placement": "line",
        "text-font": [
          "NotoSans-Regular"
        ],
        "text-field": [
          "get",
          "name"
        ],
        "text-size": 14
      },
      "paint": {
        "text-color": "#7a7a7a",
        "text-halo-color": "#111111",
        "text-halo-width": 2
      }
    },
    {
      "id": "buildings",
      "type": "fill-extrusion",
      "source": "protomaps",
      "source-layer": "buildings-blahblahblahremovemeforbuildings",
      "paint": {
        "fill-extrusion-color": "#393f43",
        "fill-extrusion-height": [
          "to-number",
          [
            "get",
            "height"
          ]
        ],
        "fill-extrusion-opacity": 0.5
      }
    },
    {
      "id": "mask",
      "type": "fill",
      "source": "protomaps",
      "source-layer": "mask",
      "paint": {
        "fill-color": "#dddddd"
      }
    },
    {
      "id": "physical_point_ocean",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "physical_point",
      "filter": [
        "any",
        [
          "==",
          "place",
          "sea"
        ],
        [
          "==",
          "place",
          "ocean"
        ]
      ],
      "layout": {
        "text-font": [
          "NotoSans-Regular"
        ],
        "text-field": [
          "get",
          "name"
        ],
        "text-size": 14,
        "text-letter-spacing": 0.15
      },
      "paint": {
        "text-color": "#ffffff",
        "text-halo-color": "#111111",
        "text-halo-width": 1
      }
    },
    {
      "id": "physical_point_peak",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "physical_point",
      "filter": [
        "any",
        [
          "==",
          "natural",
          "peak"
        ]
      ],
      "layout": {
        "text-font": [
          "NotoSans-Regular"
        ],
        "text-field": [
          "get",
          "name"
        ],
        "text-size": 14
      },
      "paint": {
        "text-color": "#ffffff",
        "text-halo-color": "#111111",
        "text-halo-width": 1.5
      }
    },
    {
      "id": "places_subplace",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "places",
      "filter": [
        "==",
        "pmap:kind",
        "neighbourhood"
      ],
      "layout": {
        "text-field": "{name}",
        "text-font": [
          "NotoSans-Regular"
        ],
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              11,
              10
            ],
            [
              14,
              12
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#8e8e8e",
        "text-halo-color": "#111111",
        "text-halo-width": 0.5
      }
    },
    {
      "id": "places_city_circle",
      "type": "circle",
      "source": "protomaps",
      "source-layer": "places",
      "filter": [
        "==",
        "pmap:kind",
        "city"
      ],
      "paint": {
        "circle-radius": 2,
        "circle-stroke-width": 2,
        "circle-stroke-color": "#111111",
        "circle-color": "#ffffff"
      },
      "maxzoom": 8
    },
    {
      "id": "places_city",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "places",
      "filter": [
        "==",
        "pmap:kind",
        "city"
      ],
      "minzoom": 1,
      "layout": {
        "text-field": "{name}",
        "text-font": [
          "NotoSans-Bold"
        ],
        "text-size": [
          "step",
          [
            "get",
            "pmap:rank"
          ],
          0,
          1,
          14,
          2,
          0
        ],
        "text-variable-anchor": [
          "bottom-left"
        ],
        "text-radial-offset": 0.2
      },
      "paint": {
        "text-color": "#ffffff",
        "text-halo-color": "#111111",
        "text-halo-width": 1
      }
    },
    {
      "id": "places_state",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "places",
      "filter": [
        "==",
        "pmap:kind",
        "state"
      ],
      "layout": {
        "text-field": "{name}",
        "text-font": [
          "NotoSans-Regular"
        ],
        "text-size": 12,
        "text-radial-offset": 0.2,
        "text-anchor": "center",
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#ffffff",
        "text-halo-color": "#111111",
        "text-halo-width": 0.5
      }
    },
    {
      "id": "places_country",
      "type": "symbol",
      "source": "protomaps",
      "source-layer": "places",
      "filter": [
        "==",
        "place",
        "country"
      ],
      "layout": {
        "text-field": "{name}",
        "text-font": [
          "NotoSans-Bold"
        ],
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              2,
              12
            ],
            [
              6,
              12
            ],
            [
              8,
              16
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "#ffffff",
        "text-halo-color": "#111111",
        "text-halo-width": 1
      }
    }
  ],
  "id": "osm-liberty"
}