import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-card/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="text-lg">React Libraries for Beginners</span>
          </Link>
          <div className="flex items-center gap-1">
            <Button variant={isHome ? 'secondary' : 'ghost'} size="sm" asChild>
              <Link to="/">Inicio</Link>
            </Button>
            <Separator orientation="vertical" className="h-5" />
            <Button variant="ghost" size="sm" asChild>
              <Link to="/categories">Categorías</Link>
            </Button>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  )
}
