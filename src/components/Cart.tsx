import { Popover, PopoverContent, PopoverTrigger } from '@/components/base/popover.tsx'
import { Image } from '@/components/base/Image'
import clsx from 'clsx'
import { Button } from '@/components/base/button.tsx'
import { cartAtom } from '@/states'
import { useAtom } from 'jotai'
import { toastSuccess } from '@/components/shared/Toast.tsx'

export default function Cart() {
  const [cartStorage, setCartStorage] = useAtom(cartAtom)
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  const cartIsEmpty = !cartStorage && Object.keys(cart).length <= 0

  function handleDeleteCart(){
    localStorage.removeItem('cart')
    setCartStorage(undefined)
    toastSuccess({message: 'Successfully remove item from your cart.'})
  }

  return (
    <Popover>
      <PopoverTrigger className={clsx(['relative'])}>
        <div className={clsx(['h-5 w-5', 'flex-center', 'absolute -top-3 -right-2', 'rounded-full bg-primaryOrange -z-10', {'hidden': cartIsEmpty}])}>
          <p className={clsx(['text-[10px] font-bold text-center text-white'])}>
            {cart.quantity}
          </p>
        </div>

        <Image src={'./src/assets/svg/icon-cart.svg'} alt={'Logo'} />
      </PopoverTrigger>

      <PopoverContent className={clsx([ 'shadow-xl flex flex-col', 'bg-neutralWhite', 'mt-4' ])}>
        <h2 className={clsx([ 'font-bold px-sm pt-sm pb-sm tracking-wider' ])}>
          Cart
        </h2>

        <div className={clsx([ 'border-b' ])} />

        <div
          className={clsx([ 'p-sm', { 'min-h-[145px] min-w-[345px] flex justify-center items-center': cartIsEmpty } ])}>
          <p className={clsx([ { 'hidden': Object.keys(cart).length > 0 } ])}>Your cart is empty.</p>

          <div className={clsx([ 'flex justify-between items-center', { 'hidden': cartIsEmpty } ])}>
            <div
              className={clsx([ 'flex flex-col', ' h-full', 'pb-sm', 'overflow-y-auto' ])}>

              <div className={clsx([ 'flex items-center', 'w-full' ])}>
                <img src={'src/assets/images/image-product-1-thumbnail.jpg'} alt={'Product One'}
                     className={clsx([ 'h-14', 'mr-2' ])} />

                <div className={clsx([ 'flex flex-col' ])}>
                  <h4>Fall Limited Edition Sneakers</h4>
                  <h4>{`$125.00 x ${cart.quantity} `}
                    <span className={clsx([ 'font-bold' ])}>{`$${cart.total}.00`}</span>
                  </h4>
                </div>
              </div>
            </div>
            <Image
              className={clsx([ 'p-sm', 'cursor-pointer', { 'hidden': cartIsEmpty } ])}
              src={'./src/assets/svg/icon-delete.svg'}
              alt={'Delete Icon'}
              onClick={handleDeleteCart}
            />
          </div>

          <Button className={clsx([ 'w-full', { 'hidden': cartIsEmpty } ])} size={'lg'}>Checkout</Button>
        </div>

      </PopoverContent>
    </Popover>

  )
}
