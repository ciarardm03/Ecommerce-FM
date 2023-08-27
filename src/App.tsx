import MainLayout from '@/components/layout/MainLayout'
import clsx from 'clsx'
import Lightbox from '@/components/Lightbox.tsx'
import ActionBtn from '@/components/ActionBtn.tsx'

function App() {
  return (
    <>
      <MainLayout>
        <div className={clsx([ 'flex', 'gap-x-md' ])}>
          <div className={clsx([ 'w-full flex flex-col gap-md items-center' ])}>
            <Lightbox/>
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

            <ActionBtn/>
          </div>

        </div>
      </MainLayout>
    </>
  )
}

export default App
