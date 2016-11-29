import {Dispatcher} from 'flux'
var AppDispatcher = new Dispatcher();
import ListStore from '../stores/tableStore';

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'SET_DATA':
      ListStore.setTableData(action.actionData);
      ListStore.emitChange();
      break;
    case 'EMPTY_TABLE':
      ListStore.emptyTable();
      ListStore.emitChange();
      break;
    case 'EMPTY_MOBILE':
      ListStore.emptyMobile();
      ListStore.emitChange();
      break;
    case 'EMPTY_ALL':
      ListStore.emptyMobile();
      ListStore.emptyTable();
      ListStore.emitChange();
      break;
    default:
      // no op
  }
});

module.exports = AppDispatcher;
