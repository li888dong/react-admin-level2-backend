import AppDispatcher from '../dispatcher/AppDispatcher';

var SearchActions = {

  setAddUserTableData: function (data) {
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
  emptyAll: function () {
    AppDispatcher.dispatch({
      actionType: 'EMPTY_ALL'
    });

  }
};

module.exports = SearchActions;
