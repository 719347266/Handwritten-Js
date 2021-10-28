function log(date, type, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]: [${message}]`)
}

var log1 = date => type => message =>
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]: [${message}]`)

var newLog = log1(new Date())('DEBUG')

newLog('BUG1')
newLog('BUG2')
newLog('BUG3')
newLog('BUG4')

var newLog2 = log1(new Date())('FIX')

newLog2('fix1')
