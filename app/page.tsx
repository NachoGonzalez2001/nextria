import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const sections = [
    {
      title: "Historia",
      description: "Descubre los orígenes y evolución de React y Next.js",
      link: "/historia",
    },
    {
      title: "Demos",
      description: "Explora ejemplos interactivos de componentes y funcionalidades",
      link: "/demos",
    },
    {
      title: "Ventajas y Desventajas",
      description: "Analiza los pros y contras de utilizar React con Next.js",
      link: "/ventajas-desventajas",
    },
    {
      title: "Comparativas",
      description: "Compara React y Next.js con otras tecnologías similares",
      link: "/comparativas",
    },
    {
      title: "Recursos",
      description: "Encuentra tutoriales, documentación y herramientas útiles",
      link: "/recursos",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
          React con Next.js
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Tu guía completa para entender y dominar el desarrollo web moderno con React y Next.js
        </p>
        <Button asChild size="lg">
          <Link href="/demos">
            Ver Demos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {sections.map((section) => (
          <Card key={section.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href={section.link}>
                  Explorar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

          <section className="bg-background text-foreground p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">¿Por qué React con Next.js?</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4 text-muted-foreground">
            React es una biblioteca de JavaScript para construir interfaces de usuario, mientras que Next.js es un
            framework que se construye sobre React, añadiendo características como renderizado del lado del servidor,
            generación de sitios estáticos, y más.
          </p>
          <p className="text-muted-foreground">
            Juntos, proporcionan una experiencia de desarrollo potente y flexible para crear aplicaciones web modernas
            y de alto rendimiento.
          </p>
        </div>
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Características destacadas:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Renderizado híbrido (cliente + servidor)
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Enrutamiento basado en el sistema de archivos
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Optimización automática de imágenes
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              API Routes para backend
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Soporte para TypeScript
            </li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}
