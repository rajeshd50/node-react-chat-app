/**
 * default colors for user logo background (if image not available)
 */
export const COLORS = [
  '#6200EA',
  '#304FFE',
  '#9C27B0',
  '#AA00FF',
  '#2196F3',
  '#0D47A1',
  '#1B5E20',
  '#00C853',
  '#689F38',
  '#C51162',
  '#673AB7',
  '#311B92',
  '#33691E',
  '#AFB42B',
  '#F57F17',
  '#FF6F00',
  '#0288D1',
  '#00B8D4',
  '#004D40',
  '#00BFA5',
  '#E65100',
  '#BF360C',
  '#3E2723',
  '#212121',
  '#263238',
  '#D50000',
]

/**
 * get color code according to user initial
 * @param s user name
 */
export const getColorFor = (s: string) => {
  let randomIndex = Math.floor(Math.random()*COLORS.length)
  if (!s || !s.trim().length) {
    return COLORS[randomIndex]
  }
  let index = s.toLowerCase().charCodeAt(0) - 97
  return COLORS[index >= 0 && index < 26 ? index : randomIndex]
}