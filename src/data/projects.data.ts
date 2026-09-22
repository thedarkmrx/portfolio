export interface ProjectsData {
	id: number
	title: string
	altImage: string
	description: string
	imageD: string
	imageL: string
	link: string
	tech: { name: string; icon?: string }[]
	status: string
}

export const projects: ProjectsData[] = [
	{
		id: 1,
		title: "Toki Pomito",
		altImage: "toki-pomito opengraph image",
		description: "A clean and minimal Pomodoro timer to help you stay focused.",
		imageD: "https://tokipomito.vercel.app/opengraph-image-d.png",
		imageL: "https://tokipomito.vercel.app/opengraph-image-l.png",
		link: "https://tokipomito.vercel.app/",
		tech: [
			{ name: "React", icon: " " },
			{ name: "TailwindCSS", icon: " " },
			{ name: "Vite", icon: " " },
		],
		status: "Deployed",
	},
	{
		id: 2,
		title: "Toki List",
		altImage: "toki-list opengraph image",
		description:
			"A minimal todo list app to help you stay organized and productive.",
		imageD: "https://tokilist.vercel.app/opengraph-image-d.png",
		imageL: "https://tokilist.vercel.app/opengraph-image-l.png",
		link: "https://tokilist.vercel.app/",
		tech: [
			{ name: "React", icon: " " },
			{ name: "TailwindCSS", icon: " " },
			{ name: "Vite", icon: " " },
		],
		status: "Deployed",
	},
	{
		id: 3,
		title: "Toki Notes",
		altImage: "toki-notes opengraph image",
		description:
			"A minimal notes app to help you capture and organize your thoughts.",
		imageD: "https://tokinotes.vercel.app/opengraph-image-d.png",
		imageL: "https://tokinotes.vercel.app/opengraph-image-l.png",
		link: "https://tokinotes.vercel.app/",
		tech: [
			{ name: "React", icon: " " },
			{ name: "TailwindCSS", icon: " " },
			{ name: "Vite", icon: " " },
		],
		status: "Deployed",
	},
]
