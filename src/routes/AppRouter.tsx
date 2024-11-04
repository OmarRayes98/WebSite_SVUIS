import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "../layout";
import Discuss from "../pages/Discuss";
import Conclusion from "../pages/Conclusion";
import Results from "../pages/Results";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <MainLayout />
    ),
    children: [
      {
        index: true,
        element: (
            <Results />
        ),
      },
      {
        path: "discuss",
        element: (
            <Discuss />
        ),
      },
      {
        path: "conclusion",
        element: (
              <Conclusion />
        ),
      },

    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
