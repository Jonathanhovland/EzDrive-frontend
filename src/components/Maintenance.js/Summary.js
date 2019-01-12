import React from 'react'

import CostChart from './CostChart';
import AverageChart from './AverageChart';
import { View } from 'native-base';

class Summary extends React.PureComponent {

    render() {
        return (
            <View>
            <CostChart />
            <AverageChart />
            </View>
        )
    }

}
    

export default Summary