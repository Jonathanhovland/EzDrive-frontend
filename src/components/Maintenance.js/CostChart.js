import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import { View } from 'native-base';

const CostChart = () => {

        const data = [
            {
                key: 1,
                amount: 50,
                svg: { fill: '#4B8B9D' },
            },
            {
                key: 2,
                amount: 50,
                svg: { fill: '#76AFB8' }
            },
            {
                key: 3,
                amount: 40,
                svg: { fill: '#AFD1D1' }
            },
            {
                key: 4,
                amount: 95,
                svg: { fill: '#4B8B9D' }
            },
            {
                key: 5,
                amount: 35,
                svg: { fill: '#76AFB8' }
            }
        ]

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={24}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                        {data.amount}
                    </Text>
                )
            })
        }

        return (
            <View>
            <PieChart
                style={{ height: 200 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'95%'}
            >
                <Labels/>
            <Text>$11,309.21</Text>
            </PieChart>
            </View>
        )
    }

    

export default CostChart