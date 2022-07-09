const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    return alert("Все поля должны быть заполнены");
  } else {
      console.log({
          email,
          password,
      });
  }
  return form.reset();
};

form.addEventListener("submit", onFormSubmit);


