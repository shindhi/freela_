import './index.css'

import { Power, PowerOff } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export function App() {
  return (
    <>
      <div className="min-h-screen bg-zinc-950 grid grid-cols-app p-4 gap-3">
        <div className="flex flex-col justify-between gap-3 bg-zinc-900 rounded-2xl">
          <div className="flex justify-center p-4">
            <span className="text-white font-semibold text-5xl w-full text-center">
              00:00
            </span>

            <div className="flex gap-4 ml-auto">
              <button className="bg-zinc-600 rounded-lg p-6 text-white">
                <Power strokeWidth={2} size={28} />
              </button>

              <button className="bg-zinc-600 rounded-lg p-6 text-white">
                <PowerOff strokeWidth={2} size={28} />
              </button>
            </div>
          </div>

          <div className="p-4 flex gap-3 justify-between">
            <div className="h-24 w-24 bg-white rounded"></div>
            <div className="h-24 w-24 bg-white rounded"></div>
            <div className="h-24 w-24 bg-white rounded"></div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-4">
          <form className="flex flex-col gap-4">
            <div className="text-white flex flex-col gap-1 w-full">
              <label className="font-semibold" htmlFor="test1">
                Teste
              </label>
              <input
                type="text"
                placeholder="teste"
                id="test1"
                className={twMerge(
                  'rounded-lg py-1 px-2 placeholder:text-zinc-500 bg-white/5 border border-white/10 outline-none focus:ring-0',
                  'focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
                )}
              />
            </div>
          </form>
        </div>

        <div className="col-span-full bg-zinc-900 rounded-2xl grid grid-cols-6 p-4">
          <div className="h-24 w-24 bg-white rounded self-center justify-self-center"></div>
          <div className="h-24 w-24 bg-white rounded self-center justify-self-center"></div>
          <div className="h-24 w-24 bg-white rounded self-center justify-self-center"></div>
          <div className="h-24 w-24 bg-white rounded self-center justify-self-center"></div>
          <div className="h-24 w-24 bg-white rounded self-center justify-self-center"></div>
          <div className="h-24 w-24 bg-white rounded self-center justify-self-center"></div>
          <div className="h-24 w-24 bg-white rounded self-center justify-self-center"></div>
          <div className="h-24 w-24 bg-white rounded self-center justify-self-center"></div>
          <div className="h-24 w-24 bg-white rounded self-center justify-self-center"></div>
          <div className="h-24 w-24 bg-white rounded self-center justify-self-center"></div>
          <div className="h-24 w-24 bg-white rounded self-center justify-self-center"></div>
          <div className="h-24 w-24 bg-white rounded self-center justify-self-center"></div>
        </div>
      </div>
    </>
  )
}
