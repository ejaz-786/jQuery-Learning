$(function () {
  // task -1 Q1. "Ejaz" ka text change karke "Ejaz Khan" karo
  // find the correct parent
  const ele = $(".user.active").find(".name").text("Ejaz Khan");
  // 2. Active user ko background yellow karo

  $(".user.active").css("background-color", "yellow");
  //3. Sab users ke role text ko uppercase me convert karo

  // $(".role").each(function () {
  //   let text = $(this).text().toUpperCase();
  //   $(this).text(text);
  // });

  $(".user-list")
    .find(".role")
    .each(function () {
      let roleText = $(this).text().toUpperCase();
      $(this).text(roleText);
    });

  //     4. Q4. Active user ka next user select karke usko highlight karo

  // 💡 Hint:
  // 👉 .active → .next()

  // $(".user.active").next(".user").css("background", "yellow");

  $(".user.active").next(".user").addClass("highlight");

  //   Q5. "Rahul" ke parent div ko select karo

  // 💡 Hint:
  // 👉 text se find karo → .parent()

  $(".user-list")
    .find(".name")
    .each(function () {
      const textName = $(this).text();

      if (textName === "Aman") {
        $(this).parent().css("background", "red");
      }
    });

  // this is End
});
