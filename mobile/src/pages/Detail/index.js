import React from 'react';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import styles from './styles.js';

import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';

export default function Detail() {

    const navigations = useNavigation();
    const message = `Olá Larissa estou entrando em contato com vc sobre o caso.`;
    const route = useRoute();
    const incident = route.params.incident;

    function navigateBack() {
        navigations.goBack()
        console.log(navigateBack, "o usuario voltou...");
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: 'Heró do caso: Cachorro Atropelado',
            recipients: ['vitorcqueirooz@outlook.com'],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?text=${message}&phone=5519996011312`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentListProperty}>Ong:</Text>
                <Text style={styles.incidentValue}>{incident.name}</Text>

                <Text style={styles.incidentListProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>

                <Text style={styles.incidentListProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o heroi desse caso</Text>

                <Text style={styles.heroDescription}>Entre em contato!</Text>

                <View style={styles.actions}>
                    <TouchableOpacity onPress={sendWhatsapp} style={styles.action}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={sendEmail} style={styles.action}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}