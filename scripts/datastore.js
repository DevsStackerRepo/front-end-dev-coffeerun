(function(window){
    'use strct';
    var App = window.App || {};
    var Promise = window.Promise;


    function DataStore(){
        this.data = {};
    }

    DataStore.prototype.add = function(key,val){
        var promise = new Promise(function (resolve, reject) {
            this.data[key] = val; }.bind(this));
            resolve(null);
        return promise;
    }

    DataStore.prototype.get = function(key){
        return this.data[key];
    }

    DataStore.prototype.getAll = function(){
        return this.data;
    }

    DataStore.prototype.remove = function(key){
        delete this.data[key];
    }
    App.DataStore = DataStore;
    window.App = App;
})(window)