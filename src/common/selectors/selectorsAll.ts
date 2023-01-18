import { AppRootStateType } from '../../App/store'

const selectorIsInitialize = (state: AppRootStateType) => state.app.isInitialize

const selectorErrorMessage = (state: AppRootStateType) => state.app.ErrorMessage

const selectorIsLoading = (state: AppRootStateType) => state.app.loading

export { selectorIsInitialize, selectorErrorMessage, selectorIsLoading }
