import moment from 'moment'

export const stringToUnixTimestamp = date_string => moment(date_string).unix()
