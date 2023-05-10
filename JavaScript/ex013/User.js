class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login realizado com sucesso!");
    } else {
      console.log("Login ou senha inválidos! Tente novamente.");
    }
  }
}

const nicole = new User(
  "Nicole Alves Vieira",
  "nicoleavieira@icloud.com",
  "nicole1234"
);

console.log(nicole);
nicole.login("nicoleavieira@icloud.com", "nicole1234");
