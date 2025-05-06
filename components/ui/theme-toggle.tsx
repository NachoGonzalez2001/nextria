'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Toggle } from './toggle'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <Toggle
      pressed={isDark}
      onPressedChange={(value) => setTheme(value ? 'dark' : 'light')}
      variant="outline"
      size="sm"
      aria-label="Cambiar tema"
    >
      {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-600" />}
      <span className="sr-only">Cambiar tema</span>
    </Toggle>
  )
}
