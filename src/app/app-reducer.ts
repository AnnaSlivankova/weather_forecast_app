import {Dispatch} from "redux";
import {ParamsType, weatherAPI} from "../api/app-api";
type ActionsType = ReturnType<typeof setWeatherDataAC>

export type StateType = {
    city: string
    country: string
    sunrise: number
    sunset: number
    weather: string
    weatherExpand: string
    icon: string
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    visibility: number
    wind_speed: number
    wind_deg: number
    wind_gust: number
    cloudiness: number
}

const initialState: StateType = {} as StateType

export const weatherReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case "SET-WEATHER-DATA":
            return {
                ...state,
                city: action.data['name'],
                country: action.data['sys']['country'],
                sunrise: action.data['sys']['sunrise'],
                sunset: action.data['sys']['sunset'],
                weather: action.data['weather'][0]['main'],
                weatherExpand: action.data['weather'][0]['description'],
                icon: action.data['weather'][0]['icon'],
                temp: action.data['main']['temp'],
                feels_like: action.data['main']['feels_like'],
                temp_min: action.data['main']['temp_min'],
                temp_max: action.data['main']['temp_max'],
                pressure: action.data['main']['pressure'],
                humidity: action.data['main']['humidity'],
                visibility: action.data['visibility'] / 1000,
                wind_speed: action.data['wind']['speed'],
                wind_deg: action.data['wind']['deg'],
                wind_gust: action.data['wind']['gust'],
                cloudiness: action.data['clouds']['all']
            }

        default:
            return state
    }
}

//actions
export const setWeatherDataAC = (data: any) => {
    return {type: 'SET-WEATHER-DATA', data} as const
}


//thunks
export const getWeatherDataTC = (params: ParamsType) => (dispatch: Dispatch) => {
    weatherAPI.getWeatherData(params)
        .then(res => dispatch(setWeatherDataAC(res.data)))
        .catch(error => console.log(`error: ${error}`))
}
