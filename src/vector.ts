export interface Vec {
	x: number;
	y: number;
}

const create = (x: number, y: number) => {
	return {
		x,
		y,
	};
};

const Vector = {
	create,
};

export default Vector;
