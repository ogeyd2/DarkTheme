/* Seleciona os elementos */
const html = document.querySelector('html')
const checkbox = document.querySelector('input[name="theme"]')
const getStyles = (elemnt, style) =>
  window.getComputedStyle(elemnt).getPropertyValue(style)

/* Define propriedades com as cores */
const initialColors = {
  bodyColor: getStyles(html, '--body-color'),
  containerColor: getStyles(html, '--container-color'),
  containerColorLight: getStyles(html, '--container-color-light')
}

const darkMode = {
  bodyColor: 'hsl(233, 12%, 14%)',
  containerColor: ' hsl(233, 12%, 20%)',
  containerColorLight: 'hsl(233, 12%, 26%)'
}

/* Muda as propriedades do objeto pra minusculo */
const changeKey = key => '--' + key.replace(/([A-Z])/, '-$1').toLowerCase()

/* Alterna as cores */
const changeColors = colors => {
  Object.keys(colors).map(key => {
    html.style.setProperty(changeKey(key), colors[key])
  })
}
checkbox.addEventListener('change', ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors)
})
