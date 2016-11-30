var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var TableStore = assign({}, EventEmitter.prototype, {
  tableData: [],
  getTableData:function(){
    return this.tableData
  },
  setTableData:function(data){
    data.map((val)=>
    this.tableData.push(val)
    )
  },

  emptyTable:function(){
    return this.tableData=[]
  },
  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

module.exports = TableStore;
