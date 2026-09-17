import { Home } from "@/pages/home/home"
import { PageNotFound } from "@/pages/404/404page"

export const getRoutes = (theme: string) => [
	{ path: "/", element: <Home theme={theme} /> },
	{ path: "*", element: <PageNotFound /> },
]
