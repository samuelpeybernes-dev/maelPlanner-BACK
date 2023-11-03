import updateUserByToken from '../../dao/mongo/updateUserByToken'

async function apiPostCustom(req, res) {
  try {
    const { userJoi } = req.body
    const { token } = req.query
    const customization = await updateUserByToken(token, userJoi)

    return res.status(200).json({ message: 'ok ' + customization.email })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error })
  }
}

export default apiPostCustom
