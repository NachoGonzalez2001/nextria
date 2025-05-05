"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CounterDemo from "@/components/demos/counter-demo"
import TodoDemo from "@/components/demos/todo-demo"
import ThemeDemo from "@/components/demos/theme-demo"
import FetchDemo from "@/components/demos/fetch-demo"
import AnimationDemo from "@/components/demos/animation-demo"

export default function DemosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-foreground">
        Demos de React con Next.js
      </h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-muted-foreground">
        Explora estos ejemplos interactivos para ver cómo React y Next.js funcionan juntos para crear experiencias de
        usuario dinámicas y eficientes.
      </p>

      <Tabs defaultValue="state" className="mb-12">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
          <TabsTrigger value="state">Estado</TabsTrigger>
          <TabsTrigger value="todo">Todo App</TabsTrigger>
          <TabsTrigger value="theme">Tema</TabsTrigger>
          <TabsTrigger value="fetch">Fetch API</TabsTrigger>
          <TabsTrigger value="animation">Animación</TabsTrigger>
        </TabsList>

        <TabsContent value="state" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>Manejo de Estado</CardTitle>
              <CardDescription>Ejemplo básico de cómo React maneja el estado con el hook useState</CardDescription>
            </CardHeader>
            <CardContent>
              <CounterDemo />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="todo" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>Aplicación de Tareas</CardTitle>
              <CardDescription>
                Una aplicación simple de tareas que demuestra el manejo de listas y estado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TodoDemo />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="theme" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>Cambio de Tema</CardTitle>
              <CardDescription>Demostración de cómo implementar un cambio de tema claro/oscuro</CardDescription>
            </CardHeader>
            <CardContent>
              <ThemeDemo />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fetch" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>Fetch de Datos</CardTitle>
              <CardDescription>Ejemplo de cómo obtener datos de una API externa</CardDescription>
            </CardHeader>
            <CardContent>
              <FetchDemo />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="animation" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>Animaciones</CardTitle>
              <CardDescription>Ejemplo de animaciones simples con React</CardDescription>
            </CardHeader>
            <CardContent>
              <AnimationDemo />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Componentes en React</CardTitle>
            <CardDescription>Los componentes son los bloques de construcción fundamentales en React</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted text-muted-foreground p-4 rounded-md mb-4">
              <pre className="text-sm overflow-x-auto">
                {`function Greeting({ name }) {
  return <h1>Hola, {name}!</h1>;
}

// Uso del componente
<Greeting name="Usuario" />`}
              </pre>
            </div>
            <p className="text-sm text-muted-foreground">
              Los componentes permiten dividir la UI en piezas independientes y reutilizables. Pueden recibir datos a
              través de props y mantener su propio estado interno.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hooks en React</CardTitle>
            <CardDescription>
              Los Hooks permiten usar características de React en componentes funcionales
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted text-muted-foreground p-4 rounded-md mb-4">
              <pre className="text-sm overflow-x-auto">
                {`import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Hiciste clic \${count} veces\`;
  }, [count]);

  return (
    <div>
      <p>Hiciste clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Haz clic
      </button>
    </div>
  );
}`}
              </pre>
            </div>
            <p className="text-sm text-muted-foreground">
              Los Hooks más comunes son useState para manejar estado y useEffect para efectos secundarios. También
              existen useContext, useReducer, useCallback, useMemo, entre otros.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Características de Next.js</CardTitle>
          <CardDescription>Next.js extiende React con características adicionales para desarrollo web</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-border bg-card text-card-foreground rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-foreground">Enrutamiento basado en archivos</h3>
              <p className="text-sm text-muted-foreground">
                Next.js crea rutas automáticamente basadas en la estructura de archivos en el directorio app/ o pages/.
              </p>
            </div>
            <div className="border border-border bg-card text-card-foreground rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-foreground">Renderizado híbrido</h3>
              <p className="text-sm text-muted-foreground">
                Soporta SSR, SSG, ISR y CSR.
              </p>
            </div>
            <div className="border border-border bg-card text-card-foreground rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-foreground">API Routes</h3>
              <p className="text-sm text-muted-foreground">
                Permite crear endpoints de API dentro de tu aplicación Next.js.
              </p>
            </div>
            <div className="border border-border bg-card text-card-foreground rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-foreground">Optimización de imágenes</h3>
              <p className="text-sm text-muted-foreground">
                El componente Image optimiza automáticamente las imágenes.
              </p>
            </div>
            <div className="border border-border bg-card text-card-foreground rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-foreground">Server Components</h3>
              <p className="text-sm text-muted-foreground">
                Permiten renderizar componentes en el servidor, reduciendo el JavaScript.
              </p>
            </div>
            <div className="border border-border bg-card text-card-foreground rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-foreground">Server Actions</h3>
              <p className="text-sm text-muted-foreground">
                Ejecutan funciones del servidor desde el cliente de forma segura.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
