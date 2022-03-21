// 将token存入localStorage
export const setToken = (value) => {
  return localStorage.setItem('TOKEN', value)
}

//拿到localStorage中的token
export const getToken = () => {
  return localStorage.getItem('TOKEN')
}

//退出登录时调用销毁token
export const removeToken = () => {
  return localStorage.removeItem(`TOKEN`)
}
