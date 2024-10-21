import GaugeComponent from 'react-gauge-component'

export interface GaugeProps {
  value: number
}

export function Gauge({ value }: GaugeProps) {
  return (
    <GaugeComponent
      className="flex"
      value={value}
      type="radial"
      labels={{
        tickLabels: {
          type: 'outer', // marcacoes
          ticks: [
            { value: 20 },
            { value: 40 },
            { value: 60 },
            { value: 80 },
            { value: 100 },
          ],
        },
      }}
      arc={{
        colorArray: ['#16a34a', '#dc2626'],
        subArcs: [{}, {}, {}],
        cornerRadius: 0, // arredondamento das bordas
        padding: 0.0, // espaçamento entre os limites
        width: 0.3, // largura do medidor
        nbSubArcs: undefined, // quantidade de divisões de limites
        gradient: true, // gradiente do medidor
      }}
      pointer={{
        elastic: false, // animacao de elastico
        animationDelay: 0,
        length: 0.6,
        width: 20,
        color: '#d4d4d4',
        // baseColor: '#f4f4f5',
      }}
    />
  )
}
