import updateUserById from '../../dao/mongo/updateUserById'

async function apiPostCustom(req, res) {
  try {
    const { userJoi } = req.body
    const { _id } = req.query
    const customization = await updateUserById(_id, userJoi)

    return res.status(200).json({ message: 'ok ' + customization.email })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error })
  }
}

export default apiPostCustom
