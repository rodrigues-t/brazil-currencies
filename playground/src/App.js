import { isDate } from 'date-fns';
import React, { useState, useEffect } from 'react';
import './App.css';
// import { getUniqueNames, getUniqueSymbols, getCurrencyByName, getCurrencyBySymbol, getCurrencyByDate, getAllCurrencies } from './brazil-currencies-lib'
import { getUniqueNames, getUniqueSymbols, getCurrencyByName, getCurrencyBySymbol, getCurrencyByDate, getAllCurrencies } from 'brazil-currencies'

function App() {
  const [name, setName] = useState();
  const [symbol, setSymbol] = useState();
  const [date, setDate] = useState();
  const [currByName, setCurrByName] = useState();
  const [currBySymbol, setCurrBySymbol] = useState();
  const [currByDate, setCurrByDate] = useState();

  useEffect(() => {
    console.log(getUniqueNames().join(', '));
    console.log(getUniqueSymbols().join(', '));
    console.log(getCurrencyByName('real'));
    console.log(getCurrencyBySymbol('Cr$'));
    console.log(getCurrencyByDate(new Date(1899, 10, 10)));
    console.log(getAllCurrencies());
  });

  const currencyElement = currency => {
    return (
      <div>
        <div><span>Name: </span><span>{currency.name}</span></div>
        <div><span>Symbol: </span><span>{currency.symbol}</span></div>
        <div><span>Start Date: </span><span>{currency.startDate?.toLocaleDateString()}</span></div>
        <div style={{ marginBottom: 5 }}><span>End Date: </span><span>{currency.endDate?.toLocaleDateString()}</span></div>
      </div>
    )
  }

  const onChangeName = e => setName(e.target.value);
  const onChangeSymbol = e => setSymbol(e.target.value);
  const onChangeDate = e => {
    let parts = e.target.value.split('-');
    setDate(new Date(parts[0], Number(parts[1]) - 1, parts[2]));
  }
  const onClickSearchByName = e => {
    e.preventDefault();
    setCurrByName(getCurrencyByName(name));
  }
  const onClickSearchBySymbol = e => {
    e.preventDefault();
    setCurrBySymbol(getCurrencyBySymbol(symbol));
  }

  const onClickSearchByDate = e => {
    e.preventDefault();
    if (isDate(date)) {
      setCurrByDate(getCurrencyByDate(date));
    }
  }

  return (
    <div className="App">
      <div className="card">
        <div className="card-row">
          <span>Search by name</span>
          <input type="text" className="input" onChange={onChangeName} />
          <input type="submit" className="btn" value="Search" onClick={onClickSearchByName} />
        </div>
        <div className="card-row">
          {
            currByName && currByName.length ?
              currByName.map(c => currencyElement(c))
              :
              <i>None</i>
          }
        </div>
        <div className="card-row">
          <span>Search by Symbol</span>
          <input type="text" className="input" onChange={onChangeSymbol} />
          <input type="submit" className="btn" value="Search" onClick={onClickSearchBySymbol} />
        </div>
        <div className="card-row">
          {
            currBySymbol && currBySymbol.length ?
              currBySymbol.map(c => currencyElement(c))
              :
              <i>None</i>
          }
        </div>
        <div className="card-row">
          <span>Search by Date</span>
          <input type="date" className="input" onChange={onChangeDate} />
          <input type="submit" className="btn" value="Search" onClick={onClickSearchByDate} />
        </div>
        <div className="card-row">
          {
            currByDate ?
              currencyElement(currByDate)
              :
              <i>None</i>
          }
        </div>
      </div>
      <div className="row">
        <div className="col col-label">Unique Names:</div>
        <div className="col col-desc">
          {
            getUniqueNames().join(' - ')
          }
        </div>
      </div>
      <div className="row">
        <div className="col col-label">Unique Symbols:</div>
        <div className="col col-desc">
          {
            getUniqueSymbols().join(' - ')
          }
        </div>
      </div>
      <div className="row">
        <div className="col col-label">Get By Date:</div>
        <div className="col col-desc">
          {
            [new Date(2000, 2, 4), new Date(1968, 6, 15), new Date(1400, 6, 15), new Date(1994, 5, 15)].map(date => {
              let curr = getCurrencyByDate(date);
              return <div>
                <span><b>Search by: {date.toLocaleDateString()}</b></span>
                {
                  curr ?
                    <>
                      {
                        currencyElement(curr)
                      }
                    </>
                    :
                    <div><i>Not found</i></div>
                }
              </div>
            })
          }
        </div>
      </div>
      <div className="row">
        <div className="col col-label">Get By Name</div>
        <div className="col col-desc">
          {
            [...getUniqueNames(), 'euro'].map(name => {
              let curr = getCurrencyByName(name.toLocaleLowerCase());
              return <div>
                <span><b>Search by: {name.toLocaleLowerCase()}</b></span>
                {
                  curr.length > 0 ?
                    <>
                      {
                        curr.map(c => currencyElement(c))
                      }
                    </>
                    :
                    <div><i>Not found</i></div>
                }
              </div>
            })
          }
        </div>
      </div>
      <div className="row">
        <div className="col col-label">Get By Symbol</div>
        <div className="col col-desc">
          {
            [...getUniqueSymbols(), '€', 'r$'].map(symbol => {
              let curr = getCurrencyBySymbol(symbol);
              return <div>
                <span><b>Search by: {symbol}</b></span>
                {
                  curr.length > 0 ?
                    <>
                      {
                        curr.map(c => currencyElement(c))
                      }
                    </>
                    :
                    <div><i>Not found</i></div>
                }
              </div>
            })
          }
        </div>
      </div>
      <div className="row">
        <div className="col col-label">All currencies</div>
        <div className="col col-desc">
          {
            getAllCurrencies().map(curr => currencyElement(curr))
          }
        </div>
      </div>
    </div >
  );
}

export default App;
