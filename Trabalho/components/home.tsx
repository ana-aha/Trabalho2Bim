import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Sobre from './sobre';

export default function App() {
    const [page, setPage] = React.useState('home');

    const renderPage = () => {
        if (page === 'home') {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}> FindHere </Text>
                    <Image style={styles.images} source={require('../assets/images/logo.png')} />
                    <Text style={styles.title}> FindHere é a sua ferramenta perfeita para encontrar qualquer lugar com rapidez e precisão. Com mapas detalhados, navegação em tempo real e funcionalidades avançadas de busca. O FindHere torna a exploração do mundo mais simples e ascessível para todos. Encontre o que você precisa, onde quer que esteja!</Text>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}> 
                        <Text style={styles.buttonText }> Obter localização real </Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (page === 'sobre') {
            return <Sobre />;
        }
    };

    return <View style={styles.container}>{renderPage()}</View>
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#000',
            marginBottom: 20,    
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
        images: {
            height: 10,
            width: 30,
        }
    });