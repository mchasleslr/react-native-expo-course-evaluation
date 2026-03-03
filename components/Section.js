import { FlatList, Text, View } from "react-native";
import BookCard from "./BookCard";

export const Section = ({ title, books }) => {
  return (
    <View  style={styles__section.layout}>
      <Text style={styles__section.title}>{title}</Text>
      <FlatList
        renderItem={({ item }) => (
          <View style={{ width: 180 }}>
            <BookCard
              author={item.author}
              title={item.title}
              rating={item.rating}
              cover={item.cover}
            />
          </View>
        )}
        horizontal
        data={books}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles__section.content}
        ItemSeparatorComponent={<Separator gap={12} orientation="horizontal" />}
      />
    </View>
  );
};

const styles__section = StyleSheet.create({
  layout: {
    flex: 1,
    paddingVertical: 16
  },
  title: {
    color: Colors.text,
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 8
  }
})
