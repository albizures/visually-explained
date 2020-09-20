import { Drawable } from './types';
import Line from './line';
import { Vec } from './vector';
import Sketch from './sketch';

type CellSize = number | Vec;

interface GridConfig {
	position: Vec;
	columns: number;
	rows: number;
	cellSize: CellSize;
	color?: string;
}

const getCellSize = (size: CellSize): Vec => {
	if (typeof size === 'number') {
		return {
			x: size,
			y: size,
		};
	}

	return size;
};

const draw = (config: GridConfig) => {
	const { columns, rows, position, color } = config;
	const cellSize = getCellSize(config.cellSize);

	// adding one to the columns to close the grid
	for (let index = 0; index < columns + 1; index++) {
		const start = {
			x: position.x + index * cellSize.x,
			y: position.y,
		};
		const end = {
			x: position.x + index * cellSize.x,
			y: position.y + rows * cellSize.y,
		};
		Line.draw(Line.create(start, end, { color }));
	}

	// adding one to the rows to close the grid
	for (let index = 0; index < rows + 1; index++) {
		const start = {
			x: position.x,
			y: position.y + index * cellSize.y,
		};
		const end = {
			x: position.x + columns * cellSize.x,
			y: position.y + index * cellSize.y,
		};
		Line.draw(
			Line.create(start, end, {
				color,
			}),
		);
	}
};

const create = (
	position: Vec,
	columns: number,
	rows: number,
	cellSize: CellSize,
	more: {
		color?: string;
	} = {},
) => {
	const { color } = more;
	return {
		position,
		columns,
		rows,
		cellSize,
		color,
	};
};

interface GridConstructor extends Drawable<GridConfig> {
	create: typeof create;
}

const Grid: GridConstructor = {
	draw,
	create,
};

export default Grid;
