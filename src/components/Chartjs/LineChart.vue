<template>
  <canvas
    ref="chart"
    :height="height || ''"
    :width="width || ''"
    @click="onClick"
  />
</template>

<script>
import Chart from 'chart.js'
const TYPE_CHART = 'line'

export default {
  name: 'LineChart',
  props: {
    click: {
      type: Function,
      required: false
    },
    dataset: {
      type: Array,
      required: true
    },
    labels: {
      type: Array,
      required: true
    },
    height: {
      type: Number,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    responsive: {
      type: Boolean,
      required: false
    },
    tooltips: {
      type: Object,
      required: false
    },
    width: {
      type: Number,
      required: false
    },
  },
  mounted() {
    let config = {
			type: TYPE_CHART,
			data: {
				labels: this.labels,
				datasets: this.dataset
			},
			options: {
				responsive: this.responsive || false,
				title: {
					display: !!this.title,
					text: this.title
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Month'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Value'
						}
					}]
				}
			}
		};

    if (this.tooltips) {
      config.options = {
        ...config.options,
        tooltips: this.tooltips
      }
    }

    if (this.hover) {
      config.options = {
        ...config.options,
        hover: this.hover
      }
    }

    const ctx = this.$refs.chart.getContext('2d');
    new Chart(ctx, config);
  },
  methods: {
    onClick () {
      if (this.click) {
        this.click()
      }
    }
  }
}
</script>
