import instance from '@/API/instance'
import authModule from '@/API/Modules/auth.api'

const api = {
  auth: authModule(instance)
}

export default api
