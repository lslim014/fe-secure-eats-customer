import './App.css';
import PageRoute from './routes/PageRoutes';
import { BrowserRouter } from 'react-router-dom';
import { NativeBaseProvider } from 'native-base';

function App() {
  return (
    <BrowserRouter>
      <NativeBaseProvider>
        <PageRoute />
      </NativeBaseProvider>
    </BrowserRouter>
  );
}

export default App;
