'use strict';

var _ = require('lodash');
var Insight = require('./insight.model');

// Get list of insights
exports.index = function(req, res) {
  Insight.find({
    userId: req.user._id
  }, function(err, insights) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(200, insights);
  });
};

// Get a single insight
exports.show = function(req, res) {
  Insight.findById(req.params.id, function(err, insight) {
    if (err) {
      return handleError(res, err);
    }
    if (!insight) {
      return res.send(404);
    }
    return res.json(insight);
  });
};

// Creates a new insight in the DB.
exports.create = function(req, res) {
  Insight.findOne({
    userId: req.body.redjesterClientId
  }, function(err, insight) {
    if (err) {
      return handleError(res, err);
    }

    if (!insight) {
      var newInsight = {
        organization: req.body.traits.organization,
        location: req.body.location.time_zone,
        ip_address: req.body.traits.ip_address,
        longitude:req.body.location.longitude,
        latitude:req.body.location.latitude,
        metro_code:req.body.registered_country.geoname_id,
        userId: req.body.redjesterClientId
      };

      Insight.create(newInsight, function(err, insight) {
        if (err) {
          return handleError(res, err);
        }

        return res.json(201, insight);
      });
    }

    var conditions = {
      userId: req.body.redjesterClientId
    };

    var update = {
      $inc: {
        page_views: 1
      }
    };

    Insight.findOneAndUpdate(conditions, update, function(err, insight) {
      if (err) {
        return handleError(res, err);
      }

      return res.json(201);
    });
  });
};

// Updates an existing insight in the DB.
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Insight.findById(req.params.id, function(err, insight) {
    if (err) {
      return handleError(res, err);
    }
    if (!insight) {
      return res.send(404);
    }
    var updated = _.merge(insight, req.body);
    updated.save(function(err) {
      if (err) {
        return handleError(res, err);
      }
      return res.json(200, insight);
    });
  });
};

// Deletes a insight from the DB.
exports.destroy = function(req, res) {
  Insight.findById(req.params.id, function(err, insight) {
    if (err) {
      return handleError(res, err);
    }
    if (!insight) {
      return res.send(404);
    }
    insight.remove(function(err) {
      if (err) {
        return handleError(res, err);
      }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}