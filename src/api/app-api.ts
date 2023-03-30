import axios from "axios";

export type ParamsType = {
    q: string
    APPID?: string
    mode?: 'JSON' | 'xml' | 'hourly' | 'html'
    units?: 'standard' | 'metric' | 'imperial'
    lang?: string
}

export const weatherAPI = {
    getWeatherData(params: ParamsType) {
        return axios.get<any>(`https://api.openweathermap.org/data/2.5/weather?APPID=${process.env.REACT_APP_API_KEY}&units=metric`, {params});
    }
}