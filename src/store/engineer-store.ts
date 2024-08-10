import { create } from 'zustand'
import { v4 } from 'uuid'

type Item = {
  id: string
  title: string
  name: string
  quantity: number
}

type Engineer = {
  id: string
  fullName: string
  image: string[]
  items: Item[]
}

type State = {
  engineers: Engineer[]
}

export const useEngineerStore = create<State>(set => ({
  engineers: [
    {
      id: v4(),
      fullName: 'Луганский Максим',
      image: ['/sber.webp', '/alfa.webp', '/raif.webp', '/pochta.webp', '/psb.webp', '/otkrytiye.webp'],
      items: [
        { id: v4(), title: 'A1-1', name: 'Ingenico desk/3500', quantity: 7 },
        { id: v4(), title: 'A1-2', name: 'Ingenico ist250', quantity: 7 },
        { id: v4(), title: 'A1-3', name: 'Ingenico ist220', quantity: 8 }
      ]
    },
    {
      id: v4(),
      fullName: 'Бондарь Григорий',
      image: ['/sber.webp'],
      items: [
        { id: v4(), title: 'A2-1', name: 'Ingenico ipp220', quantity: 136 },
        { id: v4(), title: 'A2-2', name: 'Ingenico isc250', quantity: 11 }
      ]
    },
    {
      id: v4(),
      fullName: 'Тузов Вячеслав',
      image: ['/sber.webp'],
      items: [
        { id: v4(), title: 'A2-1', name: 'Ingenico ipp220', quantity: 136 },
        { id: v4(), title: 'A2-2', name: 'Ingenico isc250', quantity: 11 }
      ]
    },
    {
      id: v4(),
      fullName: 'Рашоев Реваз',
      image: ['/sber.webp'],
      items: [
        { id: v4(), title: 'A2-1', name: 'Ingenico ipp220', quantity: 136 },
        { id: v4(), title: 'A2-2', name: 'Ingenico isc250', quantity: 11 }
      ]
    },
    {
      id: v4(),
      fullName: 'Одинцов Ярослав',
      image: ['/sber.webp'],
      items: [
        { id: v4(), title: 'A2-1', name: 'Ingenico ipp220', quantity: 136 },
        { id: v4(), title: 'A2-2', name: 'Ingenico isc250', quantity: 11 }
      ]
    },
    {
      id: v4(),
      fullName: 'Лукьянов Игорь',
      image: ['/sber.webp'],
      items: [
        { id: v4(), title: 'A2-1', name: 'Ingenico ipp220', quantity: 136 },
        { id: v4(), title: 'A2-2', name: 'Ingenico isc250', quantity: 11 }
      ]
    },
    {
      id: v4(),
      fullName: 'Маршалкин Вадим',
      image: ['/sber.webp'],
      items: [
        { id: v4(), title: 'A2-1', name: 'Ingenico ipp220', quantity: 136 },
        { id: v4(), title: 'A2-2', name: 'Ingenico isc250', quantity: 11 }
      ]
    },
    {
      id: v4(),
      fullName: 'Плужников Кирилл',
      image: ['/sber.webp'],
      items: [
        { id: v4(), title: 'A2-1', name: 'Ingenico ipp220', quantity: 136 },
        { id: v4(), title: 'A2-2', name: 'Ingenico isc250', quantity: 11 }
      ]
    },
    {
      id: v4(),
      fullName: 'Синкин Роман',
      image: ['/sber.webp'],
      items: [
        { id: v4(), title: 'A2-1', name: 'Ingenico ipp220', quantity: 136 },
        { id: v4(), title: 'A2-2', name: 'Ingenico isc250', quantity: 11 }
      ]
    },
    {
      id: v4(),
      fullName: 'Лиценко Артём',
      image: ['/sber.webp'],
      items: [
        { id: v4(), title: 'A2-1', name: 'Ingenico ipp220', quantity: 136 },
        { id: v4(), title: 'A2-2', name: 'Ingenico isc250', quantity: 11 }
      ]
    },
    {
      id: v4(),
      fullName: 'Юнин Роман',
      image: ['/sber.webp'],
      items: [
        { id: v4(), title: 'A2-1', name: 'Ingenico ipp220', quantity: 136 },
        { id: v4(), title: 'A2-2', name: 'Ingenico isc250', quantity: 11 }
      ]
    },
    {
      id: v4(),
      fullName: 'Дмитрий Данилов',
      image: ['/sber.webp'],
      items: [
        { id: v4(), title: 'A2-1', name: 'Ingenico ipp220', quantity: 136 },
        { id: v4(), title: 'A2-2', name: 'Ingenico isc250', quantity: 11 }
      ]
    },
    {
      id: v4(),
      fullName: 'Волошин Дмитрий',
      image: ['/sber.webp'],
      items: [
        { id: v4(), title: 'A2-1', name: 'Ingenico ipp220', quantity: 136 },
        { id: v4(), title: 'A2-2', name: 'Ingenico isc250', quantity: 11 }
      ]
    },
    {
      id: v4(),
      fullName: 'Щербина Кирилл',
      image: ['/sber.webp'],
      items: [
        { id: v4(), title: 'A2-1', name: 'Ingenico ipp220', quantity: 136 },
        { id: v4(), title: 'A2-2', name: 'Ingenico isc250', quantity: 11 }
      ]
    }
  ]
}))
