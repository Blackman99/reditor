<script setup lang="ts">
import { inject } from 'vue'
import { type WeContext, weContextKey } from './WEProvider.vue'
import {
  updateEndTime, updateStartTime,
} from '@/store/working-experience'

const weContext = inject(weContextKey) as WeContext

function updateStart(next: string) {
  updateStartTime(weContext.wIdx, next)
}

function updateEnd(next: string) {
  updateEndTime(weContext.wIdx, next)
}
</script>

<template>
  <editable-span :model-value="weContext.we.start" @update:model-value="updateStart" /> - <editable-span :model-value="weContext.we.end" @update:model-value="updateEnd" />
</template>
