const API_URI = import.meta.env.VITE_API_URI

export const getData = async (url = '', token = null) => {
  const response = await fetch(`${API_URI}${url}`, {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` })
    }
  })
  return response.json()
}
