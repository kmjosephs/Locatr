/**
 * Created by kmjosephs on 3/2/16.
 */
/* GET 'about' page */

module.exports.about = function(req, res){
     res.render('generic-text', {title: 'About'});
}