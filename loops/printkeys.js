/***
 * Print all keys from objec
 */

const obj = {
  name: "Frontend Master",
  age: 30,
  address: {
    city: "Delhi",
    area: "Faridabad",
    pincode: {
      code: 121001,
      zone: "North",
    },
  },
  skills: {
    frontend: "React",
    backend: "Node.js",
  },
  hobbies: ["cricket", "coding", "music"],
};

function keysOfobject(obj) {
  for (let item in obj) {
    console.log(item);
    if (
      obj[item] &&
      typeof obj[item] === "object" &&
      !Array.isArray(obj[item])
    ) {
      keysOfobject(obj[item]);
    }
  }
}

function getKeys(objfile, inpPath = "") {
  for (let item in objfile) {
    // let path = inpPath ? inpPath + "." + item : item;
    let path = inpPath ? `${inpPath}.${item}` : item;
    if (
      objfile[item] &&
      typeof objfile[item] === "object" &&
      !Array.isArray(objfile[item])
    ) {
      getKeys(objfile[item], path);
    } else {
      console.log(path);
    }
  }
}

keysOfobject(obj);
