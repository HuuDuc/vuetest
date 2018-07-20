<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Tasks</h2>

      <div class="form card">
        <header class="card-header">
          <p class="card-header-title">
            List
          </p>
        </header>
        <div class="card-content">
          <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Due Date</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-bind:key="task.id"
                v-for="(task, index) in tasks"
              >
                <td>{{ task.id }}</td>
                <td>{{ task.name }}</td>
                <td>{{ task.due_date | moment }}</td>
                <td>{{ task.created_at | moment }}</td>
                <td>
                  <a @click="remove(index, task.id)">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="form card">
        <header class="card-header">
          <p class="card-header-title">
            Add a new task
          </p>
        </header>
        <div class="card-content">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Task name"
                v-model="form.name"
                @keyup.enter="add"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Due date</label>
            <div class="control">
              <Datepicker
                v-model="form.due"
                input-class="input"
              />
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" @click="add" class="card-footer-item">Save</a>
          <a href="#" class="card-footer-item">Cancel</a>
        </footer>
      </div>

    </div>
  </section>
</template>

<script>
import { timestampToMoment } from '@/helpers/filters'
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker
  },
  data () {
    return {
      tasks: this.$store.state.tasks,
      form: {
        name: '',
        due: new Date()
      }
    }
  },
  methods: {
    add () {
      if (this.form.name && this.form.due) {
        this.$store.dispatch('addTask', this.form)
        this.form.name = ''
      }
    },
    remove (index, id) {
      this.$store.dispatch('removeTask', {index, id})
    }
  },
  filters: {
    moment: date => timestampToMoment(date)
  },
  beforeCreate() {
    this.$store.dispatch('getTasks')
  },
  beforeUpdate() {
    this.tasks = this.$store.getters.getTasks
  },
}
</script>
