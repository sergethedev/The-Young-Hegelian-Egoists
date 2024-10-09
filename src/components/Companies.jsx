import Image from 'next/image'


import onlyfans from '@/images/clients/companies/onlyfans.svg'
import twitch from '@/images/clients/companies/twitch.svg'
import tiktok from '@/images/clients/companies/tiktok.svg'
import chaturbate from '@/images/clients/companies/chaturbate.svg'
import patreon from '@/images/clients/companies/patreon.svg'

export function Companies() {
    return (
      <div className="mt-28 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
                      src={tiktok}
                      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                      width={158}
                      height={48}
                      unoptimized
                    />
           <Image
                      src={chaturbate}
                      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                      width={158}
                      height={48}
                      unoptimized
                    />  
                    
                    <Image
                      src={onlyfans}
                      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                      width={158}
                      height={48}
                      unoptimized
                    />
<Image
                      src={twitch}
                      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                      width={158}
                      height={48}
                      unoptimized
                    /> 
            <Image
                      src={patreon}
                      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                      width={158}
                      height={48}
                      unoptimized
                    />  
          </div>
          <div className="mt-16 flex justify-center">
            <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
              <span className="hidden md:inline">We have worked with egoists in hundreds of companies</span>
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" /> Read their stories{' '}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }