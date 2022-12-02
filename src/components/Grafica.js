import { AreaChart, Grid } from 'react-native-svg-charts'
import { Dots, Line } from '../screens/AreaChartScreen/chartAdds';

export const Grafica = () => {
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
    return <AreaChart
    style={{ height: 200 }}
    data={data}
    gridMin={-100}
    gridMax={120}
    contentInset={{ top: 30, bottom: 30 }}
    svg={{ fill: '#ADD8E6' }}>
    <Grid />
    <Line />
    <Dots />
</AreaChart>

}