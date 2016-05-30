var AppDispatcher = require('../dispatcher/AppDispatcher');
var AwardConstants = require('../constants/AwardConstants');

var AwardActions = {

  /**
   * @param  {string} text
   */
  fetchInitialData: function() {
    AppDispatcher.dispatch({
      actionType: AwardConstants.AWARD_FETCH_INITIAL_DATA
    });
  },

  /**
   * @param  {string} id The ID of the ToDo item
   * @param  {string} text
   */
  submitData: function(data) {
    AppDispatcher.dispatch({
      actionType: AwardConstants.AWARD_SUBMIT_DATA,
      data: data
    });
  }
};

module.exports = AwardActions;
