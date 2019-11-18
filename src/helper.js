const getIdFormat = function(id) {
  if(id < 9 && id > 0) {
    return `00${id}`
  }
  if(id < 99 && id > 9) {
    return `0${id}`
  }
  if(id < 999 && id > 99) {
    return `${id}`
  }
}

export default getIdFormat;