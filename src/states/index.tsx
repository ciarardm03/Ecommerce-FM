import { atom } from 'jotai'

interface CartType {
  quantity:number
  price:number
  total:number
}
export const cartAtom = atom<CartType | undefined>(undefined)
