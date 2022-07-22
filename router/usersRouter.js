//  imports//
const express = require("express")
const { getUsers, addUser } = require("../controller/usersController")
const decorateHtmlResponse = require("../middleweres/common/decorateHtmlResponse")
const avatarUpload = require("../middleweres/users/avatarUpolad")
const {
  addUserValidators,
  addUserValidationHandler
} = require("../middleweres/users/usersValidator")
const router = express.Router()

// ========= all routes =============//
router.get("/", decorateHtmlResponse("Users"), getUsers)
router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
)

module.exports = router
