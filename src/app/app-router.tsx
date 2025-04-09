import { JSX, lazy, LazyExoticComponent } from "react";
import { createBrowserRouter } from "react-router-dom";

type Component = LazyExoticComponent<() => JSX.Element>;

const BaseLayout = lazy(() => import("@/app/layouts/base-layout"));
const NotFound: Component = lazy(() => import("@/pages/not-found"));

export const Router = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: <BaseLayout />,
            children: []
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ])
}