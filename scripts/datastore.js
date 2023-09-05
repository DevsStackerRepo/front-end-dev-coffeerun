(function(window){
    'use strct';
    var App = window.App || {};

    function DataStore(){
        console.log('running the datastore function');
    }
    App.DataStore = DataStore;
    window.App = App;
})(window)