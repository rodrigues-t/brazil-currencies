## About

### EN

Brazil Currencies is a set of javascript functions that allow you to search brazil currencies in history. It is possible to find out which was the Brazilian currency on a specific date. You also can get currencies by name, symbol, and more.

### PT

Brazil Currencies (Moedas do Brasil) é um conjunto de funções que te permite consultar as moedas brasileira na história. É possível consultar qual era a moeda brasileira em um data específica. Você também pode consultar as moedas por nome, símbolo entre outras coisas.

## Install
```
$ npm i brazil-currencies
```

## Usage
```javascript
import {getUniqueNames, getUniqueSymbols, getCurrencyByName, getCurrencyBySymbol, getCurrencyByDate, getAllCurrencies} from 'brazil-currencies'

console.log(getUniqueNames().join(', '));
//Réis, Mil Réis, Cruzeiro, Cruzeiro Novo, Cruzado, Cruzado Novo, Cruzeiro Real, Real

console.log(getUniqueSymbols().join(', '));
//R, Rs, Cr$, NCr$, Cz$, NCz$, CR$, R$

console.log(getCurrencyByName('real'));
//[{name: "Real", symbol: "R$", startDate: Fri Jul 01 1994 00:00:00 GMT-0300 (Horário Padrão de Brasília), endDate: null}]

console.log(getCurrencyBySymbol('Cr$'));
//[{name: "Cruzeiro", symbol: "Cr$", startDate: /*date*/, endDate: /*date*/}, {/*obj2*/}, {/*obj3*/}]

console.log(getCurrencyByDate(new Date(1899, 10, 10)));
//{name: "Mil Réis", symbol: "Rs", startDate: /*date*/, endDate: /*date*/}

console.log(getAllCurrencies());
//[/*all currencies*/]
```
### Currency Interface definition
```typescript
interface Currency {
    name: string;
    symbol: string;
    startDate: Date;
    endDate: Date | null;
}
```

## Run example
Make sure you have a recent version of Node.js installed in your development environment.

**Cloning Repository**
```
$ git clone https://github.com/rodrigues-t/brazil-currencies.git
```

**Installing all dependencies (library and playground)**
```
$ cd brazil-currencies && npm run i-all
```

**Runinng for test**
```
$ npm run dev
```
## Functions

| Handler               |Description                                          | Parameter      | Return          |
|-----------------------|-----------------------------------------------------|----------------|-----------------|
| `getAllCurrencies`    | Get the list of all currencies in the history       |                | Array&lt;Currency> |
| `getCurrencyBySymbol` | Get currencies by the symbol (Can be more than one) | symbol: string | Array&lt;Currency> |
| `getCurrencyByName`   | Get currencies by the name (Can be more than one)   | name: string   | Array&lt;Currency> |
| `getCurrencyByDate`   | Get currency by the date                            | date: Date     | Currency           |
| `getUniqueSymbols`    | Get all unique symbols                              |                | Array&lt;string>   |
| `getUniqueNames`      | Get all unique names                                |                | Array&lt;string>   |
