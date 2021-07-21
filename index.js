const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    mongoose.connection.db
      .dropDatabase()
      .then(() => {
        const recipe1 = {
          title: "Carrot Cake",
          level: "Amateur Chef",
          ingredients: [
            "6 cups grated carrots",
            "1 cup brown sugar",
            "1 cup raisins",
            "4 eggs",
            "1 1/2 cups white sugar",
            "1 cup vegetable oil",
            "2 teaspoons vanilla extract",
            "1 cup crushed pineapple, drained",
            "3 cups all-purpose flour",
            "1 1/2 teaspoons baking soda",
            "1 teaspoon salt",
            "4 teaspoons ground cinnamon",
          ],
          cuisine: "International",
          dishType: "dessert",
          image:
            "https://images.media-allrecipes.com/userphotos/720x405/3605684.jpg",
          duration: 130,
          creator: "Chef Nadia",
        };

        Recipe.create(recipe1)
          .then((recipe) => {
            console.log(recipe.title);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error))

      // return Recipe.deleteMany()

      .then(() => {
        // Run your code here, after you have insured that the connection was made
  
      })
      .catch((error) => {
        console.error("Error connecting to the database", error);
      });
  });

  //not sure where to place my functions

  Recipe.insertMany()
  .then((recipeMany) =>{
    console.log(recipeMany.title);
    console.log("Amazing recipes !")
  }).catch((error) => console.log(error))



  Recipe.findOneAndUpdate(
    {title: "Rigatoni alla Genovese"},
    {duration: 100},)
    .then((recipeUpdate)=>{
    console.log("recipe Update ===>", recipeUpdate);
    console.log("Rigatoni alla Genovese duration updated !")
  })
  .catch((error)=> console.log(error))


  Recipe.deleteOne().then().catch((error)=> console.log(error))