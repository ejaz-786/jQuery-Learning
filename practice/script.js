$(function () {
  // task -1 Q1. "Ejaz" ka text change karke "Ejaz Khan" karo
  // find the correct parent
  const ele = $(".user.active").find(".name").text("Ejaz Khan");
  // 2. Active user ko background yellow karo

  $(".user.active").addClass("active");
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

  // $(".user-list")
  //   .find(".name")
  //   .each(function () {
  //     const textName = $(this).text();

  //     if (textName === "Aman") {
  //       $(this).parent().css("background", "red");
  //     }
  //   });

  //     Q6. .user-list ke andar jitne bhi .user hai unko count karo

  // 💡 Hint:
  // 👉 .children() ya .find()

  const count = $(".user-list").find(".user").length;
  console.log(count);

  console.log($(".user-list").children(".user").length);

  console.log($(".user-list .user").length);

  // Q7. Jab kisi .user par click ho:

  // 👉 uska naam .details .info me show karo

  // 💡 Hint:
  // 👉 $(this) + .find() + .text()

  $(".user-list")
    .find(".user")
    .click(function () {
      let userText = $(this).find(".name").text().trim();
      $(".details  .info").text(userText);
    });

  //     Q8. Active user remove karo aur jispe click ho wo active ban jaye

  // 💡 Hint:
  // 👉 .removeClass() + .addClass()

  $(".user").click(function () {
    $(".user").removeClass("active");
    $(this).addClass("active");
  });

  //   Q9. "Aman" ke sibling users ko grey color karo

  // 💡 Hint:
  // 👉 .filter() + .siblings()
  // this is End
});
