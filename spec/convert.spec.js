describe('Test des parametres de la fonction', function() {
	
	it('la fonction doit prendre 3 parametres', function() {
		expect(convertisseur('USD')).toBe(null);
		expect(convertisseur('USD', 2)).toBe(null);
		expect(convertisseur('USD', 2, 'EUR')).not.toBe(null);
    });
    
    it('les 3 parametres doivent etre du bon type', function() {
		expect(convertisseur(1, 2, 3)).toBe(null);
		expect(convertisseur('USD', 'EUR', 'EUR')).toBe(null);
		expect(convertisseur('USD', 2, 'EUR')).not.toBe(null);
    });

});

describe('Test resultats de la fonction', function() {
	
	it('doit convertir des USD dans les autres monnaies', function() {
		expect(convertisseur('USD', 1, 'EUR')).toBe(0.84);
		expect(convertisseur('USD', 2, 'NZD')).toBe(2.90);
		expect(convertisseur('USD', 3, 'KRW')).toBe(3258);
    });
    
    it('doit convertir des EUR dans les autres monnaies', function() {
    });

    it('doit convertir des KRW dans les autres monnaies', function() {
    });

    it('doit convertir des NZD dans les autres monnaies', function() {
    });

    it('ne doit pas convertir des mauvais montants', function() {
    });

});