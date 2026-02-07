/**
 * Registro de categorías y librerías.
 * Añade aquí cada nueva librería para que aparezca en el playground.
 */
import { meta as exampleButtonMeta } from './ui/example-button'

export const categories = [
  {
    id: 'ui',
    name: 'UI / Componentes',
    description: 'Componentes visuales y de interfaz',
  },
  // Añadir más categorías: forms, animations, state, etc.
] as const

export const libraries = [
  { ...exampleButtonMeta, category: 'ui' },
  // Añadir más librerías importando su meta
] as const

export type CategoryId = (typeof categories)[number]['id']
