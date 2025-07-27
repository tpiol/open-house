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

module.exports = router;