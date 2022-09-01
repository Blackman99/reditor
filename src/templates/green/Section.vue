<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
<template>
  <div>
    <div
      text-white
      class="title"
      leading-8
      indent-2
    >
      {{ title }}
    </div>
    <div
      border-l-1
      t-333333
      class="content"
      leading-8
      pt-4
    >
      <slot />
    </div>
  </div>
</template>
<style scoped lang="scss">
.title {
  background: linear-gradient(75deg, #007b86 100px, transparent 100px);
}
.content {
  border-color: rgba(0, 123, 134, 0.5);
}
</style>
