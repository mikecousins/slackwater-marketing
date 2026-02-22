import { BentoCard } from './BentoCard'
import { LinkedAvatars } from './LinkedAvatars'
import { LogoTimeline } from './LogoTimeline'

export function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2
          data-dark="true"
          className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400"
        >
          Retirement
        </h2>
        <h3
          data-dark="true"
          className="mt-2 max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl"
        >
          Your retirement paycheque, optimized.
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Withdrawals"
            title="Tax-optimized withdrawal plan"
            description="Slackwater builds a withdrawal strategy across your RRSP, TFSA, and non-registered accounts that minimizes taxes and maximizes your spending power."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Safety"
            title="Built on safe withdrawal rates"
            description="Every plan is grounded in proven safe withdrawal rate research, ensuring your money lasts as long as you do."
            graphic={<LogoTimeline />}
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Adaptive"
            title="Responds to the market"
            description="When markets rise or fall, Slackwater adjusts your withdrawal amounts so you stay on track without sacrificing your lifestyle."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Paycheque"
            title="Your retirement paycheque"
            description="In retirement, your dashboard becomes a paycheque view — showing exactly which accounts to pull from, how much to withdraw, and when. Retirement income, simplified."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </div>
    </div>
  )
}
