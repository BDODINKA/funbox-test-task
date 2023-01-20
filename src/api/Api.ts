import { AnimalType, serverData } from './data'

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

const ResponseData = (serverData: AnimalType) => {
  return new Promise((resolve, reject) => {
    if (serverData) {
      setTimeout(() => {
        resolve({ statusCode: 200, data: serverData })
      }, 4000)
    } else {
      setTimeout(() => {
        reject({ statusCode: 500, data: {}, error: 'Sorry but data is broken' })
      }, 4000)
    }
  })
}

export const Api = {
  getAppStatus() {
    return isAppWorking()
  },
  getGoods() {
    return ResponseData(serverData)
  },
  addGoods() {},
}
