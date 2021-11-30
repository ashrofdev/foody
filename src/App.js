import './App.scss';
import Recipies from './components/Recipies';
import Hero from './components/Hero';
function App() {
  return (
    <div className="App">
  

      {/* // recipie list section */}
      <section>
        <Hero/>
        <Recipies/>
      </section>
    </div>
  );
}

export default App;
