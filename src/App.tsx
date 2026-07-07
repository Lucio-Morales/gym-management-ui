
import { LoginPage } from "./features/auth";
import { AdminPanel } from "./layouts/AdminPanel";

let isLoggedIn: boolean = true;
let content: React.ReactNode;

if (isLoggedIn) {
  content = <AdminPanel />
} else {
  content = <LoginPage />
}

function App() {
  return (
    <>
      {content}
    </>
  );
}

export default App;