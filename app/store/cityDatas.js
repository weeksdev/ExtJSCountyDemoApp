Ext.define('TestApp1.store.cityDatas', {
    extend: 'Ext.data.Store',
    model: 'TestApp1.model.cityData',
    autoLoad: true,
    listeners: {
        beforeload: function (data) {
            //console.log(data);
        }
    }
});