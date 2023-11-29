export interface LoginDTO {
  username: string
  password: string
}
export interface CredentialDTO {
  accessToken: string
}

export interface ErrorDTO {
  message: string
}

export interface UserDTO {
  id: string
  username: string
  name: string
  registeredAt: string
}

export interface CreateUserDTO {
  name: string
  username: string
  password: string
  email: string
  imageUrl: string
  bio: string
  address: string
}

export interface ProductDTO {
  id: number
  name: string
  imageUrl: string
  description: string
  price: number
  type: string
  collection: string
  createdAt: string
  updatedAt: string
  User: UserDTO
}

export type ProductsDTO = ProductDTO[]

export interface RegisterDTO {
  name: string
  username: string
  password: string
}

export interface CreateProductDTO {
  name: string
  imageUrl: string
  description: string
  price: number
  type: string
  collection: string
}


export interface UpdateProductDTO {
  name: string | undefined
  imageUrl: string
  description: string
  type: string
  collection: string
  price: number

export interface ICartItemDTO {
  productId: number
}

export interface CartItemDTO {
  id: number
  cartId: number
  productId: number
}

export interface CartDTO {
  id: number
  total: number
  createdAt: string
  User: UserDTO
  CartItem: CartItemDTO[]

}
