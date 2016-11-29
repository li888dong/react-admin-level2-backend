var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
  tableData: [],
  mobile:new Set(),
  getTableData:function(){
    return this.tableData
  },
  setTableData:function(data){
    data.map((val)=>
    this.tableData.push(val)
    )
  },
  getMobile:function(){
    return this.mobile
  },
  setMobile:function(data){
    return this.mobile.add(data)
  },
  emptyMobile(){
    return this.mobile=new Set()
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

module.exports = ListStore;
