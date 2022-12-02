import { AreaChart, Grid } from 'react-native-svg-charts'
import { Dots, Line } from '../screens/AreaChartScreen/chartAdds';

export const Grafica = ({datos}) => {
    return <AreaChart
    style={{ height: 300 }}
    data={datos}
    gridMin={0}
    gridMax={2}
    contentInset={{ top: 30, bottom: 30 }}
    svg={{ fill: '#ADD8E6' }}>
    <Grid />
    <Line />
    <Dots />
</AreaChart>

}