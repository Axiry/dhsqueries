var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
	questions        : {
        question     : String,
        votes		 : 0,
        answers		 : 0,
    },
}, { collection: 'postedQuestions' });

module.exports = mongoose.model('Question', questionSchema);