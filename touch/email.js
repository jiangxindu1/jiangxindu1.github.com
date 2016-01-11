window.addEventListener('load', function() {
	var middle, slide, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9,
	 	sdelete, sread, scontent, left_over, right_over;
	var isleft = true, isright = true, isclick = true, isslide = true, self1 = true, self2 = true,
		self3 = true, self4 = true, self5 = true, self6 = true, self7 = true,
		self8 = true, self9 = true, isdown = false;
	slide = document.getElementById('slidepage');
	// sdelete = document.getElementById('left_delete');
	// sread = document.getElementById('right_read');
	scontent = document.getElementById('page_content');
	middle = document.getElementById('middle');
	iu.touch(document, 'touchstart', function(e) {
		if(slide.style.left != '0px' && slide.style.left != "") {
			slide.style.left = '0px';
			isleft = false;
			isright = false;
			isslide = true;
			isclick = false;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}else if(slide2.style.left != '0px' && slide2.style.left != "") {
			slide2.style.left = '0px';
			isleft = false;
			isright = false;
			isslide = true;
			isclick = false;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		else if(slide3.style.left != '0px' && slide3.style.left != "") {
			slide3.style.left = '0px';
			isleft = false;
			isright = false;
			isslide = true;
			isclick = false;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}else if(slide4.style.left != '0px' && slide4.style.left != "") {
			slide4.style.left = '0px';
			isleft = false;
			isright = false;
			isslide = true;
			isclick = false;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}else if(slide5.style.left != '0px' && slide5.style.left != "") {
			slide5.style.left = '0px';
			isleft = false;
			isright = false;
			isslide = true;
			isclick = false;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}else if(slide6.style.left != '0px' && slide6.style.left != "") {
			slide6.style.left = '0px';
			isleft = false;
			isright = false;
			isslide = true;
			isclick = false;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}else if(slide7.style.left != '0px' && slide7.style.left != "") {
			slide7.style.left = '0px';
			isleft = false;
			isright = false;
			isslide = true;
			isclick = false;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}else if(slide8.style.left != '0px' && slide8.style.left != "") {
			slide8.style.left = '0px';
			isleft = false;
			isright = false;
			isslide = true;
			isclick = false;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}else if(slide9.style.left != '0px' && slide9.style.left != "") {
			slide9.style.left = '0px';
			isleft = false;
			isright = false;
			isslide = true;
			isclick = false;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
	});
	iu.touch(document, 'touchend', function(e) {
		// isclick = true;
		// isslide = true;
		isright = true;
		isleft = true;
	});
	iu.touch(slide, 'click', function(e) {
		if(isslide == false && self1 == false) {
			return;
		}
		if(slide.style.left != '0px' && slide.style.left != "") {
			isclick = false;
			slide.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if((slide.style.left == "" || slide.style.left == '0px') && isclick) {
			middle.style.display = 'none';
			scontent.style.display = 'block';
		}
		else {
			return;
		}
	});
	iu.touch(scontent, 'slideright', function(e) {
		middle.style.display = 'block';
		scontent.style.display = 'none';
	});
	iu.touch(scontent, 'slideup', function(e) {
		console.log('slideup', e.distancey);
		scontent.style.top = e.distancey + 'px';
	});
	iu.touch(scontent, 'slidedown', function(e) {
		console.log('slidedown', e.distancey);
		scontent.style.top = e.distancey + 'px';
		isdown = true;
	});
	iu.touch(scontent, 'touchend', function(e) {
		if(isdown) {
			scontent.style.top = '0px';
		}
		isdown = false;
	});
	iu.touch(slide, 'slideleft', function(e) {
		console.log('slideleft', e.distancex);
		if(isslide == false && self1 == false) {
			return;
		}
		if(isleft == false)
		{
			return;
		}
		if((-e.distancex) <= 60) {
			slide.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = true;
			self2 = false;
			self3 = false;
			self4 = false;
			self5 = false;
			self6 = false;
			self7 = false;
			self8 = false;
			self9 = false;
			if((-e.distancex) >= 30) {
				left_over = 1;
			}else {
				left_over = 2;
			}
		}
		// slide.style.left =  e.distancex + 'px';
		// if((-e.distancex) >= 30) {
		// 	left_over = 1;
		// }else {
		// 	left_over = 2;
		// }
	});
	iu.touch(slide, 'slideright', function(e) {
		console.log('slideright', e.distancex);
		if(isslide == false && self1 == false) {
			return;
		}
		if(isright == false) {
			return;
		}
		if(e.distancex <= 80) {
			slide.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = true;
			self2 = false;
			self3 = false;
			self4 = false;
			self5 = false;
			self6 = false;
			self7 = false;
			self8 = false;
			self9 = false;
			if(e.distancex >= 40) {
				right_over = 1;
			}else {
				right_over = 2;
			}
		}
	});
	iu.touch(slide, 'touchend', function(e) {
		if(left_over == 1) {
			slide.style.left = '-60px';
		}
		else if(left_over == 2){
			slide.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if(right_over == 1) {
			slide.style.left = '80px';
		}
		else if(right_over == 2){
			slide.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		left_over = null;
		right_over= null;
		isclick=true;
	});
	//middle2	
	
	slide2 = document.getElementById('slidepage2');
	// sdelete2 = document.getElementById('left_delete2');
	// sread2 = document.getElementById('right_read2');
	scontent2 = document.getElementById('page_content2');
	iu.touch(slide2, 'click', function(e) {
		if(isslide == false && self2 == false) {
			return;
		}
		if(slide2.style.left != '0px' && slide2.style.left != "") {
			isclick=false;
			slide2.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if((slide2.style.left == "" || slide2.style.left == '0px') && isclick) {
			middle.style.display = 'none';
			scontent2.style.display = 'block';
		}
		else {
			return;
		}
	});
	iu.touch(scontent2, 'slideright', function(e) {
		middle.style.display = 'block';
		scontent2.style.display = 'none';
	});
	iu.touch(slide2, 'slideleft', function(e) {
		console.log('slideleft', e.distancex);
		if(isslide == false && self2 == false) {
			return;
		}
		if(isleft == false)
		{
			return;
		}
		if((-e.distancex) <= 60) {
			slide2.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = false;
			self2 = true;
			self3 = false;
			self4 = false;
			self5 = false;
			self6 = false;
			self7 = false;
			self8 = false;
			self9 = false;
			if((-e.distancex) >= 30) {
				left_over = 1;
			}else {
				left_over = 2;
			}
		}
	});
	iu.touch(slide2, 'slideright', function(e) {
		console.log('slideright', e.distancex);
		if(isslide == false && self2 == false) {
			return;
		}
		if(isright == false)
		{
			return;
		}
		if(e.distancex <= 80) {
			slide2.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = false;
			self2 = true;
			self3 = false;
			self4 = false;
			self5 = false;
			self6 = false;
			self7 = false;
			self8 = false;
			self9 = false;
			if(e.distancex >= 40) {
				right_over = 1;
			}else {
				right_over = 2;
			}
		}
	});
	iu.touch(slide2, 'touchend', function(e) {
		if(left_over == 1) {
			slide2.style.left = '-60px';
		}
		else if(left_over == 2){
			slide2.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if(right_over == 1) {
			slide2.style.left = '80px';
		}
		else if(right_over == 2){
			slide2.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		left_over = null;
		right_over= null;
		isclick=true;
	});
	//middle3
	slide3 = document.getElementById('slidepage3');
	// sdelete3 = document.getElementById('left_delete3');
	// sread3 = document.getElementById('right_read3');
	scontent3 = document.getElementById('page_content3');
	iu.touch(slide3, 'click', function(e) {
		if(isslide == false && self3 == false) {
			return;
		}
		if(slide3.style.left != '0px' && slide3.style.left != "") {
			isclick=false;
			slide3.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if((slide3.style.left == "" || slide3.style.left == '0px') && isclick) {
			middle.style.display = 'none';
			scontent3.style.display = 'block';
		}
		else {
			return;
		}
	});
	iu.touch(scontent3, 'slideright', function(e) {
		middle.style.display = 'block';
		scontent3.style.display = 'none';
	});
	iu.touch(slide3, 'slideleft', function(e) {
		console.log('slideleft', e.distancex);
		if(isslide == false && self3 == false) {
			return;
		}
		if(isleft == false)
		{
			return;
		}
		if((-e.distancex) <= 60) {
			slide3.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = false;
			self2 = false;
			self3 = true;
			self4 = false;
			self5 = false;
			self6 = false;
			self7 = false;
			self8 = false;
			self9 = false;
			if((-e.distancex) >= 30) {
				left_over = 1;
			}else {
				left_over = 2;
			}
		}
	});
	iu.touch(slide3, 'slideright', function(e) {
		console.log('slideright', e.distancex);
		if(isslide == false && self3 == false) {
			return;
		}
		if(isleft == false)
		{
			return;
		}
		if(isright == false)
		{
			return;
		}
		if(e.distancex <= 80) {
			slide3.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = false;
			self2 = false;
			self3 = true;
			self4 = false;
			self5 = false;
			self6 = false;
			self7 = false;
			self8 = false;
			self9 = false;
			if(e.distancex >= 40) {
				right_over = 1;
			}else {
				right_over = 2;
			}
		}
	});
	iu.touch(slide3, 'touchend', function(e) {
		if(left_over == 1) {
			slide3.style.left = '-60px';
		}
		else if(left_over == 2){
			slide3.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if(right_over == 1) {
			slide3.style.left = '80px';
		}
		else if(right_over == 2){
			slide3.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		left_over = null;
		right_over= null;
		isclick=true;
	});

	//middle4
	slide4 = document.getElementById('slidepage4');
	scontent4 = document.getElementById('page_content4');
	iu.touch(slide4, 'click', function(e) {
		if(isslide == false && self4 == false) {
			return;
		}
		if(slide4.style.left != '0px' && slide4.style.left != "") {
			isclick=false;
			slide4.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if((slide4.style.left == "" || slide4.style.left == '0px') && isclick) {
			middle.style.display = 'none';
			scontent4.style.display = 'block';
		}
		else {
			return;
		}
	});
	iu.touch(scontent4, 'slideright', function(e) {
		middle.style.display = 'block';
		scontent4.style.display = 'none';
	});
	iu.touch(slide4, 'slideleft', function(e) {
		console.log('slideleft', e.distancex);
		if(isslide == false && self4 == false) {
			return;
		}
		if(isleft == false)
		{
			return;
		}
		if((-e.distancex) <= 60) {
			slide4.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = false;
			self2 = false;
			self3 = false;
			self4 = true;
			self5 = false;
			self6 = false;
			self7 = false;
			self8 = false;
			self9 = false;
			if((-e.distancex) >= 30) {
				left_over = 1;
			}else {
				left_over = 2;
			}
		}
	});
	iu.touch(slide4, 'slideright', function(e) {
		console.log('slideright', e.distancex);
		if(isslide == false && self4 == false) {
			return;
		}
		if(isright == false)
		{
			return;
		}
		if(e.distancex <= 80) {
			slide4.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = false;
			self2 = false;
			self3 = false;
			self4 = true;
			self5 = false;
			self6 = false;
			self7 = false;
			self8 = false;
			self9 = false;
			if(e.distancex >= 40) {
				right_over = 1;
			}else {
				right_over = 2;
			}
		}
	});
	iu.touch(slide4, 'touchend', function(e) {
		if(left_over == 1) {
			slide4.style.left = '-60px';
		}
		else if(left_over == 2){
			slide4.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if(right_over == 1) {
			slide4.style.left = '80px';
		}
		else if(right_over == 2){
			slide4.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		left_over = null;
		right_over= null;
		isclick=true;
	});
	//middle5
	slide5 = document.getElementById('slidepage5');
	scontent5 = document.getElementById('page_content5');
	iu.touch(slide5, 'click', function(e) {
		if(isslide == false && self5 == false) {
			return;
		}
		if(slide5.style.left != '0px' && slide5.style.left != "") {
			isclick=false;
			slide5.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if((slide5.style.left == "" || slide5.style.left == '0px') && isclick) {
			middle.style.display = 'none';
			scontent5.style.display = 'block';
		}
		else {
			return;
		}
	});
	iu.touch(scontent5, 'slideright', function(e) {
		middle.style.display = 'block';
		scontent5.style.display = 'none';
	});
	iu.touch(slide5, 'slideleft', function(e) {
		console.log('slideleft', e.distancex);
		if(isslide == false && self5 == false) {
			return;
		}
		if(isleft == false)
		{
			return;
		}
		if((-e.distancex) <= 60) {
			slide5.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = false;
			self2 = false;
			self3 = false;
			self4 = false;
			self5 = true;
			self6 = false;
			self7 = false;
			self8 = false;
			self9 = false;
			if((-e.distancex) >= 30) {
				left_over = 1;
			}else {
				left_over = 2;
			}
		}
	});
	iu.touch(slide5, 'slideright', function(e) {
		console.log('slideright', e.distancex);
		if(isslide == false && self5 == false) {
			return;
		}
		if(isright == false)
		{
			return;
		}
		if(e.distancex <= 80) {
			slide5.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = false;
			self2 = false;
			self3 = false;
			self4 = false;
			self5 = true;
			self6 = false;
			self7 = false;
			self8 = false;
			self9 = false;
			if(e.distancex >= 40) {
				right_over = 1;
			}else {
				right_over = 2;
			}
		}
	});
	iu.touch(slide5, 'touchend', function(e) {
		if(left_over == 1) {
			slide5.style.left = '-60px';
		}
		else if(left_over == 2){
			slide5.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if(right_over == 1) {
			slide5.style.left = '80px';
		}
		else if(right_over == 2){
			slide5.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		left_over = null;
		right_over= null;
		isclick=true;
	});
	//middle6
	slide6 = document.getElementById('slidepage6');
	scontent6 = document.getElementById('page_content6');
	iu.touch(slide6, 'click', function(e) {
		if(isslide == false && self6 == false) {
			return;
		}
		if(slide6.style.left != '0px' && slide6.style.left != "") {
			isclick=false;
			slide6.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if((slide6.style.left == "" || slide6.style.left == '0px') && isclick) {
			middle.style.display = 'none';
			scontent6.style.display = 'block';
		}
		else {
			return;
		}
	});
	iu.touch(scontent6, 'slideright', function(e) {
		middle.style.display = 'block';
		scontent6.style.display = 'none';
	});
	iu.touch(slide6, 'slideleft', function(e) {
		console.log('slideleft', e.distancex);
		if(isslide == false && self6 == false) {
			return;
		}
		if(isleft == false)
		{
			return;
		}
		if((-e.distancex) <= 60) {
			slide6.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = false;
			self2 = false;
			self3 = false;
			self4 = false;
			self5 = false;
			self6 = true;
			self7 = false;
			self8 = false;
			self9 = false;
			if((-e.distancex) >= 30) {
				left_over = 1;
			}else {
				left_over = 2;
			}
		}
	});
	iu.touch(slide6, 'slideright', function(e) {
		console.log('slideright', e.distancex);
		if(isslide == false && self6 == false) {
			return;
		}
		if(isright == false)
		{
			return;
		}
		if(e.distancex <= 80) {
			slide6.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = false;
			self2 = false;
			self3 = false;
			self4 = false;
			self5 = false;
			self6 = true;
			self7 = false;
			self8 = false;
			self9 = false;
			if(e.distancex >= 40) {
				right_over = 1;
			}else {
				right_over = 2;
			}
		}
	});
	iu.touch(slide6, 'touchend', function(e) {
		if(left_over == 1) {
			slide6.style.left = '-60px';
		}
		else if(left_over == 2){
			slide6.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if(right_over == 1) {
			slide6.style.left = '80px';
		}
		else if(right_over == 2){
			slide6.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		left_over = null;
		right_over= null;
		isclick=true;
	});
	//middle7
	
	slide7 = document.getElementById('slidepage7');
	scontent7 = document.getElementById('page_content7');
	iu.touch(slide7, 'click', function(e) {
		if(isslide == false && self7 == false) {
			return;
		}
		if(slide7.style.left != '0px' && slide7.style.left != "") {
			isclick=false;
			slide7.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if((slide7.style.left == "" || slide7.style.left == '0px') && isclick) {
			middle.style.display = 'none';
			scontent7.style.display = 'block';
		}
		else {
			return;
		}
	});
	iu.touch(scontent7, 'slideright', function(e) {
		middle.style.display = 'block';
		scontent7.style.display = 'none';
	});
	iu.touch(slide7, 'slideleft', function(e) {
		console.log('slideleft', e.distancex);
		if(isslide == false && self7 == false) {
			return;
		}
		if(isleft == false)
		{
			return;
		}
		if((-e.distancex) <= 60) {
			slide7.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = false;
			self2 = false;
			self3 = false;
			self4 = false;
			self5 = false;
			self6 = false;
			self7 = true;
			self8 = false;
			self9 = false;
			if((-e.distancex) >= 30) {
				left_over = 1;
			}else {
				left_over = 2;
			}
		}
	});
	iu.touch(slide7, 'slideright', function(e) {
		console.log('slideright', e.distancex);
		if(isslide == false && self7 == false) {
			return;
		}
		if(isright == false)
		{
			return;
		}
		if(e.distancex <= 80) {
			slide7.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = false;
			self2 = false;
			self3 = false;
			self4 = false;
			self5 = false;
			self6 = false;
			self7 = true;
			self8 = false;
			self9 = false;
			if(e.distancex >= 40) {
				right_over = 1;
			}else {
				right_over = 2;
			}
		}
	});
	iu.touch(slide7, 'touchend', function(e) {
		if(left_over == 1) {
			slide7.style.left = '-60px';
		}
		else if(left_over == 2){
			slide7.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if(right_over == 1) {
			slide7.style.left = '80px';
		}
		else if(right_over == 2){
			slide7.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		left_over = null;
		right_over= null;
		isclick=true;
	});
	//middle8
	slide8 = document.getElementById('slidepage8');
	scontent8 = document.getElementById('page_content8');
	iu.touch(slide8, 'click', function(e) {
		if(isslide == false && self8 == false) {
			return;
		}
		if(slide8.style.left != '0px' && slide8.style.left != "") {
			isclick=false;
			slide8.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if((slide8.style.left == "" || slide8.style.left == '0px') && isclick) {
			middle.style.display = 'none';
			scontent8.style.display = 'block';
		}
		else {
			return;
		}
	});
	iu.touch(scontent8, 'slideright', function(e) {
		middle.style.display = 'block';
		scontent8.style.display = 'none';
	});
	iu.touch(slide8, 'slideleft', function(e) {
		console.log('slideleft', e.distancex);
		if(isslide == false && self8 == false) {
			return;
		}
		if(isleft == false)
		{
			return;
		}
		if((-e.distancex) <= 60) {
			slide8.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = false;
			self2 = false;
			self3 = false;
			self4 = false;
			self5 = false;
			self6 = false;
			self7 = false;
			self8 = true;
			self9 = false;
			if((-e.distancex) >= 30) {
				left_over = 1;
			}else {
				left_over = 2;
			}
		}
	});
	iu.touch(slide8, 'slideright', function(e) {
		console.log('slideright', e.distancex);
		if(isslide == false && self8 == false) {
			return;
		}
		if(isright == false)
		{
			return;
		}
		if(e.distancex <= 80) {
			slide8.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = false;
			self2 = false;
			self3 = false;
			self4 = false;
			self5 = false;
			self6 = false;
			self7 = false;
			self8 = true;
			self9 = false;
			if(e.distancex >= 40) {
				right_over = 1;
			}else {
				right_over = 2;
			}
		}
	});
	iu.touch(slide8, 'touchend', function(e) {
		if(left_over == 1) {
			slide8.style.left = '-60px';
		}
		else if(left_over == 2){
			slide8.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if(right_over == 1) {
			slide8.style.left = '80px';
		}
		else if(right_over == 2){
			slide8.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		left_over = null;
		right_over= null;
		isclick=true;
	});
	//middle9
	
	slide9 = document.getElementById('slidepage9');
	scontent9 = document.getElementById('page_content9');
	iu.touch(slide9, 'click', function(e) {
		if(isslide == false && self9 == false) {
			return;
		}
		if(slide9.style.left != '0px' && slide9.style.left != "") {
			isclick=false;
			slide9.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if((slide9.style.left == "" || slide9.style.left == '0px') && isclick) {
			middle.style.display = 'none';
			scontent9.style.display = 'block';
		}
		else {
			return;
		}
	});
	iu.touch(scontent9, 'slideright', function(e) {
		middle.style.display = 'block';
		scontent9.style.display = 'none';
	});
	iu.touch(slide9, 'slideleft', function(e) {
		console.log('slideleft', e.distancex);
		if(isslide == false && self9 == false) {
			return;
		}
		if(isleft == false)
		{
			return;
		}
		if((-e.distancex) <= 60) {
			slide9.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = false;
			self2 = false;
			self3 = false;
			self4 = false;
			self5 = false;
			self6 = false;
			self7 = false;
			self8 = false;
			self9 = true;
			if((-e.distancex) >= 30) {
				left_over = 1;
			}else {
				left_over = 2;
			}
		}
	});
	iu.touch(slide9, 'slideright', function(e) {
		console.log('slideright', e.distancex);
		if(isslide == false && self9 == false) {
			return;
		}
		if(isright == false)
		{
			return;
		}
		if(e.distancex <= 80) {
			slide9.style.left =  e.distancex + 'px';
			isslide = false;
			self1 = false;
			self2 = false;
			self3 = false;
			self4 = false;
			self5 = false;
			self6 = false;
			self7 = false;
			self8 = false;
			self9 = true;
			if(e.distancex >= 40) {
				right_over = 1;
			}else {
				right_over = 2;
			}
		}
	});
	iu.touch(slide9, 'touchend', function(e) {
		if(left_over == 1) {
			slide9.style.left = '-60px';
		}
		else if(left_over == 2){
			slide9.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		if(right_over == 1) {
			slide9.style.left = '80px';
		}
		else if(right_over == 2){
			slide9.style.left = '0px';
			isslide = true;
			self1 = true;
			self2 = true;
			self3 = true;
			self4 = true;
			self5 = true;
			self6 = true;
			self7 = true;
			self8 = true;
			self9 = true;
		}
		left_over = null;
		right_over= null;
		isclick=true;
	});
}, false);