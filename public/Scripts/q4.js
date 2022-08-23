$.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
    $("#ip").html(data.ip);
});