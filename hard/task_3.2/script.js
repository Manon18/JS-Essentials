function validate(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    if (!(obj[arr[i]])) {
      throw new Error('Property ' + arr[i] + ' is invalid' + '!');
    }
  }
  return true;
}

try {
  console.log(validate(["name", "surname", "age"], {
    name: "Roman",
    surname: "Rodomansky"
  }));
} catch (err) {
  console.log(err.message);
}
  