<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div flex h-10>
    <div class="text-primary">
      <IconStar />
    </div>
    <div font-bold text-6 mx-3 leading-8 h-8>
      {{ title }}
    </div>
    <div text-2 self-end class="text-primary">
      <IconStar />
    </div>
  </div>
</template>
