<script lang="ts">
export const key = Symbol('addable-hovering')
export interface Item {
  title: string
  items?: Item[]
  action: () => void
}
</script>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  menus: Array<Item>
}>()

defineEmits(['add'])
const selected = ref(false)
</script>

<template>
  <div
    class="wrapper"
  >
    <slot />

    <q-menu
      touch-position
      context-menu
      @before-show="selected = true"
      @before-hide="selected = false"
    >
      <q-list dense style="min-width: 100px">
        <q-item v-for="item, i in menus" :key="i" v-close-popup clickable @click="item.action">
          <q-item-section>
            {{ item.title }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>

    <div v-if="selected" class="focus-helper" />
  </div>
</template>

<style scoped lang="scss">
.add {
  display: none;
}
.wrapper {
  --uno: 'relative b-1 b-solid b-transparent hover:b-gray rounded';
}
.focus-helper {
  --uno: 'b-2 b-solid rounded b-green-5 absolute top-[-2px] right-[-2px] bottom-[-2px] left-[-2px]';
}
</style>
