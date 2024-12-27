import jwt from 'jsonwebtoken'

// User auth middleware
const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers
    if (!token) {
      return res.json({
        success: false,
        message: 'Not Authorized. Login again.',
      })
    }

    // Decode the token
    const token_decode = jwt.verify(token, process.env.JWT_SECRET)

    // Ensure the decoded token has an 'id' field (or any other user-specific data you need)
    if (!token_decode.id) {
      return res.json({
        success: false,
        message: 'Not Authorized. Invalid token.',
      })
    }

    // Store the userId in the request body for use in the route handler
    req.body.userId = token_decode.id

    // Proceed to the next middleware or route handler
    next()
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export default authUser
