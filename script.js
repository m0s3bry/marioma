// Floating hearts
for (let i = 0; i < 25; i++) {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (6 + Math.random() * 5) + "s";
  document.body.appendChild(heart);
}

// Countdown (غير التاريخ هنا)
const startDate = new Date("2026-01-02");

setInterval(() => {
  const now = new Date();
  const days = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerText =
    `عدّى 632 يوم من أول ما عرفنا بعض يعنى 01 سنة و08 شهر و22 يوم❤️`;
}, 1000);

// Message typewriter
const text = `كل سنة وأنتى طيبة يا أغلى حاجة في دنيتي كلها..

عارفة النهاردة مش مجرد يوم عادي في السنة تؤ ده اليوم اللي الدنيا فيه نورت بوجودك وقفت كتير أفكر أكتبلك إيه ولقيت إن مفيش كلام في الدنيا ممكن يوصف قد اى انا بحبك بجد اوى اوى اوى اوى.

أنا عاوز أشكرك.. أشكرك على كل ضحكة ضحكتيها وخلت يومي أحلى وعلى كل مرة كنتى فيها سندي وبتطمنى قلبي بكلمة منك بجد وجودك فارق اوى معايا اوى اوى اوى فوق ما تتخيلى انتي مش بس حبيبتي انتي صاحبتي اللي بحكيلها كل حاجة وانتي الأمان اللي بلجأ له لما الدنيا بتضيق عليا.

ببص ليكي وبشوف فيكي كل حاجة حلوة بشوف فيكي وبشوف فيكي طيبة القلب .

نفسي في السنة الجديدة من عمرك دي أقدر أسعدك ربع السعادة اللي بتديهالي بوجودك جنبى وحبك ليا ونفسي نفضل مع بعض على الحلوه والمره يعم ومش حبه خناقات يعنى هما اللى يفرقةنا ومكنتش خناقة من شويه يعنى حقك عليا باذن الله نحقق كل اللي بنحلم بيه سوا خليكي دايماً واثقة إنك أجمل وأغلى هدية ربنا رزقني بيها والله بحبك وجودك هو اللي بيدي لحياتي طعم والله يا مريومه.

كل سنة وأنتِ منورة حياتي، وكل سنة وأنا بحبك أكتر من السنه اللي قبلها. ❤️`;

let index = 0;
let musicStarted = false;

function showMessage() {
  const box = document.getElementById("message");
  const music = document.getElementById("music");

  // تشغيل الموسيقى أول مرة بس
  if (!musicStarted) {
    music.play().catch(() => {});
    musicStarted = true;
  }

  // إظهار الرسالة
  box.style.display = "block";
  box.innerHTML = "";
  index = 0;

  let typing = setInterval(() => {
    box.innerHTML += text.charAt(index);
    index++;
    if (index >= text.length) clearInterval(typing);
  }, 35);
}

