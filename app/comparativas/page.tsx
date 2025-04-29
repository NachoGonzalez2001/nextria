import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ComparativasPage() {
  const comparaciones = [
    {
      categoria: "Frameworks React",
      tecnologias: [
        {
          nombre: "Next.js",
          descripcion:
            "Framework React con renderizado híbrido, enrutamiento basado en archivos y optimizaciones automáticas.",
          ventajas: [
            "Renderizado híbrido (SSR, SSG, ISR)",
            "Enrutamiento basado en archivos",
            "Optimización automática",
            "API Routes",
          ],
          desventajas: ["Mayor complejidad inicial", "Menos flexible en algunos aspectos"],
          casosDeUso: ["Aplicaciones web completas", "Sitios con necesidades de SEO", "E-commerce"],
        },
        {
          nombre: "Create React App",
          descripcion: "Configuración zero para aplicaciones React renderizadas en el cliente.",
          ventajas: ["Configuración simple", "Enfocado en SPA", "Fácil de aprender"],
          desventajas: ["Solo CSR por defecto", "Sin optimizaciones automáticas", "Sin enrutamiento integrado"],
          casosDeUso: ["Aplicaciones de una sola página", "Prototipos rápidos", "Aplicaciones sin necesidades de SEO"],
        },
        {
          nombre: "Remix",
          descripcion: "Framework React enfocado en la experiencia de desarrollo y rendimiento del usuario.",
          ventajas: ["Modelo de datos anidado", "Manejo de errores robusto", "Enfoque en UX"],
          desventajas: ["Comunidad más pequeña", "Menos integraciones disponibles"],
          casosDeUso: ["Aplicaciones web con UX avanzada", "Sitios con formularios complejos"],
        },
        {
          nombre: "Gatsby",
          descripcion: "Generador de sitios estáticos basado en React con sistema de plugins.",
          ventajas: ["Excelente para sitios estáticos", "Sistema de plugins extenso", "Integración con CMS"],
          desventajas: ["Menos adecuado para contenido dinámico", "Tiempos de build largos en sitios grandes"],
          casosDeUso: ["Blogs", "Sitios de marketing", "Portafolios"],
        },
      ],
    },
    {
      categoria: "Frameworks JavaScript",
      tecnologias: [
        {
          nombre: "Next.js (React)",
          descripcion: "Framework React con renderizado híbrido y optimizaciones automáticas.",
          ventajas: ["Ecosistema React", "Flexibilidad de renderizado", "Optimizaciones automáticas"],
          desventajas: ["Curva de aprendizaje de React", "Tamaño del bundle"],
          casosDeUso: ["Aplicaciones web completas", "Dashboards", "E-commerce"],
        },
        {
          nombre: "Nuxt.js (Vue)",
          descripcion: "Framework Vue.js inspirado en Next.js con características similares.",
          ventajas: ["Sintaxis de Vue más sencilla", "Directivas poderosas", "Configuración sencilla"],
          desventajas: ["Ecosistema más pequeño que React", "Menos recursos de aprendizaje"],
          casosDeUso: ["Aplicaciones Vue", "Sitios corporativos", "Prototipos rápidos"],
        },
        {
          nombre: "SvelteKit (Svelte)",
          descripcion: "Framework para Svelte con enfoque en rendimiento y bundle size.",
          ventajas: ["Bundles más pequeños", "Sin Virtual DOM", "Menos código boilerplate"],
          desventajas: ["Comunidad más pequeña", "Menos bibliotecas disponibles"],
          casosDeUso: ["Aplicaciones ligeras", "Sitios con restricciones de rendimiento"],
        },
        {
          nombre: "Angular",
          descripcion: "Framework completo con su propio ecosistema y herramientas.",
          ventajas: ["Todo incluido", "TypeScript nativo", "Arquitectura robusta"],
          desventajas: ["Mayor curva de aprendizaje", "Bundles más grandes", "Menos flexible"],
          casosDeUso: ["Aplicaciones empresariales", "Equipos grandes", "Proyectos a largo plazo"],
        },
      ],
    },
    {
      categoria: "Enfoques de Renderizado",
      tecnologias: [
        {
          nombre: "Next.js (Híbrido)",
          descripcion: "Soporta múltiples estrategias de renderizado en la misma aplicación.",
          ventajas: ["Flexibilidad", "Optimización por ruta", "Server Components"],
          desventajas: ["Mayor complejidad", "Decisiones adicionales"],
          casosDeUso: ["Aplicaciones con necesidades mixtas", "Sitios grandes con diferentes tipos de contenido"],
        },
        {
          nombre: "SPA Tradicional",
          descripcion: "Renderizado completamente en el cliente después de cargar un shell HTML mínimo.",
          ventajas: ["Experiencia de aplicación fluida", "Menos carga en el servidor", "Desarrollo más simple"],
          desventajas: ["Peor SEO", "Tiempo de carga inicial más lento", "Mayor uso de JavaScript"],
          casosDeUso: ["Aplicaciones internas", "Dashboards", "Herramientas web"],
        },
        {
          nombre: "SSR Tradicional",
          descripcion: "Renderizado en el servidor para cada solicitud (PHP, Ruby on Rails, etc.).",
          ventajas: ["SEO excelente", "Tiempo de carga inicial rápido", "Menos JavaScript"],
          desventajas: ["Navegación menos fluida", "Mayor carga en el servidor", "Menos interactividad"],
          casosDeUso: ["Sitios de contenido", "Blogs", "Sitios de noticias"],
        },
        {
          nombre: "JAMstack (SSG)",
          descripcion: "Sitios pre-renderizados servidos como archivos estáticos.",
          ventajas: ["Rendimiento máximo", "Seguridad", "Escalabilidad"],
          desventajas: ["Actualización menos frecuente", "Limitado para contenido dinámico"],
          casosDeUso: ["Blogs", "Documentación", "Sitios de marketing"],
        },
      ],
    },
  ]

  const tablaComparativa = {
    categorias: ["Renderizado", "Enrutamiento", "Optimización", "API Backend", "Comunidad", "Curva de Aprendizaje"],
    tecnologias: [
      {
        nombre: "Next.js",
        valores: [
          "SSR, SSG, ISR, CSR",
          "Basado en archivos",
          "Automática (imágenes, fuentes, JS)",
          "API Routes / Server Actions",
          "Grande y activa",
          "Media",
        ],
      },
      {
        nombre: "Create React App",
        valores: ["CSR", "Requiere React Router", "Manual", "Requiere backend separado", "Grande", "Baja"],
      },
      {
        nombre: "Gatsby",
        valores: [
          "SSG (principalmente)",
          "Basado en archivos + GraphQL",
          "Automática con plugins",
          "Funciones serverless",
          "Media",
          "Media-Alta",
        ],
      },
      {
        nombre: "Remix",
        valores: [
          "SSR",
          "Basado en archivos anidados",
          "Manual",
          "Loaders y Actions",
          "Pequeña pero creciente",
          "Media-Alta",
        ],
      },
      {
        nombre: "Nuxt.js (Vue)",
        valores: ["SSR, SSG, CSR", "Basado en archivos", "Automática", "API endpoints", "Media", "Media"],
      },
      {
        nombre: "SvelteKit",
        valores: ["SSR, SSG, CSR", "Basado en archivos", "Automática", "Endpoints", "Pequeña pero creciente", "Baja"],
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Comparativas Tecnológicas</h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        Compara React y Next.js con otras tecnologías similares para entender sus fortalezas y debilidades relativas.
      </p>

      <Tabs defaultValue="frameworks-react" className="mb-12">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="frameworks-react">Frameworks React</TabsTrigger>
          <TabsTrigger value="frameworks-js">Frameworks JavaScript</TabsTrigger>
          <TabsTrigger value="renderizado">Enfoques de Renderizado</TabsTrigger>
        </TabsList>

        {comparaciones.map((comparacion, index) => {
          // Determinar el valor correcto para cada TabsContent
          let tabValue
          if (index === 0) tabValue = "frameworks-react"
          else if (index === 1) tabValue = "frameworks-js"
          else if (index === 2) tabValue = "renderizado"

          return (
            <TabsContent key={index} value={tabValue} className="p-4">
              <div className="grid gap-6">
                {comparacion.tecnologias.map((tecnologia, techIndex) => (
                  <Card key={techIndex}>
                    <CardHeader>
                      <CardTitle>{tecnologia.nombre}</CardTitle>
                      <CardDescription>{tecnologia.descripcion}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h3 className="font-semibold mb-2 text-green-600">Ventajas</h3>
                          <ul className="space-y-1">
                            {tecnologia.ventajas.map((ventaja, i) => (
                              <li key={i} className="text-sm flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                {ventaja}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-red-600">Desventajas</h3>
                          <ul className="space-y-1">
                            {tecnologia.desventajas.map((desventaja, i) => (
                              <li key={i} className="text-sm flex items-start">
                                <span className="text-red-500 mr-2">✗</span>
                                {desventaja}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-blue-600">Casos de Uso</h3>
                          <ul className="space-y-1">
                            {tecnologia.casosDeUso.map((caso, i) => (
                              <li key={i} className="text-sm flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                {caso}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          )
        })}
      </Tabs>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Tabla Comparativa de Frameworks</CardTitle>
          <CardDescription>Comparación detallada de características entre los principales frameworks</CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Framework</TableHead>
                {tablaComparativa.categorias.map((categoria, index) => (
                  <TableHead key={index}>{categoria}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {tablaComparativa.tecnologias.map((tecnologia, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{tecnologia.nombre}</TableCell>
                  {tecnologia.valores.map((valor, i) => (
                    <TableCell key={i}>{valor}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <h2 className="text-3xl font-bold mb-6 text-center">Tendencias y Evolución</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Tendencias Actuales</CardTitle>
            <CardDescription>Dirección actual del desarrollo web con React y Next.js</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 font-bold">→</span>
                <div>
                  <strong>React Server Components:</strong> Componentes que se ejecutan y renderizan exclusivamente en
                  el servidor.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 font-bold">→</span>
                <div>
                  <strong>Streaming SSR:</strong> Renderizado progresivo que permite mostrar partes de la página
                  mientras otras aún se están generando.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 font-bold">→</span>
                <div>
                  <strong>Partial Hydration:</strong> Hidratar solo los componentes interactivos, reduciendo el
                  JavaScript enviado al cliente.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 font-bold">→</span>
                <div>
                  <strong>Edge Runtime:</strong> Ejecución de código más cerca del usuario para mejor rendimiento.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 font-bold">→</span>
                <div>
                  <strong>Zero Bundle Size Components:</strong> Componentes que no añaden tamaño al bundle de JavaScript
                  del cliente.
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Futuro de React y Next.js</CardTitle>
            <CardDescription>Hacia dónde se dirigen estas tecnologías</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 font-bold">→</span>
                <div>
                  <strong>React Compiler:</strong> Optimizaciones automáticas a nivel de compilación para mejorar el
                  rendimiento.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 font-bold">→</span>
                <div>
                  <strong>Mejoras en Server Components:</strong> Expansión de capacidades y patrones para componentes
                  del servidor.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 font-bold">→</span>
                <div>
                  <strong>Turbopack:</strong> Sustituto de Webpack más rápido y eficiente para Next.js.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 font-bold">→</span>
                <div>
                  <strong>Integración con IA:</strong> Herramientas y patrones para integrar IA en aplicaciones React y
                  Next.js.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 font-bold">→</span>
                <div>
                  <strong>Mejoras en DX:</strong> Continuo enfoque en mejorar la experiencia del desarrollador con
                  mejores herramientas y APIs.
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
