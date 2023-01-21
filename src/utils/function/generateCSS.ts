export const generateClassNames = (
  classNames: Record<string, string>,
  selected: boolean,
  name?: string
): Record<string, string> => {
  if (!selected) {
    return classNames
  } else {
    let styles = {} as Record<string, string>

    for (const property in classNames) {
      if (classNames[`${property}_${name}`]) {
        styles[property] = `${classNames[property]} ${classNames[`${property}_${name}`]}`
      } else {
        styles[property] = classNames[property]
      }
    }

    return styles
  }
}
