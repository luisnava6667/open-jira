import React, { DragEvent } from 'react'
import {
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  Typography
} from '@mui/material'
import { Entry } from '@/interfaces'
import { FC, useContext } from 'react'
import { UIContext, UIProvider } from '@/context/ui'
import { useRouter } from 'next/router'
import { dateFunction } from '@/utils'

interface Props {
  entry: Entry
}
export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, stopDragging } = useContext(UIContext)
  const router = useRouter()
  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', entry._id)
    startDragging()
  }
  const onDragEnd = (e: DragEvent<HTMLDivElement>) => {
    stopDragging()
  }
  const onClick = () => {
    router.push(`/entries/${entry._id}`)
  }
  return (
    <Card
      onClick={onClick}
      sx={{ marginBottom: 1, marginLeft: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography sx={{ fontSize: 12 }} variant='body2'>
            {dateFunction.getFormatDistance(entry.createdAt)}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
