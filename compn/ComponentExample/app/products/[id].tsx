import { products } from '@/data/product';
import { router, useLocalSearchParams } from 'expo-router';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function ProductDetail() {
  const { id } = useLocalSearchParams();

  const product = products.find(
    (product) => product.id === id
  );

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.erro}>
          Produto não encontrado
        </Text>

        <Pressable
          style={styles.botao}
          onPress={() => router.back()}
        >
          <Text style={styles.botaoTexto}>
            Voltar
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.nome}>
        {product.name}
      </Text>

      <Text style={styles.descricao}>
        {product.description}
      </Text>

      <Pressable
        style={styles.botao}
        onPress={() => router.back()}
      >
        <Text style={styles.botaoTexto}>
          Voltar
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b2a2b',
    padding: 20,
    justifyContent: 'center',
  },

  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  descricao: {
    fontSize: 18,
    color: '#ffe8e8',
    marginBottom: 30,
  },

  botao: {
    backgroundColor: '#aca6a6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  erro: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});