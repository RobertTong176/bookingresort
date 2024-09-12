import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import Room from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";

const routes = [
  { path: "/", page: Home, isShowHeader: true },
  { path: "*", page: NotFound, isShowHeader: true },
  { path: "/error", page: Error, isShowHeader: true },
  { path: "/room", page: Room, isShowHeader: true },
  { path: "/singleroom", page: SingleRoom, isShowHeader: true },
];
export default routes;
