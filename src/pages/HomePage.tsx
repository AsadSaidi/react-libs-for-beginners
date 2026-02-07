import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'


export function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          React Libraries for Beginners
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Descubre librerías útiles para React. Ve demos en vivo, configura
          opciones y genera código listo para copiar.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <Button size="lg" asChild>
            <a href="#proximamente">Explorar categorías</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#proximamente">Cómo contribuir</a>
          </Button>
        </div>
      </section>

      <section id="proximamente">
        <Card className="border-2 border-dashed">
          <CardHeader>
            <CardTitle className="text-xl">Próximamente</CardTitle>
            <CardDescription>
              Navegación por categorías, playground interactivo y generador de
              código por librería.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="text-muted-foreground text-sm space-y-2">
              <li>• Catálogo por categoría (UI, formularios, estado, etc.)</li>
              <li>• Demo visual de cada librería</li>
              <li>• Controles para cambiar props y ver el resultado</li>
              <li>• Código React generado automáticamente</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
