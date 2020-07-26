$(document).ready(() => {
  $("#register").click(() => changeForm(false));
  $("#login").click(() => changeForm(true));
  $("#loginBtn").click(() => getFormInfo());
});

const changeForm = (loginMode) => {
  let mode = loginMode ? "hidden" : "password";
  $("#psw2Break")[0].hidden = loginMode;
  $("#psw2Break2")[0].hidden = loginMode;
  $("#psw2Label")[0].hidden = loginMode;
  $("#psw2")[0].type = mode;
  $("#registerParagraph")[0].hidden = !loginMode;
  $("#loginParagraph")[0].hidden = loginMode;
};

const getFormInfo = () => {
  let userData = {
    username: $("#username").val(),
    password: $("#psw").val(),
    password2: $("#psw2").val(),
  };

  $("#psw2")[0].type === "hidden" ? doLogin(userData) : doRegister(userData);
};

const doLogin = async (data) => {
  const { username, password } = data;
  let newObj = Object.assign({}, { username, password });

  try {
    let result = await $.ajax({
      type: "POST",
      url: "/api/login/",
      data: newObj,
      dataType: "JSON",
    });

    if (Object.keys(result).length === 0) {
      $("#error")[0].innerText =
        "Forgot your credentials? Talk to your favorite <MC>!";
      $(":input", "#loginForm").val("");
      return;
    }

    window.location.href = "/inline";
  } catch (err) {
    window.location.href = "/error";
  }
};

const doRegister = async (data) => {
  checkPassword(data);

  let result = await $.ajax({
    type: "POST",
    url: "/api/register/",
    data: Object.assign({}, username, password),
    dataType: "JSON",
  });
};

const checkPassword = function (data) {};
