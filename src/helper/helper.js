const convertTextToBool = (string) => {
  if (string.length === 0) return 'String is required'
  if (string === 'true') return true
  if (string === 'false') return false
  return Boolean(string)
}

const setLocalStorage = (key, value) => {
  if (!key || !value) return 'key and value is required'
  const valueStringify = JSON.stringify(value)
  localStorage.setItem(key, valueStringify)
}

const getLocalStorage = (key) => {
  const value = localStorage.getItem(key)
  if (!value) return 'key incorrect'
  return JSON.parse(value)
}

export { convertTextToBool, setLocalStorage, getLocalStorage }