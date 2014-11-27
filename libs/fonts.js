// Copyright (c) 2014 Romain MATON. All rights reserved.
// Extension permettant d'ajouter la gestion de la taille de la police sur les articles de ArretSurImages.net
$(document).ready(function() {
    'use strict';
    // Load font-size
    if (localStorage && localStorage.getItem('font-size')) {
        $('.contenu-html').css('font-size', localStorage.getItem('font-size'));
        console.log('Loaded font-size ' + $('.contenu-html').css('font-size'));
    }

    // Add font buttons
    var minus = '<a href="#" class="font-size minus" style="float: right; margin-top: 5px; margin-left: 5px"><img src="http://www.shanul.com/App_Themes/Default-en-US/Images//Tools/MinusText.png"></a>';
    var standard = '<a href="#" class="font-size standard" style="float: right; margin-top: 5px; margin-left: 5px"><img src="http://www.shanul.com/App_Themes/Default-en-US/Images//Tools/DefaultSize.png"></a>';
    var plus = '<a href="#" class="font-size plus" style="float: right; margin-top: 5px"><img src="http://www.shanul.com/App_Themes/Default-en-US/Images//Tools/PlusText.png"></a>';
    $("#options-article div.outils-divers").append(minus).append(standard).append(plus);

    // Click event
    $("#options-article div.outils-divers a.font-size").click(function() {
        if ($(this).hasClass('standard')) {
            $('.contenu-html').css('font-size', '0.9em');
            console.log('Using default font-size');
        } else {
            $('.contenu-html').css('font-size', (parseInt($('.contenu-html').css('font-size').split('px')[0], 10) + ($(this).hasClass('plus') ? 2 : (-2))) + 'px');
            console.log('Using font-size ' + $('.contenu-html').css('font-size'));
        }
        localStorage.setItem('font-size', $('.contenu-html').css('font-size'));
    });
});
