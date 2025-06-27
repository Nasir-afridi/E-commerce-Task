import Navbar from "./components/Navbar";
import Body from './components/Body'
import { Category } from "./components/Category";
import { BestSell } from "./components/BestSell";
import { CustomerReview } from "./components/CustomerReview";

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Category></Category>
      <BestSell></BestSell>
      <CustomerReview></CustomerReview>
    </>
  );
}

export default App;
