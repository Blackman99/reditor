<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  items: {
    title: string
    subtitle: string
    append: string
    content: Component
  }[]
}>()
</script>
<template>
  <ul class="experience-list">
    <li
      v-for="({ title, subtitle, append, content }, i) in items"
      :key="title"
      class="experience-item"
    >
      <div
        flex
        justify-between
        items-center
      >
        <div
          flex
          items-center
        >
          <div font-bold>{{ title }}</div>

          <div
            ml-4
            text-gray-6
          >
            {{ subtitle }}
          </div>
        </div>
        <div
          text-gray-4
          text-3
        >
          {{ append }}
        </div>
      </div>
      {{ content }}
    </li>
  </ul>
</template>
