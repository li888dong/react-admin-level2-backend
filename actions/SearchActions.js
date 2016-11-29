import AppDispatcher from '../dispatcher/AppDispatcher';

var SearchActions = {

  setTableData: function (data) {
    AppDispatcher.dispatch({
      actionType: 'SET_DATA',
      actionData: data
    });
  },
  emptyTable: function () {
    AppDispatcher.dispatch({
      actionType: 'EMPTY_TABLE'
    });

  },
  emptyMobile: function () {
    AppDispatcher.dispatch({
      actionType: 'EMPTY_MOBILE'
    });

  },
  emptyAll: function () {
    AppDispatcher.dispatch({
      actionType: 'EMPTY_ALL'
    });

  }
};

module.exports = SearchActions;
