"use client"

import { useState } from "react"
import { PlusCircle, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

type Todo = {
  id: number
  text: string
  completed: boolean
}

export default function TodoDemo() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Aprender React", completed: true },
    { id: 2, text: "Aprender Next.js", completed: false },
    { id: 3, text: "Construir un proyecto", completed: false },
  ])
  const [newTodo, setNewTodo] = useState("")

  const addTodo = () => {
    if (newTodo.trim() === "") return

    const todo: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    }

    setTodos([...todos, todo])
    setNewTodo("")
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Añadir nueva tarea..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <Button onClick={addTodo}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Añadir
        </Button>
      </div>

      <div className="space-y-2">
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center justify-between p-3 border rounded-md">
            <div className="flex items-center gap-2">
              <Checkbox checked={todo.completed} onCheckedChange={() => toggleTodo(todo.id)} id={`todo-${todo.id}`} />
              <label htmlFor={`todo-${todo.id}`} className={`${todo.completed ? "line-through text-slate-500" : ""}`}>
                {todo.text}
              </label>
            </div>
            <Button variant="ghost" size="icon" onClick={() => deleteTodo(todo.id)}>
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </div>
        ))}
      </div>

      <Card className="w-full mt-4 p-4 ">
        <pre className="text-sm overflow-auto">
          {`// Código simplificado
function TodoApp() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim() === '') return
    setTodos([...todos, { 
      id: Date.now(), 
      text: newTodo, 
      completed: false 
    }])
    setNewTodo('')
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed } 
        : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Renderizado...
}`}
        </pre>
      </Card>
    </div>
  )
}
