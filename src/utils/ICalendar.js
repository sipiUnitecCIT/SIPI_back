import { ICalendar, GoogleCalendar, YahooCalendar, OutlookCalendar } from "datebook"
import { getDateFrom } from "./parseDate/getValues.mjs";

const getCalendarInfo = (calendarInfo) => {
  const { title, start, end } = calendarInfo

  return {
    title,
    description: `Invitación a taller "${title}".\n 
                  Su código de ingreso al tablero es el siguiente: ${"123-456"}`,
    start: getDateFrom(start),
    end: getDateFrom(end),
    attendees: []
  }
}

export const getCalendarLinks = (info) => {
  const { informacion_titulo, informacion_fechaPublicacion, informacion_fechaExpiracion } = info

  const calendarInfo = getCalendarInfo({
    title: informacion_titulo,
    start: informacion_fechaPublicacion,
    end: informacion_fechaExpiracion,
  })

  const calendar = new ICalendar(calendarInfo)

  const googleCalendar = new GoogleCalendar(calendar)
  const yahooCalendar = new YahooCalendar(calendar)
  const outlookCalendar = new OutlookCalendar(calendar)

  const calendarLinks = {
    calendar_link_outlook: outlookCalendar.render(),
    calendar_link_gmail: googleCalendar.render(),
    calendar_link_yahoo: yahooCalendar.render(),
  }

  return calendarLinks;
}