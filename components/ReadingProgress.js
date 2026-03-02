import { View, Text, StyleSheet } from 'react-native';

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 13 — BONUS : ReadingProgress (+5 pts)                  ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║                                                              ║
 * ║  Composant affichant une barre de progression selon le       ║
 * ║  statut de lecture du livre.                                  ║
 * ║                                                              ║
 * ║  Props : { status }                                          ║
 * ║    - status : 'to_read' | 'reading' | 'finished' | null     ║
 * ║                                                              ║
 * ║  Mapping statut → progression :                              ║
 * ║    - null / undefined → ne rien afficher (return null)       ║
 * ║    - 'to_read'        → 0%                                  ║
 * ║    - 'reading'         → 50%                                ║
 * ║    - 'finished'        → 100%                               ║
 * ║                                                              ║
 * ║  Afficher :                                                  ║
 * ║    - Un label "Progression de lecture"                       ║
 * ║    - Une barre grise (fond) contenant une barre colorée     ║
 * ║      dont la largeur correspond au pourcentage               ║
 * ║    - Le pourcentage en texte (ex: "50%")                    ║
 * ║                                                              ║
 * ║  Couleurs suggérées :                                        ║
 * ║    - Fond de barre : '#e0e0e0'                              ║
 * ║    - Barre active  :                                         ║
 * ║        0%   → '#e74c3c' (rouge)                             ║
 * ║        50%  → '#f39c12' (orange)                            ║
 * ║        100% → '#27ae60' (vert)                              ║
 * ║                                                              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/**
 * @param {object} props
 * @param {string|null} props.status - Statut de lecture
 * @returns {JSX.Element|null}
 * @author student
 */
const ReadingProgress = ({ status }) => {
  // TODO 13 : Implémenter le composant
  // 1. Si pas de status → return null
  // 2. Mapper le status vers un pourcentage (0, 50 ou 100)
  // 3. Choisir la couleur en fonction du pourcentage
  // 4. Afficher le label, la barre, et le texte du pourcentage
  return null;
};

// styles
const styles = StyleSheet.create({});

export default ReadingProgress;
