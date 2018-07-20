<template>
  <div id="app">
    <LeftMenu title="CMS" />
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import LeftMenu from  '@/components/LeftMenu.vue'
export default {
  name: "App",
  components: {
    LeftMenu
  }
}
</script>

<style>
#app {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;

}
</style>
