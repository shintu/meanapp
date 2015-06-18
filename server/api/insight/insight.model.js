'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var InsightSchema = new Schema({
  organization: String,
  location: String,
  ip_address: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  modifiedAt: Date,
  page_views: {
    type: Number,
    default: 1
  },
  userId: String
}, {
  strict: false
});

module.exports = mongoose.model('Insight', InsightSchema);