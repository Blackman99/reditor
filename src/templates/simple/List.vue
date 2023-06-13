<script lang="ts" setup>
defineProps<{
  items: string[]
}>()
</script>

<template>
  <ul
    list-disc
    text-gray-6
    leading-8
  >
    <li
      v-for="item in items"
      :key="item"
    >
      {{ item }}
    </li>
  </ul>
</template>
