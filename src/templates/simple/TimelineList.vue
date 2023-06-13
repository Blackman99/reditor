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
      v-for="({ title, subtitle, append, contents }) in items"
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
          <div font-bold>
            {{ title }}
          </div>

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
      <template v-for="con, j in contents" :key="j">
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

<style scoped>
.experience-list {
  list-style: none;
}

.experience-item {
  position: relative;
  padding-bottom: 2rem;
}

.experience-item::before {
  content: ' ';
  position: absolute;
  left: -20px;
  top: 12px;
  transform: translateY(-50%);
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #60a5fa;
}

.experience-item::after {
  content: ' ';
  position: absolute;
  top: 16px;
  left: -16px;
  bottom: -12px;
  width: 1px;
  background-color: rgba(191, 219, 254, 1);
}
</style>
