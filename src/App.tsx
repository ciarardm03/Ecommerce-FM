import MainLayout from '@/components/layout/MainLayout'
import clsx from 'clsx'
import Lightbox from '@/components/Lightbox.tsx'
import ActionBtn from '@/components/ActionBtn.tsx'
import Carousel from '@/components/Carousel.tsx'

function App() {
  return (
    <>
      <MainLayout>
        <div className={clsx([ 'flex flex-col lg:flex-row', 'gap-x-md' ])}>
          <div className={clsx([ 'hidden', 'w-full md:flex flex-col gap-md items-center' ])}>
            <Lightbox/>
          </div>

          <Carousel/>

          <div className={clsx([ 'w-full', 'flex flex-col', 'py-md px-sm md:py-lg md:px-lg', 'gap-y-sm md:gap-y-md' ])}>
            <div className={clsx(['header-wrapper'])}>
              <h3 className={clsx([ 'sub-header', 'mb-sm'  ])}>Sneakears company</h3>
              <h1 className={clsx([ 'header' ])}>Fall Limited Edition Sneakers</h1>
            </div>

            <p className={clsx([ 'paragraph', 'tracking-widest', ])}>
              These low-profile sneakers are your prefect casual wear comapanion. Featuring a durable rubber outer sole.
              they'll withstand everything the weather can offer.
            </p>

            <div className={clsx(['price-wrapper', 'flex items-center justify-between md:block'])}>
              <div className={clsx([ 'flex items-center', 'gap-x-sm', 'md:mb-xs' ])}>
                <h2 className={clsx(['text-xl md:text-3xl text-neutralVeryDarkBlue font-semibold'])}>$125.00</h2>
                <h3 className={clsx(['text-lg md:text-xl text-primaryOrange font-semibold', 'p-1', 'rounded-lg', 'bg-primaryPaleOrange'])}>50%</h3>
              </div>

              <h4  className={clsx(['text-neutralGrayishBlue text-base md:text-lg font-semibold line-through'])}>$250.00</h4>
            </div>

            <ActionBtn/>
          </div>

        </div>
      </MainLayout>
    </>
  )
}

export default App
