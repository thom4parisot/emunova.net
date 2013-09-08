"use strict";

function labeledRating(rating){
  var ratingLabel = "";

  rating = Number(rating);

  Object.keys(labeledRating.labels).forEach(function(key){
    if (rating >= Number(key)){
      ratingLabel = labeledRating.labels[key];
    }
  });

  return rating + "/5" + (ratingLabel && " – "+ratingLabel);
}

labeledRating.labels = {
  "0.0": "Nul !!",
  "1.0": "Bof…",
  "2.0": "Presque bien",
  "2.5": "Moyen",
  "3.0": "Très bien",
  "4.0": "Exceptionnel !",
  "5.0": "Parfait !"
};

module.exports = {
  rating: labeledRating
};