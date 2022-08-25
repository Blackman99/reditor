<script lang="ts" setup>
import { resumeMatchedI18n } from '../../i18n'
import HeaderInfo from './HeaderInfo.vue'
import SectionTitle from './SectionTitle.vue'
import List from './List.vue'
</script>
<template>
  <div
    mx-auto
    max-w-4xl
    font-sans
    id="resume-container"
  >
    <HeaderInfo />
    <!-- Personal Advantages -->
    <SectionTitle
      :title="resumeMatchedI18n.personalAdvantageTitle"
      mt-8
    >
      <template #icon>
        <div i-material-symbols-person></div>
      </template>
    </SectionTitle>
    <List :items="resumeMatchedI18n.personalAdvantages" />
    <!-- Working Experiences -->
    <SectionTitle :title="resumeMatchedI18n.workingExperiencesTitle">
      <template #icon>
        <div i-uis-briefcase></div>
      </template>
    </SectionTitle>
    <ul class="experience-list">
      <li
        v-for="{
          companyName,
          jobTitle,
          start,
          end,
          responsibilities,
          achievements,
        } in resumeMatchedI18n.workingExperiences"
        :key="companyName"
        class="experience-item"
      >
        <div
          flex
          justify-between
          items-center
        >
          <div
            flex
            items-center
          >
            <div font-bold>{{ companyName }}</div>

            <div
              ml-4
              text-gray-6
            >
              {{ jobTitle }}
            </div>
          </div>
          <div
            text-gray-4
            text-3
          >
            {{ start }} - {{ end }}
          </div>
        </div>
        <div
          mt-4
          mb-2
        >
          {{ resumeMatchedI18n.responsibilitiesTitle }}
        </div>
        <List :items="responsibilities" />
        <div
          mt-4
          mb-2
        >
          {{ resumeMatchedI18n.achievementsTitle }}
        </div>
        <List :items="achievements" />
      </li>
    </ul>
    <SectionTitle :title="resumeMatchedI18n.educationExperienceTitle">
      <template #icon>
        <div i-zondicons-education></div>
      </template>
    </SectionTitle>
    <!-- Gallery -->
    <SectionTitle :title="resumeMatchedI18n.galleryTitle">
      <template #icon>
        <div i-dashicons-format-gallery></div>
      </template>
    </SectionTitle>
    <List :items="resumeMatchedI18n.galleryItems" />
    <div
      justify-center
      flex
      items-center
      my-10
      text-gray-4
    >
      {{ resumeMatchedI18n.footer }}
      <div
        i-fa6-regular-face-smile-wink
        ml-2
        text-6
      ></div>
    </div>
  </div>
</template>
