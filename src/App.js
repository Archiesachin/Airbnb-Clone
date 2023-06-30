import Navbar from './components/Navbar'
import  Landing from './components/Landing'
import Maincontent from './components/maincontent';
import './App.css';
import data from './components/data';

function App() {
  const cards = data.map(items => {
    return (

  <Maincontent 
      key={items.id}
      {...items}
      />
      )
    })
    
    
    return (
      <div>
      <Navbar />
      <Landing />
      <section className="card-list">
      {cards}
      </section>
      </div>
      

  )
}

export default App;
