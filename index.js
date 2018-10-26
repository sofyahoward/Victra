$(document).ready(() => {
  console.log("ready now!");
});
$(document).ready(function() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  $("#btn").click(() => {
    console.log("====================================");
    console.log("btn clicked");
    console.log("====================================");

    $.get(URL, (data, status) => {
      data.map(post => {
        var title = post.title;
        var body = post.body;
        $("#postsGoHere").append(
          $(
            '<div class="card" style="width: 18rem;">' +
              '<div class="card-body">' +
              '<h5 class="card-title">' +
              title +
              "</h5>" +
              '<p class="card-text">' +
              body +
              "</p>" +
              "</div>" +
              "</div>"
          )
        );
      });
    });
  });
});
