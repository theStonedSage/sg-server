const express = require("express");
const { validateType } = require("../middlewares/validators");
const ObjectId = require("mongodb").ObjectId;
const router = express.Router();
const Entry = require("../models/Entry");
const { pageSize } = require("../utils/constants");

router.get("/:type/count", validateType, async (req, res) => {
  //get total entries based on type
  const type = req.params.type;
  const entryCount = await Entry.find({ programType: type }).count();
  res.send({
    data: entryCount,
    error : null
  });
});

router.get("/:type/:id", validateType, async (req, res) => {
  //get entry based on id and type
  const id = req.params.id;
  const entry = await Entry.findOne({ programType: type, _id: ObjectId(id) });
  res.send({
    data: entry,
    error : null
  });
});

router.get("/:type", validateType, async (req, res) => {
  //get entries based on page and type
  let page = req.query.page;
  if(!page || page ==0) page =1;
  const type = req.params.type;
  const entries = await Entry.find({ programType: type })
    .sort({
      releaseYear: -1,
    })
    .skip((page - 1) * pageSize)
    .limit(pageSize);
  res.send({
    data: entries,
    error : null
  });
});

module.exports = router;
