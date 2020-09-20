interface SketchConfig {
	resize?: boolean;
}

interface Sketch {
	context: CanvasRenderingContext2D;
	resize: boolean;
}

let sketch: Sketch | undefined;

const useSketch = (): Sketch => {
	if (!sketch) {
		throw new Error('Run create first!');
	}

	return sketch;
};

const expand = () => {
	sketch.context.canvas.width = window.innerWidth;
	sketch.context.canvas.height = window.innerHeight;
};

const create = (config: SketchConfig = {}) => {
	const { resize = true } = config;

	const element = document.createElement('canvas');
	const context = element.getContext('2d');
	document.body.appendChild(element);

	context.imageSmoothingEnabled = false;

	sketch = {
		resize,
		context,
	};

	expand();

	if (resize) {
		window.addEventListener('resize', () => {
			expand();
		});
	}
};

const save = () => {
	sketch.context.save();
};

const restore = () => {
	sketch.context.restore();
};

const Sketch = { expand, create, useSketch, save, restore };

export default Sketch;
