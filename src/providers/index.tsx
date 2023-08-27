import React from 'react'
import { Provider as JotaiProvider } from 'jotai'
import Toast from '@/components/shared/Toast.tsx'

export default function Providers({children}: {children: React.ReactNode}){
  return(
    <>
      <JotaiProvider>
        {children}
      </JotaiProvider>

      <Toast/>
    </>
  )
}
