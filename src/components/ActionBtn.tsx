import clsx from 'clsx'
import { Button } from '@/components/base/button.tsx'
import { Image } from '@/components/base/Image'
import { ShoppingCart } from '@/components/shared/Icon.tsx'
import React from 'react'
import { toastInfo, toastSuccess } from '@/components/shared/Toast.tsx'
import { cartAtom } from '@/states'
import { useAtom } from 'jotai'

export default function ActionBtn() {
  const [ quantity, setQuantity ] = React.useState<number>(1)
  const [cartStorage, setCartStorage] = useAtom(cartAtom)
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  const cartIsEmpty = !cartStorage && Object.keys(cart).length <= 0

  function handleAddToCart() {
    const newQuantity = cart.quantity + quantity

    if (cartIsEmpty) {
      const newCart = {
        quantity: quantity,
        price: 125,
        total: quantity * 125,
      }

      localStorage.setItem('cart', JSON.stringify(newCart))
      setCartStorage(newCart)

      toastSuccess({ message: 'The item has been successfully added to your cart.' })
    } else {
      const updatedCart = {
        quantity: newQuantity,
        price: 125,
        total: newQuantity * 125,
      }

      localStorage.setItem('cart', JSON.stringify(updatedCart))

      setCartStorage(updatedCart)
      toastInfo({ message: 'Your cart has been updated successfully.' })
    }

    setQuantity(1)
  }

  return (
    <div className={clsx([ 'flex gap-x-sm ', 'mt-sm' ])}>

      <div className={clsx([ 'flex items-center', 'rounded-lg' ])}>
        <Button
          className={'rounded-none disabled:cursor-not-allowed'}
          variant={'secondary'}
          disabled={quantity === 1}
          onClick={() => setQuantity(quantity - 1)}
        >
          <Image
            className={clsx([ 'm-sm', 'cursor-pointer', { 'cursor-not-allowed': quantity === 1 } ])}
            src={'./src/assets/svg/icon-minus.svg'}
            alt={'Minus Icon'}
          />
        </Button>

        <div className={clsx([ 'bg-neutralLightGrayishBlue w-10 h-full flex-center' ])}>
          <h3 className={clsx([ 'text-center text-[18px] text-neutralVeryDarkBlue font-semibold' ])}>{quantity}</h3>
        </div>

        <Button
          className={'rounded-none'}
          variant={'secondary'}
          onClick={() => setQuantity(quantity + 1)}
        >
          <Image className={clsx([ 'm-sm', 'cursor-pointer' ])} src={'./src/assets/svg/icon-plus.svg'}
                 alt={'Plus Icon'} />
        </Button>
      </div>

      <Button className={clsx([ 'min-w-[260px]' ])} onClick={handleAddToCart}>
        <div className={clsx([ 'flex-center', 'gap-x-sm' ])}>
          <ShoppingCart className={'fill-neutralWhite'} />
          Add to cart
        </div>
      </Button>

    </div>
  )
}
