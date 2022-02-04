const hasAnyError = (data) => {
  return data === null ||
    typeof data !== 'object' ||
    'error' in data
}

export default hasAnyError
