import { create } from 'zustand'
import { Item } from '@/store/boxes-store'
import { v4 } from 'uuid'

export type Engineer = {
  id: string
  firstName: string
  lastName: string
  items: Item[]
}

type State = {
  engineers: Engineer[]
}

export const useEngineersStore = create<State>(set => ({
  engineers: [
    {
      id: v4(),
      firstName: 'Максим',
      lastName: 'Луганский',
      items: [
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V10',
          name: 'Aisino V10',
          sn: '00011263042',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v10.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V10',
          name: 'Aisino V10',
          sn: '00011263042',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v10.webp'
        },
        {
          id: v4(),
          type: 'terminal',
          brand: 'Aisino',
          model: 'V10',
          name: 'Aisino V10',
          sn: '00011263042',
          bank: 'Альфа-Банк',
          status: 'good',
          image: '/aisino-v10.webp'
        }
      ]
    },
    { id: v4(), firstName: 'Григорий', lastName: 'Бондарь', items: [] },
    { id: v4(), firstName: 'Кирилл', lastName: 'Щербина', items: [] },
    { id: v4(), firstName: 'Роман', lastName: 'Синкин', items: [] },
    { id: v4(), firstName: 'Реваз', lastName: 'Рашоев', items: [] },
    { id: v4(), firstName: 'Роман', lastName: 'Юнин', items: [] },
    { id: v4(), firstName: 'Артём', lastName: 'Лиценко', items: [] },
    { id: v4(), firstName: 'Дмитрий', lastName: 'Данилов', items: [] },
    { id: v4(), firstName: 'Ярослав', lastName: 'Одинцов', items: [] },
    { id: v4(), firstName: 'Игорь', lastName: 'Лукьянов', items: [] },
    { id: v4(), firstName: 'Кирилл', lastName: 'Плужников', items: [] },
    { id: v4(), firstName: 'Вячеслав', lastName: 'Тузов', items: [] },
    { id: v4(), firstName: 'Вадим', lastName: 'Маршалкин', items: [] },
    { id: v4(), firstName: 'Руслан', lastName: 'Салимов', items: [] },
    { id: v4(), firstName: 'Дмитрий', lastName: 'Волошин', items: [] }
  ]
}))
