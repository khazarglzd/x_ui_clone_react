import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: "Main Page"
    },
    {
        path: "/explore",
        element: "Explore"
    },
    {
        path: "/notifications",
        element: "Notification"
    }
])

export default routes;