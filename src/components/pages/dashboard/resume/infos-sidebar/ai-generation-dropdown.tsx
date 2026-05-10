import { Bot } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function DashboardInfosSidebarAIGenerationDropdown() {
  return (
    <Button className="gap-2 text-xs px-2.5 py-1 h-9">
      <Bot size={20} />
      Artificial Intelligence
    </Button>
  )
}
