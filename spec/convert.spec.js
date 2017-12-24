describe('Test des parametres de la fonction', function() {
    
    it('la fonction doit prendre 3 parametres', function() {
        expect(convertisseur('USD', 2, 'EUR')).not.toBe(null);
    });
    
   it('les 3 parametres doivent etre du bon type', function() {
        expect(convertisseur(1, 2, 3)).toBe(null);
        expect(convertisseur('USD', 'EUR', 'EUR')).toBe(null);
        expect(convertisseur('USD', 2, 'EUR')).not.toBe(null);
        expect(convertisseur('USD', '1', '1')).toBe(null);
    });

});

describe('Test resultats de la fonction', function() {
    
    it('doit convertir des USD dans les autres monnaies', function() {
        expect(convertisseur('USD', 1, 'EUR')).toBe(0.84);
        expect(convertisseur('USD', 2, 'NZD')).toBe(2.90);
        expect(convertisseur('USD', 3, 'KRW')).toBe(3258);
    });
    
   it('doit convertir des EUR dans les autres monnaies', function() {
        expect(convertisseur('EUR', 0.84, 'USD')).toBe(1);
        expect(convertisseur('EUR', 1.68, 'NZD')).toBe(2.90);
        expect(convertisseur('EUR', 3.36, 'KRW')).toBe(4344);
   });

  it('doit convertir des KRW dans les autres monnaies', function() {
        expect(convertisseur('KRW', 3258, 'USD')).toBe(3);
        expect(convertisseur('KRW', 1086, 'EUR')).toBe(0.84);
        expect(convertisseur('KRW', 2172, 'NZD')).toBe(2.90);
   });

  it('doit convertir des NZD dans les autres monnaies', function() {
        expect(convertisseur('NZD', 2.90, 'USD')).toBe(2);
        expect(convertisseur('NZD', 7.25, 'EUR')).toBe(4.20);
        expect(convertisseur('NZD', 4.35, 'KRW')).toBe(3258);
   });

  it('ne doit pas convertir des mauvais montants', function() {
        expect(convertisseur('USD', -1, 'EUR')).toBe(null);
        expect(convertisseur('KRW', 0, 'EUR')).toBe(null);
   });

});
