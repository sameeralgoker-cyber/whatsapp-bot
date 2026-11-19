console.log("Hello");
console.log("Hello");

function reply(message) {
  if (message === "السلام عليكم") {
    return "وعليكم السلام ورحمة الله وبركاته";
  }

  return "أهلاً، اكتب سؤالك وأنا هساعدك";
}

console.log(reply("السلام عليكم"));
console.log(reply("سؤال"));
