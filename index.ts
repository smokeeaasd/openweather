module.exports = class OpenWeather
{
	apiKey: string;

	constructor(apiKey: string)
	{
		this.apiKey = apiKey;
	}

	public async getStats(lat: string, lon: string): Promise<object>
	{
		let url: string = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;

		const res = await fetch(url);

		const json = await res.json();

		return json;
	}
}