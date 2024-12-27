import Cart from "./components/Cart";
import Chckout from "./components/Chckout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContextProvider";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>

    <Header/>
    <Meals/>
    <Cart/>
    <Chckout/>

    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
