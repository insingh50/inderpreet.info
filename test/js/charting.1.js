// SYNCFUSION
// var chart = new Chart();
// chart.appendTo('#dow-chart');

// GOOGLE CHARTS
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

var stuff;

let instance = axios.create({
    headers: {
        get: {
            'X-Authorization-Public-Key' : '238ef16a151e2a4630e3d32844f47b37'
        },
    }
});

function drawBasic() {
    var options = {
        axisFontSize : 0,
        stemColor : 'none',
        curveType: 'function',
        legend: 'none',
        animation: {"startup" : true},
    };
    
    // GET DOW JONES DATA
    instance.get('https://api.intrinio.com/prices?identifier=$DJI') .then(function(response){
        stuff = response;
        let actual = stuff.data.data;
        let list = [];

        let data = new google.visualization.DataTable();
        data.addColumn('date', '');
        data.addColumn('number', '');
        for(i=0; i<100; i++){
            list.push([Date.parse(actual[i].date), actual[i].close]);
        }
        // console.log(Date.parse(actual[i-5].date).getMonth());
    
        console.log(list);
    
        data.addRows(list);
    
        let chart = new google.visualization.LineChart(document.getElementById('dow-chart'));
    
        chart.draw(data, options);
    })
    .catch(error => console.log(error));

    // GET NASDAQ DATA
    instance.get('https://api.intrinio.com/prices?identifier=$COMPQ') .then(function(response){
        stuff = response;
        let actual = stuff.data.data;
        let list = [];
        for(i=0; i<100; i++){
            list.push([actual[i].date, actual[i].close]);
        }
    
        let data = new google.visualization.DataTable();
        data.addColumn('string', '');
        data.addColumn('number', '');
    
        console.log(list);
    
        data.addRows(list);
    
        let chart = new google.visualization.LineChart(document.getElementById('nasdaq-chart'));
    
        chart.draw(data, options);
    })
    .catch(error => console.log(error.description, error.response.data.errors[0].human, error.response.data.errors[0].message));

    // GET S&P 500 DATA
    instance.get('https://api.intrinio.com/prices?identifier=$SPX') .then(function(response){
        stuff = response;
        let actual = stuff.data.data;
        let list = [];
        for(i=0; i<100; i++){
            list.push([actual[i].date, actual[i].close]);
        }
    
        let data = new google.visualization.DataTable();
        data.addColumn('string', '');
        data.addColumn('number', '');
    
        console.log(list);
    
        data.addRows(list);
    
        let chart = new google.visualization.LineChart(document.getElementById('sp-chart'));
    
        chart.draw(data, options);
    })
    .catch(error => console.log(error.description, error.response.data.errors[0].human, error.response.data.errors[0].message));
    
}