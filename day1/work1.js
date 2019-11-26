//需求(会议时间) -> 两个范围时间,必须在这范围时间开会
//              -> 规定时间不能早到,不能晚离场

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  // ..TODO..
  function todoSum(time) {
    let arr = time.split(':')
    return delZero(arr[0]) + arr[1] / 60
  }

  function delZero(str) {
    if (str[0] === '0') {
      return str.slice(1) * 1
    } else {
      return str * 1
    }
  }

  let cStart = todoSum(dayStart)
  let cEnd = todoSum(dayEnd)
  let checkTime = todoSum(startTime)
  if (checkTime >= cStart && checkTime <= cEnd) {
    let thens = checkTime + durationMinutes / 60
    return (thens >= cStart && thens <= cEnd)
  } else {
    return false
  }
}


scheduleMeeting("7:00", 15); // false
scheduleMeeting("07:15", 30); // false
scheduleMeeting("7:30", 30); // true
scheduleMeeting("11:30", 60); // true
scheduleMeeting("17:00", 45); // true
scheduleMeeting("17:30", 30); // false
scheduleMeeting("18:00", 15); // false