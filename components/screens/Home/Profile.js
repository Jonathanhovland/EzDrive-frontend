import React from "react"
import {  StyleSheet } from "react-native"
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Thumbnail, Body } from "native-base"


const Profile = () =>  {
    return (
        <Container style={styles.container} >
            <Header style={styles.header}>
                <Left style={styles.headerImg}>
                    <Thumbnail  source={require("../../../img/3.jpg")}/>
                </Left>
                <Body style={styles.headerBody}>
                    <Text style={styles.headerText}>2016</Text>
                    <Text style={styles.headerText}>Toyota</Text>
                    <Text style={styles.headerText}>4Runner</Text>
                </Body>
                <Right style={styles.purchaseDate}>
                    <Text style={styles.headerText2} note>11/2016</Text>
                </Right>
            </Header>
            <Content>
                <Card >
                    <CardItem style={styles.cards}>
                        <Left>
                            <Text style={styles.cardText}>Payment</Text>
                        </Left>
                        <Text style={styles.cardText}>Monthly</Text>
                        <Right>
                            <Text style={styles.cardText}>$500</Text>
                        </Right>
                    </CardItem>
                    <CardItem style={styles.cards}>
                        <Left>
                            <Text style={styles.cardText}>Insurance</Text>
                        </Left>
                        <Text style={styles.cardText}>Monthly</Text>
                        <Right>
                            <Text style={styles.cardText}>$110</Text>
                        </Right>
                    </CardItem>
                    <CardItem style={styles.cards}>
                        <Left>
                            <Text style={styles.cardText}>Registration</Text>
                        </Left>
                        <Text style={styles.cardText}>(1/2020)</Text>
                        <Right>
                            <Text  style={styles.cardText}>$350</Text>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}
        
    const styles = StyleSheet.create({
        container: {
            backgroundColor: "#E5DEC0",
            marginBottom: -20
        },
        header: {
            backgroundColor: "#E5DEC0",
            justifyContent: "center", 
            alignItems: "center"         
        },
        headerImg: {
            paddingBottom: 35,
            paddingLeft:15         
        },
        headerBody: {
            justifyContent: 'center', 
            alignItems: 'center',
            paddingBottom: 20
        },
        cardHeader: {
            backgroundColor: '#76AFB8',
        },
        purchaseDate: {
            paddingBottom: 33
        },
        headerText:{
            color: '#4B8B9D',
            fontWeight: 'bold'
        }, 
        headerText2:{
            color: '#76AFB8',
            fontWeight: 'bold'
        },
        cardText:{
            color: '#FBF9F7',
            paddingRight: 12
        }, 
        cards: {
            backgroundColor: '#76AFB8'
        }
    })
            

export default Profile