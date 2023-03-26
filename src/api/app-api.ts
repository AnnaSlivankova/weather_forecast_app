import axios from "axios";

const _key = '8c314ed97d3411239cbb855a59036425'
export type ParamsType = {
    q: string
    APPID?: string
    mode?: 'JSON' | 'xml' | 'hourly' | 'html'
    units?: 'standard' | 'metric' | 'imperial'
    lang?: string
}

export const weatherAPI = {
    getWeatherData(params: ParamsType) {
        return axios.get<any>(`https://api.openweathermap.org/data/2.5/weather?APPID=${_key}&units=metric`, {params});
    }
}