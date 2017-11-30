import React from 'react';

import './ik-currency-graph.style.css';
import moment from 'moment';

import { Chart } from 'chart.js';

export class CurrencyGraph extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.canvas && this.props.dynamic) {
            this.renderChart(this.canvas, this.props.dynamic);
        }
        const pageElementClass = this.props.className;
        return (
            <div>
                <canvas id="myChart"
                    className={pageElementClass}
                    ref={(canvas) => {
                        this.canvas = canvas;
                    }}
                ></canvas>
            </div>
        );
    }


    // componentDidUpdate() {
    //     if (this.canvas && this.props.dynamic) {
    //         this.renderChart(this.canvas, this.props.dynamic);
    //     }
    // }

    renderChart(canvas, curData) {
        let axisX = curData.map((item) => item.date);
        let axisY = curData.map((item) => +item.curRate);
        let minY = Math.min(...axisY);
        let maxY = Math.max(...axisY);
        let rangeY = maxY - minY;
        let borderValue = 0.1;
        let ctx = canvas.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: axisX,
                datasets: [{
                    label: 'Currency dynamic',
                    data: axisY,
                    backgroundColor: ['#ddd'],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            min: minY - borderValue * rangeY,
                            max: maxY + borderValue * rangeY
                        }
                    }],
                    xAxes: [{
                        stacked: true,
                        ticks: {
                            min: axisX[0],
                            max: axisX[10]
                        }
                    }]
                }
            }
        });
    }

}