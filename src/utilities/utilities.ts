export const getSunTime = (unix_timestamp: number): string => {
    const date = new Date(unix_timestamp * 1000)
    let hours = date.getHours().toString()
    let minutes = date.getMinutes().toString()

    if (hours.length <= 1) hours = `0${hours}`
    if (minutes.length <= 1) minutes = `0${minutes}`

    return `${hours}:${minutes}`
}

export const getWindDirection = (d: number): string => {
    let WIND_DIRECTION;

    switch (true) {
        case (d === 0) :
        case (d === 360):
            WIND_DIRECTION = "N";
            break;
        case (d === 90) :
            WIND_DIRECTION = "E";
            break;
        case (d === 180) :
            WIND_DIRECTION = "S";
            break;
        case (d === 270) :
            WIND_DIRECTION = "W";
            break;
        case (d > 0 && d < 90) :
            WIND_DIRECTION = "NE";
            break;
        case (d > 90 && d < 180) :
            WIND_DIRECTION = "SE";
            break;
        case (d > 180 && d < 270) :
            WIND_DIRECTION = "SW";
            break;
        case (d > 270 && d < 360) :
            WIND_DIRECTION = "NW";
            break;
        default:
            WIND_DIRECTION = "-";
            break;
    }

    return WIND_DIRECTION;
}

export const getFeelsTemp = (temp: number, feelsTemp: number): string => {
    const t = Math.round(temp)
    const ft = Math.round(feelsTemp)

    if (t > ft) {
        return 'Feels colder'
    } else return 'Feels the same'
}

export const getHumidityValue = (level: number): string => {
    if (level <= 55) return 'Dry and comfortable'
    if (level > 55 && level <= 65) return 'A bit uncomfortable, sticky feeling'

    return 'Lots of moisture, uncomfortable air'
}

export const getCloudiness = (value: number): string => {
    const v = value/100

    if (v <= 0.33) return 'Low probability'
    if (v > 0.33 && v <= 0.66) return 'Moderate probability'

    return 'High probability'
}

export const getPressureValue = (value: number): string => {
  if(value > 1013) {
      return 'Higher than standard'
  } else if (value< 1013) {
      return 'Lower than standard'
  } else return 'Normal atmospheric pressure'
}

export const getVisibilityValue = (number: number): string => {
    if (number <= 50) return 'Dangerously foggy'
    if (number > 50 && number <= 500) return 'Expect heavy fog'
    if (number > 500 && number <= 2000) return 'Expect some fog'
    if (number > 2000 && number <= 9000) return 'Expect some haze'

    return 'Very clear day'
}
