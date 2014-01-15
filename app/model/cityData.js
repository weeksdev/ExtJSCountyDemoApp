Ext.define('TestApp1.model.cityData', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'county_name', type: 'auto' },
        { name: 'description', type: 'auto' },
        { name: 'feat_class', type: 'auto' },
        { name: 'name', type: 'auto' },
        { name: 'url', type: 'auto' },
    ],
    proxy:
        {
            type: 'ajax',
            actionMethods:'POST',
            url: '~/../../../services/censusdata.asmx/CityDataByCounty?',
            reader: {
                type: 'json',
                root: ''
            },
            extraParams: {
                'countyname':'Adams County'
            }
        }
});