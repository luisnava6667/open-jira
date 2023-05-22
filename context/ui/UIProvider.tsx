import { FC, useReducer } from 'react'
import { UIContext, uiReducer } from './'
export interface UIState {
  sidemenuOpen: boolean
  isAddingEntry: boolean
  isDragging: boolean
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false
}
interface ProviderProps {
  children: React.ReactNode
}

export const UIProvider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
  const openSidemenu = () => dispatch({ type: 'UI- Open Sidebar' })
  const closeSidemenu = () => dispatch({ type: 'UI- Close Sidebar' })
  const setIsAddingEntry = (isAdding: boolean) =>
    dispatch({ type: 'UI- Set isAddingEntry', payload: isAdding })
  const startDragging = () => dispatch({ type: 'UI- Start Dragging' })
  const stopDragging = () => dispatch({ type: 'UI- End Dragging' })
  return (
    <UIContext.Provider
      value={{
        ...state,
        //metodos
        closeSidemenu,
        openSidemenu,
        setIsAddingEntry,
        startDragging,
stopDragging
      }}>
      {children}
    </UIContext.Provider>
  )
}
