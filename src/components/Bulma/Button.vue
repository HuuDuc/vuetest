<template>
  <button
    :class="['button', color]"
    :disabled="disabled"
    @click="click"
  >
    {{ label }}
  </button>
</template>

<script>
const Button = {
  name: 'Button',
  props: {
    click: {
      type: Function,
      required: false
    },
    label: {
      type: String,
      required: true
    },
    'is-primary': {
      type: String,
      required: false
    },
    'is-link': {
      type: String,
      required: false
    },
    'is-info': {
      type: String,
      required: false
    },
    'is-success': {
      type: String,
      required: false
    },
    'is-warning': {
      type: String,
      required: false
    },
    'is-danger': {
      type: String,
      required: false
    },
  },
  data() {
    let color = '';
    switch(true) {
      case this.isPrimary !== undefined: color = 'is-primary';
        break;
      case this.isLink !== undefined: color = 'is-link';
        break;
      case this.isInfo !== undefined: color = 'is-info';
        break;
      case this.isSuccess !== undefined: color = 'is-success';
        break;
      case this.isWarning !== undefined: color = 'is-warning';
        break;
      case this.isDanger !== undefined: color = 'is-danger';
        break;
    }

    return {
      color,
      disabled: typeof this.disabled === 'string',
    }
  }
}

export default Button
</script>
