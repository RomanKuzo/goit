import Home from './pages/home';
import { GlobalStyles } from './styles';
import { Provider } from 'react-redux';
import store from './redux';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Home />
    </Provider>
  );
}

export default App;
