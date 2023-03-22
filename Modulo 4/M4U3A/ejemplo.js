const moment = require('moment');
moment.locale('es');

console.log('Naci ' + moment('17/02/1993', 'DD/MM/YYYY').fromNow())