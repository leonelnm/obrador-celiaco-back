const API_URI = import.meta.env.VITE_API_URI

export const postData = async (url = '', data = {}, token = null) => {
  const response = await fetch(`${API_URI}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` })
    },
    body: JSON.stringify(data)
  })

  return response.json()
}
