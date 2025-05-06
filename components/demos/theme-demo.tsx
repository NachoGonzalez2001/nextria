"use client"

import { useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ThemeDemo() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`w-full p-6 rounded-lg transition-colors ${
          theme === "dark" ? "bg-slate-800 text-white" : "bg-white text-slate-800 border"
        }`}
      >
        <h3 className="text-xl font-bold mb-2">Tema {theme === "light" ? "Claro" : "Oscuro"}</h3>
        <p className="mb-4">Este es un ejemplo de cómo cambiar entre temas claro y oscuro en React.</p>
        <Button
          onClick={toggleTheme}
          variant={theme === "dark" ? "outline" : "default"}
          className={theme === "dark" ? "border-white text-white hover:text-slate-800" : ""}
        >
          {theme === "light" ? (
            <>
              <Moon className="h-4 w-4 mr-2" />
              Cambiar a Oscuro
            </>
          ) : (
            <>
              <Sun className="h-4 w-4 mr-2" />
              Cambiar a Claro
            </>
          )}
        </Button>
      </div>

      <Card className="w-full mt-4 p-4">
        <pre className="text-sm overflow-auto">
          {`// Código simplificado
import { useState } from 'react'

function ThemeToggle() {
  const [theme, setTheme] = useState('light')
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  
  return (
    <div className={\`theme-\${theme}\`}>
      <h3>Tema {theme}</h3>
      <button onClick={toggleTheme}>
        Cambiar a {theme === 'light' ? 'Oscuro' : 'Claro'}
      </button>
    </div>
  )
}`}
        </pre>
      </Card>
    </div>
  )
}
