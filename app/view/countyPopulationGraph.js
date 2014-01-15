Ext.define("TestApp1.view.countyPopulationGraph", {
    extend: 'Ext.chart.Chart',
    requires: ['Ext.chart.*'],
    xtype: 'countyPopulationGraph',
    store: 'countyDatas',
    //shadow: true,
    animate: true,
    //legend: {
    //    position:'right'
    //},
    axes: [
        {
            type: 'Category',
            position: 'bottom',
            fields: ['key'],
            title: 'Age Ranges',
            label: {
                rotate: {
                    degrees: -90
                }
            }
        },
        {
            type: 'Numeric',
            position: 'left',
            fields: ['value'],
            label: {
                renderer: Ext.util.Format.numberRenderer('0,0')
            },
            title: 'Population',
            grid: true,
            minimum:0
        }
        ],
    series: [
        {
            type: 'column',
            axis:'left',
            xField: 'key',
            yField: 'value',
            showInLegend: false,
            highlight: {
                segment: {
                    margin:20
                }
            }
        }
        ]
});