<script setup lang="ts">
import Divider from './Divider.vue'
</script>

<template>
  <div px-8 pt-16 relative z-2>
    <div font-bold text-10 relative flex gap-4>
      <IconStar class="text-primary" text-6 />
      <Name />
    </div>
    <div leading-8>
      {{ $t('careerObjective') }}{{ $t('semi') }}
      <CareerObjective />
    </div>
    <div flex flex-wrap items-center gap-4 py-4>
      <div flex items-center gap-2>
        <IconGender />
        <Gender />
        <Divider />
      </div>
      <div flex items-center gap-2>
        <IconBirthday />
        <Birthday />
        <Divider />
      </div>
      <div flex items-center gap-2>
        <IconLocation />
        <Location />
        <Divider />
      </div>
      <div flex items-center gap-2>
        <IconPhone />
        <Phone />
        <Divider />
      </div>
      <div flex items-center gap-2>
        <IconEmail />
        <Email />
      </div>
      <IconStar class="text-primary" text-3 self-end />
    </div>
  </div>
</template>
