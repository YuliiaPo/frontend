
var chartLineconfig = {
    type: 'line',
    data: {
        labels: ['30.05', '31.05', '01.06', '02.06', '03.06', '04.06', '05.06', '07.06', '08.06', '09.06'],
        datasets: [{
            label: 'Filled1',
            data: [40, 49, 40, 50, 40, 49, 40, 50, 40, 50],
            fill: true,
            backgroundColor: 'rgba(236, 61, 129, 0.7)',
            borderWidth: '0px',
            pointRadius: '0',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#3c4c5d',
            pointHoverBorderWidth: '3',
        },
        {
            label: 'Filled2',
            data: [49, 40, 49, 40, 50, 40, 50, 40, 50, 40],
            fill: true,
            backgroundColor: 'rgba(210, 153, 220, 0.7)',
            borderWidth: '0px',
            pointRadius: '0',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#3c4c5d',
            pointHoverBorderWidth: '3',
        }
        ]
    },
    options: {
        legend: {
            display: false,
        },
        responsive: true,
        tooltips: {
            // Disable the on-canvas tooltip
            enabled: false,

            custom: function (tooltipModel) {
                // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = '<table></table>';
                    document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.value;
                }

                // Set Text
                if (tooltipModel.body) {
                    var bodyLines = tooltipModel.dataPoints.map(getBody);
                    var innerHtml = '<thead>';
                    innerHtml += '</thead><tbody>';

                    bodyLines.forEach(function (body, i) {
                        var colors = tooltipModel.labelColors[i];

                        var style = "background: #3c4c5d;";
                        style += "border-color: #3c4c5d;";
                        style += "border-width: 2px;";
                        style += "font-size: 12px;";
                        style += "color: #fff;";
                        style += "padding: 10px 12px;";
                        style += "border-radius: 5px;";
                        var span = '<span class="custom-tooltip" style="' + style + '">';
                        innerHtml += '<tr><td>' + span + body + '</span></td></tr>';
                    });
                    innerHtml += '</tbody>';

                    var tableRoot = tooltipEl.querySelector('table');
                    tableRoot.innerHTML = innerHtml;
                }

                // `this` will be the overall tooltip
                var position = this._chart.canvas.getBoundingClientRect();

                // Display, position, and set styles for font
                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 25 + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 40 + 'px';
                tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                tooltipEl.style.pointerEvents = 'none';
            }
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    drawOnChartArea: false,
                }
            }],
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 60
                },
                scaleLabel: {
                    display: true,
                },
            }]
        }
    }
};
var StatusData = {
    labels: ['Всего', 'Закрыто', 'В работе', 'Новый', 'Просрочен'],
    datasets: [{
        label: 'Status',
        backgroundColor: "#000",
        borderColor: "#fff",
        borderWidth: 1,
        data: [980, 860, 30, 20, 200],
        fill: false,
        backgroundColor: ["rgba(255, 109, 143, 0.2)", "rgba(61, 164, 241, 0.2)", "rgba(255, 204, 65, 0.2)", "rgba(65, 192, 191, 0.2)", "rgba(176, 130, 255, 0.2)"],
        borderColor: ["rgba(255, 109, 143, 1)", "rgba(61, 164, 241, 1)", "rgba(255, 204, 65, 1)", "rgba(65, 192, 191, 1)", "rgba(176, 130, 255, 1)"],
        borderWidth: 1

    }
    ]
};
var chartStatusconfig = {
    type: 'horizontalBar',
    data: StatusData,
    options: {
        elements: {
            rectangle: {
                borderWidth: 2,
            }
        },
        tooltips: {
            enabled: false,
        },
        responsive: true,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 2000
                },
            }],
            yAxes: [{
                display: true,
            }]
        }
    }
};
var CircleData = {
    labels: ['Да', 'Нет'],
    datasets: [{
        backgroundColor: "#000",
        borderWidth: 1,
        data: [50, 50],
        fill: false,
        backgroundColor: ["rgba(248, 78, 0, 0.9)", "rgba(255, 256, 0, 0.9)"],
        borderColor: ["rgba(256, 256, 256, 1)", "rgba(256, 256, 256, 1)"],
        hoverBorderColor: ["rgba(256, 256, 256, 1)", "rgba(256, 256, 256, 1)"],
        borderWidth: "5"
    }
    ]
};
var chartCircleconfig = {
    type: 'doughnut',
    data: CircleData,
    options: {
        elements: {
            rectangle: {
                borderWidth: 2,
            }
        },
        cutoutPercentage: 75,
        tooltips: {
            enabled: false,
        },
        responsive: true,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
            }]
        }
    }
};

window.onload = function () {
    console.log(document.getElementById('chart-weeks').getContext('2d'));
    var chartLine = document.getElementById('chart-weeks').getContext('2d');
    window.myLine = new Chart(chartLine, chartLineconfig);
    var chartStatus = document.getElementById('chart-status').getContext('2d');
    window.myHorizontalBar = new Chart(chartStatus, chartStatusconfig);
    var chartCirlce = document.getElementById('chart-circle').getContext('2d');
    window.myDoughnut = new Chart(chartCirlce, chartCircleconfig);
};

function openMenu(){
    $( ".mobile-menu-button" ).toggleClass( "open" );
    $( ".aside-content" ).toggleClass( "active" );
}

