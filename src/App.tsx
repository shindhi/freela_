import './index.css'

import { Power, PowerOff } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import * as Input from './components/Input'
import { Button } from './components/button'
import { Gauge } from './components/Gauge'

export function App() {
  return (
    <>
      <div className="grid min-h-screen grid-cols-app gap-4 bg-zinc-950 p-4">
        <div className="flex flex-col justify-between gap-3 rounded-2xl bg-zinc-900">
          <div className="mt-6 flex justify-center p-6">
            <span className="w-full text-center text-7xl font-semibold text-white">
              00:00
            </span>

            <div className="ml-auto flex gap-4">
              <Button
                className="border-green-600 text-green-600 transition hover:bg-green-600/30"
                variant="outline"
              >
                <Power strokeWidth={2} size={28} />
              </Button>

              <Button
                className="border-red-600 text-red-600 transition hover:bg-red-600/30"
                variant="outline"
              >
                <PowerOff strokeWidth={2} size={28} />
              </Button>
            </div>
          </div>

          <div className="flex justify-between gap-5 p-4">
            <div className="box-content flex-1 rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
              <Gauge value={50} />
            </div>
            <div className="box-content flex-1 rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
              <Gauge value={50} />
            </div>
            <div className="box-content flex-1 rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
              <Gauge value={30} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-zinc-900 p-4">
          <form className="flex flex-col gap-5">
            <Input.Root>
              <Input.Label htmlFor="step1">Passo 1 [m]</Input.Label>
              <Input.Control type="number" id="step1" placeholder="Ex: 0" />
            </Input.Root>

            <Input.Root>
              <Input.Label htmlFor="step2">Passo 2 [s]</Input.Label>
              <Input.Control type="number" id="step2" placeholder="Ex: 0" />
            </Input.Root>

            <Input.Root>
              <Input.Label htmlFor="step3">Passo 3 [m]</Input.Label>
              <Input.Control type="number" id="step3" placeholder="Ex: 0" />
            </Input.Root>

            <Input.Root>
              <Input.Label htmlFor="step4">T. Max °C</Input.Label>
              <Input.Control type="number" id="step4" placeholder="Ex: 0" />
            </Input.Root>

            <div className="flex flex-col gap-1 font-semibold">
              <span className="text-white">Frequência</span>

              <div className="flex justify-between gap-4">
                <button
                  className={twMerge(
                    'flex flex-1 items-center justify-center rounded-lg border border-white/10 bg-white/5 py-2 text-white outline-none',
                    'hover:border-white/20',
                    '[data-state="checked"]:border-blue-500 [data-state="checked"]:bg-blue-500/30',
                  )}
                >
                  25
                </button>

                <button
                  className={twMerge(
                    'flex flex-1 items-center justify-center rounded-lg border border-white/10 bg-white/5 py-2 text-white outline-none',
                    'hover:border-white/20',
                    '[data-state="checked"]:border-blue-500 [data-state="checked"]:bg-blue-500/30',
                  )}
                >
                  60
                </button>
              </div>
            </div>

            <button
              className={twMerge(
                'mt-10 flex cursor-pointer items-center justify-center rounded-lg border border-blue-500 py-2 font-semibold text-white transition',
                'enabled:hover:bg-blue-500/90 disabled:cursor-not-allowed disabled:border-blue-500/30 disabled:text-white/30',
              )}
              disabled={false}
            >
              Salvar
            </button>
          </form>
        </div>

        <div className="col-span-full box-content grid grid-cols-6 gap-6 rounded-2xl bg-zinc-900 p-4">
          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} />
          </div>
        </div>
      </div>
    </>
  )
}
