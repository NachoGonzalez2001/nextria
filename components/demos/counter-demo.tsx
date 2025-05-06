"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CounterDemo() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Contador: {count}</h3>
        <p className="text-sm text-slate-500 mb-4">
          Este componente utiliza el hook useState para mantener y actualizar el estado del contador.
        </p>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" onClick={() => setCount(count - 1)} disabled={count <= 0}>
          Decrementar
        </Button>
        <Button onClick={() => setCount(count + 1)}>Incrementar</Button>
      </div>

      <Button variant="ghost" onClick={() => setCount(0)} className="mt-2" disabled={count === 0}>
        Reiniciar
      </Button>

      <Card className="w-full mt-4 p-4">
        <pre className="text-sm overflow-auto">
          {`// Código del componente
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>Contador: {count}</h3>
      <button onClick={() => setCount(count - 1)}>
        Decrementar
      </button>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
      <button onClick={() => setCount(0)}>
        Reiniciar
      </button>
    </div>
  )
}`}
        </pre>
      </Card>
    </div>
  )
}
