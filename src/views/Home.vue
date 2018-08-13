<template>
  <section class="section">
    <div class="container">

      <div class="columns">
        <div class="column">
          <Card
            title="Population in France"
            description="Year 2016, Source: The World Bank"
            value="66,900,000"
            direction="top"
          />
        </div>
        <div class="column">
          <Card
            title="France PPA"
            description="Year 2016, Source: The World Bank"
            value="2,465,000,000"
            direction="bottom"
          />
        </div>
        <div class="column">
          <Card
            title="France Unemployment Rate"
            description="Year 2018, Source: Eurostat"
            value="9%"
            direction="bottom"
          />
        </div>
        <div class="column">
          <Card
            title="France economic position"
            description="Year 2018, Source: Eurostat"
            value="7"
            direction="bottom"
          />
        </div>
      </div>

      <div class="columns">
          <div class="column">

            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  Bar chart
                </p>
              </header>
              <div class="card-content">
                <BarChart
                  :dataset="[{
                    label: 'Dataset 1',
                    backgroundColor: '#ff6284',
                    data: arrayRandomNumber(months.length)
                  }, {
                    label: 'Dataset 2',
                    backgroundColor: '#37a1ec',
                    data: arrayRandomNumber(months.length)
                  }, {
                    label: 'Dataset 3',
                    backgroundColor: '#4ac1c0',
                    data: arrayRandomNumber(months.length)
                  }]"
                  :labels="months"
                  :responsive="true"
                  :tooltips="{
                    mode: 'index',
                    intersect: false,
                  }"
                  :hover="{
                    mode: 'nearest',
                    intersect: true
                  }"
                />
              </div>
            </div>

          </div>

          <div class="column">

            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  Chart Line
                </p>
              </header>
              <div class="card-content">
                <LineChart
                  :dataset="[{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: arrayRandomNumber(months.length),
                    fill: false,
                  }, {
                    label: 'My Second dataset',
                    fill: false,
                    backgroundColor: 'rgb(54, 162, 235)',
                    borderColor: 'rgb(54, 162, 235)',
                    data: arrayRandomNumber(months.length),
                  }]"
                  :labels="months"
                  :responsive="true"
                  :tooltips="{
                    mode: 'index',
                    intersect: false,
                  }"
                  :hover="{
                    mode: 'nearest',
                    intersect: true
                  }"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/Card.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import LineChart from '@/components/Chartjs/LineChart'
import BarChart from '@/components/Chartjs/BarChart'
import { randomNumber } from '@/helpers/helpers'

export default {
  name: 'home',
  data () {
    return {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    }
  },
  components: {
    Card,
    HelloWorld,
    LineChart,
    BarChart,
    randomNumber
  },
  methods: {
    arrayRandomNumber (length) {
      return Array.apply(null, Array(length)).map(() => randomNumber(1, 40))
    }
  }
}
</script>
