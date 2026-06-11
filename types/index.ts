export interface ExperienceProject {
  name: string
  url?: string
  bullets: string[]
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  companyBullets?: string[]
  projects?: ExperienceProject[]
}

export interface Project {
  id: string
  name: string
  company: string
  categories: string[]
  description: string
  tech: string[]
  live: boolean
  url?: string
}

export interface SkillGroup {
  label: string
  skills: string[]
}
