const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data:{
        labels: ['2000','2020'],
        datasets: [
            { 
            label:'Consumo de Energia Renovable',
            data: [0.001835014, 0.1903],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153,102,255,1)',
            borderWidth: 2.0
        },
        {
            label: 'Consumo Energia Convencial',
            data: [56.329, 74.114], 
            backgroundColor: 'rgba(255, 159, 64, 0.2)', 
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 2,
            fill: true 
        }
    ]
},
options: {
    scales: {
        y: {
            beginAtZero: true 
            
        }
    }
}
});