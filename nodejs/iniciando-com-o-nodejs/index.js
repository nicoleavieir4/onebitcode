const moment = require('moment')

function sayMyName(name) {
  console.log(name);
  console.log(moment().format('hh:mm'))
}

sayMyName("Nicole Alves");
