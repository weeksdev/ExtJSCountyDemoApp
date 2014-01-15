Ext.define("TestApp1.view.populationByAgeGrid", {
    extend: 'Ext.grid.Panel',
    requires: ['Ext.grid.Panel','Ext.grid.column.Number'],
    xtype: 'populationByAgeGrid',
    store: 'populationByAgeGrids',
    viewConfig: {
        enableTextSelection:true
    },
    tbar:[
        {
            xtype: 'textfield',
            fieldLabel: 'County Name',
            padding: '0 0 10 0',
            itemId:'countyTextField'
        },
        {
            text: 'Visualizations',
            menu: [
                { text: 'Line Chart',itemId:'openPieChart' }
                //{ text: 'Line Graph',itemId:'openLineGraph' }
                ]
        }
        ],
    columns: [
        {
            dataIndex: 'county_name', header: 'County', renderer: function (value) {
                return '<a href="http://www.google.com/#q=' + value + '%2C+CO">' + value + '</a>';
            }},
        { dataIndex: 'total_pop', header: 'Total Population',xtype:'numbercolumn',format:'0,0' },
        { dataIndex: 'under_5', header: 'Under 5', xtype: 'numbercolumn', format: '0,0' },
        { dataIndex: '5_9', header: '5 to 9', xtype: 'numbercolumn', format: '0,0' },
        { dataIndex: '10_14', header: '10 to 14' ,xtype:'numbercolumn',format:'0,0'},
        { dataIndex: '15_19', header: '15 to 19' ,xtype:'numbercolumn',format:'0,0'},
        { dataIndex: '20_24', header: '20 to 24' ,xtype:'numbercolumn',format:'0,0'},
        { dataIndex: '25_29', header: '25 to 29' ,xtype:'numbercolumn',format:'0,0'},
        { dataIndex: '30_34', header: '30 to 34' ,xtype:'numbercolumn',format:'0,0'},
        { dataIndex: '35_39', header: '35 to 39' ,xtype:'numbercolumn',format:'0,0'},
        { dataIndex: '40_44', header: '40 to 44' ,xtype:'numbercolumn',format:'0,0'},
        { dataIndex: '45_49', header: '45 to 49' ,xtype:'numbercolumn',format:'0,0'},
        { dataIndex: '50_54', header: '50 to 54' ,xtype:'numbercolumn',format:'0,0'},
        { dataIndex: '55_59', header: '55 to 59' ,xtype:'numbercolumn',format:'0,0'},
        { dataIndex: '60_64', header: '60 to 64' ,xtype:'numbercolumn',format:'0,0'},
        { dataIndex: '65_69', header: '65 to 69' ,xtype:'numbercolumn',format:'0,0'},
        { dataIndex: '70_74', header: '70 to 74' ,xtype:'numbercolumn',format:'0,0'},
        { dataIndex: '75_79', header: '75 to 79' ,xtype:'numbercolumn',format:'0,0'},
        { dataIndex: '80_84', header: '80 to 84' ,xtype:'numbercolumn',format:'0,0'},
        { dataIndex: '85_plus', header: '85+' ,xtype:'numbercolumn',format:'0,0'},
        { dataIndex: 'median_age_years', header: 'Median Age (Years)' ,xtype:'numbercolumn',format:'0,0'}

        ]
});