import {Dispatcher} from 'flux'
var AppDispatcher = new Dispatcher();
import TableStore from '../stores/tableStore';

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'SET_DATA':
      TableStore.setTableData(action.actionData);
      TableStore.emitChange();
      break;
    case 'EMPTY_TABLE':
      TableStore.emptyTable();
      TableStore.emitChange();
      break;

    case 'EMPTY_ALL':
      TableStore.emptyTable();
      TableStore.emitChange();
      break;
    default:
      // no op
  }
});

module.exports = AppDispatcher;
