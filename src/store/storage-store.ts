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
        { id: v4(), title: 'A1-4', name: 'Ingenico iwl220', image: '/ingenico-iwl-220.webp', quantity: 3 }
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
      name: 'A4',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'A5',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'A5-1', name: '2D Barcode Сканер', image: '/pax-s-300.webp', quantity: 21 },
        { id: v4(), title: 'A5-2', name: 'ЭвоСкан Barcode Сканер', image: '/pax-s-300.webp', quantity: 14 },
        { id: v4(), title: 'A5-3', name: '2D Image Сканер', image: '/pax-s-300.webp', quantity: 14 }
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
      name: 'B4',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'B5',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'C1',
      image: '/sber.webp',
      items: []
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
      name: 'C4',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'D3-1', name: 'Tactilion', image: '/tactilion.webp', quantity: 19 },
        { id: v4(), title: 'D3-2', name: 'Tactilion mini', image: '/tactilion-mini.webp', quantity: 21 }
      ]
    },
    {
      id: v4(),
      name: 'C5',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'D1',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'D1-1', name: 'Эвотор 5', image: '/tactilion.webp', quantity: 7 },
        { id: v4(), title: 'D1-2', name: 'Эвотор 72', image: '/tactilion.webp', quantity: 9 },
        { id: v4(), title: 'D1-3', name: 'Эвотор ST 522', image: '/tactilion.webp', quantity: 6 }
      ]
    },
    {
      id: v4(),
      name: 'D2',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'D2-1', name: 'Эвотор ST 520', image: '/tactilion.webp', quantity: 7 },
        { id: v4(), title: 'D2-2', name: 'Эвотор ST 521', image: '/tactilion.webp', quantity: 8 },
        { id: v4(), title: 'D2-3', name: 'Эвотор ST 522', image: '/tactilion.webp', quantity: 6 }
      ]
    },
    {
      id: v4(),
      name: 'D3',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'D3-1', name: 'Эвотор ST 522', image: '/tactilion.webp', quantity: 20 },
        { id: v4(), title: 'D3-2', name: 'Эвотор ST522', image: '/tactilion-mini.webp', quantity: 20 },
        { id: v4(), title: 'D3-2', name: 'Эвотор ST511', image: '/tactilion-mini.webp', quantity: 3 }
      ]
    },
    {
      id: v4(),
      name: 'D4',
      image: '/sber.webp',
      items: [{ id: v4(), title: 'D4-1', name: 'Эвотор САЛЮТ-12Ф', image: '/tactilion.webp', quantity: 10 }]
    },
    {
      id: v4(),
      name: 'D5',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'E1',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'E1-1', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'E1-2', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'E1-3', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 2 }
      ]
    },
    {
      id: v4(),
      name: 'E2',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'E2-1', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'E2-2', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'E2-3', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 }
      ]
    },
    {
      id: v4(),
      name: 'E3',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'E3-1', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'E3-2', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'E3-3', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 }
      ]
    },
    {
      id: v4(),
      name: 'E4',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'E4-1', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'E4-2', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'E4-3', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 }
      ]
    },
    {
      id: v4(),
      name: 'E5',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'E5-1', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'E5-2', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'E5-3', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'E5-4', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'E5-5', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'E5-6', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 }
      ]
    },
    {
      id: v4(),
      name: 'F1',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'F1-1', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'F1-2', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'F1-3', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 }
      ]
    },
    {
      id: v4(),
      name: 'F2',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'F2-1', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'F2-2', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'F2-3', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 }
      ]
    },
    {
      id: v4(),
      name: 'F3',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'F3-1', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'F3-2', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'F3-3', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 }
      ]
    },
    {
      id: v4(),
      name: 'F4',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'F4-1', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'F4-2', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'F4-3', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 }
      ]
    },
    {
      id: v4(),
      name: 'F5',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'F5-1', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'F5-2', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 },
        { id: v4(), title: 'F5-3', name: 'Kozen P12 C-Graphite', image: '/kozen-p12-c-graphite.webp', quantity: 6 }
      ]
    },
    {
      id: v4(),
      name: 'G1',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'G2',
      image: '/sber.webp',
      items: [{ id: v4(), title: 'G2-1', name: 'Стойка короткая под КБ', image: '/tactilion.webp', quantity: 32 }]
    },
    {
      id: v4(),
      name: 'G3',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'G3-1', name: 'Хаб для POS-терминала P10F', image: '/tactilion.webp', quantity: 25 },
        { id: v4(), title: 'G3-2', name: 'Хаб для POS-терминала P10F', image: '/tactilion.webp', quantity: 45 },
        { id: v4(), title: 'G3-3', name: 'ПэйМоб-Ф', image: '/tactilion.webp', quantity: 10 }
      ]
    },
    {
      id: v4(),
      name: 'G4',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'G4-1', name: 'AQSI5-Ф', image: '/tactilion.webp', quantity: 20 },
        { id: v4(), title: 'G4-2', name: 'AQSI5-Ф', image: '/tactilion.webp', quantity: 29 }
      ]
    },
    {
      id: v4(),
      name: 'G5',
      image: '/sber.webp',
      items: [
        { id: v4(), title: 'G5-1', name: 'AQSI5-Ф', image: '/tactilion.webp', quantity: 70 },
        { id: v4(), title: 'G5-2', name: 'AQSI5-Ф', image: '/tactilion.webp', quantity: 20 }
      ]
    },
    {
      id: v4(),
      name: 'H1',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'H2',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'H3',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'H4',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'H5',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'I1',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'I2',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'I3',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'I4',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'I5',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'J1',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'J2',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'J3',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'J4',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'J5',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'K1',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'K2',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'K3',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'K4',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'L1',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'L2',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'L3',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'L4',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'L5',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'M1',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'M2',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'M3',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'M4',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'M5',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'N1',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'N2',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'N3',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'N4',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'N5',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'O1',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'O2',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'O3',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'O4',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'O5',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'P1',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'P2',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'P3',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'P4',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'P5',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'Q1',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'Q2',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'Q3',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'Q4',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'Q5',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'R1',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'R2',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'R3',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'R4',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'R5',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'S1',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'S2',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'S3',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'S4',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'S5',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'T1',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'T2',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'T3',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'T4',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'T5',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'U1',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'U2',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'U3',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'U4',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'V1',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'V2',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'V3',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'V4',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'W1',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'W2',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'W3',
      image: '/sber.webp',
      items: []
    },
    {
      id: v4(),
      name: 'W4',
      image: '/sber.webp',
      items: []
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
