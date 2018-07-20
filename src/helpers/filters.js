import moment from 'moment'

export const timestampToMoment = timestamp => moment.unix(timestamp).format('MMMM Do YYYY, h:mm:ss a')

export const stringToUnixTimestamp = date_string => moment(date_string).unix()
