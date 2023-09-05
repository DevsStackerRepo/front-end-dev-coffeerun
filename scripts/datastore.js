(function(window){
    'use strct';
    var App = window.App || {};

    function DataStore(){
        console.log('running the datastore function');
        this.data = {};
    }
    App.DataStore = DataStore;
    window.App = App;
})(window)