
newFunction();
function newFunction() {
    var create = {
        "url": "https://api.spotify.com/v1/users/daraosullivan-00/playlists",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Authorization": "Bearer BQBz6WrO3WhX4pamiUMf2x_wPJLWpN8AV7NZYLUxocem1ff9JKmQar7WKggODcVllIS-4wtt21MA4BV_baAV7Yj7f6wnDJiVoyOZbfhd8406zBsUCQ0V0Ji9PE4MC_3l0LmxxpoF1qDYohbtjGYmdgrsVhZruDVSeobOHm2ZhFjvQyIqllv_kPTtwiFRCgBZi9eZLrK-0uuGZJrl0AI9lYPVt6fDYCMWxBLpKUkVDDhxeWugMRmo2kZQyRUVtEyF08LLYVR9dwFxVjo",
            "Content-Type": "text/plain"
        },
        "data": "{\r\n  \"name\": \"Saka\",\r\n  \"description\": \"Bukayo\",\r\n  \"public\": false\r\n}",
    };

    $.ajax(create).done(function (response) {
        console.log(response);
    });

    console.log("creating playlist");
}
