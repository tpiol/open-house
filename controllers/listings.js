const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");

// GET /listings
router.get("/", async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs")
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
});

// GET /listings/new
router.get("/new", (req, res) => {
   try {
res.render("listings/new.ejs")
   } catch (error) {
    console.log(error);
    res.redirect("/")
   }
})

//POST /listings/
router.post("/", async (req, res) => {
    try{
       req.body.owner = req.session.user._id;
       await Listing.create(req.body);
        res.redirect("/listings")
    } catch (error) {
        console.log("/");
        res.redirect("/");
    }
})

module.exports = router;