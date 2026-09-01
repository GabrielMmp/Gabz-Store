import { products } from '@/data/product';
import { router } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Produtos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>
         Gabz Store
      </Text>

      <Text style={styles.subtitulo}>
         Confira nossos produtos
      </Text>

      {products.map((product) => (
        <Pressable
          key={product.id}
          style={styles.produto}
          onPress={() => router.push(`/products/${product.id}`)}
        >
          <View style={styles.informacoes}>
            <Text style={styles.nome}>
              {product.name}
            </Text>

            <Text style={styles.descricao}>
              {product.description}
            </Text>
          </View>

          <Text style={styles.seta}>
            →
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081933',
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },

  subtitulo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 25,
  },

  produto: {
    backgroundColor: '#9e632c',
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  informacoes: {
    flex: 1,
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  descricao: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },

  seta: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});