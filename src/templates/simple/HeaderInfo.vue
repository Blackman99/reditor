<script lang="ts" setup>
import { resumeMatchedI18n } from '../../i18n'
</script>
<template>
  <div
    text-8
    leading-16
  >
    {{ resumeMatchedI18n.profile.name }}
  </div>
  <div
    text-gray-6
    text-4
    leading-8
  >
    <div>
      {{ resumeMatchedI18n.careerObjectiveTitle }}:
      {{ resumeMatchedI18n.profile.careerObjective }}
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
        <div
          i-simple-line-icons-symbol-male
          mr-1
        ></div>
        {{ resumeMatchedI18n.profile.gender }}
      </div>
      <div
        h-3
        border-r-1
        border-gray-3
      ></div>
      <div
        flex
        items-center
        px-4
      >
        <div
          i-fe-birthday-cake
          mr-1
        ></div>
        {{ resumeMatchedI18n.profile.birthday }}
      </div>
      <div
        h-3
        border-r-1
        border-gray-3
      ></div>
      <div
        flex
        items-center
        px-4
      >
        <div
          i-ic-baseline-location-on
          mr-1
        ></div>
        {{ resumeMatchedI18n.profile.location }}
      </div>
      <div
        h-3
        border-r-1
        border-gray-3
      ></div>
      <div
        flex
        items-center
        px-4
      >
        <div
          i-ic-round-phone
          mr-1
        ></div>
        {{ resumeMatchedI18n.profile.phone }}
      </div>
      <div
        h-3
        border-r-1
        border-gray-3
      ></div>
      <div
        flex
        items-center
        px-4
      >
        <div
          i-mdi-email-outline
          mr-1
        ></div>
        {{ resumeMatchedI18n.profile.email }}
      </div>
    </div>
  </div>
</template>
