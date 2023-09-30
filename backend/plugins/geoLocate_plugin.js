const geoLocatePlugin = {
    plugin: require("hapi-geo-locate"),
    options: {
        enableByDefault: true,
    }
};

module.exports = geoLocatePlugin;