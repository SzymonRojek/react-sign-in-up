const express = require("express");
const router = express.Router();
const subscribersController = require("../controllers/subscribersController");
const ROLES_LIST = require("../config/rolesList");
const verifyRoles = require("../middleware/verifyRoles");
const verifyJWT = require("../middleware/verifyJWT");

router.route("/").get(verifyJWT, subscribersController.getAllSubscribers);

router
  .route("/:id")
  .get(verifyJWT, subscribersController.getOneSubscriber)
  .put(
    verifyJWT,
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),
    subscribersController.updateSubscriber
  )
  .delete(
    verifyJWT,
    verifyRoles(ROLES_LIST.Admin),
    subscribersController.deleteOneSubscriber
  );

module.exports = router;
