// var chart = new ej.charts.Chart({
// 	series: [
// 		{
// 			dataSource: 
// 				[{x: 1, y: 4}, {x: 2, y: 7}, {x: 3, y: 10},
// 				{x: 4, y: 21}, { x: 5, y: 23}], xName: 'x', open: 'open', high: 'high', low: 'low', close: 'close', type: 'HiloOpenClose'
// 		}
// 	]
// });
// chart.appendTo('#app');

var stuff;

let instance = axios.create({
    headers: {
		get: {
            'X-Authorization-Public-Key' : 'ceb77430c462e6fdd3818ec5578324d2'
        },
    }
});

// GET DOW JONES DATA
instance.get('https://api.intrinio.com/prices?identifier=$DJI') .then(function(response){
	stuff = response;
	let actual = stuff.data.data;

	let chart = new ej.charts.Chart({
		primaryXAxis: {
			valueType: 'DateTime',	
		},
		primaryYAxis: {
			valueType: 'Double',
			maximumLabels: 2,
			rangePadding: 'normal',
		},
		series: [
			{
				type: 'Line',
				dataSource: actual,
				xName: 'date',
				yName: 'close'
			}
		],
		width: '95%',
		// height: '90%',
	});
	chart.appendTo('#dow-chart');
})
.catch(error => console.log(error));

// GET NASDAQ DATA
instance.get('https://api.intrinio.com/prices?identifier=$COMPQ') .then(function(response){
	stuff = response;
	let actual = stuff.data.data;
	

	let chart = new ej.charts.Chart({
		primaryXAxis: {
			valueType: 'DateTime',	
		},
		primaryYAxis: {
			valueType: 'Double',
			maximumLabels: 2,
			rangePadding: 'normal',
		},
		series: [
			{
				type: 'Line',
				dataSource: actual,
				xName: 'date',
				yName: 'close'
			}
		],
		width: '95%',
		// height: '90%',
	});
	chart.appendTo('#nasdaq-chart');
})
.catch(error => console.log(error.description, error.response.data.errors[0].human, error.response.data.errors[0].message));

// GET S&P 500 DATA
instance.get('https://api.intrinio.com/prices?identifier=$SPX') 
  .then(function(response){
	stuff = response;
	let actual = stuff.data.data;
	
	console.log('heres the data');
	console.log(actual);

	let chart = new ej.charts.Chart({
		primaryXAxis: {
			valueType: 'DateTime',
			labelStyle:{
				// size: '0',
			}
		},
		primaryYAxis: {
			valueType: 'Double',
			maximumLabels: 2,
			rangePadding: 'normal',
		},
		series: [
			{
				type: 'Line',
				dataSource: actual,
				xName: 'date',
				yName: 'close'
			}
		],
		width: '95%',
		// height: '90%',
	});
	chart.appendTo('#sp-chart');
})
.catch(error => console.log(error.description, error.response.data.errors[0].human, error.response.data.errors[0].message));