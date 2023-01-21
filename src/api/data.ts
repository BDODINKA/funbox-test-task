import { v1 } from 'uuid'

export type AnimalType<T = BrandType> = {
  cats: T
  dogs: T
}

export type BrandType = {
  [key: string]: Array<PackType>
}

export type PackType = {
  id: string
  weight: number
  filler: string
  brand: string
  title: string
  description: string
  portion: number
  gift: number
  count: number
}

const GoodsNyamushka = [
  {
    id: v1(),
    weight: 0.5,
    filler: 'с фуа-гра',
    brand: 'Нямушка',
    title: 'Сказочное заморское яство',
    description: 'Печень утки разварная с артишоками.',
    portion: 10,
    gift: 1,
    count: 10,
  },
  {
    id: v1(),
    weight: 2,
    filler: 'с рыбой',
    brand: 'Нямушка',
    title: 'Сказочное заморское яство',
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    portion: 40,
    gift: 2,
    count: 20,
  },
  {
    id: v1(),
    weight: 5,
    filler: 'с курой',
    brand: 'Нямушка',
    title: 'Сказочное заморское яство',
    description: 'Филе из цыплят с трюфелями в бульоне.',
    portion: 100,
    gift: 5,
    count: 0,
  },
]
const GoodsRoyalCanin = [
  {
    id: v1(),
    weight: 0.5,
    filler: 'c уткой',
    brand: 'Royal Canin',
    title: 'Отличное заморское яство',
    description: 'Вкуснейшая утка для вашего питомца',
    portion: 10,
    gift: 1,
    count: 1,
  },
  {
    id: v1(),
    weight: 0.5,
    filler: 'c уткой',
    brand: 'Royal Canin',
    title: 'Отличное заморское яство',
    description: 'Вкуснейшая утка для вашего питомца',
    portion: 10,
    gift: 1,
    count: 2,
  },
  {
    id: v1(),
    weight: 2,
    filler: 'с индекой',
    brand: 'Royal Canin',
    title: 'Отличное заморское яство',
    description: 'Диетическая индейка для вашего питомца',
    portion: 40,
    gift: 2,
    count: 0,
  },
  {
    id: v1(),
    weight: 5,
    filler: 'с курой',
    brand: 'Royal Canin',
    title: 'Отличное заморское яство',
    description: 'Сытная кура для вашего питомца',
    portion: 100,
    gift: 5,
    count: 3,
  },
]

const GoodsFrieskies = [
  {
    id: v1(),
    weight: 0.5,
    filler: 'c уткой',
    brand: 'Frieskies',
    title: 'Хорошее заморское яство',
    description: 'Вкуснейшая утка для вашего питомца',
    portion: 10,
    gift: 1,
    count: 3,
  },
  {
    id: v1(),
    weight: 2,
    filler: 'с рыбкой',
    brand: 'Frieskies',
    title: 'Хорошее заморское яство',
    description: 'Нежнейшая рыбка для вашего питомца',
    portion: 40,
    gift: 2,
    count: 3,
  },
  {
    id: v1(),
    weight: 5,
    filler: 'с паштетом',
    brand: 'Frieskies',
    title: 'Хорошее заморское яство',
    description: 'Паштет как в Домах Лондона для вашего питомца',
    portion: 100,
    gift: 5,
    count: 0,
  },
]
const GoodsBosh = [
  {
    id: v1(),
    weight: 0.5,
    filler: 'c уткой',
    brand: 'Bosh',
    title: 'Хорошее заморское яство',
    description: 'Немецкое качество',
    portion: 10,
    gift: 1,
    count: 3,
  },
  {
    id: v1(),
    weight: 2,
    filler: 'с рыбкой',
    brand: 'Bosh',
    title: 'Хорошее заморское яство',
    description: 'Немецкое качество',
    portion: 40,
    gift: 2,
    count: 2,
  },
  {
    id: v1(),
    weight: 5,
    filler: 'с паштетом',
    brand: 'Bosh',
    title: 'Хорошее заморское яство',
    description: 'Немецкое качество',
    portion: 100,
    gift: 5,
    count: 1,
  },
]

export const serverData: AnimalType = {
  cats: {
    ['Нямушка']: GoodsNyamushka,
    ['Royal Canin']: GoodsRoyalCanin,
    ['Frieskies']: GoodsFrieskies,
  },
  dogs: {
    ['Нямушка']: GoodsNyamushka,
    ['Royal Canin']: GoodsRoyalCanin,
    ['Bosh']: GoodsBosh,
  },
}
