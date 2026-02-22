import { BentoCard } from './BentoCard'
import { Keyboard } from './Keyboard'
import { LogoCluster } from './LogoCluster'
import { Map } from './Map'

export function BentoSection() {
  return (
    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
        Pre-Retirement
      </h2>
      <h3 className="mt-2 max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-gray-950 sm:text-6xl">
        Know exactly when you can retire and how much you'll have.
      </h3>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="Enter your income, expenses, savings, and investments to build a complete financial picture. Slackwater calculates your path to retirement with precision."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Timeline"
          title="Choose when to retire"
          description="Set your target retirement date and see exactly how your current savings rate gets you there. Adjust the timeline and watch your projected income change in real time."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Dashboard"
          title="See the full picture"
          description="Your dashboard shows how much longer you need to work and your projected annual retirement income. Update your balances anytime to keep your plan current."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Scenarios"
          title="Explore what-if scenarios"
          description="See how working one more year or saving a little more each month affects your retirement income. Make informed decisions about your future."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Tax Guidance"
          title="Save smarter, not harder"
          description="Get guidance on which accounts to save into — RRSP, TFSA, or non-registered — to minimize your lifetime tax burden and keep more of your money."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </div>
  )
}
