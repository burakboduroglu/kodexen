'use client'

export function LeftSidebar() {

  return (
    <aside className='hidden lg:block w-[320px] flex-none'>
      <div className='sticky top-0 h-screen flex flex-col px-4'>
        <nav className='space-y-2 mt-4'></nav>
      </div>
    </aside>
  )
}
