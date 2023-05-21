const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
const etudiantController = require('../controller/etudiantController');
const validate = require('../midill/validate')

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/getAll", etudiantController.getAllEtudiants);

router.get("/getEtudiant/:id", etudiantController.getEtudiantById);

//router.get("/add/:name/:email/:cin", userController.addUserGet);

//recherche par name 
router.get("/search/:nom", etudiantController.searchEtudiantByName);
router.delete("/delete/:id", etudiantController.deleteEtudiant);

router.put("/update/:id",validate, etudiantController.updateEtudiant);
router.post("/new", validate, etudiantController.addNewEtudiant);
router.get("/chat", (req,res, next) => {
    res.render("chat");

    
});

module.exports = router;
