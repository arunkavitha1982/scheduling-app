document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // Toggle sidebar visibility
    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('visible');
        overlay.style.display = sidebar.classList.contains('visible') ? 'block' : 'none';
    });

    // Close sidebar on overlay click
    overlay.addEventListener('click', function () {
        sidebar.classList.remove('visible');
        overlay.style.display = 'none';
    });
});
const dataSets = {
    '12months': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [0, 100, 150, 250, 200, 180, 140, 170, 150, 130, 120, 110, 180]
    },
    '6months': {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [170, 150, 130, 120, 110, 180]
    },
    '30days': {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        data: [20, 25, 30, 40, 35, 45, 50]
    },
    '7days': {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        data: [5, 15, 20, 10, 25, 30, 35]
    },
    'today': {
        labels: ['Hour 1', 'Hour 2', 'Hour 3', 'Hour 4', 'Hour 5'],
        data: [1, 5, 2, 4, 3]
    }
};

// Initialize chart with 12 months data
let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dataSets['12months'].labels,
        datasets: [{
            label: 'Ticket History',
            data: dataSets['12months'].data,
            borderColor: '#6200ea',
            backgroundColor: 'rgba(98, 0, 234, 0.1)',
            pointBackgroundColor: '#6200ea',
            pointBorderColor: '#6200ea',
            pointHoverRadius: 3,
            tension: 0.1,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#999',
                    stepSize: 100
                },
                grid: {
                    color: '#e0e0e0'
                }
            },
            x: {
                ticks: {
                    color: '#999'
                },
                grid: {
                    display: false
                }
            }
        }
    }
});

// Function to update chart data
function updateChart(range, button) {
    // Update active button style
    document.querySelectorAll('.btn-group button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Update chart data
    chart.data.labels = dataSets[range].labels;
    chart.data.datasets[0].data = dataSets[range].data;
    chart.update();
}

<<<<<<< HEAD
const months = ['Feb', 'Mar', 'Apr', 'May']; // Example labels

// Get the context of the canvas element
let ctx2 = document.getElementById('myChart2').getContext('2d');
let chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: months,
        datasets: [{
            data: [200, 250, 150, 175], // Example data
            backgroundColor: ['#C0C0C0', '#C0C0C0', '#C0C0C0', '#7706CD'], // Gray for first three bars, purple for the last
            borderWidth: 0, // No border to match the design
            barThickness: 10, // Set the bar thickness (adjust this value as needed)

        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // Hide legend to match your design
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#999',
                    stepSize: 100,
                    callback: function(value) { return '$' + value; } // Add dollar signs
                },
                grid: {
                    color: '#e0e0e0'
                }
            },
            x: {
                ticks: {
                    color: '#999'
                },
                grid: {
                    display: false
                }
            }
        }
    }
});
=======
// Revenue Chart Initialization
let revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
    type: 'bar',
    data: {
        labels: ['April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Revenue',
            data: [5000, 7000, 6000, 8000],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
>>>>>>> 01067c6f4024bcd8c6b4afb7d4305ef963137d92
