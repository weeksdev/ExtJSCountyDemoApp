Ext.define('TestApp1.store.countyDatas', {
    extend: 'Ext.data.Store',
    model: 'TestApp1.model.countyData',
    autoLoad: true,
    listeners: {
        beforeload: function (data) {
            //console.log(data);
        }
    }
});