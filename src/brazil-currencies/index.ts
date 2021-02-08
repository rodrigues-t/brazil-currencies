import { isAfter, isBefore, isSameDay, startOfDay } from "date-fns";
import { CurrenciesHistory, Currency } from "./currencies";

const getAllCurrencies = (): Array<Currency> => CurrenciesHistory;
const getCurrencyBySymbol = (symbol: string): Array<Currency> => CurrenciesHistory.filter(curr => curr.symbol === symbol);
const getCurrencyByName = (name: string): Array<Currency> => CurrenciesHistory.filter(curr => curr.name.toLocaleLowerCase() === name.toLocaleLowerCase());
const getCureencyByDate = (date: Date): Currency | undefined => {
    const dt = startOfDay(date);
    return CurrenciesHistory.find(curr =>
        isAfter(dt, curr.startDate) || isSameDay(dt, curr.startDate) ?
            (
                (curr.endDate === null) || (curr.endDate && (isBefore(dt, curr.endDate) || isSameDay(dt, curr.endDate))) ? true : false
            )
            :
            false
    );
}
const getUniqueSymbols = (): Array<string> => [...new Set<string>(CurrenciesHistory.map(curr => curr.symbol))];
const getUniqueNames = (): Array<string> => [...new Set<string>(CurrenciesHistory.map(curr => curr.name))];

export {
    getAllCurrencies,
    getCurrencyByName,
    getCurrencyBySymbol,
    getCureencyByDate,
    getUniqueSymbols,
    getUniqueNames,

}