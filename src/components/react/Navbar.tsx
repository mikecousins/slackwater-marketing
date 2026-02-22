import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

const links = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/company', label: 'Company' },
  { href: '/blog', label: 'Blog' },
  { href: 'https://app.slackwater.ca', label: 'Login' },
]

function PlusGridIcon({
  className = '',
  placement,
}: {
  className?: string
  placement: `${'top' | 'bottom'} ${'right' | 'left'}`
}) {
  let [yAxis, xAxis] = placement.split(' ')
  let yClass = yAxis === 'top' ? '-top-2' : '-bottom-2'
  let xClass = xAxis === 'left' ? '-left-2' : '-right-2'

  return (
    <svg
      viewBox="0 0 15 15"
      aria-hidden="true"
      className={clsx(className, 'absolute size-[15px] fill-black/10', yClass, xClass)}
    >
      <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
    </svg>
  )
}

function PlusGridItem({
  className = '',
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={clsx(className, 'group/item relative')}>
      <PlusGridIcon placement="top left" className="hidden group-first/item:block" />
      <PlusGridIcon placement="top right" />
      <PlusGridIcon placement="bottom left" className="hidden group-first/item:group-last/row:block" />
      <PlusGridIcon placement="bottom right" className="hidden group-last/row:block" />
      {children}
    </div>
  )
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-cyan-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13M12 3C9 5.5 5.5 10 5 16h14c-.5-6-4-10.5-7-13Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 19.5c2-1.5 4.5-2 6-2s3 .5 3 .5 1.5-.5 3-.5 4 .5 6 2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 22c2-1.5 4.5-2 6-2s3 .5 4 .5 1.5-.5 3-.5 4 .5 7 2" />
      </svg>
      <span className="text-3xl">Slackwater</span>
    </div>
  )
}

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <a
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply hover:bg-black/[2.5%]"
          >
            {label}
          </a>
        </PlusGridItem>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <a href={href} className="text-base font-medium text-gray-950">
              {label}
            </a>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({
  bannerText,
  bannerHref,
}: {
  bannerText?: string
  bannerHref?: string
}) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <div>
        <div className="group/row relative isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
          >
            <div className="absolute inset-x-0 top-0 border-t border-black/5"></div>
            <div className="absolute inset-x-0 top-2 border-t border-black/5"></div>
            <div className="absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block"></div>
            <div className="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block"></div>
          </div>
          <div className="relative flex justify-between">
            <div className="relative flex gap-6">
              <PlusGridItem className="py-3">
                <a href="/" title="Home">
                  <Logo />
                </a>
              </PlusGridItem>
              {bannerText && bannerHref && (
                <div className="relative hidden items-center py-3 lg:flex">
                  <a
                    href={bannerHref}
                    className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white hover:bg-fuchsia-950/30"
                  >
                    {bannerText}
                  </a>
                </div>
              )}
            </div>
            <DesktopNav />
            <MobileNavButton />
          </div>
        </div>
      </div>
      <MobileNav />
    </Disclosure>
  )
}
