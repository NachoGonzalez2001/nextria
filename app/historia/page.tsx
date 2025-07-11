import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HistoriaPage() {
  const timelineEvents = [
    {
      year: "2013",
      title: "Nacimiento de React",
      description: "Facebook lanza React como una biblioteca de código abierto para construir interfaces de usuario.",
    },
    {
      year: "2015",
      title: "React Native",
      description: "Facebook extiende React al desarrollo móvil con React Native.",
    },
    {
      year: "2016",
      title: "Nacimiento de Next.js",
      description: "Vercel (anteriormente ZEIT) lanza Next.js como un framework de React para producción.",
    },
    {
      year: "2018",
      title: "React Hooks",
      description:
        "Introducción de los Hooks, permitiendo usar estado y otras características de React sin escribir clases.",
    },
    {
      year: "2020",
      title: "Next.js 10",
      description:
        "Lanzamiento con mejoras significativas como análisis integrado y optimización automática de imágenes.",
    },
    {
      year: "2021",
      title: "React 18 y Next.js 12",
      description:
        "Mejoras en concurrencia y rendimiento en React 18. Next.js 12 introduce Middleware y mejoras en compilación.",
    },
    {
      year: "2023",
      title: "Next.js App Router",
      description:
        "Introducción del App Router, un nuevo paradigma de enrutamiento con soporte mejorado para React Server Components.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-foreground">
        Historia de React y Next.js
      </h1>

      <Tabs defaultValue="react" className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="react">React</TabsTrigger>
          <TabsTrigger value="nextjs">Next.js</TabsTrigger>
        </TabsList>
        <TabsContent value="react" className="p-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">El nacimiento de React</h2>
              <p className="mb-4 text-muted-foreground">
                React fue creado por Jordan Walke, un ingeniero de software en Facebook. La primera implementación de
                React fue desplegada en el News Feed de Facebook en 2011, pero no fue hasta mayo de 2013 cuando se lanzó
                como un proyecto de código abierto.
              </p>
              <p className="mb-4 text-muted-foreground">
                La motivación detrás de React fue crear una biblioteca que permitiera a los desarrolladores construir
                interfaces de usuario grandes con datos que cambian con el tiempo, de manera eficiente y sin
                complicaciones.
              </p>
              <p className="text-muted-foreground">
                El enfoque revolucionario de React fue su Virtual DOM, que optimiza las actualizaciones del DOM real,
                mejorando significativamente el rendimiento de las aplicaciones web.
              </p>
            </div>
            <div className="bg-card text-card-foreground p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Hitos importantes:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-foreground">2013:</span>
                  <span className="text-muted-foreground">Lanzamiento público de React</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-foreground">2014:</span>
                  <span className="text-muted-foreground">Introducción de React Developer Tools</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-foreground">2015:</span>
                  <span className="text-muted-foreground">Lanzamiento de React Native</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-foreground">2016:</span>
                  <span className="text-muted-foreground">Lanzamiento de Create React App</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-foreground">2018:</span>
                  <span className="text-muted-foreground">React 16.6 introduce React.memo y React.lazy</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-foreground">2019:</span>
                  <span className="text-muted-foreground">React 16.8 introduce Hooks</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-foreground">2022:</span>
                  <span className="text-muted-foreground">React 18 introduce concurrencia</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="nextjs" className="p-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">La evolución de Next.js</h2>
              <p className="mb-4 text-muted-foreground">
                Next.js fue creado por Guillermo Rauch y su equipo en Vercel (anteriormente ZEIT). La primera versión
                fue lanzada en octubre de 2016 como un framework minimalista para aplicaciones React renderizadas en el
                servidor.
              </p>
              <p className="mb-4 text-muted-foreground">
                El objetivo principal de Next.js era simplificar la creación de aplicaciones React con renderizado del
                lado del servidor (SSR), proporcionando una experiencia de desarrollo mejorada y un mejor rendimiento
                para los usuarios finales.
              </p>
              <p className="text-muted-foreground">
                A lo largo de los años, Next.js ha evolucionado para incluir características como la generación de
                sitios estáticos (SSG), rutas API, optimización automática de imágenes y, más recientemente, el App
                Router con soporte para React Server Components.
              </p>
            </div>
            <div className="bg-card text-card-foreground p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Versiones clave:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-foreground">2016:</span>
                  <span className="text-muted-foreground">Next.js 1.0 - Renderizado del lado del servidor</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-foreground">2018:</span>
                  <span className="text-muted-foreground">Next.js 7.0 - Webpack 4 y Babel 7</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-foreground">2019:</span>
                  <span className="text-muted-foreground">Next.js 9.0 - Rutas API y generación estática automática</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-foreground">2020:</span>
                  <span className="text-muted-foreground">Next.js 10.0 - Optimización de imágenes y análisis integrado</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-foreground">2021:</span>
                  <span className="text-muted-foreground">Next.js 12.0 - Middleware y compilación más rápida</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-foreground">2022:</span>
                  <span className="text-muted-foreground">Next.js 13.0 - Introducción del App Router (beta)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-foreground">2023:</span>
                  <span className="text-muted-foreground">Next.js 14.0 - Mejoras en Server Actions y Turbopack</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Línea de Tiempo</h2>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-muted text-muted-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              {event.year.slice(-2)}
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card text-card-foreground p-4 rounded shadow">
              <div className="font-bold text-foreground">{event.year}</div>
              <div className="text-lg font-semibold mt-1 text-foreground">{event.title}</div>
              <div className="text-muted-foreground">{event.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
