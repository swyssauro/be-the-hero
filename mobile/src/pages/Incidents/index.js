import React from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

//Import Assets
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';

export default function Incidents() {

    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem vindo</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>


            <FlatList
                style={styles.incidentList}
                data={[1, 2, 3]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentListProperty}>Ong:</Text>
                        <Text style={styles.incidentValue}>APAD</Text>

                        <Text style={styles.incidentListProperty}>Caso:</Text>
                        <Text style={styles.incidentValue}>Cachorro Atropelado</Text>

                        <Text style={styles.incidentListProperty}>Valor:</Text>
                        <Text style={styles.incidentValue}>R$ 120,00</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={navigateToDetail}>

                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}