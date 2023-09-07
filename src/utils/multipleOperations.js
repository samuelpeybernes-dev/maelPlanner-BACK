import pkg from 'sequelize'

const { where } = pkg

export default function multipleOperations(tab = [], column, operator) {
  return tab.map(item => where(column, operator, item))
}
