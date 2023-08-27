import clsx from 'clsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/base/avatar'
import { Image } from '@/components/base/Image'
import Cart from '@/components/Cart.tsx'
import { toastInfo } from '@/components/shared/Toast.tsx'
import React from 'react'

const menus = [
  {
    id:1,
    name: 'Collections',
  },
  {
    id:2,
    name: 'Men',
  },
  {
    id:3,
    name: 'Women',
  },
  {
    id:4,
    name: 'About',
  },
  {
    id:5,
    name: 'Contact',
  },
]

function Header() {
  const [selectedMenu, setSelectedMenu] = React.useState<number>(0)
  return (
    <>
      <nav className={clsx([ 'flex items-center justify-between', 'h-[100px] w-full', 'border-b' ])}>
        <div className={clsx([ 'flex items-center', 'space-x-md  ', 'h-full' ])}>
          <Image src={'./src/assets/svg/logo.svg'} alt={'Logo'} />

          <div className={clsx([ 'flex-1', 'h-full' ])}>
            <ul className={clsx([ 'flex items-center', 'h-full', 'space-x-sm', 'list-none' ])}>
              {
                menus.map((menu, index) => {
                  const selected = index + 1 === selectedMenu
                  return(
                    <li key={index}
                        className={clsx([
                          'relative',
                          'flex items-center justify-center',
                          'h-full w-24',
                          'p-sm',
                          'text-neutralDarkGrayishBlue',
                          'cursor-pointer',
                          // 'before:content-[""] before:h-1 before:w-[0%] before:bg-primaryOrange before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-300',
                          // 'hover:before:w-full hover:before:transition-all hover:before:duration-300',
                          // 'hover:text-neutralVeryDarkBlue hover:transition-all hover:duration-300',
                          {'border-primaryOrange border-b-2 ease-in-out duration-75 text-neutralVeryDarkBlue': selected}
                        ])}
                        onClick={() => {
                          setSelectedMenu(menu.id)
                          toastInfo({message: 'This page is not availabe for now.'})
                        }}
                    >
                      {menu.name}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>

        <div className={clsx([ 'flex items-center', 'space-x-md' ])}>
          <Cart/>

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
