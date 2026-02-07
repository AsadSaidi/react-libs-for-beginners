import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Github, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/useTheme'

const GITHUB_REPO_URL = 'https://github.com/AsadSaidi/react-libs-for-beginners.git'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isCategories = location.pathname === '/categories'
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex shrink-0 items-center gap-2 font-semibold text-foreground">
              <span className="text-lg">RLB</span>
            </Link>
            <div className="flex items-center gap-1">
              <Button variant={isHome ? 'secondary' : 'ghost'} size="sm" asChild>
                <Link to="/">Inicio</Link>
              </Button>
              <Button variant={isCategories ? 'secondary' : 'ghost'} size="sm" asChild>
                <Link to="/categories">Categorías</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="Ver repositorio en GitHub">
              <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
                <Github className="size-4" />
              </a>
            </Button>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  )
}
