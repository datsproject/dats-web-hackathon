$(function () {
	"use strict";
	// chart 1
	var ctx = document.getElementById('chart1').getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
			datasets: [{
				label: 'Google',
				data: [13, 20, 4, 18, 7, 4, 8],
				backgroundColor: "transparent",
				borderColor: "rgba(255, 255, 255, 0.24)",
				pointRadius: "0",
				borderWidth: 4
			}, {
				label: 'Facebook',
				data: [3, 30, 6, 6, 3, 4, 11],
				backgroundColor: "transparent",
				borderColor: "#fff",
				pointRadius: "0",
				borderWidth: 4
			}]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				display: true,
				labels: {
					fontColor: '#fff',
					boxWidth: 40
				}
			},
			tooltips: {
				enabled: false
			},
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero: true,
						fontColor: '#fff'
					},
					gridLines: {
						display: true,
						color: "rgba(255, 255, 255, 0.24)"
					},
				}],
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontColor: 'rgba(255, 255, 255, 0.64)'
					},
					gridLines: {
						display: true,
						color: "rgba(255, 255, 255, 0.24)"
					},
				}]
			}
		}
	});
	// chart 2
	var ctx = document.getElementById("chart2").getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
			datasets: [{
				label: 'Google',
				data: [13, 20, 4, 18, 29, 25, 8],
				barPercentage: .5,
				backgroundColor: "rgba(255, 255, 255, 0.24)"
			}, {
				label: 'Facebook',
				data: [31, 30, 6, 6, 21, 4, 11],
				barPercentage: .5,
				backgroundColor: "#fff"
			}]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				display: true,
				labels: {
					fontColor: '#fff',
					boxWidth: 40
				}
			},
			tooltips: {
				enabled: true
			},
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero: true,
						fontColor: '#fff'
					},
					gridLines: {
						display: true,
						color: "rgba(255, 255, 255, 0.24)"
					},
				}],
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontColor: 'rgba(255, 255, 255, 0.64)'
					},
					gridLines: {
						display: true,
						color: "rgba(255, 255, 255, 0.24)"
					},
				}]
			}
		}
	});
	// chart 3
	new Chart(document.getElementById("chart3"), {
		type: 'pie',
		data: {
			labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
			datasets: [{
				label: "Population (millions)",
				backgroundColor: ["rgba(255, 255, 255, 0.64)", "#fff", "rgba(255, 255, 255, 0.44)", "rgba(255, 255, 255, 0.32)", "rgba(255, 255, 255, 0.15)"],
				data: [2478, 5267, 734, 784, 433],
				borderWidth: [0, 0, 0, 0, 0]
			}]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				display: true,
				labels: {
					fontColor: '#fff',
					boxWidth: 40
				}
			},
			title: {
				display: true,
				text: 'Predicted world population (millions) in 2050',
			}
		}
	});
	// chart 4
	new Chart(document.getElementById("chart4"), {
		type: 'radar',
		data: {
			labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
			datasets: [{
				label: "1950",
				fill: true,
				backgroundColor: "rgba(255, 255, 255, 0.64)",
				borderColor: "rgba(255, 255, 255, 0.24)",
				pointBorderColor: "#fff",
				pointBackgroundColor: "rgba(179,181,198,1)",
				data: [8.77, 55.61, 21.69, 6.62, 6.82]
			}, {
				label: "2050",
				fill: true,
				backgroundColor: "rgba(255, 255, 255, 0.64)",
				borderColor: "rgba(255,99,132,1)",
				pointBorderColor: "#fff",
				pointBackgroundColor: "rgba(255, 255, 255, 0.64)",
				pointBorderColor: "#fff",
				data: [25.48, 54.16, 7.61, 8.06, 4.45]
			}]
		},
		options: {
			maintainAspectRatio: false,
			title: {
				display: true,
				text: 'Distribution in % of world population'
			},
			legend: {
				 position :"right",	
				 display: true,
				    labels: {
					  fontColor: '#fff',  
					  boxWidth:15
				   }
				},
			scale: {
			  gridLines: {
				   color: "rgba(221, 221, 221, 0.12)" 
				 }, 
			}
		}
	});
	// chart 5
	new Chart(document.getElementById("chart5"), {
		type: 'polarArea',
		data: {
			labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
			datasets: [{
				label: "Population (millions)",
				backgroundColor: ["rgba(255, 255, 255, 0.64)", "#fff", "rgba(255, 255, 255, 0.44)", "rgba(255, 255, 255, 0.32)", "rgba(255, 255, 255, 0.15)"],
				data: [2478, 5267, 734, 784, 433],
				borderWidth: [0, 0, 0, 0, 0]
			}]
		},
		options: {
			maintainAspectRatio: false,
			title: {
				display: true,
				text: 'Predicted world population (millions) in 2050'
			},
			legend: {
				 position :"right",	
				 display: true,
				    labels: {
					  fontColor: '#fff',  
					  boxWidth:15
				   }
				},
			scale: {
			  gridLines: {
				   color: "rgba(221, 221, 221, 0.12)" 
				 }, 
			}
		}
	});
	// chart 6
	new Chart(document.getElementById("chart6"), {
		type: 'doughnut',
		data: {
			labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
			datasets: [{
				label: "Population (millions)",
				backgroundColor: ["rgba(255, 255, 255, 0.64)", "#fff", "rgba(255, 255, 255, 0.44)", "rgba(255, 255, 255, 0.32)", "rgba(255, 255, 255, 0.15)"],
				data: [2478, 5267, 734, 784, 433],
				borderWidth: [0, 0, 0, 0, 0]
			}]
		},
		options: {
			maintainAspectRatio: false,
			title: {
				display: true,
				text: 'Predicted world population (millions) in 2050'
			},
			legend: {
				display: true,
				labels: {
					fontColor: '#fff',
					boxWidth: 40
				}
			},
		}
	});
	// chart 7
	new Chart(document.getElementById("chart7"), {
		type: 'horizontalBar',
		data: {
			labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
			datasets: [{
				label: "Population (millions)",
				backgroundColor: ["rgba(255, 255, 255, 0.64)", "#fff", "rgba(255, 255, 255, 0.44)", "rgba(255, 255, 255, 0.32)", "rgba(255, 255, 255, 0.15)"],
				data: [2478, 5267, 734, 784, 433]
			}]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				display: false
			},
			title: {
				display: true,
				text: 'Predicted world population (millions) in 2050'
			},
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero: true,
						fontColor: '#fff'
					},
					gridLines: {
						display: true,
						color: "rgba(255, 255, 255, 0.24)"
					},
				}],
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontColor: 'rgba(255, 255, 255, 0.64)'
					},
					gridLines: {
						display: true,
						color: "rgba(255, 255, 255, 0.24)"
					},
				}]
			}
		}
	});
	// chart 8
	new Chart(document.getElementById("chart8"), {
		type: 'bar',
		data: {
			labels: ["1900", "1950", "1999", "2050"],
			datasets: [{
				label: "Africa",
				backgroundColor: "#fff",
				data: [133, 221, 783, 2478]
			}, {
				label: "Europe",
				backgroundColor: "rgba(255, 255, 255, 0.24)",
				data: [408, 547, 675, 734]
			}]
		},
		options: {
			maintainAspectRatio: false,
			title: {
				display: true,
				text: 'Population growth (millions)'
			},
			legend: {
				 position :"top",	
				 display: true,
				    labels: {
					  fontColor: '#fff',  
					  boxWidth:15
				   }
				},
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero: true,
						fontColor: '#fff'
					},
					gridLines: {
						display: true,
						color: "rgba(255, 255, 255, 0.24)"
					},
				}],
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontColor: 'rgba(255, 255, 255, 0.64)'
					},
					gridLines: {
						display: true,
						color: "rgba(255, 255, 255, 0.24)"
					},
				}]
			}
		}
	});
	// chart 9
	new Chart(document.getElementById("chart9"), {
		type: 'bar',
		data: {
			labels: ["1900", "1950", "1999", "2050"],
			datasets: [{
				label: "Europe",
				type: "line",
				borderColor: "#fff",
				data: [408, 547, 675, 734],
				fill: false
			}, {
				label: "Africa",
				type: "line",
				borderColor: "#fff",
				data: [133, 221, 783, 2478],
				fill: false
			}, {
				label: "Europe",
				type: "bar",
				backgroundColor: "rgba(255, 255, 255, 0.54)",
				data: [408, 547, 675, 734],
			}, {
				label: "Africa",
				type: "bar",
				backgroundColor: "rgba(255, 255, 255, 0.24)",
				backgroundColorHover: "#3e95cd",
				data: [133, 221, 783, 2478]
			}]
		},
		options: {
			maintainAspectRatio: false,
			title: {
				display: true,
				text: 'Population growth (millions): Europe & Africa'
			},
			legend: {
				 position :"top",	
				 display: true,
				    labels: {
					  fontColor: '#fff',  
					  boxWidth:15
				   }
				},
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero: true,
						fontColor: '#fff'
					},
					gridLines: {
						display: true,
						color: "rgba(255, 255, 255, 0.24)"
					},
				}],
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontColor: 'rgba(255, 255, 255, 0.64)'
					},
					gridLines: {
						display: true,
						color: "rgba(255, 255, 255, 0.24)"
					},
				}]
			}
		}
	});
	// chart 10
	new Chart(document.getElementById("chart10"), {
		type: 'bubble',
		data: {
			labels: "Africa",
			datasets: [{
				label: ["China"],
				backgroundColor: "#fff",
				borderColor: "#fff",
				data: [{
					x: 21269017,
					y: 5.245,
					r: 15
				}]
			}, {
				label: ["Denmark"],
				backgroundColor: "rgba(255, 255, 255, 0.64)",
				borderColor: "rgba(255, 255, 255, 0.64)",
				data: [{
					x: 258702,
					y: 7.526,
					r: 10
				}]
			}, {
				label: ["Germany"],
				backgroundColor: "rgba(255, 255, 255, 0.44)",
				borderColor: "rgba(255, 255, 255, 0.44)",
				data: [{
					x: 3979083,
					y: 6.994,
					r: 15
				}]
			}, {
				label: ["Japan"],
				backgroundColor: "rgba(255, 255, 255, 0.24)",
				borderColor: "rgba(255, 255, 255, 0.24)",
				data: [{
					x: 4931877,
					y: 5.921,
					r: 15
				}]
			}]
		},
		options: {
			maintainAspectRatio: false,
			title: {
				display: true,
				text: 'Predicted world population (millions) in 2050'
			},
			legend: {
				 position :"top",	
				 display: true,
				    labels: {
					  fontColor: '#fff',  
					  boxWidth:15
				   }
				},
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero: true,
						fontColor: '#fff'
					},
					gridLines: {
						display: true,
						color: "rgba(255, 255, 255, 0.24)"
					},
				}],
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontColor: 'rgba(255, 255, 255, 0.64)'
					},
					gridLines: {
						display: true,
						color: "rgba(255, 255, 255, 0.24)"
					},
				}]
			}
		}
	});
});