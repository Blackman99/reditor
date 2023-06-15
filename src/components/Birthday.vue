<script setup lang="ts">
import { birthday } from '@/store'
</script>

<template>
  <editable-span v-model="birthday" />
</template>
