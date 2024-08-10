import { create } from 'zustand'
import { v4 } from 'uuid'

type Item = {
  id: string
  title: string
  name: string
  quantity: number
}

type Storage = {
  id: string
  name: string
  image: string
  items: Item[]
}

type State = {
  storage: Storage[]
}

export const useStore = create<State>(set => ({
  storage: [
    {
      id: v4(),
      name: 'A1',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'A1-1', name: 'Ingenico desk/3500', quantity: 7 },
        { id: v4(), title: 'A1-2', name: 'Ingenico ist250', quantity: 7 },
        { id: v4(), title: 'A1-3', name: 'Ingenico ist220', quantity: 8 }
      ]
    },
    {
      id: v4(),
      name: 'A2',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'A2-1', name: 'Ingenico ipp220', quantity: 136 },
        { id: v4(), title: 'A2-2', name: 'Ingenico isc250', quantity: 11 }
      ]
    },
    {
      id: v4(),
      name: 'A3',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'A3-1', name: 'Ingenico ipp320', quantity: 72 },
        { id: v4(), title: 'A3-2', name: 'Ingenico ipp320', quantity: 33 },
        { id: v4(), title: 'A3-3', name: 'Pax s300', quantity: 54 }
      ]
    },
    {
      id: v4(),
      name: 'B1',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'B1-1', name: 'Pax s200', quantity: 18 },
        { id: v4(), title: 'B1-2', name: 'Pax s90', quantity: 1 },
        { id: v4(), title: 'B1-3', name: 'Pax Q25', quantity: 1 },
        { id: v4(), title: 'B1-4', name: 'Castles V3', quantity: 30 }
      ]
    },
    {
      id: v4(),
      name: 'B2',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'B2-1', name: 'Pax sp30', quantity: 93 },
        { id: v4(), title: 'B2-2', name: 'Pax sp90', quantity: 93 },
        { id: v4(), title: 'B2-3', name: 'Pax sp90', quantity: 46 }
      ]
    },
    {
      id: v4(),
      name: 'B3',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'B3-1', name: 'Pax s300', quantity: 59 },
        { id: v4(), title: 'B3-2', name: 'Pax sp30', quantity: 36 },
        { id: v4(), title: 'B3-3', name: 'Pax sp30', quantity: 39 }
      ]
    },
    {
      id: v4(),
      name: 'C2',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'C2-1', name: 'Verifone PP1000 se', quantity: 39 },
        { id: v4(), title: 'C2-2', name: 'Verifone VX520', quantity: 6 },
        { id: v4(), title: 'C2-3', name: 'Verifone VX675', quantity: 3 },
        { id: v4(), title: 'C2-4', name: 'Verifone VX805', quantity: 8 }
      ]
    },
    {
      id: v4(),
      name: 'C3',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'C3-1', name: 'Verifone VX820', quantity: 82 },
        { id: v4(), title: 'C3-2', name: 'Verifone VX820', quantity: 95 }
      ]
    },
    {
      id: v4(),
      name: 'D3',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'D3-1', name: 'Tactilion', quantity: 19 },
        { id: v4(), title: 'D3-2', name: 'Tactilion mini', quantity: 21 }
      ]
    }
  ]
}))
