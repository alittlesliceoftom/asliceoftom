---
title: West Res Water Temperature Forecasts
---
## [West Res Water Temperature Forecasts](https://westres.streamlit.app/)

Water temperature forecasting for West Reservoir.

A [Streamlit app](https://westres.streamlit.app/) that forecasts water temperatures for West Reservoir in London.

I've been swimming at the reservoir since 2024 and started recording water temperatures in November 2024. That data trained (regresses the params of) a simple physics model that simulates hour-by-hour heat transfer between air and water, using forecast data from [OpenWeatherMap](https://openweathermap.org/) and historic data from [Meteostat](https://meteostat.net/). 