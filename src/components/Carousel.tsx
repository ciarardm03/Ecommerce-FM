import clsx from 'clsx'
import { Image } from '@/components/base/Image'
import { useAtom } from 'jotai/index'
import { lightboxAtom } from '@/states'

export default function Carousel() {
  const [ selectedProduct, setSelectedProduct ] = useAtom(lightboxAtom)

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
    <div className={clsx(
      [
        'h-[280px] w-full',
        'relative',
        'overflow-hidden',
        'md:hidden'
      ])}
    >
      <Image
        src={selectedProduct.src}
        alt={'Shoe Product Image'}
        className={clsx([ 'h-full w-full' ])}
      />

      <button
        className={clsx([ 'absolute left-4 top-[37%]', 'h-[42px] w-[42px]', 'flex-center text-center', 'rounded-full', 'bg-white', 'disabled:cursor-not-allowed' ])}
        disabled={selectedProduct.id === 0}
        onClick={() => handleAction(selectedProduct.id, true)}
      >
        <Image src={'src/assets/svg/icon-previous1.svg'} className={'w-[16px] h-[16px]'} alt={'previous icon'}/>
      </button>


      <button
        className={clsx([ 'absolute right-4 top-[37%]', 'h-[42px] w-[42px]', 'flex-center', 'rounded-full', 'bg-white', 'disabled:cursor-not-allowed' ])}
        disabled={selectedProduct.id === 3}
        onClick={() => handleAction(selectedProduct.id, false)}
      >
        <Image src={'src/assets/svg/icon-next1.svg'} className={'w-[16px] h-[16px]'} alt={'next icon'}/>
      </button>
    </div>
  )
}
