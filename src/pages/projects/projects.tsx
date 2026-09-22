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

import { projects } from "@/data/projects.data.ts"
import { Navbar } from "@/components/navbar"

export const Projects = () => {
	const isOdd = projects.length % 2 !== 0
	const { theme } = useTheme()

	return (
		<main className="gap-14 pb-10 sm:gap-16 sm:pb-16">
			<Navbar />
			<section className="flex flex-col gap-8 pt-16 sm:gap-12">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
					{projects.map((project, index) => {
						const isLast = index === projects.length - 1
						const shouldCenter = isOdd && isLast

						return (
							<Card
								key={project.id}
								className={cn(
									"relative w-full max-w-sm pt-0",
									shouldCenter && "sm:col-span-2 sm:mx-auto"
								)}
							>
								<div className="absolute inset-0 z-30 aspect-video bg-black/10" />
								<img
									src={theme === "dark" ? project.imageL : project.imageD}
									alt={project.altImage}
									className="relative z-20 aspect-video w-full object-cover"
								/>
								<CardHeader>
									<CardAction>
										<Badge variant="secondary">{project.status}</Badge>
									</CardAction>
									<CardTitle>{project.title}</CardTitle>
									<CardDescription>{project.description}</CardDescription>
								</CardHeader>
								<CardFooter>
									<Button className="w-full" asChild>
										<a href={project.link} target="_blank">
											View Project
										</a>
									</Button>
								</CardFooter>
							</Card>
						)
					})}
				</div>
			</section>
		</main>
	)
}
