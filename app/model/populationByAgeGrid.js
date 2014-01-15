Ext.define('TestApp1.model.populationByAgeGrid', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'county_name', type: 'auto' },
        { name: 'median_age_years', type: 'auto' },
        { name: 'total_pop', type: 'auto' },
        { name: 'under_5', type: 'auto' },
        { name: '5_9', type: 'auto' },
        { name: '10_14', type: 'auto' },
        { name: '15_19', type: 'auto' },
        { name: '20_24', type: 'auto' },
        { name: '25_29', type: 'auto' },
        { name: '30_34', type: 'auto' },
        { name: '35_39', type: 'auto' },
        { name: '40_44', type: 'auto' },
        { name: '45_49', type: 'auto' },
        { name: '50_54', type: 'auto' },
        { name: '55_59', type: 'auto' },
        { name: '60_64', type: 'auto' },
        { name: '65_69', type: 'auto' },
        { name: '70_74', type: 'auto' },
        { name: '75_79', type: 'auto' },
        { name: '80_84', type: 'auto' },
        { name: '85_plus', type: 'auto' }
    ],
    proxy:
        {
            type: 'ajax',
            actionMethods:'POST',
            url: '~/../../../services/censusdata.asmx/Denver_Population_By_Age_Country',
            reader: {
                type: 'json',
                root: 'data'
            }
        }
});