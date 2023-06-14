<script setup lang="ts">
import WEProvider from './WEProvider.vue'
import {
  resumeMatchedI18n,
} from '@/store'
import {
  createMenus as createWorkingExperienceMenus,
} from '@/store/working-experience'
</script>

<template>
  <Operable
    v-for="wo, wIdx in resumeMatchedI18n.workingExperiences"
    :key="wIdx"
    mb-4
    :menus="createWorkingExperienceMenus(wIdx)"
  >
    <WEProvider :we="wo" :w-idx="wIdx">
      <slot />
    </WEProvider>
  </Operable>
</template>
