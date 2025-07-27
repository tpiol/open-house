const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");

// GET /listings
router.get("/", async (req, res) => {
    try {
        const allListings = await Listing.find({});
        console.log(allListings)
        res.send("listings index page")
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
});


module.exports = router;