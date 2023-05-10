const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Título", "Lorem Ipsum...")

post.addComment("Isaac Pontes", "Muito bom!!!")
post.addComment("Nicole Alves", "Conteúdo muito bacana.")

console.log(john)
console.log(post)