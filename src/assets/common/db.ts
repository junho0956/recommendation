/**
 * https://fakerjs.dev
 */
import { faker } from '@faker-js/faker';

export function getFoods():IFood[] {
  return Array(10).fill(true).map(() => ({
      id: faker.database.mongodbObjectId(),
      name: faker.commerce.productName(),
      img: faker.image.food(210, 210, true),
      properties: Array(4).fill(true).map(() => faker.address.country())
    }))
}

