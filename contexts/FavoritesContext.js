import { createContext, useContext, useReducer, useEffect } from 'react';

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 7 — FavoritesContext (16 pts)                          ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║                                                              ║
 * ║  Compléter le système de favoris.                            ║
 * ║                                                              ║
 * ║  Partie A — Le reducer (6 pts)                               ║
 * ║    - Action 'ADD'    : ajouter action.payload au state       ║
 * ║    - Action 'REMOVE' : retirer l'item dont l'id              ║
 * ║                        === action.payload du state            ║
 * ║    - Default         : retourner le state inchangé           ║
 * ║                                                              ║
 * ║  Partie B — Le Provider (10 pts)                             ║
 * ║    - Utiliser useReducer avec le reducer et [] comme initial ║
 * ║    - Implémenter addFavorite(book) : dispatch ADD            ║
 * ║    - Implémenter removeFavorite(id) : dispatch REMOVE        ║
 * ║    - Implémenter isFavorite(id) : retourne true/false        ║
 * ║    - Passer dans value : favorites, addFavorite,             ║
 * ║      removeFavorite, isFavorite                              ║
 * ║                                                              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 10 — Persistance des favoris (5 pts)                   ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║                                                              ║
 * ║  Persister les favoris avec AsyncStorage :                   ║
 * ║                                                              ║
 * ║  1. Importer AsyncStorage depuis                             ║
 * ║     @react-native-async-storage/async-storage                ║
 * ║  2. Ajouter une action 'LOAD' dans le reducer qui           ║
 * ║     remplace le state par action.payload                     ║
 * ║  3. Au montage du Provider, charger les favoris              ║
 * ║     sauvegardés (useEffect + AsyncStorage.getItem)           ║
 * ║     et dispatcher l'action LOAD                              ║
 * ║  4. À chaque changement de la liste de favoris,              ║
 * ║     sauvegarder dans AsyncStorage (useEffect sur favorites) ║
 * ║  5. Utiliser la clé STORAGE_PREFIX + '_favorites'            ║
 * ║     depuis constants/config.js                               ║
 * ║  6. Gérer les erreurs silencieusement (console.warn)         ║
 * ║                                                              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const FavoritesContext = createContext();

/**
 * Le reducer gère les actions sur la liste de favoris.
 * state = tableau de livres [{ id, title, author, ... }, ...]
 */
function favoritesReducer(state, action) {
  // TODO 7a : Implémenter le switch/case
  // action.type peut être 'ADD', 'REMOVE' ou 'LOAD' (TODO 10)
  // 'ADD'    → action.payload est un objet livre complet
  // 'REMOVE' → action.payload est l'id (string) du livre à retirer
  // 'LOAD'   → action.payload est le tableau complet de favoris (TODO 10)
  return state;
}

export function FavoritesProvider({ children }) {
  // TODO 7b : Utiliser useReducer

  // TODO 10 : Charger les favoris depuis AsyncStorage au montage (useEffect)
  // TODO 10 : Sauvegarder les favoris dans AsyncStorage à chaque changement (useEffect)

  // TODO 7b : Implémenter les 3 fonctions
  const addFavorite = (book) => {
    // dispatch l'action ADD
  };

  const removeFavorite = (id) => {
    // dispatch l'action REMOVE
  };

  const isFavorite = (id) => {
    // retourner true si le livre est dans les favoris
    return false;
  };

  // TODO 7b : Compléter la value du Provider
  return (
    <FavoritesContext.Provider value={{
      favorites: [],
      addFavorite,
      removeFavorite,
      isFavorite,
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

/**
 * Hook d'accès au contexte (fourni, ne pas modifier).
 */
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites doit être utilisé dans un FavoritesProvider');
  }
  return context;
}
