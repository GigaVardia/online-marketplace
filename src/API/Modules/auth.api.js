function authModule (instance) {
  return {
    login (formData) {
      return instance.post('auth/access-token', {
        email: formData.email,
        password: formData.password
      })
    }
  }
}

export default authModule
