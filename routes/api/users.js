const express = require("express")
const router = express.Router()

const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



// POST /api/users
//req, res, next apply here, pass to .create
router.post('/', usersCtrl.create);

//Login Route
router.post("/login", usersCtrl.login)

//Check Token
// router.get("/check-token", usersCtrl.checkToken)
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken)

//Create Note
router.post("/create-note", ensureLoggedIn, usersCtrl.createNote)

//Get MyNotes
router.get("/get-my-notes", ensureLoggedIn, usersCtrl.getMyNotes)

module.exports = router