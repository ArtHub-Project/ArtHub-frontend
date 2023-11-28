import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { CredentialDTO, LoginDTO, RegisterDTO } from '../types/dto'
import axios, { AxiosError } from 'axios'
import { API_HOST } from '../const'
import { useNavigate } from 'react-router-dom'
interface IAuthProviderProps {
  children: ReactNode
}

interface IAuthContextType {
  isLoggedIn: boolean
  username: string | null
  login: (username: string, password: string) => Promise<void>
  register: (newUsername: string, newPassword: string, newName: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<IAuthContextType | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within AuthProvider')

  return context
}

const token = localStorage.getItem('token')
const user = localStorage.getItem('username')

const checkLoginStatus = async (token: string | null): Promise<boolean> => {
  if (typeof token !== 'string') return false
  try {
    const currentUser = await axios.get(`${API_HOST}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (currentUser.status === 200) return true
  } catch (err) {
    if (err instanceof AxiosError && err.response?.status === 403) return false
  }
  return false
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedin] = useState<boolean>(false)
  const [username, setUsername] = useState<string | null>(user)

  useEffect(() => {
    checkLoginStatus(token).then((isLoggedInAlready) => {
      setIsLoggedin(isLoggedInAlready)
    })
  }, [])

  const login = async (username: string, password: string) => {
    const loginBody: LoginDTO = { username, password }

    try {
      const res = await axios.post<CredentialDTO>(`${API_HOST}/auth/login`, loginBody, {
        headers: { 'Content-Type': 'application/json' },
      })

      localStorage.setItem('token', res.data.accessToken)
      localStorage.setItem('username', username)
      setIsLoggedin(true)
      setUsername(username)
    } catch (err) {
      throw new Error('Invalid username or password')
    }
  }

  const register = async (newUsername: string, newPassword: string, newName: string) => {
    const newUser: RegisterDTO = {
      username: newUsername,
      password: newPassword,
      name: newName,
    }

    try {
      await axios.post<RegisterDTO>(`${API_HOST}/user`, newUser, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } catch (err) {
      console.error(err)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    setIsLoggedin(false)
    setUsername(null)

    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, register, logout }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
