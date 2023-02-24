import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomeView from './views/home';
import AuthView from './views/auth';
import Header from "./components/header";
import Footer from "./components/footer";

const router = createBrowserRouter([
  {
    path: "/auth*",
    element: <AuthView />
  },
  {
    path: "/",
    element: <HomeView />
  },
  {
    path: "/home*",
    element: <HomeView />
  },
  {
    path: "/*",
    element: <>404 - Page not found</>
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
