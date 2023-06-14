<script lang="ts" setup>
defineProps<{
  items: string[]
}>()
const emit = defineEmits<{
  (e: 'update', idx: number, next: string): void
}>()
</script>

<template>
  <ul
    list-disc
    text-gray-6
    leading-8
  >
    <li
      v-for="item, i in items"
      :key="i"
    >
      <editable-span :model-value="item" @update:model-value="(next: string) => emit('update', i, next)" />
    </li>
  </ul>
</template>
