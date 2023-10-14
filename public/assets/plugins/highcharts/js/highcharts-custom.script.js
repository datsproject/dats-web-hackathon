$(function () {
	"use strict";
	// chart 1
	Highcharts.chart('chart1', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Browser market shares in January, 2018'
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %'
				}
			}
		},
		series: [{
			name: 'Brands',
			colorByPoint: true,
			data: [{
				name: 'Chrome',
				y: 61.41,
				sliced: true,
				selected: true
			}, {
				name: 'Internet Explorer',
				y: 11.84
			}, {
				name: 'Firefox',
				y: 10.85
			}, {
				name: 'Edge',
				y: 4.67
			}, {
				name: 'Safari',
				y: 4.18
			}, {
				name: 'Sogou Explorer',
				y: 1.64
			}, {
				name: 'Opera',
				y: 1.6
			}, {
				name: 'QQ',
				y: 1.2
			}, {
				name: 'Other',
				y: 2.61
			}]
		}]
	});
	// chart 2
	// Build the chart
	Highcharts.chart('chart2', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Browser market shares in January, 2018'
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false
				},
				showInLegend: true
			}
		},
		series: [{
			name: 'Brands',
			colorByPoint: true,
			data: [{
				name: 'Chrome',
				y: 61.41,
				sliced: true,
				selected: true
			}, {
				name: 'Internet Explorer',
				y: 11.84
			}, {
				name: 'Firefox',
				y: 10.85
			}, {
				name: 'Edge',
				y: 4.67
			}, {
				name: 'Safari',
				y: 4.18
			}, {
				name: 'Other',
				y: 7.05
			}]
		}]
	});
	// chart 3
	Highcharts.chart('chart3', {
		chart: {
			type: 'variablepie',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Countries compared by population density and total area.'
		},
		tooltip: {
			headerFormat: '',
			pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' + 'Area (square km): <b>{point.y}</b><br/>' + 'Population density (people per square km): <b>{point.z}</b><br/>'
		},
		series: [{
			minPointSize: 10,
			innerSize: '20%',
			zMin: 0,
			name: 'countries',
			data: [{
				name: 'Spain',
				y: 505370,
				z: 92.9
			}, {
				name: 'France',
				y: 551500,
				z: 118.7
			}, {
				name: 'Poland',
				y: 312685,
				z: 124.6
			}, {
				name: 'Czech Republic',
				y: 78867,
				z: 137.5
			}, {
				name: 'Italy',
				y: 301340,
				z: 201.8
			}, {
				name: 'Switzerland',
				y: 41277,
				z: 214.5
			}, {
				name: 'Germany',
				y: 357022,
				z: 235.6
			}]
		}]
	});
	// chart4
	// Make monochrome colors
	var pieColors = (function () {
		var colors = [],
			base = Highcharts.getOptions().colors[0],
			i;
		for (i = 0; i < 10; i += 1) {
			// Start out with a darkened base color (negative brighten), and end
			// up with a much brighter color
			colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
		}
		return colors;
	}());
	// Build the chart
	Highcharts.chart('chart4', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			styledMode: true,
			type: 'pie'
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Browser market shares at a specific website, 2014'
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				colors: pieColors,
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
					distance: -50,
					filter: {
						property: 'percentage',
						operator: '>',
						value: 4
					}
				}
			}
		},
		series: [{
			name: 'Share',
			data: [{
				name: 'Chrome',
				y: 61.41
			}, {
				name: 'Internet Explorer',
				y: 11.84
			}, {
				name: 'Firefox',
				y: 10.85
			}, {
				name: 'Edge',
				y: 4.67
			}, {
				name: 'Safari',
				y: 4.18
			}, {
				name: 'Other',
				y: 7.05
			}]
		}]
	});
	// chart 5
	var colors = Highcharts.getOptions().colors,
		categories = ['Chrome', 'Firefox', 'Internet Explorer', 'Safari', 'Edge', 'Opera', 'Other'],
		data = [{
			y: 62.74,
			color: colors[2],
			drilldown: {
				name: 'Chrome',
				categories: ['Chrome v65.0', 'Chrome v64.0', 'Chrome v63.0', 'Chrome v62.0', 'Chrome v61.0', 'Chrome v60.0', 'Chrome v59.0', 'Chrome v58.0', 'Chrome v57.0', 'Chrome v56.0', 'Chrome v55.0', 'Chrome v54.0', 'Chrome v51.0', 'Chrome v49.0', 'Chrome v48.0', 'Chrome v47.0', 'Chrome v43.0', 'Chrome v29.0'],
				data: [
					0.1,
					1.3,
					53.02,
					1.4,
					0.88,
					0.56,
					0.45,
					0.49,
					0.32,
					0.29,
					0.79,
					0.18,
					0.13,
					2.16,
					0.13,
					0.11,
					0.17,
					0.26
				]
			}
		}, {
			y: 10.57,
			color: colors[1],
			drilldown: {
				name: 'Firefox',
				categories: ['Firefox v58.0', 'Firefox v57.0', 'Firefox v56.0', 'Firefox v55.0', 'Firefox v54.0', 'Firefox v52.0', 'Firefox v51.0', 'Firefox v50.0', 'Firefox v48.0', 'Firefox v47.0'],
				data: [
					1.02,
					7.36,
					0.35,
					0.11,
					0.1,
					0.95,
					0.15,
					0.1,
					0.31,
					0.12
				]
			}
		}, {
			y: 7.23,
			color: colors[0],
			drilldown: {
				name: 'Internet Explorer',
				categories: ['Internet Explorer v11.0', 'Internet Explorer v10.0', 'Internet Explorer v9.0', 'Internet Explorer v8.0'],
				data: [
					6.2,
					0.29,
					0.27,
					0.47
				]
			}
		}, {
			y: 5.58,
			color: colors[3],
			drilldown: {
				name: 'Safari',
				categories: ['Safari v11.0', 'Safari v10.1', 'Safari v10.0', 'Safari v9.1', 'Safari v9.0', 'Safari v5.1'],
				data: [
					3.39,
					0.96,
					0.36,
					0.54,
					0.13,
					0.2
				]
			}
		}, {
			y: 4.02,
			color: colors[5],
			drilldown: {
				name: 'Edge',
				categories: ['Edge v16', 'Edge v15', 'Edge v14', 'Edge v13'],
				data: [
					2.6,
					0.92,
					0.4,
					0.1
				]
			}
		}, {
			y: 1.92,
			color: colors[4],
			drilldown: {
				name: 'Opera',
				categories: ['Opera v50.0', 'Opera v49.0', 'Opera v12.1'],
				data: [
					0.96,
					0.82,
					0.14
				]
			}
		}, {
			y: 7.62,
			color: colors[6],
			drilldown: {
				name: 'Other',
				categories: ['Other'],
				data: [
					7.62
				]
			}
		}],
		browserData = [],
		versionsData = [],
		i,
		j,
		dataLen = data.length,
		drillDataLen,
		brightness;
	// Build the data arrays
	for (i = 0; i < dataLen; i += 1) {
		// add browser data
		browserData.push({
			name: categories[i],
			y: data[i].y,
			color: data[i].color
		});
		// add version data
		drillDataLen = data[i].drilldown.data.length;
		for (j = 0; j < drillDataLen; j += 1) {
			brightness = 0.2 - (j / drillDataLen) / 5;
			versionsData.push({
				name: data[i].drilldown.categories[j],
				y: data[i].drilldown.data[j],
				color: Highcharts.color(data[i].color).brighten(brightness).get()
			});
		}
	}
	// Create the chart
	Highcharts.chart('chart5', {
		chart: {
			type: 'pie',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Browser market share, January, 2018'
		},
		subtitle: {
			text: 'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
		},
		plotOptions: {
			pie: {
				shadow: false,
				center: ['50%', '50%']
			}
		},
		tooltip: {
			valueSuffix: '%'
		},
		series: [{
			name: 'Browsers',
			data: browserData,
			size: '60%',
			dataLabels: {
				formatter: function () {
					return this.y > 5 ? this.point.name : null;
				},
				color: '#ffffff',
				distance: -30
			}
		}, {
			name: 'Versions',
			data: versionsData,
			size: '80%',
			innerSize: '60%',
			dataLabels: {
				formatter: function () {
					// display only if larger than 1
					return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
				}
			},
			id: 'versions'
		}],
		responsive: {
			rules: [{
				condition: {
					maxWidth: 400
				},
				chartOptions: {
					series: [{}, {
						id: 'versions',
						dataLabels: {
							enabled: false
						}
					}]
				}
			}]
		}
	});
	// chart 6
	Highcharts.chart('chart6', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			styledMode: true,
			plotShadow: false
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Browser<br>shares<br>2017',
			align: 'center',
			verticalAlign: 'middle',
			y: 60
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true,
					distance: -50,
					style: {
						fontWeight: 'bold',
						color: 'white'
					}
				},
				startAngle: -90,
				endAngle: 90,
				center: ['50%', '75%'],
				size: '110%'
			}
		},
		series: [{
			type: 'pie',
			name: 'Browser share',
			innerSize: '50%',
			data: [
				['Chrome', 58.9],
				['Firefox', 13.29],
				['Internet Explorer', 13],
				['Edge', 3.78],
				['Safari', 3.42], {
					name: 'Other',
					y: 7.61,
					dataLabels: {
						enabled: false
					}
				}
			]
		}]
	});
	// chart7
	Highcharts.chart('chart7', {
		chart: {
			type: 'bar',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Historic World Population by Region'
		},
		subtitle: {
			text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
		},
		xAxis: {
			categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Population (millions)',
				align: 'high'
			},
			labels: {
				overflow: 'justify'
			}
		},
		tooltip: {
			valueSuffix: ' millions'
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				}
			}
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: -40,
			y: 80,
			floating: true,
			borderWidth: 1,
			backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
			shadow: true
		},
		credits: {
			enabled: false
		},
		series: [{
			name: 'Year 1800',
			data: [107, 31, 635, 203, 2]
		}, {
			name: 'Year 1900',
			data: [133, 156, 947, 408, 6]
		}, {
			name: 'Year 2000',
			data: [814, 841, 3714, 727, 31]
		}, {
			name: 'Year 2016',
			data: [1216, 1001, 4436, 738, 40]
		}]
	});
	// chart 8
	Highcharts.chart('chart8', {
		chart: {
			type: 'column',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Monthly Average Rainfall'
		},
		subtitle: {
			text: 'Source: WorldClimate.com'
		},
		xAxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			crosshair: true
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Rainfall (mm)'
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0
			}
		},
		series: [{
			name: 'Tokyo',
			data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
		}, {
			name: 'New York',
			data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
		}, {
			name: 'London',
			data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
		}, {
			name: 'Berlin',
			data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
		}]
	});
	// chart 9
	Highcharts.chart('chart9', {
		chart: {
			type: 'bar',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Stacked bar chart'
		},
		xAxis: {
			categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Total fruit consumption'
			}
		},
		legend: {
			reversed: true
		},
		plotOptions: {
			series: {
				stacking: 'normal'
			}
		},
		series: [{
			name: 'John',
			data: [5, 3, 4, 7, 2]
		}, {
			name: 'Jane',
			data: [2, 2, 3, 2, 1]
		}, {
			name: 'Joe',
			data: [3, 4, 4, 2, 5]
		}]
	});
	// chart 10
	// Create the chart
	Highcharts.chart('chart10', {
		chart: {
			type: 'column',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Browser market shares. January, 2018'
		},
		subtitle: {
			text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
		},
		accessibility: {
			announceNewData: {
				enabled: true
			}
		},
		xAxis: {
			type: 'category'
		},
		yAxis: {
			title: {
				text: 'Total percent market share'
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			series: {
				borderWidth: 0,
				dataLabels: {
					enabled: true,
					format: '{point.y:.1f}%'
				}
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
		},
		series: [{
			name: "Browsers",
			colorByPoint: true,
			data: [{
				name: "Chrome",
				y: 62.74,
				drilldown: "Chrome"
			}, {
				name: "Firefox",
				y: 10.57,
				drilldown: "Firefox"
			}, {
				name: "Internet Explorer",
				y: 7.23,
				drilldown: "Internet Explorer"
			}, {
				name: "Safari",
				y: 5.58,
				drilldown: "Safari"
			}, {
				name: "Edge",
				y: 4.02,
				drilldown: "Edge"
			}, {
				name: "Opera",
				y: 1.92,
				drilldown: "Opera"
			}, {
				name: "Other",
				y: 7.62,
				drilldown: null
			}]
		}],
		drilldown: {
			series: [{
				name: "Chrome",
				id: "Chrome",
				data: [
					["v65.0",
						0.1
					],
					["v64.0",
						1.3
					],
					["v63.0",
						53.02
					],
					["v62.0",
						1.4
					],
					["v61.0",
						0.88
					],
					["v60.0",
						0.56
					],
					["v59.0",
						0.45
					],
					["v58.0",
						0.49
					],
					["v57.0",
						0.32
					],
					["v56.0",
						0.29
					],
					["v55.0",
						0.79
					],
					["v54.0",
						0.18
					],
					["v51.0",
						0.13
					],
					["v49.0",
						2.16
					],
					["v48.0",
						0.13
					],
					["v47.0",
						0.11
					],
					["v43.0",
						0.17
					],
					["v29.0",
						0.26
					]
				]
			}, {
				name: "Firefox",
				id: "Firefox",
				data: [
					["v58.0",
						1.02
					],
					["v57.0",
						7.36
					],
					["v56.0",
						0.35
					],
					["v55.0",
						0.11
					],
					["v54.0",
						0.1
					],
					["v52.0",
						0.95
					],
					["v51.0",
						0.15
					],
					["v50.0",
						0.1
					],
					["v48.0",
						0.31
					],
					["v47.0",
						0.12
					]
				]
			}, {
				name: "Internet Explorer",
				id: "Internet Explorer",
				data: [
					["v11.0",
						6.2
					],
					["v10.0",
						0.29
					],
					["v9.0",
						0.27
					],
					["v8.0",
						0.47
					]
				]
			}, {
				name: "Safari",
				id: "Safari",
				data: [
					["v11.0",
						3.39
					],
					["v10.1",
						0.96
					],
					["v10.0",
						0.36
					],
					["v9.1",
						0.54
					],
					["v9.0",
						0.13
					],
					["v5.1",
						0.2
					]
				]
			}, {
				name: "Edge",
				id: "Edge",
				data: [
					["v16",
						2.6
					],
					["v15",
						0.92
					],
					["v14",
						0.4
					],
					["v13",
						0.1
					]
				]
			}, {
				name: "Opera",
				id: "Opera",
				data: [
					["v50.0",
						0.96
					],
					["v49.0",
						0.82
					],
					["v12.1",
						0.14
					]
				]
			}]
		}
	});
	// chart 11
	Highcharts.chart('chart11', {
		chart: {
			type: 'area',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		accessibility: {
			description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
		},
		title: {
			text: 'US and USSR nuclear stockpiles'
		},
		subtitle: {
			text: 'Sources: <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' + 'thebulletin.org</a> &amp; <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' + 'armscontrol.org</a>'
		},
		xAxis: {
			allowDecimals: false,
			labels: {
				formatter: function () {
					return this.value; // clean, unformatted number for year
				}
			},
			accessibility: {
				rangeDescription: 'Range: 1940 to 2017.'
			}
		},
		yAxis: {
			title: {
				text: 'Nuclear weapon states'
			},
			labels: {
				formatter: function () {
					return this.value / 1000 + 'k';
				}
			}
		},
		tooltip: {
			pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
		},
		plotOptions: {
			area: {
				pointStart: 1940,
				marker: {
					enabled: false,
					symbol: 'circle',
					radius: 2,
					states: {
						hover: {
							enabled: true
						}
					}
				}
			}
		},
		series: [{
			name: 'USA',
			data: [
				null, null, null, null, null, 6, 11, 32, 110, 235,
				369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
				20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
				26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
				24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
				21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
				10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
				5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
			]
		}, {
			name: 'USSR/Russia',
			data: [null, null, null, null, null, null, null, null, null, null,
				5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
				1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
				11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
				30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
				37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
				21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
				12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
			]
		}]
	});
	// chart 12
	Highcharts.chart('chart12', {
		chart: {
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Combination chart'
		},
		xAxis: {
			categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
		},
		labels: {
			items: [{
				html: 'Total fruit consumption',
				style: {
					left: '50px',
					top: '18px',
					color: ( // theme
						Highcharts.defaultOptions.title.style && Highcharts.defaultOptions.title.style.color) || 'black'
				}
			}]
		},
		series: [{
			type: 'column',
			name: 'Jane',
			data: [3, 2, 1, 3, 4]
		}, {
			type: 'column',
			name: 'John',
			data: [2, 3, 5, 7, 6]
		}, {
			type: 'column',
			name: 'Joe',
			data: [4, 3, 3, 9, 0]
		}, {
			type: 'spline',
			name: 'Average',
			data: [3, 2.67, 3, 6.33, 3.33],
			marker: {
				lineWidth: 2,
				lineColor: Highcharts.getOptions().colors[3],
				fillColor: 'white'
			}
		}, {
			type: 'pie',
			name: 'Total consumption',
			data: [{
				name: 'Jane',
				y: 13,
				color: Highcharts.getOptions().colors[0] // Jane's color
			}, {
				name: 'John',
				y: 23,
				color: Highcharts.getOptions().colors[1] // John's color
			}, {
				name: 'Joe',
				y: 19,
				color: Highcharts.getOptions().colors[2] // Joe's color
			}],
			center: [100, 80],
			size: 100,
			showInLegend: false,
			dataLabels: {
				enabled: false
			}
		}]
	});
	// chart 13
	Highcharts.chart('chart13', {
		chart: {
			zoomType: 'xy',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Average Monthly Temperature and Rainfall in Tokyo'
		},
		subtitle: {
			text: 'Source: WorldClimate.com'
		},
		xAxis: [{
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			crosshair: true
		}],
		yAxis: [{ // Primary yAxis
			labels: {
				format: '{value}°C',
				style: {
					color: Highcharts.getOptions().colors[1]
				}
			},
			title: {
				text: 'Temperature',
				style: {
					color: Highcharts.getOptions().colors[1]
				}
			}
		}, { // Secondary yAxis
			title: {
				text: 'Rainfall',
				style: {
					color: Highcharts.getOptions().colors[0]
				}
			},
			labels: {
				format: '{value} mm',
				style: {
					color: Highcharts.getOptions().colors[0]
				}
			},
			opposite: true
		}],
		tooltip: {
			shared: true
		},
		legend: {
			layout: 'vertical',
			align: 'left',
			x: 120,
			verticalAlign: 'top',
			y: 100,
			floating: true,
			backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || // theme
			'rgba(255,255,255,0.25)'
		},
		series: [{
			name: 'Rainfall',
			type: 'column',
			yAxis: 1,
			data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
			tooltip: {
				valueSuffix: ' mm'
			}
		}, {
			name: 'Temperature',
			type: 'spline',
			data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
			tooltip: {
				valueSuffix: '°C'
			}
		}]
	});
	// chart 14
	Highcharts.chart('chart14', {
		chart: {
			type: 'column',
			styledMode: true
		},
		title: {
			text: 'Column chart with negative values'
		},
		xAxis: {
			categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
		},
		credits: {
			enabled: false
		},
		series: [{
			name: 'John',
			data: [5, 3, 4, 7, 2]
		}, {
			name: 'Jane',
			data: [2, -2, -3, 2, 1]
		}, {
			name: 'Joe',
			data: [3, 4, 4, -2, 5]
		}]
	});
	// chart 15
	Highcharts.chart('chart15', {
		chart: {
			type: 'column',
			styledMode: true
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Stacked column chart'
		},
		xAxis: {
			categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Total fruit consumption'
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: ( // theme
						Highcharts.defaultOptions.title.style && Highcharts.defaultOptions.title.style.color) || 'gray'
				}
			}
		},
		legend: {
			align: 'right',
			x: -30,
			verticalAlign: 'top',
			y: 25,
			floating: true,
			backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		tooltip: {
			headerFormat: '<b>{point.x}</b><br/>',
			pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				dataLabels: {
					enabled: true
				}
			}
		},
		series: [{
			name: 'John',
			data: [5, 3, 4, 7, 2]
		}, {
			name: 'Jane',
			data: [2, 2, 3, 2, 1]
		}, {
			name: 'Joe',
			data: [3, 4, 4, 2, 5]
		}]
	});
});