Ext.define('TestApp1.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.window.MessageBox'],
    init: function () {
        this.control({
            '#countyTextField': {
                change: this.countyFilterChanged
            },
            '#openPieChart': {
                click:this.openPieChart
            },
            'populationByAgeGrid': {
                selectionchange:this.gridSelectionChange
            }
        });
    },
    gridSelectionChange: function (me, selected) {
        if (selected != null)
        {
            var s = Ext.getStore('flickrFindPics');
            var county = Ext.ComponentQuery.query('populationByAgeGrid')[0].getSelectionModel().getSelection()[0].data.county_name;
            s.proxy.extraParams.q = 'select * from flickr.photos.search where has_geo="true" and text="' + county + '" and api_key = "05039669f01c9359fcdcad87ee0b2f10"',
            s.load();

            s = Ext.getStore('cityDatas');
            s.proxy.extraParams.countyname = county;
            s.load();
            var wRegion = Ext.ComponentQuery.query('#westRegion')[0];
            wRegion.setTitle('Cities In: ' + county);

            if(Ext.ComponentQuery.query('#countyLineGraph')[0] != null) {
                this.openPieChart();
            }
        }
    },
    countyFilterChanged: function (me,value) {
        //console.log(value);
        var s = Ext.getStore('populationByAgeGrids');
        s.clearFilter();
        s.filter('county_name', value);
    },
    openPieChart: function () {
        var c = Ext.ComponentQuery.query('#countyLineGraph')[0];
        var s = Ext.getStore('countyDatas');
        if (Ext.ComponentQuery.query('populationByAgeGrid')[0].getSelectionModel().getSelection()[0] == null) {
            //console.log(Ext.Msg);
            Ext.Msg.alert('Selection Needs To Be Made.', 'Selection Needs To Be Made');
            return;
        }
        var county = Ext.ComponentQuery.query('populationByAgeGrid')[0].getSelectionModel().getSelection()[0].data.county_name;
        
        s.proxy.extraParams.county = county;
        s.load();
        if (c == null) {
            var window = Ext.create('TestApp1.view.popupWindow');
            window.title = 'County Data: ' + county;
            window.itemId = 'countyLineGraph';
            window.add(Ext.create('TestApp1.view.countyPopulationGraph'));
            window.show();
        }
        else {
            c.setTitle('County Data: ' + county);
        }
    }
});
