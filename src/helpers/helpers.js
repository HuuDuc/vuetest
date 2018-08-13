import moment from 'moment'

export const stringToUnixTimestamp = date_string => moment(date_string).unix()

export const randomNumber = (min, max) => Math.floor((Math.random() * max) + min);
