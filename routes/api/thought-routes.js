const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  newThought,
  postReaction,
  removeReaction,
} = require("../../controllers/thoughtcontroller");

router.route("/").get(getAllThoughts).post(newThought);

router.route("/:thoughtId").get(getSingleThought);
router.route("/:thoughtId/reactions").post(postReaction).delete(removeReaction);

module.exports = router;
