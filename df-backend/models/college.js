const mongoose = require('mongoose');
let collgeSchema = mongoose.Schema({
    "Institute Name": { "type": "string", "required": true },
    "Institute City": { "type": "string", "required": true },
    "Institute State": { "type": "string", "required": true },
    "Course Name": { "type": "string", "required": true },
    "Course Stream": { "type": "string", "required": true },
    "Level": { "type": "string", "required": true },
    "Fee": { "type": "number", "required": true },
    "Fee Type": { "type": "string", "required": true },
    "Course Duration": { "type": "number", "required": true },
    "Duration Type": { "type": "string", "required": true }
});

module.exports = mongoose.model('College', collgeSchema);