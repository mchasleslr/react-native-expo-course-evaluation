import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import React from 'react';

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 1 — Composant BookCard (12 pts)                       ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║                                                              ║
 * ║  Créer un composant qui affiche une carte de livre.          ║
 * ║                                                              ║
 * ║  Props reçues :                                              ║
 * ║    - title (string)     : titre du livre                     ║
 * ║    - author (string)    : nom de l'auteur                    ║
 * ║    - cover (string)     : URL de l'image de couverture       ║
 * ║    - rating (number)    : note du livre (ex: 4.5)            ║
 * ║    - onPress (function) : callback au clic sur la carte      ║
 * ║                                                              ║
 * ║  Attendu :                                                   ║
 * ║    1. Pressable englobant avec feedback visuel (opacity) X    ║
 * ║    2. Image de couverture (source={{ uri: cover }})   X        ║
 * ║    3. Titre du livre (gras, max 2 lignes)                   ║
 * ║    4. Nom de l'auteur (couleur secondaire) X                ║
 * ║    5. Note affichée avec ★ (ex: "★ 4.5") X                  ║
 * ║    6. Styles via StyleSheet.create()                         ║
 * ║    7. Utiliser les couleurs depuis Colors X                   ║
 * ║                                                              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export default function BookCard({ title = "title", author = "author", cover = "https://covers.openlibrary.org/b/id/10778405-M.jpg", rating = 4, onPress = () => console.log("[BookCard] onPress callback is not provided.") }) {
  const [opacity, setOpacity] = React.useState(1)

  // TODO 1 : Remplacer ce return par votre composant
  const onCardPressed = () => {
    console.log("BookCard pressed")
    onPress?.()
  }

  const nbStars = Math.round(rating)

  return (
  <Pressable onPressIn={() => setOpacity(0.80)} onPressOut={() => setOpacity(1)} onPress={onCardPressed} style={[styles.layout, {opacity}]}>
    <Image style={styles.cover} source={{uri: cover}}/>
    <View style={styles.bottom} >
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <Text style={styles.rating}>{rating} {"★".repeat(nbStars)} </Text>
    </View >
  </Pressable>
  )
}

const styles = StyleSheet.create({
  layout: {
    borderRadius: 8,
    backgroundColor: Colors.card,
    boxShadow: [
      {
        offsetX: 0,
        offsetY: -2,
        blurRadius: '8px',
        spreadDistance: '2px',
        color: Colors.shadow,
      }
    ]
  },
  cover: {
    height: 200,
    objectFit: "cover",
    maxHeight: "100%"
  },
  bottom: {
    padding: 16
  },
  title: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: "700"
  },
  author: {
    color: Colors.textSecondary,
    fontSize: 16,
  },
  rating: {
    color: Colors.text,
    fontSize: 12,
  }

})
