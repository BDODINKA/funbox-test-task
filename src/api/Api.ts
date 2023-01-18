const isAppWorking = () => {
  const isWorking = false

  return new Promise((resolve, reject) => {
    if (isWorking) {
      resolve({ isWorking })
    } else {
      reject({ error: 'Error' })
    }
  })
}

export const Api = {
  getAppStatus() {
    return isAppWorking()
  },
}
