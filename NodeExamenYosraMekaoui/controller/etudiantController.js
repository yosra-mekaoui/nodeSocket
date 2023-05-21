const Etudiant = require("../modele/etudiant");

exports.getAllEtudiants = async (req, res) => {
  try {
    const data = await Etudiant.find({});
    res.send(data);
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};

exports.getEtudiantById = async (req, res) => {
  try {
    const data = await Etudiant.findById(req.params.id);
    res.send(data);
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};

exports.addEtudiantGet = (req, res, next) => {
  console.log("====================================");
  console.log("Our Etudiant Data: " + JSON.stringify(req.params));
  console.log("====================================");
  new Etudiant({
    name: req.params.name,
    email: req.params.email,
    cin: req.params.cin,
  }).save((err, data) => {
    if (err) {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    }
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    res.json(data);
  });
};

exports.addNewEtudiant = async (req, res, next) => {
  console.log("resultat :" + JSON.stringify(req.body));
  try {
    const etudiant = new Etudiant(req.body);
    await etudiant.save();
    res.status(200).send(etudiant);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteEtudiant = async (req, res) => {
  try {
    await Etudiant.findByIdAndRemove(req.params.id);
    res.send("Etudiant Deleted");
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};

exports.updateEtudiant = async (req, res) => {
   try{
        const updateEtudiant = await Etudiant.findByIdAndUpdate(req.params.id,
            {$set: req.body,
             },
             {new: true}
             );
             res.status(200).json(updateEtudiant);
    }catch (err){
        res.status(500).json(err)
    }
}

//recherche par name 
exports.searchEtudiantByName = async (req, res) => {
  try {
    const data = await Etudiant.find({ nom: req.params.nom });
    res.send(data);
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};
