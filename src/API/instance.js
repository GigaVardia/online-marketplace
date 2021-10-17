import axios from 'axios'
import router from '@/router'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    accept: 'application/json'
  }
})

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('user_access_token')
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${token}`
  return config
})

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear()
      router.push({ name: 'login' }).then().catch()
    }
    return Promise.reject(error)
  }
)

export default instance
