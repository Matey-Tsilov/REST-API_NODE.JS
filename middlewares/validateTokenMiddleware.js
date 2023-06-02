const { validateToken } = require("../services/userService")

module.exports = () => async (req, res, next) => {
const token = req.headers["x-authorization"]

if (token) {
    try {
        const payload = await validateToken(token)
        
        req.user = {
            email: payload.email,
            _id: payload._id,
            token
        }

    } catch (error) {
        return res.status(401).json({message: 'Invalid AccessToken. Please log in!'})
    }
}
    next()
}