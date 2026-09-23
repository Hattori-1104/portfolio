import {
	Background,
	Controls,
	type Edge,
	Handle,
	type Node,
	Position,
	ReactFlow,
} from "@xyflow/react"
import type { ThinDate } from "#/components/common/thin-data"
import { movies } from "./movie"

type MovieNodeData = {
	name: string
	publishedAt: ThinDate
	phase: number
}

const movieNodeType = "movie"
type MovieNodeType = typeof movieNodeType

type MovieNode = Node<MovieNodeData, MovieNodeType>

function createNodeIdFromIndex(index: number) {
	return `infinity_sage:${index}`
}

const nodes: MovieNode[] = movies.map(
	(movie) =>
		({
			id: createNodeIdFromIndex(movie.index),
			type: movieNodeType,
			position: {
				x: 0,
				y: movie.index * 100,
			},
			data: {
				name: movie.name,
				publishedAt: movie.publishedAt,
				phase: movie.phase,
			},
		}) satisfies MovieNode,
)

const timelineEdges: Edge[] = movies.slice(0, -1).map(
	(movie) =>
		({
			id: `e${movie.index}-${movie.index + 1}`,
			source: createNodeIdFromIndex(movie.index),
			target: createNodeIdFromIndex(movie.index + 1),
			animated: true,
		}) satisfies Edge,
)

function MovieNode({ data }: { data: MovieNodeData }) {
	return (
		<div
			className="border border-gray-300 bg-gray-50 shadow shadow-gray-200 rounded-2xl w-64 px-4 p-2 flex flex-col items-start justify-center "
			style={{ transform: `translate(-50%, -50%)` }}
		>
			<div className="flex flex-col gap-2">
				<div className="text-sm leading-tight">{data.name}</div>
				<div className="text-xs text-gray-400">
					{data.publishedAt.toString()}
				</div>
			</div>
			<Handle
				className="border-none w-4 h-2 rounded-none bg-transparent"
				type="target"
				position={Position.Top}
			>
				<div className="bg-gray-300 w-4 h-1 relative bottom-0 rounded-t-full" />
			</Handle>
			<Handle
				className="border-none w-4 h-2 rounded-none bg-transparent"
				type="source"
				position={Position.Bottom}
			>
				<div className="bg-gray-300 w-4 h-1 relative top-1 rounded-b-full" />
			</Handle>
		</div>
	)
}

const nodeTypes = { [movieNodeType]: MovieNode }

export function MovieFlow() {
	return (
		<ReactFlow
			nodes={nodes}
			edges={timelineEdges}
			nodeTypes={nodeTypes}
			fitView
			nodesDraggable={false}
		>
			<Background />
			<Controls />
		</ReactFlow>
	)
}
