import { Circle, Defs, Path, Stop } from 'react-native-svg'
import React from 'react'

interface LineProps {
  line: string
}

export const Line = (props: Partial<LineProps>) => {
  const { line } = props as LineProps
  return <Path key={'line'} d={line} stroke={'#0000BF'} fill={'none'} />
}

interface DecoratorProps {
  x: (arg: number) => number
  y: (arg: number) => number
  data: number[]
}

export const Dots = (props: Partial<DecoratorProps>) => {
  const { x, y, data } = props as DecoratorProps
  return (
    <>
      {data?.map((value, index) => (
        <Circle
          key={index}
          cx={x(index)}
          cy={y(value)}
          r={4}
          stroke={'rgb(0, 0, 0)'}
          fill={'white'}
        />
      ))}
    </>
  )
}

