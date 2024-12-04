const ctx = document.getElementById("myChart");
const energias = [
  " Eólica ",
  " Hidroeléctrica ",
  " Solar ",
  " Electricidad renovable",
];
const consumo = [2.07415646, 71.9141, 1.39550117, 73.649734];

const myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: energias,
    datasets: [
      {
        label: "Consumo de las energias",
        data: consumo,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(0, 128, 0, 0.6)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(0, 128, 0, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1.5,
      },
    ],
  },
});
const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
