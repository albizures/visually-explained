export interface Drawable<Config> {
	draw: (config: Config) => void;
}
