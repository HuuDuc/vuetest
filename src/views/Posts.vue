<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Posts</h2>

      <div class="form card">
        <header class="card-header">
          <p class="card-header-title">
            List
          </p>
        </header>
        <div class="card-content">
          <table class="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Summary</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-bind:key="post.id"
                v-for="(post, index) in posts"
              >
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.summary }}</td>
                <td>{{ post.created_at | moment }}</td>
                <td>
                  <a @click="show(index, post.id)">Show</a> |
                  <a @click="remove(index, post.id)">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="form card">
        <header class="card-header">
          <p class="card-header-title">
            Add a new posts
          </p>
        </header>
        <div class="card-content">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Title post"
                v-model="form.title"
                @keyup.enter="add"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Summary</label>
            <div class="control">
              <wysiwyg v-model="form.summary" />
            </div>
          </div>

          <div class="field">
            <label class="label">Content</label>
            <div class="control">
              <wysiwyg v-model="form.content" />
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" @click="add" class="card-footer-item">Save</a>
          <a href="#" @click="cancel" class="card-footer-item">Cancel</a>
        </footer>
      </div>

    </div>
  </section>
</template>

<script>

const form_init = {
  title: '',
  summary: '',
  content: '',
}

export default {
  name: 'Posts',
  data() {
    return {
      posts: this.$store.state.posts,
      form: form_init
    }
  },
  methods: {
    add () {
      if (this.form.title) {
        this.$store.dispatch('addPost', this.form)
        this.form = form_init
      }
    },
    cancel () {
      this.form = form_init
    },
    remove (index, id) {
      this.$store.dispatch('removePost', {index, id})
    },
    // show (index, id) {
    // }
  },
  beforeCreate() {
    this.$store.dispatch('getPosts')
  },
  beforeUpdate() {
    this.posts = this.$store.getters.POSTS
  },
}
</script>

<style scoped>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>
