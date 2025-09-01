const Utilitarios = require("../src/utilitarios");
describe("Testando métodos da classe Utilitarios", () => {

    let util;


    beforeEach(() => {
        util = new Utilitarios();
    });

    test("deve inverter uma string", () => {
        const resultado = util.inverterString("paulo");
        expect(resultado).toBe("oluap");
    });

    test("deve contar o número de caracteres em uma string", () => {
        const resultado = util.contarCaracteres("paulo");
        expect(resultado).toBe(5);
    });

    test("deve transformar uma string em maiúsculas", () => {
        const resultado = util.paraMaiusculas("paulo");
        expect(resultado).toBe("PAULO");
    });

    test("deve transformar uma string em minúsculas", () => {
        const resultado = util.paraMinusculas("PAULO");
        expect(resultado).toBe("paulo");
    });

    test("deve retornar a primeira letra maiúscula da string", () => {
        const resultado = util.primeiraLetraMaiuscula("paulo");
        expect(resultado).toBe("Paulo");
    });

    test("deve somar dois numeros", () => {
        const resultado = util.somar(2, 5)
        expect(resultado).toBe(7)
    })

    test("deve subtrair dois numeros", () => {
        const resultado = util.subtrair(5, 2)
        expect(resultado).toBe(3)
    })

    test("deve multiplicar dois numeros", () => {
        const resultado = util.multiplicar(5, 2)
        expect(resultado).toBe(10)
    })

    test("deve dividir dois numeros", () => {
        const resultado = util.dividir(10, 2)
        expect(resultado).toBe(5)
        
    })


    test("deve ver se um numero é par dois numeros", () => {
        const resultado = util.ehPar(5)
        expect(resultado).toBe(false)
    })


});

describe("Testando métodos de arrays e objetos", () => {

    let util;

    beforeEach(() => {
        util = new Utilitarios();
    });

    test("deve retornar o primeiro elemento de um array", () => {
        const resultado = util.primeiroElemento([1, 2, 3]);
        expect(resultado).toBe(1);
    });

    test("deve retornar o último elemento de um array", () => {
        const resultado = util.ultimoElemento([1, 2, 3]);
        expect(resultado).toBe(3);
    });

    test("deve retornar o tamanho de um array", () => {
        const resultado = util.tamanhoArray([1, 2, 3]);
        expect(resultado).toBe(3);
    });


    test("deve ordenar um array", () => {
        const resultado = util.ordenarArray([3, 1, 2]);
        expect(resultado).toEqual([1, 2, 3]);
    });

    test("deve inverter um array", () => {
        const resultado = util.inverterArray([3, 1, 2]);
        expect(resultado).toEqual([2, 1, 3]);
    });

    test("deve gerar um numero aleatorio", () => {
        const max = 100;
        const resultado = util.gerarNumeroAleatorio(max);
        expect(resultado).toBeLessThan(max); 
        expect(resultado).toBeGreaterThanOrEqual(0);
    });

    test("deve ver se um número é número", () => {
        const resultado = util.ehNumero(5);
        expect(resultado).toBe(true)
    })
    
    test("deve remover espaços de uma string", () => {
        const resultado = util.removerEspacos("  olá  ");
        expect(resultado).toBe("olá");
    });

    test("deve juntar elementos de um array com separador", () => {
        const resultado = util.juntarArray([1, 2, 3], "-");
        expect(resultado).toBe("1-2-3");
    });

    test("deve contar o número de palavras em uma string", () => {
        const resultado = util.contarPalavras("Olá, como você está?");
        expect(resultado).toBe(4); 
    });

    test("deve calcular a média de números em um array", () => {
        const resultado = util.mediaArray([10, 20, 30, 40, 50]);
        expect(resultado).toBe(30); 
    });

    test("deve remover elementos duplicados de um array", () => {
        const resultado = util.removerDuplicados([1, 2, 2, 3, 3]);
        expect(resultado).toEqual([1, 2, 3]);
    });

    test("deve verificar se uma string é um palíndromo", () => {
        const resultado = util.ehPalindromo("arara");
        expect(resultado).toBe(true); 

        const resultado2 = util.ehPalindromo("ola");
        expect(resultado2).toBe(false); 
    });

    test("deve mesclar dois objetos", () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { c: 3, d: 4 };
        const resultado = util.mesclarObjetos(obj1, obj2);
        expect(resultado).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });

});

