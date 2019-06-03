import { createContext, useContext } from 'react'

export const RootContext = createContext()
export const useRootStore = () => useContext(RootContext)