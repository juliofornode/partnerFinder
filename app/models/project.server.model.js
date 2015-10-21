'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Project Schema
 */
var ProjectSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please enter the name of the project',
		trim: true
	},
	description: {
		type: String,
		default: '',
		required: 'Please describe the project idea and current status',
		trim: true
	},
	organizer: {
		type: String,
		default: '',
		required: 'Please enter the name of the organizer',
		trim: true
	},
	requirements: {
		type: String,
		default: '',
		required: 'Please describe what would you expect from your ideal partners',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Project', ProjectSchema);