import UserStatus from "../../shared/components/UserStatus/UserStatus";
import Products from "../../shared/components/Products/Products";
import SectionLayout from "../../shared/components/SectionLayout/SectionLayout";

import "../../shared/styles/style.css";

function App() {
  return (
    <>
      <SectionLayout title="Aufgabe 1">
        <UserStatus />
      </SectionLayout>
       <SectionLayout title="Aufgabe 2, 3">
        <Products />
      </SectionLayout>
    </>
  );
}

export default App;
