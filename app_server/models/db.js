/**
 * Created by kmjosephs on 3/6/16.
 */
var mongoose = require ('mongoose');
var dbURI = 'mongodb://localhost/Locatr';
mongoose.connect(dbURI);
require('./locations');

mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

//Close Mongoose connection, passing through an anonymous function to run when closed
var gracefulShutdown = function(msg, callback){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

//Listen for SIGUSR2, which is what nodemon uses
process.once('SIGUSR2', function(){
    gracefulShutdown('nodemon restart', function(){
        process.kill(process.pid, 'SIGUSR2');
    });
});

// Listen for SIGINT emitted on application termination
process.on('SIGINT', function(){
    gracefulShutdown('app termination', function(){
        process.exit(0);
    });
});

// Listen for SIGTERM emitted when Heroku shuts down process
process.on('SIGTERM', function(){
    gracefulShutdown('Heroku app shutdown', function(){
        process.exit(0);
    });
});