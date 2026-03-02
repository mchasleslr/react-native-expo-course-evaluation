import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/colors';
import BookCard from '../../components/BookCard';
import { useReadingList, READING_STATUSES } from '../../contexts/ReadingListContext';

const STATUS_LABELS = {
  [READING_STATUSES.TO_READ]: '📖 À lire',
  [READING_STATUSES.READING]: '📚 En cours',
  [READING_STATUSES.FINISHED]: '✅ Terminé',
};

export default function FavoritesScreen() {
  const router = useRouter();
  const { readingList } = useReadingList();

  const handleBookPress = (book) => {
    router.push(`/detail/${book.id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>
        {readingList.length} livre{readingList.length !== 1 ? 's' : ''} dans ma liste
      </Text>

      <FlatList
        data={readingList}
        keyExtractor={(item) => item.book.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <BookCard
              title={item.book.title}
              author={item.book.author}
              cover={item.book.cover}
              rating={item.book.rating}
              onPress={() => handleBookPress(item.book)}
            />
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>
                {STATUS_LABELS[item.status] || item.status}
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>📚</Text>
            <Text style={styles.emptyTitle}>Liste vide</Text>
            <Text style={styles.emptyText}>
              Ajoutez des livres à votre liste{'\n'}depuis l'écran de détail.
            </Text>
            <Pressable
              style={styles.discoverButton}
              onPress={() => router.push('/')}
            >
              <Text style={styles.discoverText}>Découvrir des livres</Text>
            </Pressable>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  subtitle: {
    color: Colors.textSecondary,
    fontSize: 13,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
  },
  list: {
    padding: 16,
  },
  row: {
    gap: 12,
    marginBottom: 12,
  },
  empty: {
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 24,
  },
  emptyIcon: {
    fontSize: 56,
    marginBottom: 16,
  },
  emptyTitle: {
    color: Colors.textSecondary,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  emptyText: {
    color: Colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
  },
  discoverButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  discoverText: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  statusBadge: {
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 6,
    marginTop: 4,
    paddingVertical: 2,
  },
  statusText: {
    color: Colors.textSecondary,
    fontSize: 11,
  },
});
