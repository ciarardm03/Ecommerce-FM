import { Image } from '@/components/base/Image'
import clsx from 'clsx'
import React from 'react'
import { SelectedProductStateType } from '@/types'

const images = [
  {
    id: 0,
    src: '/src/assets/images/image-product-1.jpg',
    alt: 'Product 1',
  },
  {
    id: 1,
    src: '/src/assets/images/image-product-2.jpg',
    alt: 'Product 2',
  },
  {
    id: 2,
    src: '/src/assets/images/image-product-3.jpg',
    alt: 'Product 3',
  },
  {
    id: 3,
    src: '/src/assets/images/image-product-4.jpg',
    alt: 'Product 4',
  },
]

export default function Lightbox() {
  const [ selectedProduct, setSelectedProduct ] = React.useState<SelectedProductStateType>({
    id: 0,
    src: '/src/assets/images/image-product-1.jpg',
  })

  return (
    <>
      <Image src={selectedProduct.src} alt={'Shoe Product Image'}
             className={clsx([ 'max-h-[460px]', 'rounded-3xl', 'animate' ])} />

      <div className={clsx([ 'min-w-[460px] w-full', 'flex justify-center items-center gap-x-sm ' ])}>
        {
          images.map((image, index) => {
            const selected = index === selectedProduct.id
            return (
              <button
                key={image.id}
                onClick={() => setSelectedProduct({ id: image.id, src: image.src })}
                className={clsx([ 'rounded-xl', { 'border-primaryOrange border-2': selected } ])}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className={clsx([ 'max-h-[103px]', 'rounded-xl', 'hover:opacity-20', { 'opacity-20': selected } ])}
                />
              </button>

            )
          })
        }
      </div>
    </>
  )
}
