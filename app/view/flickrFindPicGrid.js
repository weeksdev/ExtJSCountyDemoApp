Ext.define("TestApp1.view.flickrFindPicGrid", {
    extend: 'Ext.grid.Panel',
    requires: ['Ext.grid.Panel','Ext.grid.column.Number'],
    xtype: 'flickrFindPicGrid',
    store: 'flickrFindPics',
    hideHeaders: true,
    disableSelection: true,
    trackMouseOver:false,
    viewConfig: {
        enableTextSelection:true
    },
    columns: [
        //{dataIndex: 'title', header: 'Title'},
        {       renderer: function (value, p, r) {
            var html = '<div style="width:200px;height:200px;overflow:hidden;" ><a href="http://farm' + r.data['farm'] + '.staticflickr.com/' + r.data['server'] + '/' + r.data['id'] + '_' + r.data['secret'] + '.jpg"><img src="http://farm' + r.data['farm'] + '.staticflickr.com/' + r.data['server'] + '/' + r.data['id'] + '_' + r.data['secret'] + '.jpg" height=200px></img></a></div>';
                return html;
            }, width:500
        }
        ]
});