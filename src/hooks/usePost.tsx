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
        console.log(res)

        setPost(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [id])

  const deleteProduct = async () => {
    const token = localStorage.getItem('token')

    try {
      await axios.delete(`${API_HOST}/product/${id}`, {
        headers: {
          'Content-Type': 'application.json',
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  return { Post, isLoading, deleteProduct }
}

export default usePost
