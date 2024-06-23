const express = require("express");
const { Scroll } = require("../models/scroll.models");
const scrollRouter = express.Router();

scrollRouter.get("/", async (req, res) => {
  try {
    const scrolls = await Scroll.find();
    res.send(scrolls);
  } catch (err) {
    console.log(err);
    res.send("something wrong");
  }
});

scrollRouter.post("/createscroll", async (req, res) => {
  const payload = req.body;
  console.log("create", payload);
  try {
    const newscroll = new Scroll(payload);
    await newscroll.save();
    res.send("created the notes");
  } catch (err) {
    console.log(err);
    res.send({ msg: "something went wrong" });
  }
});

scrollRouter.put("/edit/:id", async (req, res) => {
  const payload = req.body;
  const scrollId = req.params.id;

  console.log("Update payload", payload);

  try {
    const updatedScroll = await Scroll.findByIdAndUpdate(scrollId, payload, {
      new: true,
    });
    if (!updatedScroll) {
      return res.status(404).send({ msg: "Scroll not found" });
    }
    res.send(updatedScroll);
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Something went wrong" });
  }
});

scrollRouter.put("/isactive/:id", async (req, res) => {
    const payload = req.body;
    console.log( req.body," req.body")
    const scrollId = req.params.id;
  
    console.log("Update payload", payload);
  
    try {
      const updatedScroll = await Scroll.findByIdAndUpdate(scrollId, payload, {
        new: true,
      });
      if (!updatedScroll) {
        return res.status(404).send({ msg: "Scroll not found" });
      }
      res.send(updatedScroll);
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: "Something went wrong" });
    }
  });

// module.exports = scrollRouter;

module.exports = { scrollRouter };
