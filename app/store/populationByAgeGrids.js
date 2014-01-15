Ext.define('TestApp1.store.populationByAgeGrids', {
    extend: 'Ext.data.Store',
    model: 'TestApp1.model.populationByAgeGrid',
    autoLoad: true,
    listeners: {
        beforeload: function (data) {
            //console.log(data);
        }
    }
});