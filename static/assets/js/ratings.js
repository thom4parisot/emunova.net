'use strict';

export function labeledRating(rating) {
  var ratingLabel = '';

  if (rating === null || isNaN(rating)) {
    return 'Pas encore noté.';
  }

  Object.keys(labeledRating.labels).forEach(function(key) {
    if (rating >= Number(key)) {
      ratingLabel = labeledRating.labels[key];
    }
  });

  return rating + '/5' + (ratingLabel && ' – ' + ratingLabel);
}

labeledRating.labels = {
  '0.0': 'Nul !!',
  '1.0': 'Bof…',
  '2.0': 'Presque bien',
  '2.5': 'Moyen',
  '3.0': 'Très bien',
  '4.0': 'Exceptionnel !',
  '5.0': 'Parfait !'
};

export function generateStars(rating) {
  var percentage = !rating || isNaN(rating) ? 0 : rating * 20;
  var profile = '';

  if (rating <= 1) {
    profile = 'progress-bar-danger';
  } else if (rating <= 2) {
    profile = 'progress-bar-warning';
  } else if (rating < 4) {
    profile = 'progress-bar-info';
  } else if (rating >= 4) {
    profile = 'progress-bar-success';
  }

  return `<div class="progress progress-rating">
    <div class="progress-bar ${profile}" role="progressbar" style="width: ${percentage}%" aria-valuenow="${rating}" aria-valuemin="0" aria-valuemax="5">
      <span class="sr-only">${labeledRating(rating)}</span>
    </div>
  </div>`;
}
