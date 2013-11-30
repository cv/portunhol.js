var portunholate = require('../portunhol.js').portunholate;

describe('Portunholator', function() {
  var p = function(original, translation) {
    it('converts "' + original + '" into "' + translation + '"', function() {
      expect(portunholate(original)).toBe(translation);
    });
  };

  p(undefined, undefined);
  p('', '');
  p('eu quero', 'jo quiero');
  p('não tem mais', 'no tiene más');
  p('e meu troco?', 'y mi cambio?');
  p('onde estão minhas calças?', 'donde están mis pantalones?');
  p('isso é um teste', 'eso es uno tieste');
  p('cara, que merda!', '¡cabrón, que mierda!');
  p('coisinha legal', 'coisita buena');
  p('não achei as chaves do carro', 'no encontré las llaves del coche');
  p('essa menina se perdeu na vida', 'esa menina si perdió en la vida');
  p('água passada não move moinhos', 'água pasada no mueve molinos');
  p('a madeira velha queima melhor', 'la madera vieja queima mejor');
  p('só percebemos o valor da água depois que a fonte seca', 'solamente percebemos lo valor de la água despues que la fuente sieca');
  p('sigam-me os bons!', '¡sigam-me los buenos!');
  p('pequena biblioteca JavaScript para traduzir de português para o portunhol', 'pequeña biblioteca JavaScript para traducir de português para lo portuñol');
  p('o que você vai fazer hoje?', 'lo que usted vai hacer hoy?')
});
