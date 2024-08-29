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
      title: 'Q2-1',
      productName: 'Pax D230',
      image: '/alfa.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330334142',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330334138',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330523490',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330335498',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330339461',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330340535',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330339446',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330328077',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330339448',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330630483',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330335098',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330523495',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330628990',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330335101',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330338434',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330523488',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330335497',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330339459',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330328082',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330315909',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'Q2-2',
      productName: 'Pax D230',
      image: '/alfa.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330335084',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330335086',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330334127',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330334133',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330624242',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330624091',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330624240',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330630482',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330624244',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330335484',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330315914',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330624094',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330335502',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330335496',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330334132',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330626187',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330315919',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330335091',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330523489',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330335499',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'Q3-1',
      productName: 'Aisino V37',
      image: '/alfa.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062022',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059433',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062021',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062018',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062019',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059446',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026049448',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055742',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059442',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055728',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059445',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026048926',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026049447',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059443',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026048925',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062027',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062012',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026049434',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055724',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059439',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062013',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026048912',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026048915',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055735',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026048919',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026048924',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059450',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055740',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062025',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062016',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026048927',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026049435',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026048920',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055723',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'Q3-2',
      productName: 'Aisino V37',
      image: '/alfa.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026049433',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062029',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026048921',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026049449',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026048928',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062020',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059437',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026048922',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059441',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059448',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062028',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055741',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055725',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059447',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055727',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026048914',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055732',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062011',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062023',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059432',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055733',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055726',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026049451',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026048918',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059449',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059435',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026048917',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055731',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
      ]
    },
    {
      id: v4(),
      title: 'Q3-3',
      productName: 'Aisino V37',
      image: '/alfa.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026049432',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062030',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055739',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062014',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062015',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059434',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062026',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059431',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055738',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062024',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055737',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026048916',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055730',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055729',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026062017',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059436',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026049450',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026049436',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026055736',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026048913',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026059444',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V37',
          name: 'Aisino V37',
          sn: '00026048923',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v37.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'Q4-1',
      productName: 'Pax D230',
      image: '/alfa.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330631054',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330624090',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330630477',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330630494',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330338437',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330334125',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330328080',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330339458',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330631046',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330624510',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'Q4-2',
      productName: 'Pax D230',
      image: '/alfa.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330339454',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330624082',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330529024',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330529022',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330630484',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330630479',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330624087',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330335094',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330626191',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330338435',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330624078',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330624089',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330523498',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330630476',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330338428',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330339453',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330630481',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330630488',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330338430',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330338429',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330338427',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330315921',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330529013',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230',
          name: 'Pax D230',
          sn: '2330631042',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'Q4-3',
      productName: 'Pax D230 wifi',
      image: '/alfa.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330700360',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330313946',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330308319',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330580726',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330313959',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330484148',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330308506',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330580738',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230',
          sn: '2330308520',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330308508',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330313555',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330449982',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330688821',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330449782',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330688827',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330700363',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330700366',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330688835',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330583459',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330700369',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi wifi',
          sn: '2330312555',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330688819',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330449772',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330688428',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'D230 wifi',
          name: 'Pax D230 wifi',
          sn: '2330688825',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-D230-wifi.webp'
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
          sn: '6N547759',
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
          sn: '6P142901',
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
          sn: '6N773407',
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
          sn: '6P863570',
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
          sn: '6N771886',
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
          sn: '6P133100',
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
          sn: '6N099037',
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
          sn: '6M997482',
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
          sn: '6R085314',
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
          sn: '6R190371',
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
          sn: '6P863571',
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
          sn: '6P142910',
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
          sn: '0681111953',
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
          sn: '6N547766',
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
          sn: '6N771857',
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
          sn: '6P863060',
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
          sn: '6N700786',
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
          sn: '6P477898',
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
          sn: '0681029274',
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
          sn: '6R079304',
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
          sn: '6P133103',
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
          sn: '6N771192',
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
          sn: '6P863555',
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
          sn: '6R079310',
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
          sn: '6N101294',
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
          sn: '6N045738',
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
          sn: '6N547753',
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
          sn: '6N759180',
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
          sn: '0681029276',
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
          sn: '6P863560',
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
          sn: '0681029278',
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
          sn: '6R079315',
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
          sn: '6P478251',
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
          sn: '6N700791',
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
          sn: '6P863563',
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
          sn: '6P136547',
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
          sn: '6P478237',
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
          sn: '0681111954',
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
          sn: '6R079312',
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
          sn: '6P863564',
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
          sn: '0681111952',
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
          sn: '6P136548',
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
          sn: '6P133093',
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
          sn: '0681111959',
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
          sn: '6N547762',
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
          sn: '6N763457',
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
          sn: '6P863567',
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
          sn: '6P133107',
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
          sn: '0681029273',
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
          sn: '6R079303',
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
          sn: '6R085315',
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
          sn: '6P133091',
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
          sn: '0681111955',
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
          sn: '6R079320',
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
          sn: '0681029275',
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
          sn: '0681111677',
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
          sn: '6P478247',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-S920.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'Q5-2',
      productName: 'Pax S920',
      image: '/alfa.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S920',
          name: 'Pax S920',
          sn: '6N099579',
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
          sn: '6N041783',
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
          sn: '6P137498',
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
          sn: '6P478246',
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
          sn: '6P142907',
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
          sn: '6N759235',
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
          sn: '6P137494',
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
          sn: '6N099571',
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
          sn: '6P133110',
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
          sn: '6P142900',
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
          sn: '6R079307',
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
          sn: '6N771841',
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
          sn: '6P361298',
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
          sn: '6R079301',
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
          sn: '6P361291',
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
          sn: '6R079317',
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
          sn: '6P361287',
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
          sn: '6N700792',
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
          sn: '6N759238',
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
          sn: '6N771190',
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
          sn: '6P137504',
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
          sn: '6P136543',
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
          sn: '6M300899',
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
          sn: '6N700793',
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
          sn: '6P863066',
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
          sn: '6N768558',
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
          sn: '6N773413',
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
          sn: '6N774703',
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
          sn: '6N773414',
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
          sn: '6P142898',
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
          sn: '6N773906',
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
          sn: '6P142903',
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
          sn: '6N099035',
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
          sn: '6N700783',
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
          sn: '6N042048',
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
          sn: '6N041632',
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
          sn: '6N099034',
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
          sn: '6P136533',
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
          sn: '6N040722',
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
          sn: '6N771195',
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
          sn: '6N759234',
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
          sn: '6N773913',
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
          sn: '6N774722',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/Pax-S920.webp'
        }
      ]
    },
    {
      id: v4(),
      title: 'Q5-3',
      productName: 'Pax S200',
      image: '/alfa.webp',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Pax',
          model: 'S200',
          name: 'Pax S200',
          sn: '5E085108',
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
          sn: '5E193689',
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
          sn: '5E092230',
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
          sn: '5E193700',
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
          sn: '5E089608',
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
          sn: '5E089625',
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
          sn: '5E178846',
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
          sn: '5E193688',
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
          sn: '5E089610',
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
          sn: '5E180240',
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
          sn: '5E092235',
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
          sn: '5E178832',
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
          sn: '5E180224',
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
          sn: '5E178836',
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
          sn: '5E180246',
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
          sn: '5E089607',
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
          sn: '5E180234',
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
          sn: '5E089624',
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
          sn: '5E182677',
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
          sn: '5E089601',
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
          sn: '5E182688',
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
          sn: '5E089599',
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
          sn: '5E092242',
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
          sn: '5E086015',
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
          sn: '5E178821',
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
          sn: '5E089605',
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
          sn: '5E125690',
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
          sn: '5E178849',
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
          sn: '5E182683',
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
          sn: '5E089595',
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
          sn: '5E089597',
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
          sn: '5E107330',
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
          sn: '5E178812',
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
          sn: '5E092232',
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
          sn: '5E107339',
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
          sn: '5E182661',
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
          sn: '5E178827',
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
          sn: '5E178820',
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
          sn: '5E180233',
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
          sn: '5E180214',
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
          sn: '5E182685',
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
          sn: '5E178824',
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
          sn: '5E193691',
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
          sn: '5E178831',
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
          sn: '5E180238',
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
          sn: '5E089748',
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
          sn: '5E092227',
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
          sn: '5E089609',
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
          sn: '5E075951',
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
          sn: '5E193696',
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
          sn: '5E178838',
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
          sn: '5E089594',
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
          sn: '5E180218',
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
          sn: '5E089627',
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
          sn: '5E089606',
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
          sn: '5E125692',
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
          sn: '5E180250',
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
          sn: '5E180241',
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
          sn: '5E182673',
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
          sn: '5E089596',
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
          sn: '5E089600',
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
          sn: '5E089598',
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
          sn: '5E107331',
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
          sn: '5E182656',
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
          sn: '5E182653',
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
          sn: '5E178847',
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
          sn: '5E089602',
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
          sn: '5E075953',
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
          sn: '5E193698',
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
          sn: '5E089613',
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
          sn: '5E089614',
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
          sn: '5E089628',
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
          sn: '5E193697',
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
          sn: '5E178811',
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
          sn: '5E089611',
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
          sn: '5E092220',
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
          sn: '5E089728',
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
          sn: '5E180228',
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
          sn: '5E092228',
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
          sn: '5E089632',
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
          sn: '5E182655',
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
          sn: '5E182668',
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
          sn: '5E180243',
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
          sn: '5E092208',
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
          sn: '5E089603',
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
          sn: '5E193690',
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
          sn: '5E107326',
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
          sn: '56995696',
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
          sn: '5E089612',
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
          sn: '5E092237',
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
          sn: '5E107325',
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
          sn: '5E089604',
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
          sn: '5E089621',
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
          sn: '5E098939',
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
          sn: '5E107329',
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
          sn: '5E107332',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/pax-s-200.webp'
        }
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
