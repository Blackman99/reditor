<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div flex>
    <div i-mdi-star-four-points text-3 class="text-[#EE78A4]" />
    <div font-bold text-6 mx-2 leading-8>
      {{ title }}
    </div>
    <div i-mdi-star-four-points text-2 self-end class="text-[#EE78A4]" />
  </div>
</template>

<style lang="scss" scoped>

</style>
