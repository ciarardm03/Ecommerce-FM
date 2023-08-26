import clsx from 'clsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/base/avatar'
import { Image } from '@/components/base/Image'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/base/popover'
import { Button } from '@/components/base/button'

const menus = [
  'Collections',
  'Men',
  'Women',
  'About',
  'Contact',
]

function Header() {
  const cartIsEmpty = false
  return (
    <>
      <nav className={clsx([ 'flex items-center justify-between', 'h-[100px] w-full', 'border-b' ])}>
        <div className={clsx([ 'flex items-center', 'space-x-md  ', 'h-full' ])}>
          <Image src={'./src/assets/svg/logo.svg'} alt={'Logo'} />

          <div className={clsx([ 'flex-1', 'h-full' ])}>
            <ul className={clsx([ 'flex items-center', 'h-full', 'space-x-sm', 'list-none' ])}>
              {
                menus.map((menu, key) => (
                  <li key={key}
                      className={clsx([
                        'relative',
                        'flex items-center justify-center',
                        'h-full w-24',
                        'p-sm',
                        'text-neutralDarkGrayishBlue',
                        'cursor-pointer',
                        'before:content-[""] before:h-1 before:w-[0%] before:bg-primaryOrange before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-300',
                        'hover:before:w-full hover:before:transition-all hover:before:duration-300',
                        'hover:text-neutralVeryDarkBlue hover:transition-all hover:duration-300',
                      ])}
                  >
                    {menu}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        <div className={clsx([ 'flex items-center', 'space-x-md' ])}>
          <Popover>
            <PopoverTrigger>
              <Image src={'./src/assets/svg/icon-cart.svg'} alt={'Logo'} />
            </PopoverTrigger>

            <PopoverContent className={clsx([ 'flex flex-col', 'bg-neutralWhite', 'mt-4' ])}>
              <h2 className={clsx([ 'font-bold px-sm pt-sm pb-2 tracking-wider'])}>
                Cart
              </h2>

              <div className={clsx([ 'border-b' ])} />

              <div className={clsx([ 'p-sm', {'min-h-[145px] min-w-[345px] flex justify-center items-center': cartIsEmpty} ])}>
                <p className={clsx([ {'hidden': !cartIsEmpty} ])}>Your cart is empty.</p>

                <div className={clsx([ 'flex justify-between items-center' ])}>
                  <div
                    className={clsx([ 'flex flex-col', ' h-full', 'pb-sm', 'overflow-y-auto' ])}>

                    <div className={clsx([ 'flex items-center', 'w-full', {'hidden': cartIsEmpty} ])}>
                      <img src={'src/assets/images/image-product-1-thumbnail.jpg'} alt={'Product One'}
                           className={clsx([ 'h-14', 'mr-2' ])} />

                      <div className={clsx([ 'flex flex-col' ])}>
                        <h4>Fall Limited Edition Sneakers</h4>
                        <h4>$125.00 x 3 <span className={clsx([ 'font-bold' ])}>$375.00</span></h4>
                      </div>
                    </div>
                  </div>
                  <Image className={clsx([ 'p-sm', 'cursor-pointer', {'hidden': cartIsEmpty} ])} src={'./src/assets/svg/icon-delete.svg'}
                         alt={'Delete Icon'} />
                </div>

                <Button className={clsx(['w-full', {'hidden': cartIsEmpty}])} size={'lg'}>Checkout</Button>
              </div>

            </PopoverContent>
          </Popover>

          <Avatar className={clsx([
            'scale-100 transition ease-out duration-300',
            'hover:scale-125 hover:outline hover:outline-primaryOrange hover:outline-2 hover:ease-in hover:duration-300',
            'cursor-pointer',
          ])}
          >
            <AvatarImage src={'./src/assets/images/image-avatar.png'} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </>
  )
}

export default Header
