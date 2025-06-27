import Navbar from "./components/Navbar";
import Body from './components/Body'
import { Category } from "./components/Category";
import { BestSell } from "./components/BestSell";

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Category></Category>
      <BestSell></BestSell>
    </>
  );
}

export default App;
