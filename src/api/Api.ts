import { appError, dataError } from '../common/constants/error'

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
        reject({ error: appError })
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
        reject({ statusCode: 500, data: {}, error: dataError })
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
}
