var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AwardConstants = require('../constants/AwardConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

function fetchInitialData() {
  // TODO
  console.log('I entered fetchInitialData');
}

function submitData() {
  console.log('I entered submitData');
  // TODO
}

var AwardStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case AwardConstants.AWARD_FETCH_INITIAL_DATA:
      fetchInitialData()
      AwardStore.emitChange();
      break;

    case AwardConstants.AWARD_SUBMIT_DATA:
      submitData()
      AwardStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = AwardStore;
