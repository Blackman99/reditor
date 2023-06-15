<script lang="ts" setup>
import Divider from './Divider.vue'
</script>

<template>
  <div
    bg-007b86
    text-white
    p-8
    mx--4
  >
    <div
      text-8
      leading-16
    >
      <Name />
    </div>
    <div
      text-4
      leading-8
    >
      <div>
        <span font-bold>
          {{ $t('careerObjective') }}{{ $t('semi') }}
        </span>
        <CareerObjective />
      </div>
      <div
        flex
        items-center
        mx--4
      >
        <div
          flex
          items-center
          px-4
        >
          <IconGender
            text-6
            mr-1
          />
          <Gender />
        </div>
        <Divider />
        <div
          flex
          items-center
          px-4
        >
          <IconBirthday
            text-6
            mr-1
          />
          <Birthday />
        </div>
        <Divider />
        <div
          flex
          items-center
          px-4
        >
          <IconLocation
            text-6
            mr-1
          />
          <Location />
        </div>
        <Divider />
        <div
          flex
          items-center
          px-4
        >
          <IconPhone
            text-6
            mr-1
          />
          <Phone />
        </div>
        <Divider />
        <div
          flex
          items-center
          px-4
        >
          <IconEmail
            text-6
            mr-1
          />
          <Email />
        </div>
      </div>
    </div>
  </div>
</template>
