Ext.define('TestApp1.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'north',
        height: 35,
        layout: 'hbox',
        border: 0,
        bodyStyle: 'background-color: #013440;',
        items: [
            {
                width: 50,
                height: 35,
                border:0,
                html: '<img src="app/images/coloradoflag.png" height=35 width=50>',
                padding: '0 0 0 5',
                margin:'0 5 5 5'
            },
            {
                html: '<h2>Colorado Population Data (2010)</h2>',
                border: 0,
                padding: '0 0 0 5',
                margin:'-10 5 5 0',
                bodyStyle: 'background-color: #013440; color:white',
            },
            {
                flex: 1,
                height: 35,
                border:0,
                html: 'By: Andrew Weeks, 2013',
                margin:'15 0 0 0',
                bodyStyle: 'text-align: right;background-color: #013440; color:white'

            }
            ]
    },{
        region: 'west',
        xtype: 'panel',
        itemId:'westRegion',
        layout:'fit',
        title: 'Cities In: Adams County',
        flex: .5,
        resizable:true,
        items: [
            {
                xtype:'cityDataGrid'
            }
            ]
    },{
        region: 'center',
        xtype: 'populationByAgeGrid',
        flex: 3
    },
    {
        region: 'east',
        flex:1,
        title: 'County Images',
        layout: 'fit',
        collapsible:true,
        items:[
            {
                //, 
                xtype: 'flickrFindPicGrid',
                bbar: [
                    '->',
                    {
                        xtype:'displayfield',
                        value:'Flickr API <img src="http://www.flickr.com/favicon.ico" height=15>'
                    }
                    ]
            }
            ]
    }
    ]
});