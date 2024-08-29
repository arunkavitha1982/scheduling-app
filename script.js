        // Sample data for different time ranges
        const dataSets = {
            '12months': {
                labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
                data: [0,100, 150, 250, 200, 180, 140, 170, 150, 130, 120, 110, 180]
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

    // Revenue Chart
    var ctx2 = document.getElementById('revenueChart').getContext('2d');
    var revenueChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Revenue',
                data: [120, 190, 300, 220],
                backgroundColor: ['#6a0dad', '#6a0dad', '#6a0dad', '#6a0dad'],
                borderColor: ['#6a0dad', '#6a0dad', '#6a0dad', '#6a0dad'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
