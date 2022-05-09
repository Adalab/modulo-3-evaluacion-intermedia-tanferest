import '../styles/App.scss';
import { useEffect, useState } from 'react';

function App() {
  const [data, setdata] = useState([]);
  const [newQuote, setnewQuote] = useState({
    quote: '',
    character: '',
  });
  const [error, setError] = useState('');
  const [quoteSearch, setquoteSearch] = useState('');
  const [characterSearch, setcharacterSearch] = useState('all');

  useEffect(() => {
    fetch("https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json")
    .then((response) => response.json())
    .then((apiData) => {
      const monica = {
        quote: 'And now you have to leave, and I have to live with a boy!',
        character: 'Monica',
      }
      console.log(apiData)
      setdata([...apiData, monica]);
    })
  },[]);


  // Añadir una nueva frase
  const handleNewQuote = (ev) => {
    console.log(ev.target.value);
    setnewQuote({ ...newQuote,
    [ev.target.id]: ev.target.value,
    });
  }
  const handleAddBtn = (ev) => { 
    ev.preventDefault();
    if(newQuote.quote !== '' && newQuote.character !== ''){
      setdata([...data, newQuote]);
      setnewQuote({
        quote: '',
        character: '',
      })
      setError(''); 
    } else {
      setError("Por favor, rellene todos los campos.");
    }
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
  .filter((selectedCh)=> {
    if (characterSearch === 'all') {
      return true;
    } else {
      return selectedCh.character.toLowerCase().includes(characterSearch);
    }
  })
  .map((item, index) => (
    <li className='list__item' key={index}>
      <p className="list__item--quote">{`"${item.quote}"`} - <span className="list__item--span">{`${item.character}`}</span></p>
    </li>
  ));

  return (
    <div>
      <header className='header'>
        <h1 className='header__title'>Friends' most iconic quotes!</h1>
        </header>
        <main>
        <form className='form'>
          <label className='form__label' htmlFor="search-quote">Filtrar por frases</label>
          <input
          className='form__input' 
          type="text" 
          name="search-quote" 
          id="search-quote"
          onChange={handleQuoteSearch} 
          value={quoteSearch}/>
          <label className='form__label' htmlFor="search-chracter">Filtrar por personaje</label>
          <select 
          className='form__select'
          name="search-character" id="search-character"
          onChange={handleCharacterSel} value={characterSearch}>
            <option value="all">Todos</option>
            <option value="ross">Ross</option>
            <option value="monica">Monica</option>
            <option value="joey">Joey</option>
            <option value="phoebe">Phoebe</option>
            <option value="chandler">Chandler</option>
            <option value="rachel">Rachel</option>
          </select>
        </form>
        <ul className='list'>{htmlList}</ul>
        <form className="form">
          <p>{error}</p>
          <h2 className="form__title">Añadir una nueva frase</h2>
          <label className="form__label" htmlFor="quote">Frase</label>
          <input
            className="form__input"
            type="text"
            name="quote"
            id="quote"
            onChange={handleNewQuote}
            value={newQuote.quote}
          />
          <label className="form__label" htmlFor="character">Personaje</label>
          <input
            className="form__input"
            type="text"
            name="character"
            id="character"
            onChange={handleNewQuote}
            value={newQuote.character}
          />
          <input 
          className="form__btn"
          type="submit" 
          value="Añadir una nueva frase"
          onClick={handleAddBtn} />
        </form>
      </main>
    </div>
  );
}

export default App;
