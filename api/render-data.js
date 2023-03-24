const { faker } = require('@faker-js/faker');
const fs = require('fs')

const randomNumber = (n = 5) => {
  return Math.floor(Math.random() * n) + 1
}

const randomCategoriesList = (n) => {
  const categoriesList = []
  const categoryNames = []

  let id = 1
  for (let i=0; i<n; i++) {
    id += randomNumber()
    const categoryID = id
    let name = faker.commerce.department()

    while (categoryNames.includes(name)) {
      name = faker.commerce.department()
    }

    const categoryName = name
    categoryNames.push(categoryName)

    const subCategoryCount = randomNumber()
    const subCategoriesList = []
    for(let j=0; j<subCategoryCount; j++) {
      id += randomNumber()
      const subCategoryID = id

      do {
        name = faker.commerce.department()
      } while (categoryNames.includes(name))

      const subCategoryName = name
      categoryNames.push(subCategoryName)

      const subItem = {
        id: subCategoryID,
        name: subCategoryName,
        product_count: Math.floor(Math.random() * 20)
      }

      subCategoriesList.push(subItem)
    }

    const categoryProductCount = subCategoriesList.reduce((sum, cate) => sum + cate.product_count, 0)

    const item = {
      id: categoryID,
      name: categoryName,
      product_count: categoryProductCount,
      sub_categories: subCategoriesList
    }

    categoriesList.push(item)
  }

  console.log(`--> created ${categoriesList.length} categories`)
  return categoriesList
}

const randomBrandsList = (n) => {
  const brandsList = []
  const brandNames = []

  let id = 1
  for (let i=0; i<n; i++) {
    id += randomNumber()

    const item = {
      id: id,
      name: faker.animal.insect()
    }

    brandsList.push(item)
  }

  console.log(`--> created ${brandsList.length} brands`)
  return brandsList
}

const randomProductsList = (categoriesList, brandsList) => {
  const productsList = []
  const productIDs = []
  const brandIDs = brandsList.map(brand => brand.id)

  categoriesList.forEach(category => {
    category.sub_categories.forEach(subCategory => {
      for (let i=0; i<subCategory.product_count; i++) {
        const id = randomNumber(10_000)
        while (productIDs.includes(id)) {
          id = randomNumber(10_000)
        }

        const product = {
          id: id,
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          price: Number(faker.commerce.price(1, 1000, 2)),
          free_ship: Math.random() < 0.5,
          avg_rating: randomNumber(),
          image_url: faker.image.animals(),
          category_name: category.name,
          category_ids: `,${category.id},${subCategory.id},`,
          brand_id: brandIDs[Math.floor(Math.random() * brandIDs.length)]
        }

        productsList.push(product)
      }
    })
  })

  console.log(`--> created ${productsList.length} products`)
  return productsList
}

(() => {
  const categoriesList = randomCategoriesList(5)
  const rawBrandsList = randomBrandsList(10)
  const productsList = randomProductsList(categoriesList, rawBrandsList)

  const brandsList = rawBrandsList.map(brand => {
    brand.product_count = productsList.filter(product => product.brand_id === brand.id).length
    return brand
  })

  const db = {
    categories: categoriesList,
    brands: brandsList,
    products: productsList
  }

  fs.writeFile('./api/db.json', JSON.stringify(db, null, '  '), () => {
    console.log('=====> Generate data successfully')
  })
})()
