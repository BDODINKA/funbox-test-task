import { AppRootStateType } from '../../App/store'

const selectorIsInitialize = (state: AppRootStateType) => state.app.isInitialize

const selectorErrorMessage = (state: AppRootStateType) => state.app.ErrorMessage

const selectorAnimalData = (state: AppRootStateType) => state.main.animalData

export { selectorIsInitialize, selectorErrorMessage, selectorAnimalData }
