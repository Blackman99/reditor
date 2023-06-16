type I18n = 'en' | 'zh-CN'
type ThemeConfigBase<T> = {
  [key in I18n]: T
}
type Templates = 'timeline' | 'simple' | 'shadow'
interface Profile {
  name: string
  careerObjective: string
  gender: string
  birthday: string
  location: string
  phone: string
  email: string
}

type ProfileKeys = keyof Profile

interface GreenThemeConfig {
  sectionTitleWidth: string
}

interface ShadowConfig {
  sectionTitleWidth: string
}

interface ResumeItem {
  profile: Profile
  personalAdvantages: string[]
  personalAdvantageTitle: string
  workingExperiences: WorkingExperience[]
  responsibilitiesTitle: string
  achievementsTitle: string
  footer: string
  galleryTitle: string
  galleryItems: string[]
  educationExperiences: EducationExperience[]
  educationExperienceTitle: string
  themeConfig: {
    simple?: GreenThemeConfig
    timeline?: {},
    shadow?: ShadowConfig
  }
}

interface WorkingExperience {
  companyName: string
  jobTitle: string
  start: string
  end: string
  responsibilities: string[]
  achievements: string[]
}

interface EducationExperience {
  institutionName: string
  start: string
  end: string
  major: string
  achievements: string[]
}

type Resume = {
  [key in I18n]: ResumeItem
}
