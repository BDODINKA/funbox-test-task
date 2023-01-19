export type AnimalType = {
  [key: string]: Array<BrandType>
}
export type BrandType = {
  [key: string]: Array<PackType>
}

export type PackType = {
  weight: number
  filler: string
  brand: string
  description: string
  portion: number
  gift: number
}

const GoodsNyamushka = [
  {
    weight: 0.5,
    filler: 'с фуа-гра',
    brand: 'Нямушка',
    description: 'Сказочное заморское яство',
    portion: 10,
    gift: 1,
  },
  {
    weight: 2,
    filler: 'с рыбой',
    brand: 'Нямушка',
    description: 'Сказочное заморское яство',
    portion: 40,
    gift: 2,
  },
  {
    weight: 5,
    filler: 'с курой',
    brand: 'Нямушка',
    description: 'Сказочное заморское яство',
    portion: 100,
    gift: 5,
  },
]
const GoodsRoyalCanin = [
  {
    weight: 0.5,
    filler: 'c уткой',
    brand: 'RoyalCanin',
    description: 'Отличное заморское яство',
    portion: 10,
    gift: 1,
  },
  {
    weight: 2,
    filler: 'с индекой',
    brand: 'RoyalCanin',
    description: 'Отличное заморское яство',
    portion: 40,
    gift: 2,
  },
  {
    weight: 5,
    filler: 'с курой',
    brand: 'RoyalCanin',
    description: 'Отличное заморское яство',
    portion: 100,
    gift: 5,
  },
]
const GoodsFrieskies = [
  {
    weight: 0.5,
    filler: 'c уткой',
    brand: 'Frieskies',
    description: 'Хорошее заморское яство',
    portion: 10,
    gift: 1,
  },
  {
    weight: 2,
    filler: 'с рыбкой',
    brand: 'Frieskies',
    description: 'Хорошее заморское яство',
    portion: 40,
    gift: 2,
  },
  {
    weight: 5,
    filler: 'с паштетом',
    brand: 'Frieskies',
    description: 'Хорошее заморское яство',
    portion: 100,
    gift: 5,
  },
]
const GoodsBosh = [
  {
    weight: 0.5,
    filler: 'c уткой',
    brand: 'Bosh',
    description: 'Хорошее заморское яство',
    portion: 10,
    gift: 1,
  },
  {
    weight: 2,
    filler: 'с рыбкой',
    brand: 'Bosh',
    description: 'Хорошее заморское яство',
    portion: 40,
    gift: 2,
  },
  {
    weight: 5,
    filler: 'с паштетом',
    brand: 'Bosh',
    description: 'Хорошее заморское яство',
    portion: 100,
    gift: 5,
  },
]

export const serverData: AnimalType = {
  cats: [
    {
      ['Нямушка']: GoodsNyamushka,
      ['Royal Canin']: GoodsRoyalCanin,
      ['Frieskies']: GoodsFrieskies,
    },
  ],
  dogs: [
    {
      ['Нямушка']: GoodsNyamushka,
      ['Royal Canin']: GoodsRoyalCanin,
      ['Bosh']: GoodsBosh,
    },
  ],
}
