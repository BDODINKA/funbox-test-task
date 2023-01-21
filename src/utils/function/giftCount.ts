export const giftCount = (count: number): string => {
  if (count === 1) return 'мышь'
  if (count < 5) return 'мыши'

  return 'мышей'
}
