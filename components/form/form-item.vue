<template>
  <div class="form-item relative">
    <label class="text-dark text-xs font-bold absolute -top-2 left-3 bg-white px-1">{{label}}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FormItem',
  props: {
    label: {type: String, default: ''}
  }
}
</script>


<style lang="scss">
.form-item {
  input,
  textarea {
    @apply border-gray-300 border-2 rounded-lg w-full h-full px-2 focus:border-accent
  }
}
</style>
