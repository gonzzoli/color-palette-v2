import { Provider } from "react-redux";
import Header from "./Header/Header";
import Layouts from "./Layouts/Layouts";
import Main from "./Main/Main";
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div className="bg-slate-800 overflow-hidden min-h-screen">
        <Header />
        <Main />
        <Layouts />
      </div>
    </Provider>
  );
}

export default App;
