import { Link } from 'react-router-dom'
import {
  Palette,
  FileText,
  Database,
  Cloud,
  Sparkles,
  Layers,
  Accessibility,
  Shield,
  Cpu,
  Wrench,
  Type,
  Save,
  type LucideIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useListCategories } from '@/hooks/useListCategories'
import { iconMap } from '@/lib/icons'

function CategoryCardSkeleton() {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 py-4">
      <CardHeader>
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </CardHeader>
      <CardFooter>
        <Skeleton className="h-9 w-full" />
      </CardFooter>
    </Card>
  )
}

export function CategoriesPage() {
  const { categories, loading } = useListCategories()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Categorías</h1>
        <p className="mt-2 text-muted-foreground">
          Explora librerías organizadas por categoría
        </p>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <CategoryCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon] || Palette

            return (
              <Card className="mx-auto w-full max-w-sm px-0 py-4">
                <CardContent className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <IconComponent className="h-10 w-10" />
                  </div>
                  <div className="flex flex-col">
                    <CardTitle>{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Ver librerias
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
