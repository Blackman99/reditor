<script lang="ts" setup>
import HeaderInfo from './HeaderInfo.vue'
import SectionTitle from './SectionTitle.vue'
import TimelineList from './TimelineList.vue'

import WorkingExperiences from '@/components/WorkingExperiences.vue'
import Responsibilities from '@/components/Responsibilities.vue'
import ResponsibilityItem from '@/components/ResponsibilityItem.vue'
import Achievements from '@/components/Achievements.vue'
import AchievementItem from '@/components/AchievementItem.vue'
import Educations from '@/components/Educations.vue'
import EduAchievements from '@/components/EduAchievements.vue'
import EduAchievementItem from '@/components/EduAchievementItem.vue'
import Galleries from '@/components/Galleries.vue'
import GalleryItem from '@/components/GalleryItem.vue'
</script>

<template>
  <div p-4>
    <HeaderInfo />
    <!-- Personal Advantages -->
    <SectionTitle
      :title="$t('personalAdvantages')"
      mt-8
    >
      <template #icon>
        <IconPerson />
      </template>
    </SectionTitle>
    <ul
      list-disc
      text-gray-6
      leading-8
    >
      <Advantages>
        <li>
          <AdvantagesItem />
        </li>
      </Advantages>
    </ul>
    <!-- Working Experiences -->
    <SectionTitle :title="$t('workingExperiences')">
      <template #icon>
        <IconBriefcase />
      </template>
    </SectionTitle>
    <TimelineList
      :list-component="WorkingExperiences"
    >
      <template #title>
        <CompanyName />
      </template>
      <template #sub-title>
        <JobTitle />
      </template>
      <template #append>
        <WorkingDuration />
      </template>
      <div font-bold text-3 mt-2>
        {{ $t('responsibilities') }}
      </div>
      <List :list-component="Responsibilities" :item-component="ResponsibilityItem" />
      <div font-bold text-3>
        {{ $t('achievements') }}
      </div>
      <List :list-component="Achievements" :item-component="AchievementItem" />
    </TimelineList>
    <SectionTitle :title="$t('educationExperiences')">
      <template #icon>
        <IconEducation />
      </template>
    </SectionTitle>
    <TimelineList :list-component="Educations">
      <template #title>
        <InstitutionName />
      </template>
      <template #sub-title>
        <Major />
      </template>
      <template #append>
        <EducationDuration />
      </template>
      <List :list-component="EduAchievements" :item-component="EduAchievementItem" />
    </TimelineList>
    <!-- Gallery -->
    <SectionTitle :title="$t('gallery')">
      <template #icon>
        <IconGallery />
      </template>
    </SectionTitle>
    <List :list-component="Galleries" :item-component="GalleryItem" />
  </div>
</template>
