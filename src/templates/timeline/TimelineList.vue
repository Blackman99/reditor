<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  listComponent: Component
}>()

defineEmits<{
  (e: 'update-title', idx: number, next: string): void
  (e: 'update-subtitle', idx: number, next: string): void
  (e: 'update-append', idx: number, next: string): void
}>()
</script>

<template>
  <ul class="experience-list">
    <component :is="listComponent">
      <li
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
              <slot name="title" />
            </div>

            <div
              ml-4
              text-gray-6
            >
              <slot name="sub-title" />
            </div>
          </div>
          <div
            text-gray-4
            text-3
          >
            <slot name="append" />
          </div>
        </div>
        <slot />
      </li>
    </component>
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
  background-color: var(--q-primary);
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
