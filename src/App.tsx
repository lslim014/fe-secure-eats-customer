import "./App.css";
import PageRoute from "./routes/PageRoutes";
import { BrowserRouter } from "react-router-dom";
import { NativeBaseProvider } from "native-base";
import SecureEatsHeader from "./component/common/SecureEatsHeader";
import SecureEatsfooter from "./component/common/SecureEatsFooter";

function App() {
  return (
    <BrowserRouter>
      <NativeBaseProvider>
        <SecureEatsHeader />
        <PageRoute />
        <SecureEatsfooter />
      </NativeBaseProvider>
    </BrowserRouter>
  );
}

export default App;
