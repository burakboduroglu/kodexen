import type { LucideIcon } from 'lucide-react'

export interface Settings {
  items: MenuItem[]
}

export type MenuItem = {
  title: string
  icon?: LucideIcon
  isActive?: boolean
  items?: SubItem[]
}

export type SubItem = {
  title: string
  url: string
}
