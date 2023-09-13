const timestampAsSeconds = (timestamp) => timestamp.split(':')
  .map(digits => parseFloat(digits))
  .reduce((sum, number) => sum * 60 + number, 0)

const secondsAsTimestamp = (seconds) => {
  const hours = Math.floor(seconds / (60*60))
  seconds -= hours * 60*60
  const minutes = Math.floor(seconds / 60)
  seconds -= minutes * 60

  const padNumber = (n) => n.toString().padStart(2, 0)
  return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`
}

let timestamps = [...process.argv].slice(2)

timestamps = timestamps.map(timestampAsSeconds)

let duration = 0

for (let i = 0; i < timestamps.length; i = i + 2) {
  duration += timestamps[i + 1] - timestamps[i]
}

console.log(secondsAsTimestamp(duration))