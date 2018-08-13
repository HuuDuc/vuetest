<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ title }}
      </p>
    </header>
    <div class="card-content">
      <p class="has-text-centered is-size-1">{{ value }}</p>
      <span class="icon">
        <i class="fas fa-home"></i>
      </span>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        {{ description }}
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    direction: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false
    },
  },
  data() {
    return {}
  }
}
</script>
