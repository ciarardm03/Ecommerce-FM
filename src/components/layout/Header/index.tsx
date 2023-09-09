import clsx from 'clsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/base/avatar'
import { Image } from '@/components/base/Image'
import Cart from '@/components/Cart.tsx'
import { toastInfo } from '@/components/shared/Toast.tsx'
import React from 'react'
import { menus } from '@/constants'
import Sidepanel from '@/components/layout/Sidepanel'

function Header() {
  const [selectedMenu, setSelectedMenu] = React.useState<number>(0)
  const [openSidePanel, setOpenSidePanel] = React.useState<boolean>(false)

  return (
    <>
      <nav className={clsx(['flex items-center justify-between', 'h-[80px] lg:h-[100px] w-full', 'border-b', 'px-sm lg:px-sm xl:px-0 ' ])}>
        <div className={clsx([ 'flex items-center', 'first:space-x-sm space-x-md  ', 'h-full' ])}>
          <Image
            className={clsx(['lg:hidden', 'mt-1'])}
            src={'/assets/svg/icon-menu.svg'}
            alt={'Hamburger Icon'}
            onClick={() => setOpenSidePanel(true)}
          />

          <Image src={'/assets/svg/logo.svg'} alt={'Logo'} />

          <div className={clsx([ 'hidden', 'lg:flex-1 lg:inline-flex' ])}>
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

        <Sidepanel isOpen={openSidePanel} setIsOpen={setOpenSidePanel}/>

        <div className={clsx([ 'flex items-center', 'space-x-md' ])}>
          <Cart/>

          <Avatar className={clsx([
            'scale-100 transition ease-out duration-300',
            'hover:scale-125 hover:outline hover:outline-primaryOrange hover:outline-2 hover:ease-in hover:duration-300',
            'cursor-pointer',
          ])}
          >
            <AvatarImage src={'/assets/images/image-avatar.png'} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </>
  )
}

export default Header
