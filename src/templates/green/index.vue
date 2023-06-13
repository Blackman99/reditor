<script setup lang="ts">
import Header from './Header.vue'
import Section from './Section.vue'
import { resumeMatchedI18n, updateResponsibility } from '@/store'
</script>

<template>
  <div>
    <Header />
    <div p-6>
      <Section :title="resumeMatchedI18n.personalAdvantageTitle">
        <ul m-0>
          <li
            v-for="ad in resumeMatchedI18n.personalAdvantages"
            :key="ad"
          >
            {{ ad }}
          </li>
        </ul>
      </Section>
      <Section
        mt-8
        :title="resumeMatchedI18n.workingExperiencesTitle"
      >
        <div pl-10>
          <div
            v-for="wo, wIdx in resumeMatchedI18n.workingExperiences"
            :key="wIdx"
            mb-4
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
                <b t-000000>{{ wo.companyName }}</b>
                <div ml-4>
                  {{ wo.jobTitle }}
                </div>
              </div>
              <div>{{ wo.start }} - {{ wo.end }}</div>
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
              <li
                v-for="re, reIdx in wo.responsibilities"
                :key="reIdx"
              >
                <editable-span
                  :model-value="re" @update:model-value="(newRe: string) => {
                    updateResponsibility(wIdx, reIdx, newRe)
                  }"
                />
              </li>
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
              <li
                v-for="ach, i in wo.achievements"
                :key="i"
              >
                {{ ach }}
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section
        :title="resumeMatchedI18n.educationExperienceTitle"
        mt-8
      >
        <div pl-10>
          <div
            v-for="edu in resumeMatchedI18n.educationExperiences"
            :key="edu.institutionName"
            mb-4
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
                <b t-000000>{{ edu.institutionName }}</b>
                <div ml-4>
                  {{ edu.major }}
                </div>
              </div>
              <div>{{ edu.start }} - {{ edu.end }}</div>
            </div>
            <ul
              m-0
              list-decimal
            >
              <li
                v-for="ach in edu.achievements"
                :key="ach"
              >
                {{ ach }}
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section
        :title="resumeMatchedI18n.galleryTitle"
        mt-8
      >
        <ul m-0>
          <li
            v-for="ga in resumeMatchedI18n.galleryItems"
            :key="ga"
          >
            {{ ga }}
          </li>
        </ul>
      </Section>
    </div>
  </div>
</template>
