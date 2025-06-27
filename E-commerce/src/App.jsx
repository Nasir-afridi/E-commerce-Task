import Navbar from "./components/Navbar";
import Body from './components/Body'
import { Category } from "./components/Category";
import { BestSell } from "./components/BestSell";
import { CustomerReview } from "./components/CustomerReview";
import { DiscountSection } from "./components/DiscountSection";

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Category></Category>
      <BestSell></BestSell>
      <DiscountSection></DiscountSection>
      <CustomerReview></CustomerReview>
    </>
  );
}

export default App;
