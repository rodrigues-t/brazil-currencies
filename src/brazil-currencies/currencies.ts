interface Currency {
    name: string;
    symbol: string;
    startDate: Date;
    endDate: Date | null;
}

const CurrenciesHistory: Array<Currency> = [
    { name: 'Réis', symbol: 'R', startDate: new Date(1500, 3, 22), endDate: new Date(1833, 9, 7) },
    { name: 'Mil Réis', symbol: 'Rs', startDate: new Date(1833, 9, 8), endDate: new Date(1942, 9, 31) },
    { name: 'Cruzeiro', symbol: 'Cr$', startDate: new Date(1942, 10, 1), endDate: new Date(1967, 1, 12) },
    { name: 'Cruzeiro Novo', symbol: 'NCr$', startDate: new Date(1967, 1, 13), endDate: new Date(1970, 4, 14) },
    { name: 'Cruzeiro', symbol: 'Cr$', startDate: new Date(1970, 4, 15), endDate: new Date(1986, 1, 27) },
    { name: 'Cruzado', symbol: 'Cz$', startDate: new Date(1986, 1, 28), endDate: new Date(1989, 0, 15) },
    { name: 'Cruzado Novo', symbol: 'NCz$', startDate: new Date(1989, 0, 16), endDate: new Date(1990, 2, 15) },
    { name: 'Cruzeiro', symbol: 'Cr$', startDate: new Date(1990, 2, 16), endDate: new Date(1993, 6, 31) },
    { name: 'Cruzeiro Real', symbol: 'CR$', startDate: new Date(1993, 7, 1), endDate: new Date(1994, 5, 30) },
    { name: 'Real', symbol: 'R$', startDate: new Date(1993, 6, 1), endDate: null },
];

export {
    Currency,
    CurrenciesHistory
}