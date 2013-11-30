var regexps = [
  [/\bda\b/, "de la"],
  [/\bdo\b/, "del"],
  [/\bna\b/, "en la"],
  [/\bno\b/, "en el"],
  [/\sé\s/, " es "],
  [/\ba\b/, "la"],
  [/(\b)só\s/, "$1solamente "],
  [/\be\b/, "y"],
  [/\bdepois\b/, "después"],
  [/\bestão\b/, "están"],
  [/\bnão\b/, "no"],
  [/\btem\b/, "tiene"],
  [/\beu\b/, "jo"],
  [/\bmas\b/, "pero"],
  [/\buma(s{0,1})\b/, "una$1"],
  [/\bum\b/, "uno"],
  [/\b(minha|meu)\b/, "mi"],
  [/\b(s|t)(ua|eu)\b/, "$1u"],
  [/\b(tu|você)\b/, "usted"],
  [/\bem\b/, "en"],
  [/\bbom\b/, "bueno"],
  [/\b(minhas|meus)\b/, "mis"],
  [/\bé\b/, "es"],
  [/\bcara\b/, "cabrón"],
  [/\bhoje\b/, "hoy"],
  [/\bontem\b/, "ayer"],
  [/\bcedo\b/, "temprano"],
  [/\bisso\b/, "eso"],
  [/\bmuito\b/, "mucho"],
  [/\bmelhor\b/, 'mejor'],
  [/\bnós\b/, "nosotros"],
  [/\btroc(ar|o)\b/, "cambi$1"],
  [/\bse\b/, "si"],
  [/\bquer\b/, "quier"],
  [/\bquero\b/, "quiero"],
  [/\baqui\b/, "acá"],
  [/\bali\b/, "allí"],
  [/\bdoce\b/, "dulce"],
  [/\bfora\b/, "fuera"],
  [/\bou\b/, "o"],
  [/\bmais\b/, "más"],
  [/\bcalças\b/, "pantalones"],
  [/\blegal\b/, "buena"],
  [/\bbons\b/, "buenos"],
  [/\b(\w{2,}?)eira\b/, "$1era"],
  [/\b(\w{2,}?)eiro\b/, "$1ero"],
  [/\b(\w{2,}?)ção\b/, "$1ción"],
  [/\b(\w{2,}?)ções\b/, "$1ciones"],
  [/\b(\w{3,}?)ão\b/, "$1ión"],
  [/\b(\w{3,}?)ões\b/, "$1iones"],
  [/\b(\w*)inh(a|o)\b/, "$1it$2"],
  [/\b(\w*)al\b/, "$1ale"],
  [/\b(\w)o(\w{2,3})\b/, "$1ue$2"],
  [/\b(\w)e(\w{2,3})\b/, "$1ie$2"],
  [/\b(\w*)ch(\w*)\b/, "$1tch$2"],
  [/\b(\w*)rr(\w*)\b/, "$1r$2"],
  [/\b(\w{3,}?)dade\b/, "$1dad"],
  [/\bch(\w*)\b/, "ll$1"],
  [/nh/, "ñ"],
  [/lh/, "j"],
  [/ç/, "z"],
  [/ss/, "s"],
  [/\bli(\w)\b/, "ll$1"],
  [/\b(.*)(?=!)\b/, "¡$1"],
  [/\b(a|o)(s?)\b/, "l$1$2"],
  [/\b(\w+)eu\b/, "$1ió"],
  [/\bonde\b/, "donde"],
  [/\bcaro\b/, "coche"],
  [/\batchei\b/, "encontré"],
  [/\b(\w+)iñlos\b/, "$1linos"],
  [/\b(\w+)uz(\w+)\b/, "$1uc$2"],
  [/\b(\w+)quena\b/, "$1queña"]
];

exports.portunholate = function(original, debug) {
  var previous, result, regexp, sub;
  if(typeof original !== 'string') return undefined;

  result = original;

  for(var i = 0, limit = regexps.length; i < limit ; i++) {
    previous = result;
    regexp = regexps[i][0];
    sub = regexps[i][1];
    result = result.replace(regexp, sub);

    if(debug)
      console.log(previous, regexp, sub, result);
  }

  return result;
}
