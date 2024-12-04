const ctx = document.getElementById('myChart')
const años = ['2000', '2001','2002','2003','2004','2005' , '2006', '2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021']
const capacidad = [0.0237023,0.023551578 ,0.022691173, 0.021934634, 0.020496003,0.020267531, 0.018964536, 0.018450184, 0.018450184 ,0.018198362, 0.017905103,0.017661603, 0.016972166, 0.016520733, 0.013850416,0.014478066, 0.0131216375,0.013413816, 0.012909889, 0.025255714,0.16636805,0.24630542,0.39550117 ]

const myChart = new Chart(ctx, {
    type: 'line',
    data:{
        labels: años,
        datasets: [{
            label:'Energia solar en colombia',
            data: capacidad,
            borderColor: 'black',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderWidth: 2.0
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