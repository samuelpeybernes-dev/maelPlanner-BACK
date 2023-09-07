/**
 *permet d'appliquer un distinct sur une table préalablement triée
 * @param {Array} orderedTab
 */
function distinct(orderedTab) {
  for (let i = 0; i < orderedTab.length - 1; i++) {
    let t = 0
    for (const key in orderedTab[i]) {
      if (orderedTab[i][key] === orderedTab[i + 1][key]) {
        t++
      }
      if (t === Object.values(orderedTab[i]).length) {
        orderedTab.splice(i, 1)
        i--
      }
    }
  }
}

export default distinct
