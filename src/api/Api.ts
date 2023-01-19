const isAppWorking = () => {
  const isWorking = true

  return new Promise((resolve, reject) => {
    if (isWorking) {
      setTimeout(() => {
        resolve({ isWorking })
      }, 3000)
    } else {
      setTimeout(() => {
        reject({ error: 'Sorry App is not working' })
      }, 3000)
    }
  })
}

export const Api = {
  getAppStatus() {
    return isAppWorking()
  },
  getGoods() {},
  addGoods() {},
}
