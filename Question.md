🔹 LEVEL 1 (Basic but important)
Q1. "Ejaz" ka text change karke "Ejaz Khan" karo

💡 Hint:
👉 .find() ya direct .name use kar sakte ho

Q2. Active user ko background yellow karo

💡 Hint:
👉 .active class select karo → .css()

Q3. Sab users ke role text ko uppercase me convert karo

💡 Hint:
👉 .each() + .text()

🔹 LEVEL 2 (Traversing Start 🔥)
Q4. Active user ka next user select karke usko highlight karo

💡 Hint:
👉 .active → .next()

Q5. "Rahul" ke parent div ko select karo

💡 Hint:
👉 text se find karo → .parent()

Q6. .user-list ke andar jitne bhi .user hai unko count karo

💡 Hint:
👉 .children() ya .find()

🔹 LEVEL 3 (Real Thinking 🧠)
Q7. Jab kisi .user par click ho:

👉 uska naam .details .info me show karo

💡 Hint:
👉 $(this) + .find() + .text()

Q8. Active user remove karo aur jispe click ho wo active ban jaye

💡 Hint:
👉 .removeClass() + .addClass()

🔹 LEVEL 4 (Complex Traversing 🔥🔥)
Q9. "Aman" ke sibling users ko grey color karo

💡 Hint:
👉 .filter() + .siblings()

Q10. Footer ke parent ka background change karo

💡 Hint:
👉 .footer → .parent()

Q11. .content ke andar jitne bhi <p> hain unko select karo

💡 Hint:
👉 .find("p")

🔹 LEVEL 5 (Interview Level 🚀)
Q12. Sab users me se jis user ka data-id="2" hai uska naam red karo

💡 Hint:
👉 attribute selector [data-id="2"]

Q13. .user-list ke last user ko bold karo

💡 Hint:
👉 .last()

Q14. Sab users me se first aur last ko highlight karo

💡 Hint:
👉 .first() + .last()

🔹 LEVEL 6 (Production Scenario 💼)
Q15. "Update" button click par:

👉 Active user ka naam console me print karo

💡 Hint:
👉 .active → .find(".name")

Q16. Agar koi active user nahi hai:

👉 "No user selected" show karo

💡 Hint:
👉 .length check karo

🔹 LEVEL 7 (Hard 🔥🔥🔥)
Q17. Sab users ke naam ke aage numbering add karo

👉 (1. Ejaz, 2. Rahul...)

💡 Hint:
👉 .each((index))

Q18. Clicked user ke alawa sabko hide karo

💡 Hint:
👉 .not(this) + .hide()

🔥 Real Thinking Summary

👉 Tu yaha ye concepts use karega:

Traversing → parent(), next(), siblings()

Selection → find(), filter()

Loop → each()

DOM change → text(), css(), addClass()
