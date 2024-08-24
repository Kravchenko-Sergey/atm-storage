import { create } from 'zustand'
import { v4 } from 'uuid'

export type Item = {
  id: string
  type: string
  brand?: string
  model?: string
  name: string
  sn?: string
  bank?: string
  image?: string
}

export type Box = {
  id: string
  title: string
  productName: string
  sn?: string
  image: string
  items: Item[]
}

export type Cell = {
  id: string
  title: string
  boxes: Box[]
}

type State = {
  boxes: Box[]
}

export const useBoxesStore = create<State>(set => ({
  boxes: [
    {
      id: v4(),
      title: 'A1-1',
      productName: 'Ingenico desk/3500',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'POS Terminal',
          brand: 'Ingenico',
          model: 'desk/3500',
          name: 'Ingenico desk/3500',
          sn: '111',
          bank: 'Сбербанк',
          image: '/ingenico-desk-3500.webp'
        },
        {
          id: v4(),
          type: 'POS Terminal',
          brand: 'Ingenico',
          model: 'desk/3500',
          name: 'Ingenico desk/3500',
          sn: '222',
          bank: 'Сбербанк',
          image: '/ingenico-desk-3500.webp'
        },
        {
          id: v4(),
          type: 'POS Terminal',
          brand: 'Ingenico',
          model: 'desk/3500',
          name: 'Ingenico desk/3500',
          sn: '222',
          bank: 'Сбербанк',
          image: '/ingenico-desk-3500.webp'
        },
        {
          id: v4(),
          type: 'POS Terminal',
          brand: 'Ingenico',
          model: 'desk/3500',
          name: 'Ingenico desk/3500',
          sn: '222',
          bank: 'Сбербанк',
          image: '/ingenico-desk-3500.webp'
        },
        {
          id: v4(),
          type: 'POS Terminal',
          brand: 'Ingenico',
          model: 'desk/3500',
          name: 'Ingenico desk/3500',
          sn: '222',
          bank: 'Сбербанк',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'A1-2',
      productName: 'Ingenico desk/3500',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'POS Terminal',
          brand: 'Ingenico',
          model: 'desk/3500',
          name: 'Ingenico desk/3500',
          sn: '111',
          bank: 'Sber',
          image: '/ingenico-desk-3500.webp'
        },
        {
          id: v4(),
          type: 'POS Terminal',
          brand: 'Ingenico',
          model: 'desk/3500',
          name: 'Ingenico desk/3500',
          sn: '222',
          bank: 'Sber',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'A2-1',
      productName: 'Ingenico ipp220',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'POS Terminal',
          brand: 'Ingenico',
          model: 'ipp220',
          name: 'Ingenico ipp220',
          sn: '11ewr1',
          bank: 'Сбербанк',
          image: '/ingenico-ipp-220.webp'
        },
        {
          id: v4(),
          type: 'POS Terminal',
          brand: 'Ingenico',
          model: 'ipp220',
          name: 'Ingenico ipp220',
          sn: '11ewfdr1',
          bank: 'Сбербанк',
          image: '/ingenico-ipp-220.webp'
        },
        {
          id: v4(),
          type: 'POS Terminal',
          brand: 'Ingenico',
          model: 'desk/3500',
          name: 'Ingenico desk/3500',
          sn: '222',
          bank: 'Сбербанк',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'A2-2',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'Provod',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    }
  ]
}))
