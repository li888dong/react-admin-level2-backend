var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var TableStore = assign({}, EventEmitter.prototype, {
  addUserTableData: [],
  changeStatusTableData:[],
  stopServerTableData:[],
  nature:"",
  comment:"",
  disable:"ABLE",
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
    this.addUserTableData=data

  },
  getChangeStatusTableData:function(){
    return this.changeStatusTableData
  },
  setChangeStatusTableData:function(data){
        this.changeStatusTableData=data
  },
  getStopServerTableData:function(){
    return this.stopServerTableData
  },
  setStopServerTableData:function(data){
    this.stopServerTableData=data
  },
  setComment:function(data){
    this.comment=data
  },
  getComment:function(){
    return this.comment
  },
  setDisable:function(data){
    this.disable=data
  },
  getDisable:function(){
    return this.disable
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
