import Sketch from './sketch';
import Grid from './grid';
import Vector from './vector';

Sketch.create();

Grid.draw(
	Grid.create(Vector.create(100, 100), 10, 10, 20, {
		color: 'rgba(0, 0, 0, 0.2)',
	}),
);
