import { Home } from "@/pages/home/home"
import { Projects } from "@/pages/projects/projects"
import { PageNotFound } from "@/pages/404/404page"

export const getRoutes = (theme: string) => [
	{ path: "/", element: <Home theme={theme} /> },
	{ path: "/projects", element: <Projects /> },
	{ path: "*", element: <PageNotFound /> },
]
