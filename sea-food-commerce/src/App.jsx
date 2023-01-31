import NavBar from "./containers/NavBar";
import { Container } from "@mui/system";
import Footer from "./containers/Footers/Footer";
import Contactanos from "./containers/Contactanos/Contactanos";
import Ubicaciones from "./containers/Contactanos/Ubicaciones";
import Seccion from "./containers/Seccion/Seccion";

function App() {
  return (
    <Container>
      <NavBar />
      <Seccion />
      <Contactanos />
      <Ubicaciones />
      <Footer />
    </Container>
  );
}

export default App;
