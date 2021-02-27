class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
    prompt,
    example
  ) {
    this.id = id,
    this.categoryIds = categoryIds,    // cat Id
    this.title = title,
    this.imageUrl = imageUrl,
    this.affordability = affordability,   // Time
    this.complexity = complexity,         // Space
    this.duration = duration,             // level
    this.ingredients = ingredients,      // Psudo
    this.steps = steps,                  // code solution
    this.isGlutenFree = isGlutenFree, // easy
    this.isVegan = isVegan,            // med
    this.isVegetarian = isVegetarian,  // hard
    this.isLactoseFree = isLactoseFree,  // blackdiamond
    this.prompt = prompt,
    this.example = example
  }
}

export default Meal;
