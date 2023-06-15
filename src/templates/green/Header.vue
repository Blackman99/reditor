<script lang="ts" setup>
import Divider from './Divider.vue'
import { birthday, careerObjective, email, gender, location, name, phone, resumeMatchedI18n } from '@/store'
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
          <IconGender
            text-6
            mr-1
          />
          <editable-span v-model="gender" />
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
          <editable-span v-model="birthday" />
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
          <editable-span v-model="location" />
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
          <editable-span v-model="phone" />
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
          <editable-span v-model="email" />
        </div>
      </div>
    </div>
  </div>
</template>
