interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string
  status: string
  createdAt: number
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pendiente: Primer registro',
      status: 'pending',
      createdAt: Date.now() - 1000000
    },
    {
      description: 'En Progreso: Segundo registro',
      status: 'in-progress',
      createdAt: Date.now()
    },
    {
      description: 'Finalizado:Tercero registro',
      status: 'finished',
      createdAt: Date.now() - 10000000
    }
  ]
}
