/**
 * Created by kmjosephs on 3/2/16.
 */
/* GET 'about' page */
module.exports.about = function(req, res){
    res.render('generic-text', {
        title: 'About Locatr',
        content: 'Locatr was created to help people find places to sit down and get a bit of work done. \n\nLorem' +
        'Ipsum dolor sit amet amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan. Nullam ' +
        'sit amet interdum magna. Morbi quis faucibus nisi. Vestibulum mollis purus quis eros adipiscing tristique. ' +
        'Proin posuere semper tellus, id placerat augue dapibus ornare. Aenean leo metus, tempus in nisl eget, ' +
        'accumsan interdum dui. Pellentesque sollicitudin volutpat ullamcorper'
    })
}