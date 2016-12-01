var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var TableStore = assign({}, EventEmitter.prototype, {
  addUserTableData: [],
  changeStatusTableData:[],
  stopServerTableData:[],
  nature:"1",
  getNature:function(){
    return this.nature
  },
  setNature:function(data){
    this.nature=data
  },
  getAddUserTableData:function(){
    return this.addUserTableData
  },
  setAddUserTableData:function(data){
    data.map((val)=>
    this.addUserTableData.push(val)
    )
  },
  getChangeStatusTableData:function(){
    return this.changeStatusTableData
  },
  setChangeStatusTableData:function(data){
    data.map((val)=>
        this.changeStatusTableData.push(val)
    )
  },
  getStopServerTableData:function(){
    return this.stopServerTableData
  },
  setStopServerTableData:function(data){
    data.map((val)=>
        this.stopServerTableData.push(val)
    )
  },

  emptyTable:function(){
    return this.addUserTableData=[]
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
