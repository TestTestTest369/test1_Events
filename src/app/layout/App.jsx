import { useState } from "react";
import NavBar from "../../features/nav/NavBar";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import { Container } from "semantic-ui-react";

function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className='App'>
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </div>
  );
}

export default App;
