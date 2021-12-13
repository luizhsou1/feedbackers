export function joinValidations (...validations) {
  return function (value) {
    if (validations && validations.length) {
      for (const validation of validations) {
        const result = validation(value)
        if (result === true) continue
        else return result
      }
    }
    return true
  }
}

export function validateEmpty (value) {
  if (!value) return '*Este campo é obrigatório'
  return true
}

export function validateLength (length) {
  return function (value) {
    if (value.length < length) return `*Este campo precisa de no mínimo ${length} caracteres`
    return true
  }
}

export function validateEmail (value) {
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
  if (!regexEmail.test(value)) return '*Este campo precisa ser um e-mail válido'
  return true
}
