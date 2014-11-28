// Copyright (c) 2014 Romain MATON. All rights reserved.
// Extension permettant d'ajouter la gestion de la taille de la police sur les articles de ArretSurImages.net
$(document).ready(function () {
  'use strict';
  // Load font-size
  var $contenu = $('.contenu-html');
  if (localStorage && localStorage.getItem('font-size')) {
    $contenu.css('font-size', localStorage.getItem('font-size'));
    console.log('Loaded font-size ' + $contenu.css('font-size'));
  }

  // Add font buttons
  var minus = '<a href="#" class="font-size minus" style="float: right; margin-top: 5px; margin-left: 5px"><img src="https://raw.githubusercontent.com/rmat0n/arretsurimages-fontsize/master/images/minus.png"></a>';
  var standard = '<a href="#" class="font-size standard" style="float: right; margin-top: 5px; margin-left: 5px"><img src="https://raw.githubusercontent.com/rmat0n/arretsurimages-fontsize/master/images/standard.png"></a>';
  var plus = '<a href="#" class="font-size plus" style="float: right; margin-top: 5px"><img src="https://raw.githubusercontent.com/rmat0n/arretsurimages-fontsize/master/images/plus.png"></a>';

  var $optionsArticle = $("#options-article");
  if ($optionsArticle.length > 0) { // articles, chroniques et emissions
    $optionsArticle.find(".outils-divers").append(minus + standard + plus);
  } else { // breves
    $contenu.before(minus + standard + plus);
  }

  // Click event
  $(".font-size").click(function () {
    if ($(this).hasClass('standard')) {
      $contenu.css('font-size', '0.9em');
      console.log('Using default font-size');
    } else {
      $contenu.css('font-size', (parseInt($contenu.css('font-size').split('px')[0], 10) + ($(this).hasClass('plus') ? 2 : (-2))) + 'px');
      console.log('Using font-size ' + $contenu.css('font-size'));
    }
    localStorage.setItem('font-size', $contenu.css('font-size'));
  });
});
