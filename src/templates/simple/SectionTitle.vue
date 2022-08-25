<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <div
    flex
    items-center
  >
    <div
      text-blue-4
      text-6
    >
      <slot name="icon" />
    </div>
    <div
      mx-4
      font-bold
      text-5
    >
      {{ title }}
    </div>
    <div
      h-1px
      bg-blue-2
      flex-grow
    ></div>
  </div>
</template>
