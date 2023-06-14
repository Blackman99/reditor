<script lang="ts" setup>
import { birthday, careerObjective, email, gender, location, name, phone, resumeMatchedI18n } from '@/store'
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
      <editable-span v-model="name" />
    </div>
    <div
      text-4
      leading-8
    >
      <div>
        {{ resumeMatchedI18n.careerObjectiveTitle }}:
        <editable-span v-model="careerObjective" />
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
          <editable-span v-model="gender" />
        </div>
        <div
          h-3
          border-r-1
          border-gray-3
        />
        <div
          flex
          items-center
          px-4
        >
          <Birthday
            text-6
            mr-1
          />
          <editable-span v-model="birthday" />
        </div>
        <div
          h-3
          border-r-1
          border-gray-3
        />
        <div
          flex
          items-center
          px-4
        >
          <Location
            text-6
            mr-1
          />
          <editable-span v-model="location" />
        </div>
        <div
          h-3
          border-r-1
          border-gray-3
        />
        <div
          flex
          items-center
          px-4
        >
          <Phone
            text-6
            mr-1
          />
          <editable-span v-model="phone" />
        </div>
        <div
          h-3
          border-r-1
          border-gray-3
        />
        <div
          flex
          items-center
          px-4
        >
          <Email
            text-6
            mr-1
          />
          <editable-span v-model="email" />
        </div>
      </div>
    </div>
  </div>
</template>
