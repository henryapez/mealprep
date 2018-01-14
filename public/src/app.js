/**
 * Created by hlope on 12/16/2017.
 */



var headerTemplate = (

    <div>
        <h2> Henry's Meal Prep </h2>
        <p>I have a passion for cooking that inspired me to
            start my own business and make it a bit easier for
            people to eat healthy and fresh!! </p>
    </div>
);

/*
    Return the data only if it exists, if it doesnt return a subpllement data value
 */
function getNutritionInfo(location){
    if(location){
        return location;
    }else {
        return 'Unknown';

    }
}

/*
    Return the whole element if the data exists, otherwise, dont show the element on the page
 */
function getDescription(description){
    if(description){
        return <p class="description">{description}</p>
    }else{
        return undefined;
    }
}

/*
    Arrow functions
 */
var getExpirationDate = () => {
    return ingrediant.expirationDate;
}

/* Arrow function that just returns */
const getCalories = () => ingrediant.calories;

/*
    Event listener, increment favorite when user presses button
 */
const favorited = () => {
    ingrediant.favorites += 1;
    renderApp();
}

var ingrediant = {
    name: 'Potato',
    description: 'This is a healthy alternative to sugar as it is nautrally sweet',
    nutrition_info: 'This is really healthy',
    healthRating: 300,
    nutritionContent: ['Vitamin C', 'Vitamin A', 'Antioxidants'],
    expirationDate: "12/19",
    calories: "600",
    favorites: 0,
    pairsWellWith: ['Onions','Butter','Ketchup', 'Eggs', 'Cheese', 'Tomatos', 'Steak'],
    /*
     map to change each value in an array and produce a new one
     */
    getPairsFoods () {
        return this.pairsWellWith.map((food) =>
        <li>{this.name + " tastes great with " + food}</li>)
    },

};

var appRoot = document.getElementById('app');

const renderApp = () => {
    var ingrediant_view = (
        <div className="ingredient">
            /* If the user does not exists, he is annonymous*/
            <h2 className="title">{ingrediant.name ? ingrediant.name : 'Anonymous'}</h2>
            {getDescription(ingrediant.description)}
            <div className="nutritional-info">{getNutritionInfo(ingrediant.nutrition_info)}</div>
            <div className="healthy-rating">Health wise, {ingrediant.healthRating >= 100 ? "this is good in moderation ;)" : "this is amazing for you!"}</div>
            <div className="expirationDate">{getExpirationDate()}</div>
            <div className="calories">Calories: {getCalories()}</div>
            <div className="favorites">Favorites: {ingrediant.favorites}</div>

            <ul className="pairs">
                {ingrediant.getPairsFoods()}
            </ul>
            <button className="favorite-button" onClick={favorited}>{ingrediant.favorites}</button>




        </div>
    );

    ReactDOM.render(ingrediant_view, appRoot)
}


renderApp();