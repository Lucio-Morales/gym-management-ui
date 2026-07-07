import { useState } from 'react';
import { LoginPage } from "./features/auth";
import { AdminPanel } from "./layouts/AdminPanel";

function App() {
  // Usamos useState para que React detecte cambios y re-renderice
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // La variable content ahora es dinámica basada en el estado
  const content = isLoggedIn ? <AdminPanel /> : <LoginPage onLogin={() => setIsLoggedIn(true)} />;

  return (
    <>
      {content}
    </>
  );
}

export default App;