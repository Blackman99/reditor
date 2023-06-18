<template>
  <div rounded-lg px-8 py-8 mb--16 relative z-2 bg-white bg-opacity-20 class="body">
    <slot />
  </div>
</template>

<style scoped>
.body {
  backdrop-filter: blur(4px);
}
</style>
