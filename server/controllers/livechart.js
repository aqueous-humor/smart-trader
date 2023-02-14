const express = require("express");
const router = express.Router();

router.get("/live-charts", function(req, res) {
    res.render("LiveChart", {})
})

module.exports = router;