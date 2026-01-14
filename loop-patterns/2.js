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
  //   console.log(rows);
}

//12345
//1234
//123
//12
//1

for (let i = 0; i < n; i++) {
  let rows = "";
  for (let j = n; j > i; j--) {
    rows += n - j + 1;
  }
  //   console.log(rows);
}

for (let i = 0; i < n; i++) {
  let rows = "";
  for (let j = 0; j < n - i; j++) {
    rows += j + 1;
  }
  //   console.log(rows);
}

// '    *'
// '   **'
// '  ***'
// ' ****'
// '*****'

for (let i = 0; i < n; i++) {
  let rows = "";
  //for spaces
  for (let j = 0; j < n - (i + 1); j++) {
    rows += " ";
  }
  //for stars
  for (let k = 0; k < i + 1; k++) {
    rows += "*";
  }
  //   console.log(rows);
}

// '1'
// '10'
// '101'
// '1010'
// '10101'

for (let i = 0; i < n; i++) {
  let rows = "";
  let toggle = 1;
  for (let j = 0; j < i + 1; j++) {
    rows += toggle;
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  //   console.log(rows);
}

// '1'
// '01'
// '010'
// '1010'
// '10101'

let toggle = 1;
for (let i = 0; i < n; i++) {
  let rows = "";
  for (let j = 0; j < i + 1; j++) {
    rows += toggle;
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  //   console.log(rows);
}
