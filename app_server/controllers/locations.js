/**
 * Created by kmjosephs on 3/2/16.
 */
/* GET 'home' page */

module.exports.homelist = function(req, res){
    res.render('locations-list', {
        title: 'Locatr - find a place to work with wifi',
        pageHeader: {
            title: 'Locatr',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Locatr helps you find places to work when out and about. " +
        "Perhaps with coffee, cake or a pint? Let Locatr help you find the place you're looking for.",
        locations:   [{
            name: 'Starcups',
            address: '125 High Street, Reading RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Cafe Hero',
            address: '125 High Street, Reading RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        }, {
            name: 'Burger Queen',
            address: '125 High Street, Reading RG6 1PS',
            rating: 2,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '250m'
        }]
    }); // END res.render
};

/* GET 'Location info' page */

module.exports.locationInfo = function(req, res){
    res.render('location-info', {title: 'Location Info' });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res){
    res.render('location-review-form', {title: 'Add review' });
};