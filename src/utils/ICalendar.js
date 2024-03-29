import { ICalendar, GoogleCalendar, YahooCalendar, OutlookCalendar } from "../../node_modules/datebook/dist/datebook.min.js"
import { getDateFrom } from "./parseDate/getValues"
import sequelize from "../libs/mssql"

const { InfoType } = sequelize.models

const getCalendarInfo = (calendarInfo) => {
  const { title, start, end } = calendarInfo
  
  console.log("start", start);
  console.log("end", end);
  
  return {
    title,
    description: `Invitación a taller "${title}".\n 
                  Su código de ingreso al tablero es el siguiente: ${"123-456"}`,
    start: getDateFrom(start),
    end: getDateFrom(end),
    attendees: []
  }
}

export const getCalendarLinks = (info, infoType) => {
  const { informacion_titulo, informacion_fechaPublicacion, informacion_fechaExpiracion } = info

  const calendarInfo = getCalendarInfo({
    title: `${infoType} - ${informacion_titulo}`,
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

export const getInfoCalendarLinks = async (info) => {
  const { informacionTipo_nombre } = await InfoType.findByPk(info.id_informacionTipo)
  const calendarLinks = getCalendarLinks(info, informacionTipo_nombre)

  console.log("calendarLinks:", calendarLinks)

  return calendarLinks;
}