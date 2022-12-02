import { BarChart, Grid } from 'react-native-svg-charts'
import { Dots, Line } from '../screens/AreaChartScreen/chartAdds';

export const Barras = ({datos}) => {
    return <BarChart
    style={{ height: 100, marginVertical: 1 }}
    horizontal={true}
    spacingInner={0.1}
    gridMin={0}
    gridMax={3}
    data={datos}
    svg={{ fill: 'lightblue' }}
    contentInset={{ top: 30, bottom: 30 }}>
    <Grid direction={Grid.Direction.VERTICAL} />
</BarChart>

}