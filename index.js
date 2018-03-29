import Toast from 'tui-chart';
import React from 'react';
import PropTypes from 'prop-types';

export default class ToastChart extends React.Component{
    componentDidMount(){
        const container = document.getElementById(this.props.id);
        const chartDrawer = Toast[this.props.chartType];
        chartDrawer(container, this.props.data, this.props.options);
    }

    render(){
        return (
            <div id={this.props.id}></div>
        );
    }
}

ToastChart.propTypes = {
    id: PropTypes.string,
    data: PropTypes.object,
    options: PropTypes.object,
    chartType: PropTypes.string,
};
