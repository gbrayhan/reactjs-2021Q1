import AppRouter from "./router/AppRouter";
import AuthProvider from "./auth/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRouter></AppRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
