import { useEffect, useState } from 'react'
import axios from 'axios'
import { ProductDTO } from '../types/dto'
import { API_HOST } from '../const'

const usePost = (id: string) => {
  const [Post, setPost] = useState<ProductDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<ProductDTO>(`${API_HOST}/product/${id}`)
        setPost(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [id])

  return { Post, isLoading }
}

export default usePost
