import '../styles/App.css';
import quoteData from '../data/quotes.json';
import { useState } from 'react';

function App() {
  const [data, setdata] = useState(quoteData);
  const [newQuote, setnewQuote] = useState({
    quote: '',
    character: '',
  });
  const [quoteSearch, setquoteSearch] = useState('');
  const [characterSearch, setcharacterSearch] = useState('all');

  // Añadir una nueva frase
  const handleNewQuote = (ev) => {
    console.log(ev.target.value);
    setnewQuote({ ...newQuote,
    [ev.target.id]: ev.target.value,
    });
  }
  const handleAddBtn = (ev) => { 
    ev.preventDefault();
    setdata([...data, newQuote]);
    setnewQuote({
      quote: '',
      character: '',
    });
  }

  // Filtrar
  const handleQuoteSearch = (ev) => {
    setquoteSearch(ev.target.value);
  }
  const handleCharacterSel = (ev) => {
    setcharacterSearch(ev.target.value);
  }

  // Pintar el listado
  const htmlList = data
  .filter(
    (filteredQuote)=>
    filteredQuote.quote.toLowerCase().includes(quoteSearch.toLowerCase())
    )
  .filter((selectedCh)=> selectedCh.character.toLowerCase().includes(characterSearch))
  .map((item, index) => (
    <li key={index}>
      <p>{`${item.quote} - ${item.character}`}</p>
    </li>
  ));

  return (
    <div>
      <header>
        <h1>Frases de Friends</h1>
        <form>
          <label htmlFor="search-quote">Filtrar por frases</label>
          <input 
          type="text" 
          name="search-quote" 
          id="search-quote"
          onChange={handleQuoteSearch} 
          value={quoteSearch}/>
          <label htmlFor="search-chracter">Filtrar por personaje</label>
          <select 
          name="search-character" id="search-character"
          onChange={handleCharacterSel}>
            <option value="all">Todos</option>
            <option value="ross">Ross</option>
            <option value="monica">Mónica</option>
            <option value="joey">Joey</option>
            <option value="phoebe">Phoebe</option>
            <option value="chandler">Chandler</option>
            <option value="rachel">Rachel</option>
          </select>
        </form>
      </header>
      <main>
        <ul>{htmlList}</ul>
        <form>
          <h2>Añadir una nueva frase</h2>
          <label htmlFor="quote">Frase</label>
          <input
            type="text"
            name="quote"
            id="quote"
            onChange={handleNewQuote}
            value={newQuote.quote}
          />
          <label htmlFor="character">Personaje</label>
          <input
            type="text"
            name="character"
            id="character"
            onChange={handleNewQuote}
            value={newQuote.character}
          />
          <input 
          type="submit" 
          value="Añadir una nueva frase"
          onClick={handleAddBtn} />
        </form>
      </main>
    </div>
  );
}

export default App;
