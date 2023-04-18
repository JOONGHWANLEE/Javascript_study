$(".register").click(function () {
  const id = $("#formGroupExampleInputID").val();
  const password = $("#formGroupExampleInputPSWD").val();
  const passwordcheck = $("#formGroupExampleInputPSWDCHECK").val();
  const name = $("#formGroupExampleInputNAME").val();
  const birthyear = $("#inputbirthYEAR").val();
  const birthmonth = $("#inputbirthMONTH").val();
  const birthday = $("#inputbirthDAY").val();
  const email = $("#formGroupExampleInputemail").val();
  const phone = $("#inputphonenum").val();
  const gender = $("#gender").val();

  if (!id) {
    // 아이디가 입력된게 없을때
    alert("아이디는 필수 정보입니다.!");
    return;
  } else {
    // 아이디가 입력이 됐을때
    if (!idCheck(id)) {
      // 아이디 형식에 맞지 않을때
      alert("아이디는 영문/숫자 포함 6~15자리 이내입니다!");
      return;
    }
  }

  if (!password) {
    // 패스워드에 입력된게 없을때
    alert("비밀번호를 입력해주세요!");
    return;
  } else {
    if (!pwdCheck(password)) {
      // 패스워드 형식에 맞지 않을떄
      alert("비밀번호는 특수문자/문자/숫자 포함 형태의 8~15자리 이내입니다!");
      return;
    }
  }

  if (!passwordcheck) {
    // 패스워드확인 에 입력된게 없을때
    alert("비밀번호 확인을 입력해주세요!");
    return;
  }

  if (!name) {
    // 이름이 입력된게 없을때
    alert("이름은 필수 정보입니다.!");
    return;
  } else {
    if (!nameCheck(name)) {
      alert("이름 형식이 잘못되었습니다.");
      return;
    }
  }

  if (!birthyear) {
    // 년도가 입력된게 없을때
    alert("태어난 년도 4자리를 정확하게 입력하세요.");
    return;
  }

  if (!birthmonth) {
    // 년도가 입력된게 없을때
    alert("태어난 월을 입력하세요.");
    return;
  }

  if (!birthday) {
    // 년도가 입력된게 없을때
    alert("태어난 일 2자리를 정확하게 입력하세요.");
    return;
  }

  if (!gender) {
    alert("성별을 선택해주세요!");
    return;
  }

  if (!email) {
    // 이메일이 입력된게 없을때
    alert("이메일을 입력해주세요!");
    return;
  } else {
    // 이메일이 입력이 됐을때
    if (!emailCheck(email)) {
      // 이메일 형식에 맞지 않을때
      alert("이메일 형식에 맞지 않습니다!");
      return;
    }
  }

  if (!phone) {
    // 핸드폰 번호가 입력된게 없을때
    alert("휴대폰 번호를 입력해주세요!");
    return;
  } else {
    // 핸드폰 번호가 입력이 됐을때
    if (!telCheck(phone)) {
      // 핸드폰 번호 형식에 맞지 않을때
      alert("휴대폰 번호 형식에 맞지 않습니다!");
      return;
    }
  }

  alert("회원가입이 완료되었습니다.");
});

// 정규식
function pwdCheck(pwd) {
  //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
  const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return reg.test(pwd); //맞으면 true, 틀리면 false를 준다.
}

function idCheck(id) {
  const reg = /^.*(?=^.{6,15}$)(?=.*\d)(?=.*[a-zA-Z]).*$/;
  return reg.test(id); //맞으면 true, 틀리면 false를 준다.
}

function nameCheck(name) {
  const reg = /^.[가-힣]{2,4}$/;
  return reg.test(name);
}

function emailCheck(email) {
  const reg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return reg.test(email); //맞으면 true, 틀리면 false를 준다.
}

//전화번호 정규식
function telCheck(tel) {
  const reg = /^\d{2,3}\d{3,4}\d{4}$/;
  return reg.test(tel);
}
