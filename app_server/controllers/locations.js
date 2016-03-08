/**
 * Created by kmjosephs on 3/2/16.
 */
/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Locatr - find a place to work with wifi',
        pageHeader: {
            title: 'Locatr',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Locatr helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Locatr help you find the place you're looking for.",
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        }, {
            name: 'Burger Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
};

/* GET 'Location info' page */

module.exports.locationInfo = function(req, res){
    res.render('location-info', {
        title: 'Location Info',
        pageHeader: {title: 'Starcups'},
        sidebar: {
            context: 'is on Locatr because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: "If you've been and you like it - or don't - please leave a review to help other people just like you"
        },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            // latitude and longitude coordinates to use in Google Map image
            coords: {lat: 51.455041, lng: -0.9690884},
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2015',
                reviewText: "What a great place. I can't say enough good things about it."
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: "16 July 2015",
                reviewText: "It was okay. Cofee wasn't great, but the wifi was fast."
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res){
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {title: 'Review Starcups'}
    });
};