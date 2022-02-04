import { getData } from '../utils/customGet'

export const getAllProducts = async (token) => {
  const response = await getData('/product', token)
  return response
}

export const getProductById = async (id, token) => {
  return await getData(`/product/${id}`, token)
}
