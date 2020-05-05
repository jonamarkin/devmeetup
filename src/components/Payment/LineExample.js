import {
    Line
} from "vue-chartjs";

export default {
    extends: Line,
    mounted() {
        this.renderChart({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Payments Amount Received',
                backgroundColor: '	#f1b74b',
                data: [40, 39, 10, 40, 39, 80, 40]

            }]
        }, {
            responsive: true,
            maintainAspectRatio: false
        })
    }
}