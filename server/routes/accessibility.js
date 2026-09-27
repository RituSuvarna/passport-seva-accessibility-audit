const express = require("express");

const router = express.Router();

router.get("/findings", (req, res) => {
  res.json({
    findings: [
      {
        id: "WEB-003",
        title: "Select elements do not have associated label elements"
      },
      {
        id: "WEB-004",
        title: "Buttons do not have an accessible name"
      },
      {
        id: "WEB-005",
        title: "Image elements do not have alt attributes"
      },
      {
        id: "WEB-006",
        title: "[aria-*] attributes do not match their roles"
      },
      {
        id: "WEB-007",
        title: "Lists do not contain only <li> elements and script supporting elements"
      }
    ]
  });
});

module.exports = router;