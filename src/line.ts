import Sketch from './sketch';
import { Drawable } from './types';
import { Vec } from './vector';

interface LineConfig {
	start: Vec;
	end: Vec;
	color?: string;
	weight?: number;
}

const create = (
	start: Vec,
	end: Vec,
	more: {
		color?: string;
		weight?: number;
	} = {},
): LineConfig => {
	const { color, weight } = more;
	return {
		start,
		end,
		color,
		weight,
	};
};

const draw = (config: LineConfig) => {
	const { context } = Sketch.useSketch();
	const { start, end, color = 'black', weight = 1 } = config;

	Sketch.save();

	context.strokeStyle = color;
	context.lineWidth = weight;

	// explanation why this is needed: https://stackoverflow.com/questions/7530593/html5-canvas-and-line-width/7531540#7531540
	const offsetFix = weight % 2 === 0 ? 0 : 0.5;

	context.beginPath();
	context.moveTo(start.x + offsetFix, start.y + offsetFix);
	context.lineTo(end.x + offsetFix, end.y + offsetFix);
	context.stroke();

	Sketch.restore();
};

interface LineConstructor extends Drawable<LineConfig> {
	create: typeof create;
}

const Line: LineConstructor = {
	draw,
	create,
};

export default Line;
