import React from 'react'
import {Line} from 'react-chartjs-2';
import {Col,Row,Typography} from 'antd';

const {Title} = Typography;

const LineChart = ({coinHistory, currentPrice, coinName}) => {

    const coinPrice = coinHistory?.data?.history.map( (val) => val.price);
    const coinTimestamp = coinHistory?.data?.history.map( (val) => new Date(val.timestamp).toLocaleDateString());

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label : 'Price in USD',
                data : coinPrice,
                fill : true,
                backgroundColor	: '#C2DBF5',
                borderColor : '#0071bd',
                pointRadius: 0
            }
        ]
    }
    const options = {
        scales: {
            yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        }
                    }
                ]
        }
    }
    

    return (
        <>
            <Row></Row>
            <Row className="chart-header">
                <Title level={2} className="chart-title">{coinName} Price Chart </Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
                    <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
                </Col>
            </Row>
            <Line data={data} option={options} />
        </>
    )
}

export default LineChart
