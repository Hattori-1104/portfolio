import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "#/utils/cn"

type Status = 200 | 404 | "pending"

const badgeVariants = cva("block rounded-full", {
	variants: {
		status: {
			200: "bg-green-500 text-white",
			404: "bg-red-500 text-white",
			pending: "bg-gray-300 text-black",
		} satisfies Record<Status, string>,
		size: {
			large: "py-1 px-4 text-md",
			small: "py-1 px-3 text-xs",
		},
	},
	defaultVariants: {
		status: 200,
		size: "large",
	},
})

const labelDict = {
	200: "200 OK",
	404: "404 NotFound",
	pending: "Pending...",
} as const satisfies Record<Status, string>

export function StatusBadge({
	status = 200,
	size = "large",
}: VariantProps<typeof badgeVariants>) {
	return (
		<code className={cn(badgeVariants({ status, size }))}>
			{labelDict[status ?? "pending"]}
		</code>
	)
}
