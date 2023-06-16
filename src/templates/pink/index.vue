<script setup lang="ts">
import Title from './Title.vue'
import Header from './Header.vue'
</script>

<template>
  <div class="text-[#030301]">
    <Header />
    <div rounded-lg bg-white bg-opacity-80 px-12 py-8 mb--16 filter-drop-shadow>
      <Title :title="$t('personalAdvantages')" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
