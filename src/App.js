import { Provider } from "react-redux";
import Header from "./Header/Header";
import Main from "./Main/Main";
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
