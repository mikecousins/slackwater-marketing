import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { clsx } from 'clsx'
import { useState } from 'react'

const tiers = [
  {
    name: 'Starter' as const,
    slug: 'starter',
    href: 'https://app.slackwater.ca',
    features: [
      { section: 'Planning', name: 'Retirement projections', value: true },
      { section: 'Planning', name: 'Financial plan per year', value: 'Basic' },
      { section: 'Planning', name: 'What-if scenarios', value: true },
      { section: 'Planning', name: 'Account balance tracking', value: true },
      { section: 'Planning', name: 'Tax-efficient savings guidance', value: false },
      { section: 'Withdrawals', name: 'Basic withdrawal strategies', value: true },
      { section: 'Withdrawals', name: 'Advanced withdrawal strategies', value: false },
      { section: 'Withdrawals', name: 'Fully optimized withdrawal plan', value: false },
      { section: 'Withdrawals', name: 'Market-responsive adjustments', value: false },
      { section: 'Apps & Support', name: 'Mobile app', value: true },
      { section: 'Apps & Support', name: 'Apple Watch app & widgets', value: false },
      { section: 'Apps & Support', name: 'Email support', value: false },
    ],
  },
  {
    name: 'Pro' as const,
    slug: 'pro',
    href: 'https://app.slackwater.ca',
    features: [
      { section: 'Planning', name: 'Retirement projections', value: true },
      { section: 'Planning', name: 'Financial plan per year', value: 'Detailed' },
      { section: 'Planning', name: 'What-if scenarios', value: true },
      { section: 'Planning', name: 'Account balance tracking', value: true },
      { section: 'Planning', name: 'Tax-efficient savings guidance', value: true },
      { section: 'Withdrawals', name: 'Basic withdrawal strategies', value: true },
      { section: 'Withdrawals', name: 'Advanced withdrawal strategies', value: true },
      { section: 'Withdrawals', name: 'Fully optimized withdrawal plan', value: false },
      { section: 'Withdrawals', name: 'Market-responsive adjustments', value: true },
      { section: 'Apps & Support', name: 'Mobile app', value: true },
      { section: 'Apps & Support', name: 'Apple Watch app & widgets', value: true },
      { section: 'Apps & Support', name: 'Email support', value: true },
    ],
  },
  {
    name: 'Smart' as const,
    slug: 'smart',
    href: 'https://app.slackwater.ca',
    features: [
      { section: 'Planning', name: 'Retirement projections', value: true },
      { section: 'Planning', name: 'Financial plan per year', value: 'Optimized' },
      { section: 'Planning', name: 'What-if scenarios', value: true },
      { section: 'Planning', name: 'Account balance tracking', value: true },
      { section: 'Planning', name: 'Tax-efficient savings guidance', value: true },
      { section: 'Withdrawals', name: 'Basic withdrawal strategies', value: true },
      { section: 'Withdrawals', name: 'Advanced withdrawal strategies', value: true },
      { section: 'Withdrawals', name: 'Fully optimized withdrawal plan', value: true },
      { section: 'Withdrawals', name: 'Market-responsive adjustments', value: true },
      { section: 'Apps & Support', name: 'Mobile app', value: true },
      { section: 'Apps & Support', name: 'Apple Watch app & widgets', value: true },
      { section: 'Apps & Support', name: 'Email support', value: true },
    ],
  },
]

export function PricingTable() {
  let [selectedTier, setSelectedTier] = useState(tiers[0])

  return (
    <div className="mx-auto max-w-2xl px-6 py-24 lg:max-w-7xl lg:px-8">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-selected:table-cell max-sm:hidden"
              >
                <div className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
                  {tier.name}
                </div>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-white p-1 ring-1 shadow-lg ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <button
                          onClick={() => setSelectedTier(tier)}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex w-full items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </button>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <a
                href={selectedTier.href}
                className="inline-flex items-center justify-center px-2 py-[calc(--spacing(1.5)-1px)] rounded-lg border border-transparent ring-1 shadow-sm ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 hover:bg-gray-50"
              >
                Get started
              </a>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Get started</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              >
                <a
                  href={tier.href}
                  className="inline-flex items-center justify-center px-2 py-[calc(--spacing(1.5)-1px)] rounded-lg border border-transparent ring-1 shadow-sm ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 hover:bg-gray-50"
                >
                  Get started
                </a>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      let value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value

                      return (
                        <td
                          key={tier.slug}
                          data-selected={
                            selectedTier === tier ? true : undefined
                          }
                          className="p-4 data-selected:table-cell max-sm:hidden"
                        >
                          {value === true ? (
                            <>
                              <CheckIcon className="size-4 fill-green-600" />
                              <span className="sr-only">
                                Included in {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-gray-400" />
                              <span className="sr-only">
                                Not included in {tier.name}
                              </span>
                            </>
                          ) : (
                            <div className="text-sm/6">{value}</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </div>
  )
}
