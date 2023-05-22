import { createContext } from 'react'

export interface ContextProps {
  sidemenuOpen: boolean
  isAddingEntry: boolean
  isDragging: boolean
  //metodos
  openSidemenu: () => void
  closeSidemenu: () => void
  setIsAddingEntry: (isAdding: boolean) => void
  startDragging: () => void
  stopDragging: () => void
}

export const UIContext = createContext({} as ContextProps)
