const f1 = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Divided by both 3 and 5");
    } else if (i % 5 === 0) {
      console.log("Divided by 5");
    } else if (i % 3 === 0) {
      console.log("Divided by 3");
    } else {
      console.log(i);
    }
  }
};

const findPrimeNoBtwn100 = () => {
  for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
      if (i === 2 || i === 3) {
        console.log(`${i} is prime`);
      } else {
        console.log(`${i} is not prime`);
      }
    } else {
      console.log(`${i} is prime`);
    }
  }
};

let obj = {
  Fname: "Prince",
  Lname: "Jain",
  age: "28",
  address: {
    country: "India",
    state: "New Delhi",
    city: "Uttam Nagar",
  },
  phoneNo: 8700432315,
  func: (message) => {
    console.log("Prince Jain is saying", message);
  },
};

const f3 = () => {
  for (let key in obj) {
    console.log(key, " : ", obj[i]);
  }
  console.log("------------------------------");
  console.log(obj);
  console.log("------------------------------");
  console.table(obj);
  console.log("------------------------------");
  obj.func("bye bye");
};

const f4 = () => {
  let arr = [1, 2, 3, 4, 5];

  let i = arr.push("aaaaaa");
  console.log(i, typeof i, arr);
  let j = arr.unshift("bbbbbb");
  console.log(j, typeof j, arr);
};
