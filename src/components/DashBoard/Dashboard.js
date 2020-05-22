import React from 'react';
import { Pie } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import LineChart from './LineChart';

class Dashboard extends React.Component {
	state = {
		products: {
			labels: ['Product1', 'Product2', 'Product3', 'Product4', 'Product 5'],
			datasets: [
				{
					data: [90, 50, 110, 40, 140],
					backgroundColor: [
						'#35B9BA',
						'#B7452D',
						'#1A8099',
						'#949FB1',
						'#1A71B1',
						'#780B48',
					],
					hoverBackgroundColor: [
						'#FF5A5E',
						'#5AD3D1',
						'#FFC870',
						'#A8B3C5',
						'#616774',
						'#DA92DB',
					],
				},
			],
		},
	};

	render() {
		return (
			<MDBContainer>
				<h3 className='mt-5'>Pie chart for Products</h3>
				<Pie data={this.state.products} options={{ responsive: true }} />
				<LineChart />
			</MDBContainer>
		);
	}
}

export default Dashboard;
