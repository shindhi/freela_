import './index.css'

import { FormEvent } from 'react'
import { Power, PowerOff } from 'lucide-react'
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
