import type { PropsWithChildren } from 'react'
import { Gradient } from '@/components/gradient'
import { Header } from '@/components/header'
import { cn } from '@/utils/cn'

function Layout({
  children,
  className,
}: PropsWithChildren<{
  className?: string
}>) {
  return (
    <div
      className={cn(
        'relative mx-auto my-0 flex min-h-screen max-w-screen-2xl flex-col overflow-hidden bg-white shadow-2xl',
        className,
      )}
    >
      {/* below is the light purple block in the right half */}
      <Gradient className="absolute bottom-0 left-1/2 top-0 ml-28 hidden w-1/2 lg:block" />
      {/* this header have the icon inside it, and it shall be mawahebs logo */}
      <Header />
      {/* <Header title="Mawaheb Mena" /> */}
      <main className="flex-shrink-0 flex-grow items-center lg:flex">{children}</main>
    </div>
  )
}

export default Layout
