import GaugeComponent from 'react-gauge-component'

export interface GaugeProps {
  value: number
  label: 'temperature' | 'frequency' | 'current'
}

enum LABEL {
  temperature = 'ºC',
  frequency = 'Hz',
  current = 'A',
}

export function Gauge({ value, label }: GaugeProps) {
  return (
    <GaugeComponent
      className="flex"
      value={value}
      type="radial"
      labels={{
        valueLabel: { formatTextValue: (value: any) => value + LABEL[label] },
        tickLabels: {
          type: 'outer', // marcacoes
          defaultTickValueConfig: {
            formatTextValue: (value: any) => value + LABEL[label],
            style: { fontSize: 10 },
          },
          ticks: [{ value: 13 }, { value: 22.5 }, { value: 32 }],
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
        color: '#345243',
        length: 0.8,
        width: 15,
        // baseColor: '#f4f4f5',
      }}
    />
  )
}
