<script setup lang="ts">
import AdvantagesProvider from './AdvantagesProvider.vue'
import { createMenus } from '@/store/personal-advantages'
import {
  resumeMatchedI18n,
} from '@/store'
</script>

<template>
  <Operable
    v-for="(ad, adIdx) in resumeMatchedI18n.personalAdvantages"
    :key="adIdx"
    :menus="createMenus(adIdx)"
  >
    <AdvantagesProvider v-bind="{ ad, adIdx }">
      <slot />
    </AdvantagesProvider>
  </Operable>
</template>
