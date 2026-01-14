//*
//**
//***
//****

let n = 5;

for (let i = 0; i < n; i++) {
  let rows = "";
  for (let j = 0; j < i + 1; j++) {
    rows += "*";
  }
  //   console.log(rows);
}

//1
//12
//123
//1234

for (let i = 0; i < n; i++) {
  let rows = "";
  for (let j = 0; j < i + 1; j++) {
    rows += j + 1;
  }
  //   console.log(rows);
}

//1
//22
//333
//4444
//55555

for (let i = 0; i < n; i++) {
  let rows = "";
  for (let j = 0; j < i + 1; j++) {
    rows += i + 1;
  }
  console.log(rows);
}
