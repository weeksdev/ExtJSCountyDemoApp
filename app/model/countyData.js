Ext.define('TestApp1.model.countyData', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'key', type: 'auto' },
        { name: 'value', type: 'auto' }
    ],
    proxy:
        {
            type: 'ajax',
            actionMethods:'POST',
            url: '~/../../../services/censusdata.asmx/County_Data_Vertical',
            reader: {
                type: 'json',
                root: 'data'
            },
            extraParams: {
                'county':'Adams County'
            }
        }
});