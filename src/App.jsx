import './App.css';
import { Home } from './pages/Home';

function App() {

  const blogs = []
  // const blogs = [
  //   {
  //     src: "https://i.pinimg.com/564x/5d/af/31/5daf31b72d1a2e83210f6b5003dd611b.jpg",
  //     isNew: true
  //   },
  //   {
  //     src: "https://i.pinimg.com/564x/cc/77/b0/cc77b076a1e833300a249215860c46c4.jpg"
  //   },
  //   {
  //     src: "https://i.pinimg.com/564x/41/4d/01/414d01a0dee8eb05865ad395d6488d93.jpg"
  //   },
  //   {
  //     src: "https://i.pinimg.com/564x/63/7c/16/637c1690e51d4184d13f52ba0a4ca2dc.jpg",
  //     isNew: true
  //   },
  //   {
  //     src: "https://i.pinimg.com/564x/c2/bd/91/c2bd91df03a0930aa12ead0eb1101119.jpg",
  //     isNew: true
  //   },
  //   {
  //     src: "https://i.pinimg.com/564x/cc/77/b0/cc77b076a1e833300a249215860c46c4.jpg"
  //   },
  //   {
  //     src: "https://i.pinimg.com/564x/bd/93/73/bd9373772dfef750c911051bf48800a7.jpg"
  //   },
  //   {
  //     src: "https://i.pinimg.com/564x/88/4e/67/884e67812734e2f78cba0e9f167694d0.jpg"
  //   }
  // ]
  return (
    <div className="App">
      <Home blogs={blogs} />
    </div>
  );
}

export default App;
