<template>
  <aside class="menu">
    <h1 class="title">
      <img width="50" src="../assets/logo.png" alt="Vue" /> <br/>
      {{ title }}
    </h1>
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li
        v-bind:key="item.id"
        v-for="item in menu"
      >
        <router-link
          v-bind:class="{ 'is-active': item.isActive }"
          v-bind:to="item.to"
        >
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'LeftMenu',
  props: {
    title: String
  },
  data() {
    return {
      menu: [
        {
          name: 'Home page',
          to: '/',
          isActive: this.$route.path === '/'
        },
        {
          name: 'Chart',
          to: '/chart',
          isActive: this.$route.path === '/chart'
        },
        {
          name: 'Tasks',
          to: '/tasks',
          isActive: this.$route.path === '/tasks'
        },
        {
          name: 'Posts',
          to: '/posts',
          isActive: this.$route.path === '/posts'
        }
      ],
      updateActiveUrl: to => {
        this.menu = this.menu.map(menu => {
          return {
            ...menu,
            isActive: menu.to === to.path
          }
        })
      }
    }
  },
  watch: {
    $route (to) {
      this.updateActiveUrl(to)
    }
  }
}
</script>

<style scoped>
.menu {
  min-width: 150px;
  width: 150px;
  height: 100%;
  border-right: 1px solid #eee;
}
.left-menu ul,
.menu .menu-label,
.menu .title {
  padding: 10px;
}
</style>
