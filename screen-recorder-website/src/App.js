import "./App.css";
import Layout from "./layout/Layout";
import LayoutNoNav from "./layout/LayoutNoNav";
import Landing from "./pages/Landing";
import LoginNSignup from "./pages/LoginNSignup";
import { RecordingReady } from "./pages/RecordingReady";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/video/:id" element={<RecordingReady />} />
        </Route>
        <Route element={<LayoutNoNav />}>
          <Route path="/login" element={<LoginNSignup />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={route} />;
}

export default App;
