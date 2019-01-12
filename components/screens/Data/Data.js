import React from 'react'
import { StyleSheet } from 'react-native';
import CostChart from './CostChart';
import AverageChart from './AverageChart';
import { View, Container, Button } from 'native-base';

class Summary extends React.PureComponent {

    static navigationOptions = {
        headerStyle: { backgroundColor: '#4B8B9D' },
        // headerLeft: (
        //   <Button
        //     onPress={() => Actions.login()}
        //     title="Sign Out"
        //     color="#FBF9F7"
        //   />
        // ),
        //   headerRight: (
        //     <Button
        //       onPress={() => Actions.maint()}
        //       title="Maintenance"
        //       color="#FBF9F7"
        //     />
        //   )
      }

    render() {
        return (
            <Container style={styles.container}>
            <CostChart />
            <AverageChart />
            </Container>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5DEC0',
  
    }
  
  })


export default Summary