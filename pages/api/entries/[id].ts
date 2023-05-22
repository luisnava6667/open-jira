import { db } from '@/database'
import { Entry, IEntry } from '@/models'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { message: string } | IEntry | null
export default function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'El id no es valido' })
  }
  switch (req.method) {
    case 'GET':
      return getEntryById(req, res)
    case 'PUT':
      return updatEntry(req, res)
    default:
      return res.status(400).json({ message: 'Método no existe' })
  }
}
const getEntryById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { id } = req.query
  await db.connect()
  const entryId = await Entry.findById(id)
  await db.disconnect()
  if (!entryId)
    return res.status(404).json({ message: 'Entrada no encontrada' })
  res.status(200).json(entryId)
}
const updatEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query
  await db.connect()
  const entryToUpdate = await Entry.findById(id)
  if (!entryToUpdate) {
    await db.disconnect()
    return res.status(400).json({ message: 'No hay entrada con ese ID: ' + id })
  }
  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status
  } = req.body
  try {
    const updateEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true }
    )
    // entryToUpdate.description = description
    // entryToUpdate.status = status
    // await entryToUpdate.save()
    res.status(200).json(updateEntry!)
  } catch (error: any) {
    await db.disconnect()
    return res.status(400).json({
      message: error.errors.status.message
    })
  }
}
