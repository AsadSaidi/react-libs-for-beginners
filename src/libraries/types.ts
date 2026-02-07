/**
 * Metadata de una librería para el playground.
 * Define nombre, descripción, props configurables y generación de código.
 */
export interface LibraryMeta {
  id: string
  name: string
  description: string
  category: string
  /** npm package name */
  packageName: string
  /** Configuración de los controles del playground (props editables) */
  configSchema?: ConfigField[]
  /** Enlaces a documentación oficial */
  links?: {
    docs?: string
    npm?: string
    github?: string
  }
}

export interface ConfigField {
  key: string
  label: string
  type: 'text' | 'number' | 'boolean' | 'select'
  defaultValue: unknown
  options?: { value: string; label: string }[] // para type === 'select'
}

export interface LibraryConfig {
  [key: string]: unknown
}
