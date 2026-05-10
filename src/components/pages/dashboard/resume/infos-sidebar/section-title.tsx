import type { LucideIcon } from 'lucide-react'

interface DashboardInfosSidebarSectionTitleProps {
  icon: LucideIcon
  title: string
}

export function DashboardInfosSidebarSectionTitle({
  icon: Icon,
  title,
}: DashboardInfosSidebarSectionTitleProps) {
  return (
    <div className="flex items-center gap-2">
      <Icon size={18} className="text-muted-foreground" />
      <h3 className="text-2xl font-serif font-bold">{title}</h3>
    </div>
  )
}
