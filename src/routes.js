import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import Room from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";

const routes = [
  { path: "/", page: Home },
  { path: "*", page: NotFound },
  { path: "/error", page: Error },
  { path: "/room", page: Room },
  { path: "/singleroom", page: SingleRoom },
];
export default routes;
