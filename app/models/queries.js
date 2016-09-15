var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
	question         : {
        question     : String,
        votes		 : 0,
        answers		 : 0,
        postedBy	 : { type: String, ref: 'User' },
    },
    answers    		 : {
    	answer 		 : String,
    }
}, { collection: 'postedQuestions' });

module.exports = mongoose.model('Question', questionSchema);