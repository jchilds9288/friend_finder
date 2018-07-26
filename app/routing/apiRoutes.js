const express = require("express");
const router = express.Router()
const friends = require("../data/friend")

router.get("/api/friends", (req,res)=>{
    res.json(friends)
})

router.post("/api/friends",(req, res)=>{
    const scores=[];
    const friendMatch= 0;
    const newScores = req.body.scores;

    for (var i = 0; i < friendsData.length; i++) {
        var scoreDiff = 0;
  
        // Loop through scores of new friend to compare //
        for (var j = 0; j < newScores.length; j++) {
          scoreDiff += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newScores[j])));
        }
        scores.push(scoreDiff)
      }
  
      for (var i = 0; i < scores.length; i++) {
        if (scores[i] <= scores[friendMatch]) {
          friendMatch = i;
        }
      }
  
      var winner = friendsData[friendMatch];
      res.json(winner)
  
      friendsData.push(req.body)


})

module.exports = router;