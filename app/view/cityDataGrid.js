Ext.define("TestApp1.view.cityDataGrid", {
    extend: 'Ext.grid.Panel',
    requires: ['Ext.grid.Panel'],
    xtype: 'cityDataGrid',
    store: 'cityDatas',
    hideHeaders: true,
    disableSelection: true,
    trackMouseOver: true,
    emptyText:'Trouble locating any cities....',
    viewConfig: {
        enableTextSelection:true
    },
    columns: [
        //{dataIndex: 'title', header: 'Title'},
            {
                renderer: function (value, p, r) {
                    var html = '<a href="'+ r.data['url'] + '">' + r.data['name'] + '</a>';
                    return html;
                }
                , width: 500
            }
        ]
});