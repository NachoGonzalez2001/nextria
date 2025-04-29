"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AnimationDemo() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [position, setPosition] = useState(0)

  const startAnimation = () => {
    setIsAnimating(true)
    setPosition(0)

    const animate = () => {
      setPosition((prev) => {
        if (prev >= 100) {
          setIsAnimating(false)
          return 100
        }
        return prev + 1
      })
    }

    const interval = setInterval(animate, 20)
    return () => clearInterval(interval)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="h-20 bg-slate-100 rounded-lg relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-100 ease-linear rounded-lg"
          style={{ width: `${position}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-semibold text-slate-800">{Math.round(position)}%</span>
        </div>
      </div>

      <Button onClick={startAnimation} disabled={isAnimating}>
        {isAnimating ? "Animando..." : "Iniciar Animación"}
      </Button>

      <Card className="w-full mt-4 p-4 bg-slate-50">
        <pre className="text-sm overflow-auto">
          {`// Código simplificado
import { useState, useEffect } from 'react'

function Animation() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [position, setPosition] = useState(0)
  
  const startAnimation = () => {
    setIsAnimating(true)
    setPosition(0)
  }
  
  useEffect(() => {
    if (!isAnimating) return
    
    const interval = setInterval(() => {
      setPosition(prev => {
        if (prev >= 100) {
          setIsAnimating(false)
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 20)
    
    return () => clearInterval(interval)
  }, [isAnimating])
  
  // Renderizado...
}`}
        </pre>
      </Card>
    </div>
  )
}
