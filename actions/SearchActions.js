import AppDispatcher from '../dispatcher/AppDispatcher';

var SearchActions = {

  setAddUserTableData: function (data) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_USER',
      actionData: data
    });
  },
  setChangeStatusTableData:function(data){
    AppDispatcher.dispatch({
      actionType: 'CHANGE_STATUS',
      actionData: data
    });
  },
  setStopServerTableData:function(data){
    AppDispatcher.dispatch({
      actionType: 'STOP_SERVER',
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
