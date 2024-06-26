import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Home from './home';

export default function App() {
    const [page, setPage] = React.useState('sobre');

    const renderPage = () => {
        if (page === 'sobre') {
            return (
                <View style={styles.container}>
                    <Image source={require('../assets/images/logo.png')} />
                    <br />
                    <Text style={styles.title}> Localização Atual: </Text>
                    <Image style={styles.image} source={require('../assets/images/mapa2.png')} />
                    <br />
                    <Text style={styles.text}> Latitude: 00,00</Text>
                    <Text style={styles.text}> Longitude: 00,00</Text>
                    <br />
                    <br />
                    <TouchableOpacity style={styles.button} onPress={() => setPage('home')}> 
                        <Text style={styles.buttonText }> Voltar para o início </Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (page === 'home') {
            return <Home />;
        }
    };

    return <View style={styles.container}>{renderPage()}</View>
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#5B7D88',
        },
        title: {
            fontSize: 18,
            color: '#fff',
            marginBottom: 20,   
            fontWeight: 'bold', 
        },
        text: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: 20,  
            textAlign: 'justify',
        },
        button: {
            backgroundColor: '#007BFF',
            padding: 10,
            borderRadius: 5,
        },
        buttonText: {
            color: '#FFFFFF',
            fontSize: 16,
        },
        image: {
            width: 230,
            height: 190,
           }
    });
    