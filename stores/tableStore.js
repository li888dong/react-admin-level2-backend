var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var TableStore = assign({}, EventEmitter.prototype, {
  addUserTableData: [],
  changeStatusTableData:[],
  stopServerTableData:[],
  nature:"1",
  comment:"",
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
    this.addUserTableData.push(data)

  },
  getChangeStatusTableData:function(){
    return this.changeStatusTableData
  },
  setChangeStatusTableData:function(data){
        this.changeStatusTableData.push(data)
  },
  getStopServerTableData:function(){
    return this.stopServerTableData
  },
  setStopServerTableData:function(data){
    this.stopServerTableData.push(data)
  },
  setComment:function(data){
    this.comment=data
  },
  getComment:function(){
    return this.comment
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
