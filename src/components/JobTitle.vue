<script setup lang="ts">
import { type WeContext, weContextKey } from './WEProvider.vue'
import { updateJobTitle } from '@/store/working-experience'

const weContext = inject<WeContext>(weContextKey)

function handleUpdate(next: string) {
  if (weContext?.wIdx === undefined)
    return
  updateJobTitle(weContext.wIdx, next)
}
</script>

<template>
  <editable-span
    :model-value="weContext?.we.jobTitle" @update:model-value="handleUpdate"
  />
</template>
