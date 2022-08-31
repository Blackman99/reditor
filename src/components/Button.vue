<script lang="ts" setup>
defineProps<{
  label?: string
}>()
</script>
<template>
  <button>
    <slot name="prefix" />
  </button>
</template>
