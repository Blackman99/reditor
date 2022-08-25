interface Profile {
  name: string
  careerObjective: string
  gender: string
  birthday: string
  location: string
  phone: string
  email: string
}

type I18n = '/' | 'zh-CN'

interface ResumeItem {
  careerObjectiveTitle: string
  profile: Profile
  personalAdvantages: string[]
  personalAdvantageTitle: string
  workingExperiences: WorkingExperience[]
  workingExperiencesTitle: string
  responsibilitiesTitle: string
  achievementsTitle: string
  footer: string
  galleryTitle: string
  galleryItems: string[]
  educationExperiences: EducationExperience[]
  educationExperienceTitle: string
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
