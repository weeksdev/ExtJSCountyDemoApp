Ext.define('TestApp1.Application', {
    name: 'TestApp1',
    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
        'populationByAgeGrid',
        'countyPopulationGraph',
        'popupWindow',
        'flickrFindPicGrid',
        'cityDataGrid'
    ],

    controllers: [
        // TODO: add controllers here
        'Main'
    ],

    stores: [
        // TODO: add stores here
        'populationByAgeGrids',
        'countyDatas',
        'flickrFindPics',
        'cityDatas'
    ]
});
