// ----------------loops for Object---------------

const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  //    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// -------------array--------------------

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  //    console.log(key);      // this will print the key of programming array : in this case - 0 1 2 3 4 5
  console.log(programming[key]); // this will print the value of programming array: in this case - js rb py java cpp
}
