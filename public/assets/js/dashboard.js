$(function() {
    "use strict";
    var e = {
        series: [{
            name: "Revenue",
            data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
        }],
        chart: {
            type: "line",
            height: 65,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !1
            },
            dropShadow: {
                enabled: 0,
                top: 3,
                left: 14,
                blur: 4,
                opacity: .12,
                color: "#fff"
            },
            sparkline: {
                enabled: !0
            }
        },
        markers: {
            size: 0,
            colors: ["#fff"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            show: !0,
            width: 3,
            curve: "smooth"
        },
        colors: ["#fff"],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function(e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        }
    };
    new ApexCharts(document.querySelector("#chart1"), e).render();
    e = {
        series: [{
            name: "Customers",
            data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
        }],
        chart: {
            type: "line",
            height: 65,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !1
            },
            dropShadow: {
                enabled: 0,
                top: 3,
                left: 14,
                blur: 4,
                opacity: .12,
                color: "#fff"
            },
            sparkline: {
                enabled: !0
            }
        },
        markers: {
            size: 0,
            colors: ["#fff"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            show: !0,
            width: 3,
            curve: "smooth"
        },
        colors: ["#fff"],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function(e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        }
    };
    new ApexCharts(document.querySelector("#chart2"), e).render();
    e = {
        series: [{
            name: "Store Visitores",
            data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
        }],
        chart: {
            type: "line",
            height: 65,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !1
            },
            dropShadow: {
                enabled: 0,
                top: 3,
                left: 14,
                blur: 4,
                opacity: .12,
                color: "#fff"
            },
            sparkline: {
                enabled: !0
            }
        },
        markers: {
            size: 0,
            colors: ["#fff"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            show: !0,
            width: 3,
            curve: "smooth"
        },
        colors: ["#fff"],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function(e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        }
    };
    new ApexCharts(document.querySelector("#chart3"), e).render();
    e = {
        series: [{
            name: "Store Visitores",
            data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
        }],
        chart: {
            type: "line",
            height: 65,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !1
            },
            dropShadow: {
                enabled: 0,
                top: 3,
                left: 14,
                blur: 4,
                opacity: .12,
                color: "#fff"
            },
            sparkline: {
                enabled: !0
            }
        },
        markers: {
            size: 0,
            colors: ["#fff"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            show: !0,
            width: 3,
            curve: "smooth"
        },
        colors: ["#fff"],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function(e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        }
    };
    new ApexCharts(document.querySelector("#chart3_1"), e).render();
    e = {
        series: [{
            name: "Cyber Security Research ( 10 )",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: "DDos Test ( 60 )",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: "Super Computer ( 12 )",
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        chart: {
            foreColor: "#9ba7b2",
            type: "bar",
            height: 300,
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "55%",
                endingShape: "rounded"
            }
        },
        grid: {
            borderColor: 'rgba(255, 255, 255, 0.12)',
            show: true,
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            show: !0,
            width: 2,
            colors: ["transparent"]
        },
        colors: ["rgba(255, 255, 255, 0.60)", "#fff", "rgba(255, 255, 255, 0.25)"],
        xaxis: {
            categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            theme: "dark",
            y: {
                formatter: function(e) {
                    return "$ " + e + " thousands"
                }
            }
        }
    };
    new ApexCharts(document.querySelector("#chart4"), e).render();
    e = {
        series: [{
            name: "Pageviews",
            data: [332, 540, 160, 240, 160, 671, 355, 671, 414, 555, 257, 901, 613]
        }],
        chart: {
            type: "area",
            height: 250,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !1
            },
            dropShadow: {
                enabled: !1,
                top: 3,
                left: 14,
                blur: 4,
                opacity: .12,
                color: "#fff"
            },
            sparkline: {
                enabled: !0
            }
        },
        markers: {
            size: 0,
            colors: ["#fff"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            show: !0,
            width: 2,
            curve: "smooth"
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: ["#fff"],
                inverseColors: true,
                opacityFrom: 0.2,
                opacityTo: 0.5,
                stops: [0, 50, 100],
                colorStops: []
            }
        },
        colors: ["#fff"],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function(e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        }
    };
    new ApexCharts(document.querySelector("#chart13"), e).render();


});