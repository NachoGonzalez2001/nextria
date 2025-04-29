import { CheckCircle2, XCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VentajasDesventajasPage() {
  const ventajas = [
    {
      title: "Componentes Reutilizables",
      description:
        "React permite crear componentes de UI reutilizables que encapsulan su propio estado y comportamiento.",
    },
    {
      title: "Virtual DOM",
      description: "El DOM virtual de React optimiza las actualizaciones de la interfaz, mejorando el rendimiento.",
    },
    {
      title: "Renderizado del Lado del Servidor",
      description: "Next.js facilita el SSR, mejorando el SEO y el tiempo de carga inicial.",
    },
    {
      title: "Enrutamiento Simplificado",
      description:
        "El sistema de enrutamiento basado en archivos de Next.js elimina la necesidad de configuraciones complejas.",
    },
    {
      title: "Optimización Automática",
      description: "Next.js incluye optimizaciones automáticas para imágenes, fuentes y JavaScript.",
    },
    {
      title: "Ecosistema Robusto",
      description: "Amplia comunidad y ecosistema de bibliotecas, herramientas y recursos disponibles.",
    },
    {
      title: "Desarrollo Incremental",
      description: "Permite adoptar React y Next.js gradualmente en proyectos existentes.",
    },
    {
      title: "TypeScript Integrado",
      description: "Soporte nativo para TypeScript, mejorando la seguridad de tipos y la experiencia de desarrollo.",
    },
  ]

  const desventajas = [
    {
      title: "Curva de Aprendizaje",
      description:
        "Conceptos como JSX, hooks y el ciclo de vida de los componentes pueden ser difíciles para principiantes.",
    },
    {
      title: "Sobrecarga de JavaScript",
      description:
        "Las aplicaciones React pueden enviar grandes cantidades de JavaScript al cliente, afectando el rendimiento inicial.",
    },
    {
      title: "SEO Complejo (en CSR)",
      description:
        "Las aplicaciones renderizadas solo en el cliente pueden tener desafíos de SEO si no se manejan adecuadamente.",
    },
    {
      title: "Actualizaciones Frecuentes",
      description:
        "El ecosistema evoluciona rápidamente, lo que puede requerir actualizaciones y migraciones frecuentes.",
    },
    {
      title: "Configuración Inicial",
      description:
        "Aunque Next.js simplifica muchas cosas, la configuración inicial puede ser compleja para proyectos avanzados.",
    },
    {
      title: "Tamaño del Bundle",
      description: "Sin una optimización adecuada, el tamaño del bundle puede crecer significativamente.",
    },
    {
      title: "Complejidad en Aplicaciones Grandes",
      description: "La gestión del estado y la arquitectura pueden volverse complejas en aplicaciones grandes.",
    },
  ]

  const casosDeUso = {
    ideales: [
      "Aplicaciones web interactivas y dinámicas",
      "Dashboards y paneles de administración",
      "Aplicaciones de una sola página (SPA)",
      "Sitios web con contenido que cambia frecuentemente",
      "E-commerce y tiendas en línea",
      "Aplicaciones que requieren SEO y buen rendimiento",
      "Prototipos rápidos y MVPs",
    ],
    noIdeales: [
      "Sitios web estáticos simples (puede ser excesivo)",
      "Micrositios o landing pages muy sencillas",
      "Aplicaciones con requisitos mínimos de JavaScript",
      "Proyectos con recursos de desarrollo muy limitados",
      "Sistemas legacy que son difíciles de integrar con React",
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Ventajas y Desventajas</h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        Analiza los pros y contras de utilizar React con Next.js para tomar decisiones informadas sobre tu stack
        tecnológico.
      </p>

      <Tabs defaultValue="ventajas" className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ventajas">Ventajas</TabsTrigger>
          <TabsTrigger value="desventajas">Desventajas</TabsTrigger>
        </TabsList>

        <TabsContent value="ventajas" className="p-4">
          <div className="grid md:grid-cols-2 gap-6">
            {ventajas.map((ventaja, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <CardTitle className="text-lg">{ventaja.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{ventaja.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="desventajas" className="p-4">
          <div className="grid md:grid-cols-2 gap-6">
            {desventajas.map((desventaja, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <CardTitle className="text-lg">{desventaja.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{desventaja.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <h2 className="text-3xl font-bold mb-6 text-center">Casos de Uso</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Casos de Uso Ideales
            </CardTitle>
            <CardDescription>Escenarios donde React con Next.js brilla</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {casosDeUso.ideales.map((caso, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  {caso}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-500" />
              Casos de Uso No Ideales
            </CardTitle>
            <CardDescription>Escenarios donde otras tecnologías podrían ser más apropiadas</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {casosDeUso.noIdeales.map((caso, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  {caso}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Consideraciones de Rendimiento</CardTitle>
          <CardDescription>Factores a tener en cuenta al evaluar el rendimiento de React con Next.js</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Impacto Positivo</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Code Splitting automático:</strong> Divide el código en chunks más pequeños para cargar solo
                    lo necesario.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Optimización de imágenes:</strong> Redimensiona, optimiza y sirve imágenes en formatos
                    modernos.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Prefetching inteligente:</strong> Precarga recursos cuando es probable que se necesiten.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Server Components:</strong> Reduce el JavaScript enviado al cliente.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Desafíos</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    <strong>Hidratación:</strong> El proceso de hidratación puede causar retrasos en la interactividad.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    <strong>Dependencias grandes:</strong> Bibliotecas de terceros pueden aumentar el tamaño del bundle.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    <strong>Re-renderizados innecesarios:</strong> Sin una gestión adecuada, pueden ocurrir
                    re-renderizados excesivos.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    <strong>Complejidad de caché:</strong> La gestión de caché puede ser compleja en aplicaciones
                    grandes.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
