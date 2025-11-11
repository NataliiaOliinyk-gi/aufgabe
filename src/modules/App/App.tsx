import UserStatus from "../../shared/components/UserStatus/UserStatus";
import Products from "../../shared/components/Products/Products";

import "../../shared/styles/style.css";

function App() {
  return (
    <>
      <div>
        <h2>Aufgabe 1</h2>
        <UserStatus />
      </div>
      <div>
        <h2>Aufgabe 2</h2>
        <Products />
      </div>
    </>
  );
}

export default App;
