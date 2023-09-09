import clsx from 'clsx'
import { images } from '@/constants'
import { Image } from '@/components/base/Image'
import { useAtom } from 'jotai'
import { lightboxAtom } from '@/states'

export default function LightboxSmallComponent() {
  const [ selectedProduct, setSelectedProduct ] = useAtom(lightboxAtom)

  return (
    <div className={clsx([ 'min-w-[460px] w-full', 'flex justify-center items-center gap-x-sm ' ])}>
      {
        images.map((image, index) => {
          const selected = index === selectedProduct.id
          return (
            <button
              key={image.id}
              onClick={() => setSelectedProduct({ id: image.id, src: image.src, alt: image.alt })}
              className={clsx([ 'rounded-xl', { 'border-primaryOrange border-2': selected } ])}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className={clsx([ 'max-h-[103px]', 'rounded-xl', 'hover:opacity-20 bg-white', { 'opacity-20': selected } ])}
              />
            </button>

          )
        })
      }
    </div>
  )
}
