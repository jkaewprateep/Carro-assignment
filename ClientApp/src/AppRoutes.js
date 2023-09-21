import { Users } from "./components/Users";
import { History } from "./components/History";
import { Home } from "./components/Home";
import { LoginForm } from "./components/LoginForm";
import BackgroundImage from "./background2.jpg";

const AppRoutes = [
    { index: true, element: <Home /> },
    { path: '/users', element: <Users /> },
    { path: '/userdetail', element: <Users /> },
    { path: '/loginform', element: <LoginForm /> },
    { path: '/history', element: <History /> },
    { path: '/home', element: <Home /> },
    { path: '/Background', element: <BackgroundImage /> },
]

export default AppRoutes;
