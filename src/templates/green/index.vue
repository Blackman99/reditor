<script setup lang="ts">
import Header from './Header.vue'
import Section from './Section.vue'
import WorkingExperiences from '@/components/WorkingExperiences.vue'
import CompanyName from '@/components/CompanyName.vue'
import JobTitle from '@/components/JobTitle.vue'
import Responsibilities from '@/components/Responsibilities.vue'
import Achievements from '@/components/Achievements.vue'
import AchievementItem from '@/components/AchievementItem.vue'
import Educations from '@/components/Educations.vue'
import InstitutionName from '@/components/InstitutionName.vue'
import Major from '@/components/Major.vue'
import EducationDuration from '@/components/EducationDuration.vue'
import EduAchievements from '@/components/EduAchievements.vue'
import EduAchievementItem from '@/components/EduAchievementItem.vue'
import {
  resumeMatchedI18n, updateGallery,
} from '@/store'
import { createMenus as createGalleryMenus } from '@/store/gallery'
import WorkingDuration from '@/components/WorkingDuration.vue'
import ResponsibilityItem from '@/components/ResponsibilityItem.vue'
import Advantages from '@/components/Advantages.vue'
import AdvantagesItem from '@/components/AdvantagesItem.vue'
</script>

<template>
  <div>
    <Header />
    <div p-6>
      <Section :title="resumeMatchedI18n.personalAdvantageTitle">
        <ul m-0>
          <Advantages>
            <li>
              <AdvantagesItem />
            </li>
          </Advantages>
        </ul>
      </Section>
      <Section
        mt-8
        :title="resumeMatchedI18n.workingExperiencesTitle"
      >
        <div pl-10>
          <WorkingExperiences>
            <div
              flex
              justify-between
              items-center
            >
              <div
                flex
                items-center
              >
                <b t-000000>
                  <CompanyName />
                </b>
                <div ml-4>
                  <JobTitle />
                </div>
              </div>
              <div>
                <WorkingDuration />
              </div>
            </div>
            <div>
              <b>
                {{ resumeMatchedI18n.responsibilitiesTitle }}
              </b>
            </div>
            <ul
              m-0
              list-decimal
            >
              <Responsibilities>
                <li>
                  <ResponsibilityItem />
                </li>
              </Responsibilities>
            </ul>
            <div>
              <b>
                {{ resumeMatchedI18n.achievementsTitle }}
              </b>
            </div>
            <ul
              m-0
              list-decimal
            >
              <Achievements>
                <li>
                  <AchievementItem />
                </li>
              </Achievements>
            </ul>
          </WorkingExperiences>
        </div>
      </Section>
      <Section
        :title="resumeMatchedI18n.educationExperienceTitle"
        mt-8
      >
        <div pl-10>
          <Educations>
            <div
              flex
              justify-between
              items-center
            >
              <div
                flex
                items-center
              >
                <b t-000000>
                  <InstitutionName />
                </b>
                <div ml-4>
                  <Major />
                </div>
              </div>
              <div>
                <EducationDuration />
              </div>
            </div>
            <ul
              m-0
              list-decimal
            >
              <EduAchievements>
                <li>
                  <EduAchievementItem />
                </li>
              </EduAchievements>
            </ul>
          </Educations>
        </div>
      </Section>
      <Section
        :title="resumeMatchedI18n.galleryTitle"
        mt-8
      >
        <ul m-0>
          <li
            v-for="(ga, gaIdx) in resumeMatchedI18n.galleryItems"
            :key="gaIdx"
          >
            <Operable :menus="createGalleryMenus(gaIdx)">
              <editable-span :model-value="ga" @update:model-value="(newGa: string) => updateGallery(gaIdx, newGa)" />
            </Operable>
          </li>
        </ul>
      </Section>
    </div>
  </div>
</template>
