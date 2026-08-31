---
title: West Res Water Temperature Forecasts
---
## [West Res Water Temperature Forecasts](https://westres.streamlit.app/)

Water temperature forecasting for West Reservoir.

A [Streamlit app](https://westres.streamlit.app/) that forecasts water temperatures for West Reservoir in London.

I've been swimming at the reservoir since 2024 and started recording water temperatures in November 2024. That data trained (regresses the params of) a simple physics model that simulates hour-by-hour heat transfer between air and water, using forecast data from [OpenWeatherMap](https://openweathermap.org/) and historic data from [Meteostat](https://meteostat.net/). 

Nowadays the community (usually) uploads water temperatures for me and the data and forecast is kept up to date and pushed to a motherduck backend.

My favourite thing is getting random - 'spot on Tom texts' from people in the group  when the forecast is right, or 'hmmmmm.... ' when it seems off. 

I'm looking forward to testing out some ML Models on the forecast next and comparing the outputs. 