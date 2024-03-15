const myDate = new Date()

// console.log(myDate) //2024-03-15T21:16:32.264Z
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toJSON())

// ========== Print Indian Date ===========

let options = {
    timeZone: 'Asia/Kolkata', // India's time zone
    weekday: 'long', // Full name of the day of the week
    year: 'numeric', // Full numeric representation of the year
    month: 'long', // Full name of the month
    day: 'numeric', // Day of the month (1-31)
    hour: 'numeric', // Hour (0-23)
    minute: 'numeric', // Minute (0-59)
    second: 'numeric', // Second (0-59)
  };

  const newDate = new Date()
//   console.log(`Hey It's ${newDate.toLocaleString('en-IN', {timeZone: 'Asia/Kolkata',weekday: 'long'})} ${newDate.toLocaleString('en-IN', {timeZone: 'Asia/Kolkata',day: '2-digit'})}`)

  // If we don't provide timezone than it will give everything according to united states standerd


  //=================== Time ==============
  const currentTime = Date.now()
  console.log(currentTime)  // Prints number of milosecond from 1970 to now

  // Print current local time
  const currentLocalTime = new Date()
  console.log(currentLocalTime.toLocaleString('en-IN',{timeZone: 'Asia/Kolkata', hour: 'numeric', minute: 'numeric', second: 'numeric'}))