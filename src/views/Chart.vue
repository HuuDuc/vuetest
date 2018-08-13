<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Chart</h2>
      <p>
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        <Button
          :click="onClick"
          label="Click me"
          is-danger
        />
      </p>
      <hr/>
      <h4 class="title is-4">Chart test</h4>

      <LineChart
        :width="400"
        :height="100"
        :dataset="[{
					label: 'My First dataset',
					backgroundColor: 'rgb(255, 99, 132)',
					borderColor: 'rgb(255, 99, 132)',
          data: [14, 42, 12, 32, 12, 23, 45],
					fill: false,
				}, {
					label: 'My Second dataset',
					fill: false,
					backgroundColor: 'rgb(54, 162, 235)',
					borderColor: 'rgb(54, 162, 235)',
          data: [42, 12, 14, 12, 45, 32, 23],
				}]"
        :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
        :responsive="true"
        :tooltips="{
					mode: 'index',
					intersect: false,
				}"
        :hover="{
					mode: 'nearest',
					intersect: true
				}"
        :click="onClick"
      />

    </div>
  </section>
</template>

<script>
import Button from '@/components/Bulma/Button'
import LineChart from '@/components/Chartjs/LineChart'

export default {
  name: "Chart",
  components: {
    Button,
    LineChart
  },
  methods: {
    onClick () {
        alert('TEST');
    }
  }
}
</script>
