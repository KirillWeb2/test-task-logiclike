import { RouterProvider } from "react-router-dom";

import router from "./features/router";

export default function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}
