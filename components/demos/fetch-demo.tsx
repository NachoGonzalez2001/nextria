"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

type Post = {
  id: number
  title: string
  body: string
}

export default function FetchDemo() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")

      if (!response.ok) {
        throw new Error("Error al obtener los datos")
      }

      const data = await response.json()
      setPosts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Datos de API</h3>
        <Button variant="outline" size="sm" onClick={fetchPosts} disabled={loading}>
          Recargar
        </Button>
      </div>

      {error && <div className="p-4 bg-red-50 text-red-500 rounded-md">{error}</div>}

      <div className="space-y-4">
        {loading
          ? Array(3)
              .fill(0)
              .map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <Skeleton className="h-4 w-3/4 mb-2" />
                    <Skeleton className="h-3 w-full mb-1" />
                    <Skeleton className="h-3 w-full mb-1" />
                    <Skeleton className="h-3 w-2/3" />
                  </CardContent>
                </Card>
              ))
          : posts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">{post.title}</h4>
                  <p className="text-sm text-slate-600">{post.body}</p>
                </CardContent>
              </Card>
            ))}
      </div>

      <Card className="w-full mt-4 p-4 bg-slate-50">
        <pre className="text-sm overflow-auto">
          {`// Código simplificado
import { useState, useEffect } from 'react'

function FetchExample() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.example.com/data')
        if (!response.ok) throw new Error('Error fetching data')
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Renderizado...
}`}
        </pre>
      </Card>
    </div>
  )
}
