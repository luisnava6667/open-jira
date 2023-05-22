import { Paper, List } from '@mui/material'
import { EntryCard } from './'
import { EntryStatus } from '@/interfaces'
import { FC, useContext, useMemo, DragEvent } from 'react'
import { EntriesContext } from '@/context/entries'
import { UIContext } from '@/context/ui'
import styles from './EntryList.module.css'
interface Props {
  status: EntryStatus
}
export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext)
  const { isDragging, stopDragging } = useContext(UIContext)
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  )
  const allowDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }
  const onDropEntry = (e: DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData('text')
    const entry = entries.find((entry) => entry._id === id)!
    entry.status = status
    updateEntry(entry)
    stopDragging()
  }
  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}>
      <Paper
        sx={{
          'height': 'calc(100vh - 180px)',
          'overflowY': 'scroll',
          'backgroundColor': 'transparent',
          'padding': '1px 2px',
          '&::-webkit-scrollbar': {
            width: '0.4em'
          }
        }}>
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
