<script setup lang="ts">
import { name } from '@/store'
</script>

<template>
  <EditableSpan v-model="name" />
</template>
