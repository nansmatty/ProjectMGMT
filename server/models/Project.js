const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
	clientId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Client',
	},
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	status: {
		type: String,
		enum: ['NotStarted', 'In Progress', 'Completed'],
	},
});

module.exports = mongoose.model('Project', projectSchema);
