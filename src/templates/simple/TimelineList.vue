<script setup lang="ts">
import List from './List.vue'
defineProps<{
  items: {
    title: string
    subtitle: string
    append: string
    contents: {
      title?: string
      items: string[]
    }[]
  }[]
}>()
</script>
<template>
  <ul class="experience-list">
    <li
      v-for="({ title, subtitle, append, contents }, i) in items"
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
      <template v-for="con in contents">
        <div
          mt-4
          mb-2
        >
          {{ con.title }}
        </div>
        <List :items="con.items" />
      </template>
    </li>
  </ul>
</template>
