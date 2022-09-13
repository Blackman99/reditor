<script lang="ts" setup>
import { resumeMatchedI18n } from '../../i18n'
import Gender from '@/icons/Gender.vue'
import Birthday from '@/icons/Birthday.vue'
import Location from '@/icons/Location.vue'
import Phone from '@/icons/Phone.vue'
import Email from '@/icons/Email.vue'
</script>
<template>
  <div p-8>
    <div
      text-8
      leading-16
    >
      {{ resumeMatchedI18n.profile.name }}
    </div>
    <div
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
          <Gender
            text-6
            mr-1
          />
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
          <Birthday
            text-6
            mr-1
          />
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
          <Location
            text-6
            mr-1
          />
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
          <Phone
            text-6
            mr-1
          />
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
          <Email
            text-6
            mr-1
          />
          {{ resumeMatchedI18n.profile.email }}
        </div>
      </div>
    </div>
  </div>
</template>
