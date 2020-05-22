import React from 'react';
import { Line } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';

class LineChart extends React.Component {
	state = {
		months: {
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
			],
			datasets: [
				{
					label: 'Product1',
					fill: true,
					backgroundColor: 'rgba(225, 204,230, .3)',
					borderColor: 'rgb(3, 211, 252)',
					borderDash: [],
					pointBorderColor: 'rgb(117, 60, 60)',
					pointBorderWidth: 7,
					pointHoverBackgroundColor: 'rgb(161, 108, 108)',
					pointHoverBorderColor: 'rgba(230, 106, 106)',
					pointRadius: 1,
					data: [75, 65, 70, 81, 60, 55, 40, 60],
				},
				{
					label: 'Product2',
					fill: true,
					backgroundColor: 'rgba(184, 185, 210, .3)',
					pointBorderColor: 'rgb(35, 26, 136)',
					pointBackgroundColor: 'rgb(255, 255, 255)',
					pointBorderWidth: 7,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgb(0, 0, 0)',
					pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					data: [29, 48, 30, 20, 88, 29, 80, 50],
				},
				{
					label: 'Product3',
					fill: true,
					backgroundColor: 'rgba(29, 163, 143, 0.3)',
					pointBorderColor: 'rgb(29, 163, 143)',
					pointBackgroundColor: 'rgb(29, 163, 143)',
					pointBorderWidth: 7,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgb(0, 0, 0)',
					pointHoverBorderColor: 'rgba(29, 163, 143, 1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					data: [39, 18, 20, 30, 8, 49, 89, 59],
				},
			],
		},
	};

	render() {
		return (
			<MDBContainer>
				<h3 className='mt-5'>Sales Comparison</h3>
				<Line data={this.state.months} options={{ responsive: true }} />
			</MDBContainer>
		);
	}
}

export default LineChart;
