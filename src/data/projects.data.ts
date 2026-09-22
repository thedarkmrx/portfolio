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
]
