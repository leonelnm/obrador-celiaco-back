import { postData } from '../utils/customPost'

export default async function login ({ email, password }) {
  const response = await postData('/login', {
    email,
    password
  }, false)
  return response
}
