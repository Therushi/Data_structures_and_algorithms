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

keysOfobject(obj);
