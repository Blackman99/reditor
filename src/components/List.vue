<script lang="ts" setup>
import type { Component } from 'vue'

defineProps<{
  listComponent: Component
  itemComponent?: Component
}>()
</script>

<template>
  <ul
    list-disc
    text-gray-6
    leading-8
  >
    <component :is="listComponent">
      <li>
        <slot>
          <component :is="itemComponent" />
        </slot>
      </li>
    </component>
  </ul>
</template>
