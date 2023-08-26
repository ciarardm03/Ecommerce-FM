import Header from '@/components/layout/Header'
import clsx from 'clsx'

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={clsx([ 'flex flex-col', 'mx-auto', 'gap-md', 'w-full xl:w-[1280px] min-h-screen' ])}>
        <Header />
        <section className="flex-1 p-lg ">
          {children}
        </section>
      </main>
    </>
  )
}

export default MainLayout
