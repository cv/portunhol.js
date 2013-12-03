var regexps = [
  [/\svocê\s/gi, " usted "],
  [/\bfazer\b/gi, "hacer"],
  [/\bda\b/gi, "de la"],
  [/\bdo\b/gi, "del"],
  [/\bna\b/gi, "en la"],
  [/\bno\b/gi, "en el"],
  [/\sé\s/gi, " es "],
  [/\ba\b/gi, "la"],
  [/(\b)só\s/gi, "$1solamente "],
  [/\be\b/gi, "y"],
  [/\bdepois\b/gi, "después"],
  [/\bestão\b/gi, "están"],
  [/\bnão\b/gi, "no"],
  [/\btem\b/gi, "tiene"],
  [/\beu\b/gi, "jo"],
  [/\bmas\b/gi, "pero"],
  [/\buma(s{0,1})\b/gi, "una$1"],
  [/\bum\b/gi, "uno"],
  [/\b(minha|meu)\b/gi, "mi"],
  [/\b(s|t)(ua|eu)\b/gi, "$1u"],
  [/\b(tu|você)\b/gi, "usted"],
  [/\bem\b/gi, "en"],
  [/\bbom\b/gi, "bueno"],
  [/\b(minhas|meus)\b/gi, "mis"],
  [/\bé\b/gi, "es"],
  [/\bcara\b/gi, "cabrón"],
  [/\bhoje\b/gi, "hoy"],
  [/\bontem\b/gi, "ayer"],
  [/\bcedo\b/gi, "temprano"],
  [/\bisso\b/gi, "eso"],
  [/\bmuito\b/gi, "mucho"],
  [/\bmelhor(es)?\b/gi, 'mejor$1'],
  [/\bnós\b/gi, "nosotros"],
  [/\boutro(s?)\b/gi, "otro$1"],
  [/\btroc(ar|o)\b/gi, "cambi$1"],
  [/\bse\b/gi, "si"],
  [/\bquer\b/gi, "quier"],
  [/\bquero\b/gi, "quiero"],
  [/\baqui\b/gi, "acá"],
  [/\bali\b/gi, "allí"],
  [/\bdoce\b/gi, "dulce"],
  [/\bfora\b/gi, "fuera"],
  [/\bou\b/gi, "o"],
  [/\bmais\b/gi, "más"],
  [/\bcalças\b/gi, "pantalones"],
  [/\blegal\b/gi, "buena"],
  [/\bbons\b/gi, "buenos"],
  [/\b(\w{2,}?)eira\b/gi, "$1era"],
  [/\b(\w{2,}?)eiro\b/gi, "$1ero"],
  [/\b(\w{2,}?)ção\b/gi, "$1ción"],
  [/\b(\w{2,}?)ções\b/gi, "$1ciones"],
  [/\b(\w{3,}?)ão\b/gi, "$1ión"],
  [/\b(\w{3,}?)ões\b/gi, "$1iones"],
  [/\b(\w*)inh(a|o)\b/gi, "$1it$2"],
  [/\b(\w+)iais\b/gi, "$1iales"],
  [/\b(\w*)al\b/gi, "$1ale"],
  [/\b(\w)o(\w{2,3})\b/gi, "$1ue$2"],
  [/\b(\w)e(\w{2,3})\b/i, "$1ie$2"],
  [/\b(\w*)ch(\w*)\b/i, "$1tch$2"],
  [/\b(\w*)rr(\w*)\b/gi, "$1r$2"],
  [/\b(\w{3,}?)dade\b/gi, "$1dad"],
  [/\bch(\w*)\b/gi, "ll$1"],
  [/nh/gi, "ñ"],
  [/lh/gi, "j"],
  [/ç/gi, "z"],
  [/ss/gi, "s"],
  [/\bli(\w)\b/gi, "ll$1"],
  [/\b(.*)(?=!)\b/i, "¡$1"],
  [/\b(a|o)(s?)\b/gi, "l$1$2"],
  [/\b(\w+)eu\b/gi, "$1ió"],
  [/\bonde\b/gi, "donde"],
  [/\bcaro\b/gi, "coche"],
  [/\batchei\b/gi, "encontré"],
  [/\b(\w+)iñlos\b/gi, "$1linos"],
  [/\b(\w+)uz(\w+)\b/gi, "$1uc$2"],
  [/\b(\w+)quena\b/gi, "$1queña"],
  [/\b(\w+)ou\b/gi, "$1oy"],
  [/\b(\w+)eit(os?|as?)\b/gi, "$1ech$2"]
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
