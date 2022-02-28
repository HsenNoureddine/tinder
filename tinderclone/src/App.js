import "./App.css";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";
function App() {
  return (
    // BEM class naming convention
    <div className="app">
      {/* header */}
      <Header />
      {/* tinder cards */}
      <TinderCards />
      {/* swipe buttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
