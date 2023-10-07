import { useState } from "react";

function App() {
  //state
  const [compteur, setCompteur] = useState(1);

  //comportement

  //affichage
  return <h1>{compteur}</h1><button>Incr<button>;
}

export default App;
