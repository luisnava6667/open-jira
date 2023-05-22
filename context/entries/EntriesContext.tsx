import { Entry } from '@/interfaces'
import { createContext } from 'react'

export interface ContextProps {
  entries: Entry[]
  //metodos
  addNewEntry: (description: string) => void
  updateEntry: (entry: Entry, showSnackBar?: boolean) => void
}

export const EntriesContext = createContext({} as ContextProps)
