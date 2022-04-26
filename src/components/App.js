import '../styles/App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Frases de Friends</h1>
        <form>
          <label htmlFor="quote">Filtrar por frases</label>
          <input type="text" name="quote" id="quote" />
          <label htmlFor="chracter">Filtrar por personaje</label>
          <select name="character" id="character">
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
        <ul></ul>
        <form>
          <h2>Añadir una nueva frase</h2>
          <label htmlFor="newQuote">Frase</label>
          <input type="text" name="newQuote" id="newQuote" />
          <label htmlFor="character2">Personaje</label>
          <input type="text" name="character2" id="character2" />
          <input type="submit" value="Añadir una nueva frase" />
        </form>
      </main>
    </div>
  );
}

export default App;
