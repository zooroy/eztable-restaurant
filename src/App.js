import './app.sass';
import { data } from './data/fake_data';
import CardItem from './components/CardItem';

function App() {
  return (
    <div className="App">
      <h1>餐廳列表</h1>
      <div className="wrap">
        {data.map(item => (
          <CardItem item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
