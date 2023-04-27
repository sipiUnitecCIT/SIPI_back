import createHttpError from "http-errors"
import sequelize from "../libs/mssql"
import crypto from "crypto"
import { getInfoCalendarLinks } from "../utils/ICalendar"

const { Info, InfoType } = sequelize.models

class InfoService {

  async getAll() {
    const info = await Info.findAll()
    return {
      data: info,
      length: info.length,
    };
  }

  getAllTypes = async () => {
    const infoTypes = await InfoType.findAll()
    return infoTypes;
  }

  async findOne(id) {
    const infoItem = await Info.findByPk(id)

    if (infoItem) {
      return infoItem;
    } else {
      throw new createHttpError.NotFound()
    }
  }

  async findType(id) {
    const infoType = await InfoType.findByPk(id)
    if (infoType) {
      return infoType;
    } else {
      throw new createHttpError.NotFound(`InfoType ${id} doesn't exist!`)
    }
  }

  async create(info) {

    const calendarLinks = await getInfoCalendarLinks(info)
    
    const newInfo = await Info.create({
      ...info,
      id_informacion: crypto.randomUUID(),
    })

    return newInfo;
  }

  async update(id, changes) {
    const info = await this.findOne(id)

    const calendarLinks = await getInfoCalendarLinks(info)

    const modifiedInfo = await info.update(changes)
    return modifiedInfo;
  }

  async delete(id) {
    const infoItem = await this.findOne(id)
    await infoItem.destroy()
    return id;
  }
}

export default InfoService;