<script setup lang="ts">
import { type AdvantagesContext, adContextKey } from './AdvantagesProvider.vue'
import { updatePersonalAdvantage } from '@/store/personal-advantages'

const adContext = inject(adContextKey) as AdvantagesContext
</script>

<template>
  <editable-span :model-value="adContext.ad" @update:model-value="(newPa: string) => updatePersonalAdvantage(adContext.adIdx, newPa)" />
</template>
