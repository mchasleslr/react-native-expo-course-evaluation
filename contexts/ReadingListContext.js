import { createContext, useContext, useReducer, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_PREFIX } from '../constants/config';

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 7 — ReadingListContext (10 pts)                        ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║                                                              ║
 * ║  Compléter le système de liste de lecture avec statuts.       ║
 * ║                                                              ║
 * ║  Le state est un tableau d'entrées : [{ book, status }]      ║
 * ║    - book   : l'objet livre (id, title, author, cover, …)   ║
 * ║    - status : 'to_read', 'reading' ou 'finished'            ║
 * ║                                                              ║
 * ║  Partie A — Le reducer (5 pts)                               ║
 * ║    - 'LOAD'             → remplace le state par              ║
 * ║                           action.payload                     ║
 * ║    - 'ADD_TO_LIST'      → ajoute { book, status } depuis    ║
 * ║                           action.payload (si pas déjà là)   ║
 * ║    - 'UPDATE_STATUS'    → trouve l'entrée par               ║
 * ║                           action.payload.id et change son   ║
 * ║                           status en action.payload.status   ║
 * ║    - 'REMOVE_FROM_LIST' → retire l'entrée dont              ║
 * ║                           book.id === action.payload        ║
 * ║                                                              ║
 * ║  Partie B — Le Provider (5 pts)                              ║
 * ║    - useReducer avec le reducer et [] comme état initial     ║
 * ║    - addToList(book, status)  : dispatch ADD_TO_LIST         ║
 * ║    - updateStatus(id, status) : dispatch UPDATE_STATUS       ║
 * ║    - removeFromList(id)       : dispatch REMOVE_FROM_LIST    ║
 * ║    - getBookStatus(id)        : retourne le status (string)  ║
 * ║                                 ou null si pas dans la liste ║
 * ║    - isInList(id)             : retourne true / false        ║
 * ║                                                              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 10 — Persistance de la liste de lecture (6 pts)        ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║                                                              ║
 * ║  Persister la liste de lecture avec AsyncStorage :            ║
 * ║                                                              ║
 * ║  1. Au montage du Provider, charger la liste sauvegardée     ║
 * ║     (useEffect + AsyncStorage.getItem + action LOAD)         ║
 * ║  2. À chaque changement de la liste (après le chargement     ║
 * ║     initial), sauvegarder dans AsyncStorage                  ║
 * ║     (useEffect sur readingList)                              ║
 * ║  3. Gérer les erreurs silencieusement                        ║
 * ║     (ne pas bloquer l'app si le storage échoue)              ║
 * ║                                                              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const ReadingListContext = createContext();

const STORAGE_KEY = `${STORAGE_PREFIX}:readinglist`;

/**
 * Les 3 statuts possibles pour un livre dans la liste de lecture.
 */
export const READING_STATUSES = {
  TO_READ: 'to_read',
  READING: 'reading',
  FINISHED: 'finished',
};

/**
 * Le reducer gère les actions sur la liste de lecture.
 * state = tableau d'entrées [{ book: { id, title, … }, status: 'to_read' | 'reading' | 'finished' }]
 */
function readingListReducer(state, action) {
  // TODO 7a : Implémenter le switch/case
  // action.type peut être : 'LOAD', 'ADD_TO_LIST', 'UPDATE_STATUS', 'REMOVE_FROM_LIST'
  //
  // 'LOAD'             → action.payload est le tableau complet (TODO 10)
  // 'ADD_TO_LIST'      → action.payload est { book, status }
  //                       (ne pas ajouter si book.id déjà dans la liste)
  // 'UPDATE_STATUS'    → action.payload est { id, status }
  //                       (trouver l'entrée par book.id et changer son status)
  // 'REMOVE_FROM_LIST' → action.payload est l'id (string) du livre à retirer
  return state;
}

export function ReadingListProvider({ children }) {
  // TODO 7b : Utiliser useReducer avec readingListReducer et [] comme état initial
  // TODO 10 : Ajouter un state "loaded" (useState) pour savoir si le chargement initial est fait

  // TODO 10 : Charger la liste depuis AsyncStorage au montage (useEffect)
  // TODO 10 : Sauvegarder la liste dans AsyncStorage à chaque changement (useEffect)

  // TODO 7b : Implémenter les 5 fonctions

  /** Ajouter un livre à la liste avec un statut (par défaut 'to_read') */
  const addToList = (book, status = READING_STATUSES.TO_READ) => {
    // dispatch ADD_TO_LIST avec { book, status }
  };

  /** Mettre à jour le statut d'un livre déjà dans la liste */
  const updateStatus = (id, status) => {
    // dispatch UPDATE_STATUS avec { id, status }
  };

  /** Retirer un livre de la liste */
  const removeFromList = (id) => {
    // dispatch REMOVE_FROM_LIST avec l'id
  };

  /** Retourne le statut du livre (string) ou null s'il n'est pas dans la liste */
  const getBookStatus = (id) => {
    // Chercher dans la liste une entrée dont book.id === id
    // Retourner entry.status ou null
    return null;
  };

  /** Retourne true si le livre est dans la liste, false sinon */
  const isInList = (id) => {
    // Vérifier si une entrée avec book.id === id existe dans la liste
    return false;
  };

  // TODO 7b : Compléter la value du Provider avec les vraies données
  return (
    <ReadingListContext.Provider value={{
      readingList: [],
      addToList,
      updateStatus,
      removeFromList,
      getBookStatus,
      isInList,
      loaded: false,
    }}>
      {children}
    </ReadingListContext.Provider>
  );
}

/**
 * Hook d'accès au contexte (fourni, ne pas modifier).
 */
export function useReadingList() {
  const context = useContext(ReadingListContext);
  if (!context) {
    throw new Error('useReadingList doit être utilisé dans un ReadingListProvider');
  }
  return context;
}
