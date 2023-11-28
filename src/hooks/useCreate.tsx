import { useState } from 'react'
import axios from 'axios'
import { CreateProductDTO } from '../types/dto'
import { API_HOST } from '../const'

const token = localStorage.getItem('token')
const useCreate = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const createProduct = async (
    name: string,
    imageUrl: string,
    description: string,
    price: number,
    type: string,
    collection: string,
  ) => {
    setIsLoading(true)
    const CreateProductBody: CreateProductDTO = { name, imageUrl, description, price, type, collection }
    try {
      await axios.post<CreateProductDTO>(`${API_HOST}/product`, CreateProductBody, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      })
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }
  return { isLoading, createProduct }
}

export default useCreate
