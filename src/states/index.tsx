import { atom } from 'jotai'
import { SelectedProductStateType } from '@/types'

interface CartType {
  quantity:number
  price:number
  total:number
}
export const cartAtom = atom<CartType | undefined>(undefined)

export const lightboxAtom = atom<SelectedProductStateType>({
  id: 0,
  src: '/assets/images/image-product-1.jpg',
  alt: 'Product 1',
})

export const isModalOpenAtom = atom<boolean>(false)
