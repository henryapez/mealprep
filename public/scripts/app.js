'use strict';

/**
 * Created by hlope on 12/16/2017.
 */

var headerTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        ' Henry\'s Meal Prep '
    ),
    React.createElement(
        'p',
        null,
        'I have a passion for cooking that inspired me to start my own business and make it a bit easier for people to eat healthy and fresh! '
    )
);

/*
    Return the data only if it exists, if it doesnt return a subpllement data value
 */
function getNutritionInfo(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}

/*
    Return the whole element if the data exists, otherwise, dont show the element on the page
 */
function getDescription(description) {
    if (description) {
        return React.createElement(
            'p',
            { 'class': 'description' },
            description
        );
    } else {
        return undefined;
    }
}

/*
    Arrow functions
 */
var getExpirationDate = function getExpirationDate() {
    return ingrediant.expirationDate;
};

/* Arrow function that just returns */
var getCalories = function getCalories() {
    return ingrediant.calories;
};

/*
    Event listener, increment favorite when user presses button
 */
var favorited = function favorited() {
    ingrediant.favorites += 1;
    renderApp();
};

var ingrediant = {
    name: 'Potato',
    description: 'This is a healthy alternative to sugar as it is nautrally sweet',
    nutrition_info: 'This is really healthy',
    healthRating: 300,
    nutritionContent: ['Vitamin C', 'Vitamin A', 'Antioxidants'],
    expirationDate: "12/19",
    calories: "600",
    favorites: 0,
    pairsWellWith: ['Onions', 'Butter', 'Ketchup', 'Eggs', 'Cheese', 'Tomatos', 'Steak'],
    /*
     map to change each value in an array and produce a new one
     */
    getPairsFoods: function getPairsFoods() {
        var _this = this;

        return this.pairsWellWith.map(function (food) {
            return React.createElement(
                'li',
                null,
                _this.name + " tastes great with " + food
            );
        });
    }
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var ingrediant_view = React.createElement(
        'div',
        { className: 'ingredient' },
        '/* If the user does not exists, he is annonymous*/',
        React.createElement(
            'h2',
            { className: 'title' },
            ingrediant.name ? ingrediant.name : 'Anonymous'
        ),
        getDescription(ingrediant.description),
        React.createElement(
            'div',
            { className: 'nutritional-info' },
            getNutritionInfo(ingrediant.nutrition_info)
        ),
        React.createElement(
            'div',
            { className: 'healthy-rating' },
            'Health wise, ',
            ingrediant.healthRating >= 100 ? "this is good in moderation ;)" : "this is amazing for you!"
        ),
        React.createElement(
            'div',
            { className: 'expirationDate' },
            getExpirationDate()
        ),
        React.createElement(
            'div',
            { className: 'calories' },
            'Calories: ',
            getCalories()
        ),
        React.createElement(
            'div',
            { className: 'favorites' },
            'Favorites: ',
            ingrediant.favorites
        ),
        React.createElement(
            'ul',
            { className: 'pairs' },
            ingrediant.getPairsFoods()
        ),
        React.createElement(
            'button',
            { className: 'favorite-button', onClick: favorited },
            ingrediant.favorites
        )
    );

    ReactDOM.render(ingrediant_view, appRoot);
};

renderApp();
