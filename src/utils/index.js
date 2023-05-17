export const firstLetterUppercase = (string) => {
  if (string) {
    const name = string.toLowerCase()
    
    // Se obtiene la primera letra del nombre y se vuelve mayúscula
    const firstLetter = name.split("")[0].toUpperCase()

    // Se quita la primera letra del nombre
    const rest = name.substring(1)

    return `${firstLetter}${rest}`
  }

  return "";
}

export const getShortName = ({ persona_nombres, persona_apellidos }) => {

  // Getting strings first word
  let name = persona_nombres.split(" ")[0]
  let lastname = persona_apellidos.split(" ")[0]

  name = firstLetterUppercase(name)
  lastname = firstLetterUppercase(lastname)

  return `${name} ${lastname}`
}