export const giftCount = (count: number): string => {
  if (count % 10 === 1) return 'мышь'
  if (count % 10 > 0 && count % 10 < 5) return 'мыши'

  return 'мышей'
}
