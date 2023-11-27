import axios from 'axios'
import { useEffect, useState } from 'react'
import { ProductsDTO } from '../types/dto'
import { API_HOST } from '../const'

export const usePosts = () => {
  const [products, setProducts] = useState<ProductsDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<ProductsDTO>(`${API_HOST}/product`)

        setProducts(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { products, isLoading }
}
