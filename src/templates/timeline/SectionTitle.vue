<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <div
    flex
    items-center
    class="section-title"
  >
    <div
      class="text-primary"
      text-6
    >
      <slot name="icon" />
    </div>
    <div
      ml-2
      mr-4
      font-bold
      text-5
    >
      {{ title }}
    </div>
    <div
      h-1px
      bg-blue-2
      flex-grow
    />
  </div>
</template>
