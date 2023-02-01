contextmenu_off()

function avg(a, b, w = [1, 1]) {
	return (a * w[0] + b * w[1]) / (w[0] + w[1])
}

function avg2d(a, b, w = [1, 1]) {
	return [avg(a[0], b[0], w), avg(a[1], b[1], w)]
}
scroll_off()
c = canvas(1000, 700)
div()
// s = button("切替")
pen = true

function change_pen() {
	if (pen) {
		pen = false
	} else {
		pen = true
	}
}
a = [0, 0]
b = [0, 0]

k = 100
sikaku(c, [0, 0], 1000, 1000, color(200, 200, 200))
rect = 8
setInterval(function() {
	a = sub2d(touch, [8 - window.scrollX, 8 - window.scrollY])
	max = 16
	for (let i = 0; i < max; i++) {
		if (pen) {
			sikaku(c, avg2d(a, b, [i, max - i]), 1, 1, color(k, k, k))
		}
	}
	console.log(fin_cnt)
	b = a
}, 10)


// window.addEventListener("touchstart", function() {
// 	if (fin_cnt == 1) {
// 		scroll_off()
// 	} else if (fin_cnt == 2) {
// 		scroll_on()
// 	} else if (fin_cnt == 3) {
// 		change_pen()
// 	}
// })

window.addEventListener("keydown", function(e) {
	if (e.key == "1") k -= 20
	if (e.key == "2") k += 20
	if (e.key == "3") {
		scroll_on()
		pen = false
	}
})

window.addEventListener("keyup", function(e) {
	if (e.key == "3") {
		scroll_off()
		pen = true
	}
})