<script setup lang="ts">
import { email } from '@/store'
</script>

<template>
  <editable-span v-model="email" />
</template>
