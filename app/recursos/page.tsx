import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RecursosPage() {
  const documentacion = [
    {
      titulo: "Documentación oficial de React",
      descripcion: "Guías, referencia de API y tutoriales oficiales de React",
      url: "https://react.dev",
      tipo: "Oficial",
    },
    {
      titulo: "Documentación oficial de Next.js",
      descripcion: "Guías completas, ejemplos y referencia de API de Next.js",
      url: "https://nextjs.org/docs",
      tipo: "Oficial",
    },
    {
      titulo: "React TypeScript Cheatsheet",
      descripcion: "Guía de referencia para usar TypeScript con React",
      url: "https://react-typescript-cheatsheet.netlify.app/",
      tipo: "Comunidad",
    },
    {
      titulo: "Next.js GitHub Repository",
      descripcion: "Código fuente, issues y discusiones sobre Next.js",
      url: "https://github.com/vercel/next.js",
      tipo: "Oficial",
    },
    {
      titulo: "React Patterns",
      descripcion: "Patrones comunes y mejores prácticas para React",
      url: "https://reactpatterns.com/",
      tipo: "Comunidad",
    },
    {
      titulo: "Next.js Examples",
      descripcion: "Ejemplos oficiales de diferentes características y casos de uso de Next.js",
      url: "https://github.com/vercel/next.js/tree/canary/examples",
      tipo: "Oficial",
    },
  ]

  const tutoriales = [
    {
      titulo: "Next.js App Router Course",
      descripcion: "Curso oficial de Next.js sobre el App Router",
      url: "https://nextjs.org/learn",
      tipo: "Curso",
      nivel: "Principiante a Intermedio",
    },
    {
      titulo: "React Tutorial",
      descripcion: "Tutorial oficial para aprender los fundamentos de React",
      url: "https://react.dev/learn",
      tipo: "Tutorial",
      nivel: "Principiante",
    },
    {
      titulo: "Full Stack Open",
      descripcion: "Curso gratuito sobre desarrollo web moderno con React, Node.js, Express y más",
      url: "https://fullstackopen.com/",
      tipo: "Curso",
      nivel: "Intermedio",
    },
    {
      titulo: "Epic React by Kent C. Dodds",
      descripcion: "Serie de talleres para dominar React",
      url: "https://epicreact.dev/",
      tipo: "Curso",
      nivel: "Intermedio a Avanzado",
    },
    {
      titulo: "Next.js Conf Videos",
      descripcion: "Charlas y presentaciones de las conferencias de Next.js",
      url: "https://nextjs.org/conf",
      tipo: "Videos",
      nivel: "Varios",
    },
    {
      titulo: "React Hooks Course",
      descripcion: "Curso completo sobre React Hooks",
      url: "https://ui.dev/react-hooks",
      tipo: "Curso",
      nivel: "Intermedio",
    },
  ]

  const herramientas = [
    {
      titulo: "Create Next App",
      descripcion: "CLI para crear aplicaciones Next.js con un solo comando",
      url: "https://nextjs.org/docs/api-reference/create-next-app",
      categoria: "CLI",
    },
    {
      titulo: "React DevTools",
      descripcion: "Extensión de navegador para depurar aplicaciones React",
      url: "https://react.dev/learn/react-developer-tools",
      categoria: "Depuración",
    },
    {
      titulo: "Next.js Snippets",
      descripcion: "Extensión de VS Code con snippets para Next.js",
      url: "https://marketplace.visualstudio.com/items?itemName=PulkitGangwar.nextjs-snippets",
      categoria: "Editor",
    },
    {
      titulo: "Vercel",
      descripcion: "Plataforma para desplegar aplicaciones Next.js",
      url: "https://vercel.com",
      categoria: "Despliegue",
    },
    {
      titulo: "Storybook",
      descripcion: "Herramienta para desarrollar y documentar componentes UI",
      url: "https://storybook.js.org/",
      categoria: "UI",
    },
    {
      titulo: "React Query",
      descripcion: "Biblioteca para gestionar el estado del servidor en React",
      url: "https://tanstack.com/query/latest",
      categoria: "Estado",
    },
    {
      titulo: "Zustand",
      descripcion: "Biblioteca minimalista para gestión de estado en React",
      url: "https://github.com/pmndrs/zustand",
      categoria: "Estado",
    },
    {
      titulo: "Tailwind CSS",
      descripcion: "Framework CSS utility-first popular con React y Next.js",
      url: "https://tailwindcss.com/",
      categoria: "CSS",
    },
  ]

  const comunidad = [
    {
      titulo: "React Subreddit",
      descripcion: "Comunidad de Reddit para desarrolladores React",
      url: "https://www.reddit.com/r/reactjs/",
      tipo: "Foro",
    },
    {
      titulo: "Next.js Discord",
      descripcion: "Servidor oficial de Discord para Next.js",
      url: "https://discord.gg/nextjs",
      tipo: "Chat",
    },
    {
      titulo: "DEV.to React",
      descripcion: "Artículos y tutoriales sobre React en DEV.to",
      url: "https://dev.to/t/react",
      tipo: "Blog",
    },
    {
      titulo: "Stack Overflow - React",
      descripcion: "Preguntas y respuestas sobre React en Stack Overflow",
      url: "https://stackoverflow.com/questions/tagged/reactjs",
      tipo: "Q&A",
    },
    {
      titulo: "React Newsletter",
      descripcion: "Newsletter semanal con noticias y artículos sobre React",
      url: "https://reactnewsletter.com/",
      tipo: "Newsletter",
    },
    {
      titulo: "React Twitter",
      descripcion: "Cuenta oficial de Twitter de React",
      url: "https://twitter.com/reactjs",
      tipo: "Social",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Recursos para React y Next.js</h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        Una colección curada de recursos, herramientas y comunidades para ayudarte a dominar React y Next.js.
      </p>

      <Tabs defaultValue="documentacion" className="mb-12">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="documentacion">Documentación</TabsTrigger>
          <TabsTrigger value="tutoriales">Tutoriales</TabsTrigger>
          <TabsTrigger value="herramientas">Herramientas</TabsTrigger>
          <TabsTrigger value="comunidad">Comunidad</TabsTrigger>
        </TabsList>

        <TabsContent value="documentacion" className="p-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentacion.map((doc, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{doc.titulo}</CardTitle>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        doc.tipo === "Oficial" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                      }`}
                    >
                      {doc.tipo}
                    </span>
                  </div>
                  <CardDescription>{doc.descripcion}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    Visitar <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tutoriales" className="p-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutoriales.map((tutorial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{tutorial.titulo}</CardTitle>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        tutorial.nivel === "Principiante"
                          ? "bg-green-100 text-green-800"
                          : tutorial.nivel === "Intermedio"
                            ? "bg-yellow-100 text-yellow-800"
                            : tutorial.nivel === "Avanzado"
                              ? "bg-red-100 text-red-800"
                              : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {tutorial.nivel}
                    </span>
                  </div>
                  <CardDescription>{tutorial.descripcion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-slate-500">Tipo: {tutorial.tipo}</div>
                </CardContent>
                <CardFooter>
                  <Link
                    href={tutorial.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    Visitar <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="herramientas" className="p-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {herramientas.map((herramienta, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{herramienta.titulo}</CardTitle>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        herramienta.categoria === "CLI"
                          ? "bg-gray-100 text-gray-800"
                          : herramienta.categoria === "Depuración"
                            ? "bg-red-100 text-red-800"
                            : herramienta.categoria === "Editor"
                              ? "bg-blue-100 text-blue-800"
                              : herramienta.categoria === "Despliegue"
                                ? "bg-green-100 text-green-800"
                                : herramienta.categoria === "UI"
                                  ? "bg-purple-100 text-purple-800"
                                  : herramienta.categoria === "Estado"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-indigo-100 text-indigo-800"
                      }`}
                    >
                      {herramienta.categoria}
                    </span>
                  </div>
                  <CardDescription>{herramienta.descripcion}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href={herramienta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    Visitar <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="comunidad" className="p-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comunidad.map((com, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{com.titulo}</CardTitle>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        com.tipo === "Foro"
                          ? "bg-orange-100 text-orange-800"
                          : com.tipo === "Chat"
                            ? "bg-blue-100 text-blue-800"
                            : com.tipo === "Blog"
                              ? "bg-green-100 text-green-800"
                              : com.tipo === "Q&A"
                                ? "bg-yellow-100 text-yellow-800"
                                : com.tipo === "Newsletter"
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-red-100 text-red-800"
                      }`}
                    >
                      {com.tipo}
                    </span>
                  </div>
                  <CardDescription>{com.descripcion}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href={com.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    Visitar <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Libros Recomendados</CardTitle>
          <CardDescription>Lecturas esenciales para profundizar en React y Next.js</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-24 bg-slate-200 rounded flex items-center justify-center text-slate-500 text-xs">
                LIBRO
              </div>
              <div>
                <h3 className="font-semibold">React Explained</h3>
                <p className="text-sm text-slate-600 mb-1">Por Zac Gordon</p>
                <p className="text-sm">Una guía completa para principiantes sobre los fundamentos de React.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-24 bg-slate-200 rounded flex items-center justify-center text-slate-500 text-xs">
                LIBRO
              </div>
              <div>
                <h3 className="font-semibold">Learning React</h3>
                <p className="text-sm text-slate-600 mb-1">Por Alex Banks y Eve Porcello</p>
                <p className="text-sm">Un enfoque práctico para construir aplicaciones web con React.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-24 bg-slate-200 rounded flex items-center justify-center text-slate-500 text-xs">
                LIBRO
              </div>
              <div>
                <h3 className="font-semibold">Next.js in Action</h3>
                <p className="text-sm text-slate-600 mb-1">Por Adam Boduch</p>
                <p className="text-sm">Guía práctica para construir aplicaciones web con Next.js.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-24 bg-slate-200 rounded flex items-center justify-center text-slate-500 text-xs">
                LIBRO
              </div>
              <div>
                <h3 className="font-semibold">React Design Patterns and Best Practices</h3>
                <p className="text-sm text-slate-600 mb-1">Por Michele Bertoli</p>
                <p className="text-sm">Patrones de diseño y mejores prácticas para aplicaciones React.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
