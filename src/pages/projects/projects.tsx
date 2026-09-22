import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
	Card,
	CardHeader,
	CardAction,
	CardTitle,
	CardDescription,
	CardFooter,
} from "@/components/ui/card"
import { useTheme } from "@/components/theme-provider"

const events = [
	{
		id: 1,
		title: "Toki Pomito",
		altImage: "toki-pomito opengraph image",
		description: "A clean and minimal Pomodoro timer to help you stay focused.",
		imageD: "https://tokipomito.vercel.app/opengraph-image-d.png",
		imageL: "https://tokipomito.vercel.app/opengraph-image-l.png",
		link: "https://tokipomito.vercel.app/",
		tech: [{ name: "React" }, { name: "TailwindCSS" }, { name: "Vite" }],
		status: "Deployed",
	},
]

export const Projects = () => {
	const isOdd = events.length % 2 !== 0
	const { theme } = useTheme()

	return (
		<main className="pb-10 sm:pb-16">
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
				{events.map((event, index) => {
					const isLast = index === events.length - 1
					const shouldCenter = isOdd && isLast

					return (
						<Card
							key={event.id}
							className={cn(
								"relative w-full max-w-sm pt-0",
								shouldCenter && "sm:col-span-2 sm:mx-auto"
							)}
						>
							<div className="absolute inset-0 z-30 aspect-video bg-black/10" />
							<img
								src={theme === "dark" ? event.imageL : event.imageD}
								alt={event.altImage}
								className="relative z-20 aspect-video w-full object-cover"
							/>
							<CardHeader>
								<CardAction>
									<Badge variant="secondary">{event.status}</Badge>
								</CardAction>
								<CardTitle>{event.title}</CardTitle>
								<CardDescription>{event.description}</CardDescription>
							</CardHeader>
							<CardFooter>
								<Button className="w-full" asChild>
									<a href={event.link} target="_blank">
										View Project
									</a>
								</Button>
							</CardFooter>
						</Card>
					)
				})}
			</div>
		</main>
	)
}
