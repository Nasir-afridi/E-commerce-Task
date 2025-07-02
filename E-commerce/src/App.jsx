import Navbar from "./components/Navbar";
import Body from './components/Body'
import { Category } from "./components/Category";
import { BestSell } from "./components/BestSell";
import { CustomerReview } from "./components/CustomerReview";
import { DiscountSection } from "./components/DiscountSection";
import { BookListing } from "./components/BookListing";
import { Categories } from "./components/Categories";
import LatestPosts from "./components/LatestPost";
import InstagramSection from "./components/InstagramSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Category/>
      <BestSell/>
      <DiscountSection/>
      <BookListing />
      <Categories />
      <CustomerReview />
      <LatestPosts />   
      <InstagramSection />
      <Footer />
    </>
  );
}

export default App;
