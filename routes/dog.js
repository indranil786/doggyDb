const express = require('express');
const router = express.Router();

const { addPets, getPets, getpetById, updatePet, deletePet } = require("../controllers/dog");
// redirecting to docs
router.get("/",(req,res)=>{
    res.redirect("/api-docs")
})
router.post("/api/pet", addPets);
router.get("/api/pet", getPets);
router.get("/api/pet/:petId", getpetById);
router.patch("/api/pet/:petId", updatePet);
router.delete("/api/pet/:petId", deletePet);
module.exports=router;