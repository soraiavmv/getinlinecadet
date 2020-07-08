$(document).ready(() => {
  $("#register").click(() => changeForm(false));
  $("#login").click(() => changeForm(true));
  $("#loginBtn").click(() => getFormInfo());
});

const changeForm = (isLoginMode) => {
  let mode = isLoginMode ? "hidden" : "password";
  $("#psw2Break")[0].hidden = isLoginMode;
  $("#psw2Break2")[0].hidden = isLoginMode;
  $("#psw2Label")[0].hidden = isLoginMode;
  $("#psw2")[0].type = mode;
  $("#registerParagraph")[0].hidden = !isLoginMode;
  $("#loginParagraph")[0].hidden = isLoginMode;
};

const getFormInfo = () => {
  let userData = {
    username: $("#username").val(),
    password: $("#psw").val(),
  };
  doLogin(userData);
};

const doLogin = async (data) => {
  try {
    await $.ajax({
      type: "POST",
      url: "/api/login/",
      data: data,
      dataType: "JSON"
    });
  } catch (err) {
    window.location.href = "/error"
  }
};
