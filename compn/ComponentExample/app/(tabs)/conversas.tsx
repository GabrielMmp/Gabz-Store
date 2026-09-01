import { ButtonComponent } from '@/components/Button'
import { StyleSheet, Text, View } from 'react-native'

export default function Conversas() {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                 SAC - Atendimento
            </Text>

            <Text style={styles.subtitulo}>
                 Olá! Como podemos ajudar?
            </Text>

            <View style={styles.card}>
                <Text style={styles.cardTitulo}>
                     Problemas com pedido
                </Text>

                <Text style={styles.cardTexto}>
                    Precisa de ajuda com seu pedido ou entrega?
                </Text>

                <ButtonComponent
                    name="Falar sobre meu pedido"
                    color="white"
                />
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitulo}>
                     Dúvidas
                </Text>

                <Text style={styles.cardTexto}>
                    Tem alguma dúvida sobre nossos produtos?
                </Text>

                <ButtonComponent
                    name="Tirar uma dúvida"
                    color="white"
                />
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitulo}>
                     Trocas e devoluções
                </Text>

                <Text style={styles.cardTexto}>
                    Precisa de ajuda para trocar ou devolver um produto?
                </Text>

                <ButtonComponent
                    name="Solicitar ajuda"
                    color="white"
                />
            </View>

            <Text style={styles.horario}>
                 Atendimento: segunda a sexta, 08h às 18h
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#081933',
        padding: 20,
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },

    subtitulo: {
        fontSize: 17,
        color: '#666',
        marginBottom: 20,
    },

    card: {
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 12,
        marginBottom: 15,
    },

    cardTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    cardTexto: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },

    horario: {
        textAlign: 'center',
        color: '#777',
        marginTop: 10,
    },
})