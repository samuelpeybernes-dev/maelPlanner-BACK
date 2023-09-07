/**
 ** Les constantes à utiliser pour les types de métriques en rapport avec les données à afficher dans un graphique
 */
export enum Metrics {
  TOTAL_DATA, // Somme sur les données en elle-même
  TOTAL_REQUEST, // Stipule qu'on veut faire la requête sur la totalité de la période, pas seulement sur un mois ou une semaine etc
  AVERAGE,
  MEDIAN,
  MIN,
  MAX,
  NO_COMPUTATION, // Pas de calcul à réaliser
}
