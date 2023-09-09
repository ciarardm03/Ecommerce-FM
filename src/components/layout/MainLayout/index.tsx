import Header from '@/components/layout/Header'
import clsx from 'clsx'

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={clsx([ 'flex flex-col', 'mx-auto', 'gap-0 md:gap-md', 'w-full xl:w-[1280px] min-h-screen' ])}>
        <Header />
        <section className="flex-1 sm:md lg:p-lg ">
          {children}
        </section>
      </main>
    </>
  )
}

export default MainLayout
