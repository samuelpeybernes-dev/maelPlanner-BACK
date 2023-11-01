import createUpdateUserCustom from '../../dao/mongo/createUpdateUserCustom'

async function apiPostCustom(req, res) {
  try {
    const { userJoi } = req.body
    const { email } = req.query
    const customization = await createUpdateUserCustom(email, userJoi)

    return res.status(200).json({ message: 'ok ' + customization.email })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error })
  }
}

export default apiPostCustom
