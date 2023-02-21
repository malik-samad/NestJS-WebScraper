import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomeView from './views/home';
import AuthView from './views/auth';
import DashboardView from './views/dashboard';
import Header from "./components/header";
import Footer from "./components/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />
  },
  {
    path: "/auth*",
    element: <AuthView />
  },
  {
    path: "/dashboard*",
    element: <DashboardView />
  }
])

function App() {
  return (
    <>
      <Header />
      <div className="RouterWrapper">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}

export default App;
