import { useEffect, useState } from 'react'
import listCategories from '@/services/listCategories'

export interface Category {
  id: string
  name: string
  description: string
  icon: string
}

export function useListCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    listCategories()
      .then((data) => {
        setCategories(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error loading categories:', error)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}
