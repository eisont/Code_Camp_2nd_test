export const getDate = (date) => {
    const newdate = new Date(date)
    const hh = newdate.getHours()
    const MM = newdate.getMinutes()
    return `${hh}:${MM}`
}
export const getDateDot = (date) => {
    const newdate = new Date(date)
    const yyyy = newdate.getFullYear()
    const mm = newdate.getMonth() + 1
    const dd = newdate.getDate()
    return `${yyyy}.${mm}.${dd}`
}