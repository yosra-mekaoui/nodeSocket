const express = require("express");
const chat = require("../modele/chat");

async function getall(req, res) {
  try {
    const data = await chat.find();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
}

async function getbyid(req, res) {
  try {
    const data = await chat.findById(req.params.id);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
}

async function add(msge) {
  try {
    const Chat = new chat({
      msg: msge,
      date: new Date(),
    });
    //console.log("resultat:" + JSON.stringify(req.body));
    // console.log("resultat:" + JSON.stringify(Chat));
    console.log(new Date());
    await Chat.save();
    console.log("add success");
  } catch (err) {
    console.log({ error: error.toString() });
  }
}
//modifier le msg

async function update(req, res) {
    try {
        const Chat = await chat.findById(req.params.id);
        Chat.msg = req.body.msg;
        Chat.date = new Date();
        await Chat.save();
        res.send("update success");
    } catch (err) {
        res.send(err);
    }

}
//Delete
async function Delete(req, res) {
    try {
        await chat.findByIdAndRemove(req.params.id);

        res.send("delete success");
    } catch (err) {
        res.send(err);
    }
    }

module.exports = { getall, getbyid, add ,update ,Delete};