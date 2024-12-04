const ctx = document.getElementById('myChart')
const energias = [' Eólica ',' Hidroeléctrica ',' Solar ',' Electricidad Renovable']
const cantidad = [2.06, 58.19, 3.19, 8.00661]

const myChart = new Chart(ctx, {
    type: 'bar',
    data:{
        labels: energias,
        datasets: [{
            label:'Energias',
            data: cantidad,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153,102,255,1)',
            borderWidth: 1.5
        }]
    }
});
const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};