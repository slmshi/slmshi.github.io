function change(){
    $.ajax({
        url: "http://stackoverflow.com",
        data: { uname: "test" },
        type: "GET",
        headers:{Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"},
        success: function() { alert('Success!' + authHeader); }
    });
}