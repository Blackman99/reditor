<script setup lang="ts">
import { inject } from 'vue'
import { type WeContext, weContextKey } from './WEProvider.vue'
import { updateCompanyName } from '@/store/working-experience'

const weContext = inject<WeContext>(weContextKey)

function handleUpdateCompanyName(next: string) {
  if (weContext?.wIdx === undefined)
    return
  updateCompanyName(weContext.wIdx, next)
}
</script>

<template>
  <editable-span :model-value="weContext?.we.companyName" @update:model-value="handleUpdateCompanyName" />
</template>
