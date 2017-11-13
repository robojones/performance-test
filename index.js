#! /usr/bin/env node

let ticks = 0
let clear = '\r' + ' '.repeat(process.stdout.columns)

function tick() {
  ticks++

  setImmediate(tick)
}

tick()

setInterval(() => {
  process.stdout.write(clear)
  process.stdout.write('\r' + ticks + ' ticks/second')
  ticks = 0
}, 1000)