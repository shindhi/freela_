import './index.css'

import { Play, Pause } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { useForm, FormProvider } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import * as Input from './components/Input'
import * as RadioGroup from './components/RadioGroup'
import { Button } from './components/button'
import { Gauge } from './components/Gauge'

const newSettingsFormSchema = z.object({
  step1: z.coerce.number(),
  step2: z.coerce.number(),
  step3: z.coerce.number(),
  step4: z.coerce.number(),
  frequency: z.enum(['25', '60']),
})

type NewSettingsFormInputs = z.infer<typeof newSettingsFormSchema>

export function App() {
  const newSettingsForm = useForm<NewSettingsFormInputs>({
    resolver: zodResolver(newSettingsFormSchema),
    defaultValues: {
      frequency: '25',
    },
  })

  async function createNewSettings(data: NewSettingsFormInputs) {
    console.log(data)
    reset()
  }

  const {
    formState: { isSubmitting },
    reset,
    handleSubmit,
  } = newSettingsForm

  return (
    <>
      <div className="grid min-h-screen grid-cols-app gap-4 bg-zinc-950 p-4">
        <div className="flex flex-col justify-between gap-3 rounded-2xl bg-zinc-900">
          <div className="flex justify-center p-6">
            <div className="flex w-full justify-center">
              <div className="flex items-center gap-20 rounded-3xl bg-zinc-950 px-4 py-3 text-white">
                <div className="flex flex-col">
                  <span className="text-lg text-zinc-500">Tempo</span>
                  <span className="text-6xl font-medium tracking-wide text-zinc-200">
                    16:15
                  </span>
                  <button className="mr-auto mt-6 cursor-pointer rounded-lg bg-zinc-600 px-4 py-1 text-lg font-medium">
                    Resetar
                  </button>
                </div>

                <div className="flex h-36 w-36 items-center justify-center rounded-3xl bg-blue-500 p-4">
                  <div className="rounded-full border-8">
                    <button className="rounded-full bg-zinc-900 p-6">
                      <Play size={40} />
                      {/* <Pause size={40} /> */}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="w-full text-center text-7xl font-semibold text-white">
              <span>00:00</span>
              <span className="underline">reset</span>
            </div> */}

            {/* <div className="ml-auto flex gap-4">
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
            </div> */}
          </div>

          <div className="flex justify-between gap-5 p-4">
            <div className="box-content flex-1 rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
              <Gauge value={50} label="frequency" />
            </div>
            <div className="box-content flex-1 rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
              <Gauge value={50} label="frequency" />
            </div>
            <div className="box-content flex-1 rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
              <Gauge value={30} label="current" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-zinc-900 p-4">
          <FormProvider {...newSettingsForm}>
            <form
              className="flex h-full flex-col gap-5"
              onSubmit={handleSubmit(createNewSettings)}
            >
              <Input.Root>
                <Input.Label htmlFor="step1">Passo 1 [m]</Input.Label>
                <Input.Control type="number" placeholder="Ex: 0" name="step1" />
              </Input.Root>

              <Input.Root>
                <Input.Label htmlFor="step2">Passo 2 [s]</Input.Label>
                <Input.Control type="number" name="step2" placeholder="Ex: 0" />
              </Input.Root>

              <Input.Root>
                <Input.Label htmlFor="step3">Passo 3 [m]</Input.Label>
                <Input.Control type="number" name="step3" placeholder="Ex: 0" />
              </Input.Root>

              <Input.Root>
                <Input.Label htmlFor="step4">T. Max °C</Input.Label>
                <Input.Control type="number" name="step4" placeholder="Ex: 0" />
              </Input.Root>

              <div className="flex flex-col gap-1 font-semibold">
                <RadioGroup.Root title="Frequência">
                  <RadioGroup.Item value="25" label="25" name="frequency" />
                  <RadioGroup.Item value="60" label="60" name="frequency" />
                </RadioGroup.Root>
              </div>

              <button
                className={twMerge(
                  'mt-auto flex cursor-pointer items-center justify-center rounded-lg border border-blue-500 py-3 font-semibold text-white transition',
                  'enabled:hover:bg-blue-500/90 disabled:cursor-not-allowed disabled:border-blue-500/30 disabled:text-white/30',
                )}
                disabled={isSubmitting}
                type="submit"
              >
                Salvar
              </button>
            </form>
          </FormProvider>
        </div>

        <div className="col-span-full box-content grid grid-cols-6 gap-6 rounded-2xl bg-zinc-900 p-4">
          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} label="temperature" />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} label="temperature" />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} label="temperature" />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} label="temperature" />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} label="temperature" />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} label="temperature" />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} label="temperature" />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} label="temperature" />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} label="temperature" />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} label="temperature" />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} label="temperature" />
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-lg">
            <Gauge value={100} label="temperature" />
          </div>
        </div>
      </div>
    </>
  )
}
