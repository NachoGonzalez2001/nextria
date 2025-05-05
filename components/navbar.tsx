"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const pathname = usePathname()

  const routes = [
    { name: "Inicio", path: "/" },
    { name: "Historia", path: "/historia" },
    { name: "Demos", path: "/demos" },
    { name: "Ventajas y Desventajas", path: "/ventajas-desventajas" },
    { name: "Comparativas", path: "/comparativas" },
    { name: "Recursos", path: "/recursos" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 ml-5 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block">React con Next.js</span>
        </Link>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <nav className="flex items-center space-x-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === route.path ? "text-foreground" : "text-foreground/60"
                }`}
              >
                {route.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://react.dev" target="_blank" rel="noopener noreferrer">
                React Docs
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                Next.js Docs
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === route.path ? "text-foreground" : "text-foreground/60"
                    }`}
                  >
                    {route.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://react.dev" target="_blank" rel="noopener noreferrer">
                      React Docs
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                      Next.js Docs
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
