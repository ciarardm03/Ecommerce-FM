import { Dialog, DialogContent, DialogTrigger } from '@/components/base/dialog.tsx'
import { Image } from '@/components/base/Image'
import clsx from 'clsx'
import { isModalOpenAtom, lightboxAtom } from '@/states'
import LightboxSmallComponent from '@/components/LightboxSmallComponent.tsx'
import { useAtom } from 'jotai'
import { ColoredNextIcon, ColoredPreviousIcon, NextIcon, PreviousIcon } from '@/components/shared/Icon.tsx'
import React from 'react'

export default function LightboxModal() {
  const [ selectedProduct, setSelectedProduct ] = useAtom(lightboxAtom)
  const [ isModalOpen, setIsModalOpen ] = useAtom(isModalOpenAtom)
  const [ isHoverPrev, setIsHoverPrev ] = React.useState(false)
  const [ isHoverNext, setIsHoverNext ] = React.useState(false)

  function handleAction(id: number, isPrev?: boolean) {
    let newId

    if (isPrev) {
      newId = id -= 1
    } else {
      newId = id += 1
    }

    setSelectedProduct({ ...selectedProduct, id: newId })

    switch (newId) {
      case 0:
        setSelectedProduct({
          id: 0,
          src: '/src/assets/images/image-product-1.jpg',
          alt: 'Product 1',
        })
        break
      case 1:
        setSelectedProduct({
          id: 1,
          src: '/src/assets/images/image-product-2.jpg',
          alt: 'Product 2',
        })
        break
      case 2:
        setSelectedProduct({
          id: 2,
          src: '/src/assets/images/image-product-3.jpg',
          alt: 'Product 3',
        })
        break
      case 3:
        setSelectedProduct({
          id: 3,
          src: '/src/assets/images/image-product-4.jpg',
          alt: 'Product 4',
        })
        break
    }
  }

  return (
    <Dialog onOpenChange={() => setIsModalOpen(!isModalOpen)}>
      <DialogTrigger>
        <Image
          src={selectedProduct.src}
          alt={'Shoe Product Image'}
          className={clsx([ 'max-h-[460px]', 'rounded-3xl' ])}
        />
      </DialogTrigger>

      <DialogContent className={clsx([ 'border-none shadow-none gap-y-[40px]' ])}>
        <div className={clsx([ 'max-h-[600px] w-full', 'rounded-3xl', 'overflow-hidden' ])}>
          <Image
            src={selectedProduct.src}
            alt={'Shoe Product Image'}
            className={clsx([ 'h-full w-full' ])}
          />

          <button
            className={clsx([ 'absolute left-0 top-[37%]', 'h-[60px] w-[60px]', 'flex-center', 'rounded-full', 'bg-white', 'disabled:bg-neutralLightGrayishBlue/20 disabled:cursor-not-allowed' ])}
            onMouseEnter={() => setIsHoverPrev(true)}
            onMouseLeave={() => setIsHoverPrev(false)}
            disabled={selectedProduct.id === 0}
            onClick={() => handleAction(selectedProduct.id, true)}
          >
            {
              isHoverPrev ? <ColoredPreviousIcon /> : <PreviousIcon />
            }
          </button>

          <button
            className={clsx([ 'absolute right-0 top-[37%]', 'h-[60px] w-[60px]', 'flex-center', 'rounded-full', 'bg-white', 'disabled:bg-neutralLightGrayishBlue/20 disabled:cursor-not-allowed' ])}
            onMouseEnter={() => setIsHoverNext(true)}
            onMouseLeave={() => setIsHoverNext(false)}
            disabled={selectedProduct.id === 3}
            onClick={() => handleAction(selectedProduct.id, false)}
          >
            {
              isHoverNext ? <ColoredNextIcon /> : <NextIcon />
            }
          </button>
        </div>

        <LightboxSmallComponent />
      </DialogContent>
    </Dialog>
  )
}
