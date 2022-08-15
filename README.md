Requisitos: NodeJS V.18

Um pacote para extrair dados da OpenWeatherMap API

*Instalação*
```
npm i @smokeeaasd/openweather
```

Iniciar uma instância da classe OpenWeather
```js
const { OpenWeather } = require('@smokeeaasd/weather');

const openWeather = new OpenWeather('token');

// extrair dados de uma determinada localização
await openWeather.getWeather("-22.000", "-44.000")
```