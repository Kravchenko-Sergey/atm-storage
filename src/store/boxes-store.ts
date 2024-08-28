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
  searchValue: string
  updateSearchValue: (newValue: string) => void
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
          type: 'terminal',
          brand: 'Ingenico',
          model: 'desk/3500',
          name: 'Ingenico desk/3500',
          sn: '555',
          bank: 'Сбербанк',
          image: '/ingenico-desk-3500.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Ingenico',
          model: 'desk/3500',
          name: 'Ingenico desk/3500',
          sn: '222',
          bank: 'Сбербанк',
          image: '/ingenico-desk-3500.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Ingenico',
          model: 'desk/3500',
          name: 'Ingenico desk/3500',
          sn: '222',
          bank: 'Сбербанк',
          image: '/ingenico-desk-3500.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Ingenico',
          model: 'desk/3500',
          name: 'Ingenico desk/3500',
          sn: '222',
          bank: 'Сбербанк',
          image: '/ingenico-desk-3500.webp'
        },
        {
          id: v4(),
          type: 'terminal',
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
          type: 'terminal',
          brand: 'Ingenico',
          model: 'desk/3500',
          name: 'Ingenico desk/3500',
          sn: '111',
          bank: 'Sber',
          image: '/ingenico-desk-3500.webp'
        },
        {
          id: v4(),
          type: 'terminal',
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
          type: 'terminal',
          brand: 'Ingenico',
          model: 'ipp220',
          name: 'Ingenico ipp220',
          sn: '11ewr1',
          bank: 'Сбербанк',
          image: '/ingenico-ipp-220.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Ingenico',
          model: 'ipp220',
          name: 'Ingenico ipp220',
          sn: '11ewfdr1',
          bank: 'Сбербанк',
          image: '/ingenico-ipp-220.webp'
        },
        {
          id: v4(),
          type: 'terminal',
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
    },
    {
      id: v4(),
      title: 'A3-1',
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
    },
    {
      id: v4(),
      title: 'A4-1',
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
    },
    {
      id: v4(),
      title: 'A5-1',
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
    },
    {
      id: v4(),
      title: 'B1-1',
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
    },
    {
      id: v4(),
      title: 'B2-1',
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
    },
    {
      id: v4(),
      title: 'B3-1',
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
    },
    {
      id: v4(),
      title: 'B4-1',
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
    },
    {
      id: v4(),
      title: 'B5-1',
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
    },
    {
      id: v4(),
      title: 'C1-1',
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
    },
    {
      id: v4(),
      title: 'C2-1',
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
    },
    {
      id: v4(),
      title: 'C3-1',
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
    },
    {
      id: v4(),
      title: 'C4-1',
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
    },
    {
      id: v4(),
      title: 'C5-1',
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
    },
    {
      id: v4(),
      title: 'D1-1',
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
    },
    {
      id: v4(),
      title: 'D2-1',
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
    },
    {
      id: v4(),
      title: 'D3-1',
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
    },
    {
      id: v4(),
      title: 'D4-1',
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
    },
    {
      id: v4(),
      title: 'D5-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'Cable',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'E1-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'Cable',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'E2-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'Cable',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'E3-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'Cable',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'E4-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'Cable',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'E5-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'Cable',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'F1-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'F2-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'F3-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'F4-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'F5-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'F5-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'G1-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'G2-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'G3-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'G4-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'G5-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'H1-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'H2-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'H3-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'H4-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'H5-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'I1-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'I2-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'I3-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'I4-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'I5-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'J1-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'J2-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'J3-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'J4-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'J5-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'K1-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'K2-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'K3-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'K4-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'K5-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'L1-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'L2-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'L3-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'L4-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'L5-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'M1-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'M2-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'M3-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'M4-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'M5-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'N1-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'N2-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'N3-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'N4-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'N5-1',
      productName: 'Провод для Pax s300',
      image: '/sber.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 's300',
          name: 'Провод для Pax s300',
          image: '/ingenico-desk-3500.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'Q5-1',
      productName: 'Pax S920',
      image: '/alfa.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S920',
          name: 'Pax S920',
          sn: '',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-S920.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S920',
          name: 'Pax S920',
          sn: '',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-S920.webp'
        },
      ]
    },
    {
      id: v4(),
      title: 'P5-1',
      productName: 'Pax S200',
      image: '/alfa.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E092222',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E180229',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E180242',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E180212',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E178816',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E178814',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E101489',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E180219',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E178818',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E180237',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E061330',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E180211',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E089629',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E117625',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E182682',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E178823',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E178822',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E178837',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E061327',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E178840',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E182667',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E178842',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E178813',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E089617',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E098194',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E107324',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E178844',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E178815',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E178826',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E178830',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E178819',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E180239',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E180230',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E178841',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E125685',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E180222',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E089734',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E178839',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E178825',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        }
      ]
    }
  ],
  searchValue: '',
  updateSearchValue: newValue => set({ searchValue: newValue })
}))
