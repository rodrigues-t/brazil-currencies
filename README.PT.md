## Sobre

Brazil Currencies (Moedas do Brasil) é um conjunto de funções que te permite consultar as moedas brasileira na história. É possível consultar qual era a moeda brasileira em um data específica. Você também pode consultar as moedas por nome, símbolo entre outras coisas.

## Instalação
```
$ npm i brazil-currencies
```

## Uso
```javascript
import {getUniqueNames, getUniqueSymbols, getCurrencyByName, getCurrencyBySymbol, getCurrencyByDate, getAllCurrencies} from 'brazil-currencies'

console.log(getUniqueNames().join(', '));
//Réis, Mil Réis, Cruzeiro, Cruzeiro Novo, Cruzado, Cruzado Novo, Cruzeiro Real, Real

console.log(getUniqueSymbols().join(', '));
//R, Rs, Cr$, NCr$, Cz$, NCz$, CR$, R$

console.log(getCurrencyByName('real'));
//[{name: "Real", symbol: "R$", startDate: Fri Jul 01 1994 00:00:00 GMT-0300 (Horário Padrão de Brasília), endDate: null}]

console.log(getCurrencyBySymbol('Cr$'));
//[{name: "Cruzeiro", symbol: "Cr$", startDate: /*data*/, endDate: /*data*/}, {/*obj2*/}, {/*obj3*/}]

console.log(getCurrencyByDate(new Date(1899, 10, 10)));
//{name: "Mil Réis", symbol: "Rs", startDate: /*data*/, endDate: /*data*/}

console.log(getAllCurrencies());
//[/*todas as moedas*/]
```
### Moeda Interface
```typescript
interface Currency {
    name: string;
    symbol: string;
    startDate: Date;
    endDate: Date | null;
}
```

## Rodando o Exemplo
Tenha certeza que você tem uma versão recente do Node.js instalado no seu ambiente de desenvolvimento.

**Clonando o Repositório**
```
$ git clone https://github.com/rodrigues-t/brazil-currencies.git
```

**Instalando dependências (library e playground)**
```
$ cd brazil-currencies && npm run i-all
```

**Rodando para testar**
```
$ npm run dev
```
## Funções

| Nome                  |Descrição                                           | Parâmetro      | Retorno            |
|-----------------------|----------------------------------------------------|----------------|--------------------|
| `getAllCurrencies`    | Lista de todas as moedas na histrória              |                | Array&lt;Currency> |
| `getCurrencyBySymbol` | Obtenha moedas pelo símbolo (pode ser mais de uma) | symbol: string | Array&lt;Currency> |
| `getCurrencyByName`   | Obtenha moedas pelo símbolo (pode ser mais de uma) | name: string   | Array&lt;Currency> |
| `getCurrencyByDate`   | Obtenha moeda pela data                            | date: Date     | Currency           |
| `getUniqueSymbols`    | Obtenha todos os símbolos únicos                   |                | Array&lt;string>   |
| `getUniqueNames`      | Obtenha todos os nomes únicos                      |                | Array&lt;string>   |
