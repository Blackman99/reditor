<script lang="ts" setup>
import { birthday, email, location, phone, resumeMatchedI18n } from '@/store'
</script>

<template>
  <div p-8>
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
        {{ resumeMatchedI18n.careerObjectiveTitle }}:
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
          <IconBirthday
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
          <IconLocation
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
          <IconPhone
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
          <IconEmail
            text-6
            mr-1
          />
          <editable-span v-model="email" />
        </div>
      </div>
    </div>
  </div>
</template>
