// Copyright (c) 2014 Romain MATON. All rights reserved.
// Extension permettant d'ajouter la gestion de la taille de la police sur les articles de ArretSurImages.net
var data = require("sdk/self").data;
require("sdk/page-mod").PageMod({
  include: 'http://www.arretsurimages.net/*',
  contentScriptFile: [ data.url("jquery-1.7.2.js"), data.url("fonts.js") ]
});
