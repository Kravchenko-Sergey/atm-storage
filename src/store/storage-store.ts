import { create } from 'zustand'
import { v4 } from 'uuid'

type Item = {
  id: string
  title: string
  name: string
  image?: string
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
  changeQuantity: (itemId: string, id: string, newValue: number) => void
  removeItem: (itemId: string, id: string) => void
}

export const useStorageStore = create<State>(set => ({
  storage: [
    {
      id: v4(),
      name: 'A1',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'A1-1', name: 'Ingenico desk/3500', image: '/ingenico-desk-3500.webp', quantity: 7 },
        { id: v4(), title: 'A1-2', name: 'Ingenico ict250', image: '/ingenico-ict-250.webp', quantity: 7 },
        { id: v4(), title: 'A1-3', name: 'Ingenico ict220', image: '/ingenico-ict-220.webp', quantity: 8 },
        { id: v4(), title: 'A1-3', name: 'Ingenico iwl220', image: '/ingenico-iwl-220.webp', quantity: 3 }
      ]
    },
    {
      id: v4(),
      name: 'A2',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'A2-1', name: 'Ingenico ipp220', image: '/ingenico-ipp-220.webp', quantity: 136 },
        { id: v4(), title: 'A2-2', name: 'Ingenico isc250', image: '/ingenico-isc-250.webp', quantity: 11 }
      ]
    },
    {
      id: v4(),
      name: 'A3',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'A3-1', name: 'Ingenico ipp320', image: '/ingenico-ipp-320.webp', quantity: 72 },
        { id: v4(), title: 'A3-2', name: 'Ingenico ipp320', image: '/ingenico-ipp-320.webp', quantity: 33 },
        { id: v4(), title: 'A3-3', name: 'Pax s300', image: '/pax-s-300.webp', quantity: 54 }
      ]
    },
    {
      id: v4(),
      name: 'B1',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'B1-1', name: 'Pax s200', image: '/pax-s-200.webp', quantity: 18 },
        { id: v4(), title: 'B1-2', name: 'Pax s90', image: '/pax-s-90.webp', quantity: 1 },
        { id: v4(), title: 'B1-3', name: 'Pax Q25', image: '/pax-q-25.webp', quantity: 1 },
        { id: v4(), title: 'B1-4', name: 'Castles V3', image: '/castles-v-3.webp', quantity: 30 }
      ]
    },
    {
      id: v4(),
      name: 'B2',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'B2-1', name: 'Pax sp30', image: '/pax-sp-30.webp', quantity: 93 },
        { id: v4(), title: 'B2-2', name: 'Pax sp30', image: '/pax-sp-30.webp', quantity: 93 },
        { id: v4(), title: 'B2-3', name: 'Pax sp30', image: '/pax-sp-30.webp', quantity: 46 }
      ]
    },
    {
      id: v4(),
      name: 'B3',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'B3-1', name: 'Pax s300', image: '/pax-s-300.webp', quantity: 59 },
        { id: v4(), title: 'B3-2', name: 'Pax sp30', image: '/pax-sp-30.webp', quantity: 36 },
        { id: v4(), title: 'B3-3', name: 'Pax sp30', image: '/pax-sp-30.webp', quantity: 39 }
      ]
    },
    {
      id: v4(),
      name: 'C2',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'C2-1', name: 'Verifone PP1000 se', image: '/verifone-pp-1000-se.webp', quantity: 39 },
        { id: v4(), title: 'C2-2', name: 'Verifone VX520', image: '/verifone-vx-520.webp', quantity: 6 },
        { id: v4(), title: 'C2-3', name: 'Verifone VX675', image: '/verifone-vx-675.webp', quantity: 3 },
        { id: v4(), title: 'C2-4', name: 'Verifone VX805', image: '/verifone-vx-805.webp', quantity: 8 }
      ]
    },
    {
      id: v4(),
      name: 'C3',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'C3-1', name: 'Verifone VX820', image: '/verifone-vx-820.webp', quantity: 82 },
        { id: v4(), title: 'C3-2', name: 'Verifone VX820', image: '/verifone-vx-820.webp', quantity: 95 }
      ]
    },
    {
      id: v4(),
      name: 'D3',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'D3-1', name: 'Tactilion', image: '/tactilion.webp', quantity: 19 },
        { id: v4(), title: 'D3-2', name: 'Tactilion mini', image: '/tactilion-mini.webp', quantity: 21 }
      ]
    }
  ],
  changeQuantity: (itemId: string, id: string, newValue: number) =>
    set(state => ({
      storage: state.storage.map(item =>
        item.id === itemId
          ? { ...item, items: item.items.map(item2 => (item2.id === id ? { ...item2, quantity: newValue } : item2)) }
          : item
      )
    })),
  removeItem: (itemId: string, id: string) =>
    set(state => ({
      storage: state.storage.map(item =>
        item.id === itemId ? { ...item, items: item.items.filter(item2 => item2.id !== id) } : item
      )
    }))
}))
