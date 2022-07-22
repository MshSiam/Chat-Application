// ======== external import ================//
const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const path = require("path")
const cookieParser = require("cookie-parser")
const loginRouter = require("./router/loginRouter")
const inboxRouter = require("./router/inboxRouter")
const usersRouter = require("./router/usersRouter")

// ========== enternal import =============//
const {
  notFoundHandler,
  errorHandler
} = require("./middleweres/common/errorHandler")

const app = express()

// ========== database connection ================//

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected Successfully"))
  .catch((err) => console.log(err))

//   ================= perser =======================//

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))

// =================== Set view engine====================//
app.set("view engine", "ejs")

// ========== set statci folder ==============//
app.use(express.static(path.join(__dirname, "public")))

// ======================= Routing Setup ==============//
app.use("/", loginRouter)
app.use("/users", usersRouter)
app.use("/inbox", inboxRouter)

// =================Error Handling ====================//
// ===== 404 not found ======//
app.use(notFoundHandler)
// common error handler//
app.use(errorHandler)

// ================== listen ===========================//

app.listen(process.env.PORT, () => {
  console.log("running")
})
