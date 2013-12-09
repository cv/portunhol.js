!https://travis-ci.org/cv/portunhol.js.png

Portunhol.js
------------

Pequeña biblioteca JavaScript para traducir de português para lo portuñol.

https://github.com/cv/portunhol.js

Instalación
-----------

npm install -g portunhol

Como usar
---------

CLI:

  $ echo 'onde estão minhas calças?' | portunhol
  donde están mis pantalones?

Biblioteca:

  var p = require('portunhol');
  p.portunholate('onde estão minhas calças?'); // "donde están mis pantalones?"

Licenzla
--------

Ver el arquivo LICENSE
