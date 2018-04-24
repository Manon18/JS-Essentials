try {
  var name = prompt("Enter your name:", "Petro");
  var nameRegex = /^[a-zA-Z]{3,15}$/;
  if (!nameRegex.test(name)){
    throw new Error('Invalid name!');
  }

  var date = prompt("Please enter a date when you can to meet?", "today at 17:00");
  var dateRegex = /([a-zA-Z]+) (at) ([01]\d|2[0-3]):?([0-5]\d)$/;
  if (!dateRegex.test(date)){
    throw new Error('Invalid date!');
  }

  var city = prompt("Please enter in what city can you meet?", "Milan");
  var cityRegex = /^[a-zA-Z]{3,15}$/;
  if (!cityRegex.test(city)){
    throw new Error('You do not entered the city!');
  }

  alert(name + " has a meeting " + date + " somewhere in " + city);

} catch (err) {
  alert(err.message);
}

