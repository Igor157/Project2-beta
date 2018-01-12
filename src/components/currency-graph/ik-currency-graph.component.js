import React from 'react';

import './ik-currency-graph.style.css';
import moment from 'moment';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip
} from 'recharts';

export class CurrencyGraph extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const pageElementClass = this.props.className;
        return (
            <ResponsiveContainer height="70%">
                <AreaChart data={this.props.dynamic}>
                    <XAxis dataKey="date" />
                    <YAxis domain={['dataMin', 'dataMax']} />
                    <Area type="monotone" dataKey="curRate" stroke="#8884d8" fillOpacity={1} fill="rgb(74, 74, 228)" />
                    <Tooltip />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}