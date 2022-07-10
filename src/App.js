import { Container } from "semantic-ui-react";
import "./App.css";
import { Dashboard } from "./layouts/Dashboard";

function App() {
  return (
    <div>
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
