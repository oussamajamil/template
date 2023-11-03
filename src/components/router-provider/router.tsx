import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "@/pages/not-found";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import ComponentsPage from "@/pages/components";
import DevPage from "@/pages/dev";
import HooksPage from "@/pages/hooks";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
        name: "home",
      },
      {
        path: "about",
        element: <AboutPage />,
        name: "about",
      },
      {
        path: "components",
        element: <ComponentsPage />,
        name: "components",
      },
      {
        path: "dev",
        element: <DevPage />,
        name: "dev",
      },
      {
        path: "hooks",
        element: <HooksPage />,
        name: "hooks",
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
