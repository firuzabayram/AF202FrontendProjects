let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

//1) t ile baslayir
function first(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].name[0] == "t") {
      newArr.push(array[i].name);
    }
  }
  console.log("1- ", newArr);
}
first(arr);

//2)t ile baslayib t ile bitenlerin sayi

function StartEndSum(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].name[0] == "t" &&
      array[i].name[array[i].name.length - 1] == "t"
    ) {
      count++;
    }
  }
  console.log(count);
}
StartEndSum(arr);

//3) keylerin cemi
function keySum(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].name[0] == "t" &&
      array[i].name[array[i].name.length - 1] == "t"
    ) {
      count += arr[i].key;
    }
  }
  console.log(count);
}
keySum(arr);

//4)"name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
function SuperName(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name[array[i].name.length - 1] == "e") {
      array[i].name = "SuperDev";
    }
  }
  console.log(array);
}
SuperName(arr);

//"name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.

function keyfour(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].name.length == 4) {
      newArr.push(array[i].name);
    }
  }
  console.log(newArr);
}
keyfour(arr);
