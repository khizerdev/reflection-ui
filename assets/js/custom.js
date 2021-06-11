// const mouse = new smoothMouse();

// function smoothMouse() {
// 	const target = (document.documentElement || document.body.parentNode || document.body)
//   const speed = 75;
//   const smooth = 12;

// 	let moving = false;
// 	let pos = target.scrollTop;

// 	target.addEventListener('mousewheel', scroll, { passive: false });

// 	function scroll(e) {
//     // disable default scrolling
//     e.preventDefault();

//     let delta;

//     if (e.detail) {
// 			if (e.wheelDelta) delta = e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1);
//       else delta = -e.detail / 3;
// 		} else {
// 			delta = e.wheelDelta / 120;
//     }

// 		pos += -delta * speed;
// 		pos = Math.max(0, Math.min(pos, target.scrollHeight - target.clientHeight));

// 		if (!moving) update();
// 	}

// 	function update() {
// 		moving = true;

// 		const delta = (pos - target.scrollTop) / smooth;

// 		target.scrollTop += delta;

// 		if (Math.abs(delta) > 0.5) window.requestAnimationFrame(update);
// 		else moving = false;
// 	}
// }