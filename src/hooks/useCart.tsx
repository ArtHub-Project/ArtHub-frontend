import axios from 'axios'
import { API_HOST } from '../const'
import { CartDTO, CartItemDTO, ICartItemDTO } from '../types/dto'
import { useEffect, useState } from 'react'

interface Total {
  total: number
}

const useCart = () => {
  const [cart, setCart] = useState<CartDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const useGetCart = async () => {
      const token = localStorage.getItem('token')
      try {
        const res = await axios.get<CartDTO>(`${API_HOST}/cart`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        setCart(res.data)
      } catch (err) {
        console.error(err)
      } finally {
      }
    }
    useGetCart()
  }, [])

  const fetchCart = async (total: number) => {
    const token = localStorage.getItem('token')

    const totalBody: Total = { total }
    try {
      await axios.post<Total>(`${API_HOST}/cart`, totalBody, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      })
    } catch (err) {
      console.error(err)
    } finally {
    }
  }

  const useCartItem = async (productId: number) => {
    const token = localStorage.getItem('token')

    try {
      const CartItemBody: ICartItemDTO = { productId }
      await axios.post<CartItemDTO>(`${API_HOST}/cart/add`, CartItemBody, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      })
    } catch (err) {
      console.error(err)
    } finally {
    }
  }

  const useCartItemDelete = async (id: string) => {
    const token = localStorage.getItem('token')
    setIsLoading(true)
    try {
      await axios.delete(`${API_HOST}/cart/delete/${id}`, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      })
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return { useCartItem, cart, fetchCart, useCartItemDelete, isLoading }
}

export default useCart
