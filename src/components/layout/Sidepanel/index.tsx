import React from 'react'
import clsx from 'clsx'
import { Image } from '@/components/base/Image'
import { menus } from '@/constants'
import { toastInfo } from '@/components/shared/Toast.tsx'
import { SidePanelProps } from '@/types'

export default function Sidepanel({ isOpen, setIsOpen }: SidePanelProps) {
  const [ selectedMenu, setSelectedMenu ] = React.useState<number>(0)

  const [ isScreenGreaterThan1024, setIsScreenGreaterThan1024 ] = React.useState(
    window.innerWidth >= 1024,
  )

  React.useEffect(() => {
    // Function to handle window resize event
    const handleResize = () => {
      setIsScreenGreaterThan1024(window.innerWidth >= 1024)
    }

    // Attach the event listener
    window.addEventListener('resize', handleResize)

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty dependency array to run the effect only once

  React.useEffect(() => {
    if (isOpen && isScreenGreaterThan1024) {
      setIsOpen(false)
    }
  }, [ isOpen, isScreenGreaterThan1024 ])

  return (
    <div className={clsx([ 'lg:hidden' ])}>
      <div className={clsx(
        [
          'absolute top-0 left-0',
          'w-full h-screen',
          'bg-black/60 backdrop-blur-sm z-20',
          'translate-x-0 transform transition-transform duration-300 delay-100',
          { '!-translate-x-full': !isOpen },
        ])}
           onClick={() => setIsOpen(false)}
      />
      <div className={clsx(
        [
          'fixed left-0 top-0 bottom-0',
          'w-[240px]',
          'bg-neutralWhite',
          'p-sm',
          'z-30',
          'translate-x-0 transform transition-transform duration-300 delay-200',
          { '!-translate-x-full ': !isOpen },
        ])}
      >
        <div className={clsx('h-[65px] pt-2.5')}>
          <Image
            className={clsx(['cursor-pointer z-50'])}
            src={'/assets/svg/icon-close.svg'}
            alt={'Close Icon'}
            onClick={() => setIsOpen(false)}
          />
        </div>

        <ul className={clsx([ 'flex flex-col justify-start', 'h-full', 'space-y-sm', 'list-none', 'pt-sm' ])}>
          {
            menus.map((menu, index) => {
              const selected = index + 1 === selectedMenu
              return (
                <li key={index}
                    className={clsx([
                      'relative',
                      'text-neutralDarkGrayishBlue font-bold',
                      'cursor-pointer',
                      { 'ease-in-out duration-75 text-primaryOrange': selected },
                    ])}
                    onClick={() => {
                      setSelectedMenu(menu.id)
                      toastInfo({ message: 'This page is not availabe for now.' })
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

  )
}
