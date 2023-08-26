import MainLayout from '@/components/layout/MainLayout'
import clsx from 'clsx'
import { Button } from '@/components/base/button'
import { Image } from '@/components/base/Image'
import { ShoppingCart } from '@/components/shared/Icon'

function App() {
  return (
    <>
      <MainLayout>
        <div className={clsx([ 'flex', 'gap-x-md' ])}>
          <div className={clsx([ 'w-full flex flex-col gap-md items-center' ])}>
            <Image src={'/src/assets/images/image-product-1.jpg'} alt={'Shoe Product Image'} className={clsx(['max-h-[460px]', 'rounded-3xl'])}/>

            <div className={clsx(['min-w-[460px] w-full', 'flex justify-center items-center gap-x-sm'])}>
              <Image src={'/src/assets/images/image-product-1-thumbnail.jpg'} alt={'Shoe Product Image'} className={clsx(['max-h-[103px]', 'rounded-xl'])}/>
              <Image src={'/src/assets/images/image-product-2-thumbnail.jpg'} alt={'Shoe Product Image'} className={clsx(['max-h-[103px]', 'rounded-xl'])}/>
              <Image src={'/src/assets/images/image-product-3-thumbnail.jpg'} alt={'Shoe Product Image'} className={clsx(['max-h-[103px]', 'rounded-xl'])}/>
              <Image src={'/src/assets/images/image-product-4-thumbnail.jpg'} alt={'Shoe Product Image'} className={clsx(['max-h-[103px]', 'rounded-xl'])}/>
            </div>

          </div>

          <div className={clsx([ 'w-full', 'flex flex-col', 'py-lg px-sm', 'gap-y-md' ])}>
            <div className={clsx(['header-wrapper'])}>
              <h3 className={clsx([ 'sub-header', 'mb-sm'  ])}>Sneakears company</h3>
              <h1 className={clsx([ 'header' ])}>Fall Limited Edition Sneakers</h1>
            </div>

            <p className={clsx([ 'paragraph', 'tracking-widest', ])}>
              These low-profile sneakers are your prefect casual wear comapanion. Featuring a durable rubber outer sole.
              they'll withstand everything the weather can offer.
            </p>

            <div className={clsx(['price-wrapper'])}>
              <div className={clsx([ 'flex items-center', 'gap-x-sm', 'mb-xs' ])}>
                <h2 className={clsx(['text-3xl text-neutralVeryDarkBlue font-semibold'])}>$125.00</h2>
                <h3 className={clsx(['text-xl text-primaryOrange font-semibold', 'p-1', 'rounded-lg', 'bg-primaryPaleOrange'])}>50%</h3>
              </div>

              <h4  className={clsx(['text-neutralGrayishBlue text-lg font-semibold line-through'])}>$250.00</h4>
            </div>

            <div className={clsx(['action-wrapper', 'flex gap-x-sm'])}>

              <div className={clsx(['flex-center gap-sm', 'bg-neutralLightGrayishBlue', 'rounded-lg'])}>
                <Button variant={'secondary'}>
                  <Image className={clsx([ 'p-sm', 'cursor-pointer' ])} src={'./src/assets/svg/icon-minus.svg'}
                         alt={'Minus Icon'} />
                </Button>

                <h3 className={clsx(['text-[18px] text-neutralVeryDarkBlue font-semibold'])}>0</h3>


                <Button variant={'secondary'}>
                  <Image className={clsx([ 'p-sm', 'cursor-pointer' ])} src={'./src/assets/svg/icon-plus.svg'}
                         alt={'Plus Icon'} />
                </Button>
              </div>

              <Button className={clsx(['min-w-[260px]'])}>
                <div className={clsx(['flex-center', 'gap-x-sm'])}>
                  <ShoppingCart className={'fill-neutralWhite'}/>
                  Add to cart
                </div>
              </Button>
            </div>
          </div>

        </div>
      </MainLayout>
    </>
  )
}

export default App
