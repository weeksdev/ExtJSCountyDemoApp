Ext.define('TestApp1.model.flickrFindPic', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'farm', type: 'auto' },
        { name: 'id', type: 'auto' },
        { name: 'isfamily', type: 'auto' },
        { name: 'isfriend', type: 'auto' },
        { name: 'ispublic', type: 'auto' },
        { name: 'owner', type: 'auto' },
        { name: 'secret', type: 'auto' },
        { name: 'server', type: 'auto' },
        { name: 'title', type: 'auto' }
    ],
    listeners: {
        exception: function (reader, response, error, eOpts) {
            return null;
        }
    },
    proxy:
        {
            type: 'jsonp',
            url: 'http://query.yahooapis.com/v1/public/yql?',
            noCache:false,
            reader: {
                type: 'json',
                root: 'query.results.photo'
            },
            extraParams: {
                'q': 'select * from flickr.photos.search where has_geo="true" and text="Boulder Creek Canyon" and api_key = "05039669f01c9359fcdcad87ee0b2f10"',
                'format':'json',
                'diagnostics':true
            }
        }
});