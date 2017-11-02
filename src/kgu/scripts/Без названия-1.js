var zconf = {
    "legend": {
        "layout": "1x3",
        "x": "12%",
        "y": "3%"
    },
    "type": "line",
    "background-color": "#F2F8FE",
    "utc": 0,
    "plotarea": {
        "background-color": "#F2F8FE"
    },
    "scale-x": {
        "max-items": 6,
        "shadow": 3,
        "line-color": "#111",
        "tick": {
            "line-color": "#111",
            "line-width": 1,
            "line-style": "solid",
            "placement": "outer"
        },
        "guide": {
            "visible": true,
            "lineColor": "#ccc",
            "line-style": "solid",
            "lineWidth": 1
        },
        "item": {
            "font-color": "#111"
        },
        "transform": {
            "type": "date",
            "all": "%H:%i:%s",
            "guide": {
                "visible": 1
            },
            "item": {
                "visible": false
            }
        },
        "label": {
            "visible": false
        },
        "minor-ticks": 4,
        "minor-tick": {
            "line-width": 1,
            "line-style": "solid",
            "size": 4,
            "placement": "outer"
        }
    },
    "scale-y": {
        "max-items": 6,
        "line-color": "#111",
        "shadow": 0,
        "tick": {
            "line-color": "#111"
        },
        "guide": {
            "line-color": "#ccc",
            "line-style": "solid"
        },
        "item": {
            "font-color": "#111"
        },
        "label": {
            "text": "",
            "font-color": "#111"
        },
        "minor-ticks": 4,
        "thousands-separator": ","
    },
    "crosshair-x": {
        "line-color": "#111",
        "plot-label": {
            "multiple": true,
            "padding": "5px"
        },
        "scale-label": {
            "font-color": "#00baf0",
            "background-color": "#111",
            "border-radius": "5px"
        }
    },
    "tooltip": {
        "visible": 1
    },
    "plot": {
        "tooltip-text": "%t views: %v<br>%k",
        "shadow": 0,
        "line-width": "3px",
        "marker": {
            "type": "circle",
            "size": 3
        },
        "hover-marker": {
            "type": "circle",
            "size": 4,
            "border-width": "1px"
        }
    },
    "series": [{
        "values": [],
        "text": "T6",
        "line-color": "#29A2CC",
        "legend-marker": {
            "type": "circle",
            "size": 5,
            "background-color": "#29A2CC",
            "border-width": 1,
            "shadow": 0,
            "border-color": "#69dbf1"
        },
        "marker": {
            "visible": false,
            "background-color": "#29A2CC",
            "border-width": 1,
            "shadow": 0,
            "border-color": "#69dbf1"
        },
        "guide-label": {
            "text": "%t %v",
            "background-color": "#29A2CC",
            "color": "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        "values": [],
        "text": "T12",
        "line-color": "#66CC00",
        "legend-marker": {
            "type": "circle",
            "size": 5,
            "background-color": "#66CC00",
            "border-width": 1,
            "shadow": 0,
            "border-color": "#66CC00"
        },
        "marker": {
            "visible": false,
            "background-color": "#66CC00",
            "border-width": 1,
            "shadow": 0,
            "border-color": "#66CC00"
        },
        "guide-label": {
            "text": "%t %v",
            "background-color": "#66CC00",
            "color": "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }, {
        "values": [],
        "text": "T13",
        "line-color": "#FF3300",
        "legend-marker": {
            "type": "circle",
            "size": 5,
            "background-color": "#FF3300",
            "border-width": 1,
            "shadow": 0,
            "border-color": "#FF3300"
        },
        "marker": {
            "visible": false,
            "background-color": "#FF3300",
            "border-width": 1,
            "shadow": 0,
            "border-color": "#FF3300"
        },
        "guide-label": {
            "text": "%t %v",
            "background-color": "#FF3300",
            "color": "#fff",
            "font-weight": "bold",
            "font-size": "14px",
            "border-width": 0
        }
    }]
}
