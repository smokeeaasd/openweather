export class OpenWeather {
	private apiKey: string;

	/**
	 * @param {string} apiKey
	 */
	constructor(apiKey: string) {
		this.apiKey = apiKey;
	}

	/**
	 * 
	 * @param {string} lat
	 * @param {string} lon
	 * @return {Promise} Promise object represents weather stats
	 */
	public async getWeather(lat: string, lon: string): Promise<object> {
		let url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;

		const res = await fetch(url);

		return await res.json();
	}
}