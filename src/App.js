import { Provider } from "react-redux";
import Header from "./Header/Header";
import Main from "./Main/Main";
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div className="bg-slate-800 overflow-x-hidden">
        <Header />
        <Main />
      </div>
      
    </Provider>
  );
}

export default App;
