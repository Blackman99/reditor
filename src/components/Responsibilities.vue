<script setup lang="ts">
import { type WeContext, weContextKey } from './WEProvider.vue'
import ResponsibilityProvider from './ResponsibilityProvider.vue'
import { createMenus } from '@/store/working-experience/responsibility'

const weContext = inject(weContextKey) as WeContext
</script>

<template>
  <Operable
    v-for="re, reIdx in weContext.we.responsibilities"
    :key="reIdx" :menus="createMenus(weContext.wIdx, reIdx)"
  >
    <ResponsibilityProvider :re-idx="reIdx" :re="re">
      <slot />
    </ResponsibilityProvider>
  </Operable>
</template>
