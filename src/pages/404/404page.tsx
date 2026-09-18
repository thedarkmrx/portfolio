import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@/components/ui/empty"

export const PageNotFound = () => {
	return (
		<main className="flex flex-col items-center justify-center gap-14 pb-10 sm:gap-16 sm:pb-16">
			<Empty>
				<EmptyHeader>
					<EmptyTitle>404 - Not Found</EmptyTitle>
					<EmptyDescription>
						The page you&apos;re looking for doesn&apos;t exist.
					</EmptyDescription>
				</EmptyHeader>
			</Empty>
		</main>
	)
}
