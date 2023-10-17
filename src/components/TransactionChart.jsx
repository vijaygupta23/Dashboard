import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Jan',

		Income: 5400
	},
	{
		name: 'Feb',
		
		Income: 1398
	},
	{
		name: 'Mar',
	
		Income: 9800
	},
	{
		name: 'Apr',
		
		Income: 3908
	},
	{
		name: 'May',
		
		Income: 4800
	},
	{
		name: 'Jun',
		
		Income: 3800
	},
	{
		name: 'July',
		
		Income: 4300
	},
	{
		name: 'Aug',
			Income: 9800
	},
	{
		name: 'Sep',
		
		Income: 3908
	},
	{
		name: 'Oct',
		
		Income: 4800
	},
	{
		name: 'Nov',
		
		Income: 3800
	},
	{
		name: 'Dec',
		Income: 4300
	}
]

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Overview</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Income" fill="#0ea5e9" />
						
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}