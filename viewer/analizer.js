if (!window.lib) {
	window.lib = {};
}

var p;
// shortcut to reference prototypes

// stage content:
(lib.analizer = function(name, color, id) {
	this.initialize();

	//"Chris Turvey", "#ba0000","1048"
	this.name = name;
	this.id = id;
	this.fed = 0;
	this.color = color;
	this.userdot = new lib.userdot(name, color, id);
	this.addChild(this.userdot);
	this.userdot.x = 0;
	this.userdot.y = 0;
	this.trail = [];
	this.userdot.nametext.visible = false;
	this.userdot.onClick = function(mouseEvent) {
		//	mouseEvent.target.nametext.visible = !mouseEvent.target.nametext.visible;
		showAllLinkstoUser(mouseEvent.target);
	};

	this.userdot.onMouseOver = function(mouseEvent) {
		mouseEvent.target.nametext.visible = true;
	//console.log("HOVER BORED");
		stage.setChildIndex(mouseEvent.target.parent, stage.getNumChildren() - 1);
	};
	this.userdot.onMouseOut = function(mouseEvent) {
		mouseEvent.target.nametext.visible = false;
	};

}).prototype = p = new Container();

//https://ilearn.bsu.edu/context/proxy.php?src=25cff8d4-eba7-11e1-8df3-005056bb66c9&thumb=1
(lib.module = function(title, id, module_guid, i, j, lesson_id,lesson_name) {
	this.initialize();

	//"Chris Turvey", "#ba0000","1048"
	this.title = title;
	this.id = id;
	this.module = module_guid;
	this.j = j;
	this.i = i;
	this.lesson_id = lesson_id;
	//this.userdot = new lib.userdot(name, color, id);
	//	this.addChild(this.userdot);
	//	this.userdot.x=0;
	//	this.userdot.y= 0;

	playerImg = new createjs.Bitmap("images/" + module_guid + "_s.jpg");
//	console.log("curl http://ilearn.bsu.edu/viewer/images/"+module_guid+"_s.jpg -o "+module_guid+"_s.jpg  #");
	this.playerImg = playerImg;
	this.playerImg.regX = 50;
		this.playerImg.regY = 25;
	this.addChild(playerImg);
	this.playerImg.scaleX = .5;
	this.playerImg.scaleY = .5;
	this.nametext = new Text(title+"\n\n"+lesson_name, "12px Times", "#000000");
	this.nametext.textBaseline = "top";
	this.nametext.lineHeight = 16;
	this.nametext.lineWidth = 200;
	this.nametext.setTransform(0, 0);
	this.nametextbg = new (lib.backgroundBubble);
	this.addChild(this.nametextbg);
	this.addChild(this.nametext);
	this.nametext.x = 100;
	this.nametextbg.x = 100;
	this.nametextbg.visible = false;
	this.nametext.visible = false;
	//
	this.playerImg.onClick = function(mouseEvent){
		showAllUsertoModule(mouseEvent.target.parent);
		backLinkFieability(mouseEvent.target.parent);
	}
	this.playerImg.onMouseOver = function(mouseEvent) {
		mouseEvent.target.parent.nametext.visible = true;
		mouseEvent.target.parent.nametextbg.visible = true;
				stage.setChildIndex(mouseEvent.target.parent, stage.getNumChildren() - 1);
	};
	this.playerImg.onMouseOut = function(mouseEvent) {
		mouseEvent.target.parent.nametext.visible = false;
		mouseEvent.target.parent.nametextbg.visible = false;
	};

}).prototype = p = new Container();

// symbols:
(lib.userdot = function(myUserName, myUserColor, id) {
	this.initialize();
	this.id = id;
	// dot
	this.instance = new lib.dot(myUserColor);
	this.instance.setTransform(13.5, 14, 1, 1, 0, 0, 0, 13.5, 13.5);

	this.shape = new Shape();
	this.shape.graphics.f(myUserColor).s(myUserColor).ss(1, 1, 1, 3).p("ABghaQAdAeAFAn").p("AAViAQArAGgrgGIgVgC");
	this.shape.setTransform(0.5, 1.1);

	// nametext
	this.nametext = new Text(myUserName, "12px Times", "#000000");
	this.nametext.textBaseline = "top";
	this.nametext.lineHeight = 14;
	this.nametext.lineWidth = 137;
	this.nametext.setTransform(-53.9, 15);

	this.addChild(this.nametext, this.shape, this.instance);

}).prototype = p = new Container();

(lib.dot = function(myUserColor) {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f(myUserColor).p("ABgheQgXgYgdgJQgKgDgKgCIgVgCQgBAAgBAAIgZADQgoAHgeAeQgoAoAAA3QAAAOADANQAHAnAeAdQAoAoA3AAQA4AAAngoQAognAAg4QAAgNgDgNQgHgngege").f();
	this.shape.setTransform(0.5, 0.6);

	this.addChild(this.shape);
}).prototype = p = new Container();



(lib.backgroundBubble = function() {
	this.initialize();

	// bckgroundBubble
	this.shape = new Shape();
	this.shape.graphics.f("#ffffff").p("ATinzMgnDAAAIAAPnMAnDAAAIAAvn").f().s("#666666").ss(0.5,1,1,3).p("ATinzIAAPnMgnDAAAIAAvnMAnDAAA").cp();
	this.shape.setTransform(125,50);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,250,100);


(lib.slider = function(label_txt, min,max) {
	this.initialize();
	this.min = min;
	this.max = max;
	this.range = max - min;
	this.valueOf = min;
	// thumb
	this.thumb = new lib.thumb();
	this.label_txt = label_txt;
	//this.thumb.setTransform(9.2,34.4,1,1,0,0,0,9.2,9.2);
	this.thumb.y=25;
	this.thumb.x=0;
	// track
	this.track = new Shape();
	this.track.graphics.f().s("#666666").ss(1,1,1,3).p("ALuAAIAABP").p("ALuAAI3bAAIAABZ").p("ArtAAIAAhY").p("ALuAAIAAhY");
	this.track.setTransform(75,24.9);

	// label
	this.text = new Text(label_txt, "12px Times", "#3300ff");
	this.text.textBaseline = "top";
	this.text.lineHeight = 14;
	this.text.lineWidth = 170;

	this.addChild(this.text,this.track,this.thumb);
	
	this.thumb.onPress = function(evt) {
					// bump the target in front of it's siblings:
					//evt.target.parent.addChild(evt.target);
					var target = evt.target;
					var offset = {x:evt.target.x-evt.stageX};
				//console.log("pressing");
					// add a handler to the event object's onMouseMove callback
					// this will be active until the user releases the mouse button:
					evt.onMouseMove = function(ev) {
						//evt.target.y = 25;
						//evt.target.x = evt.target.stageX+offset.x;
						//offsetx = Math.min(target.parent.x,offset.x);
						maxOffset = target.parent.x + 150;
						minOffset = target.parent.x;  //0 point
						dragOffset = ev.stageX;
						//console.log(target.parent.x);
						if (dragOffset >= minOffset && dragOffset <= maxOffset){
							target.x = ev.stageX-target.parent.x;
							// target.y = ev.stageY-target.parent.y;
//							console.log(target.x);
		target.parent.valueOf = Math.floor(((target.x/150)*target.parent.range)+target.parent.min);
							target.parent.text.text = target.parent.label_txt+" ("+ target.parent.min+" - "+ target.parent.max + ") val: "+target.parent.valueOf;// = new Text("sweet", "12px Times", "#3300ff");
					
						}
						evt.onMouseUp = function(ev) {
						//evt.target.y = 25;
						//evt.target.x = evt.target.stageX+offset.x;
						//offsetx = Math.min(target.parent.x,offset.x);
						maxOffset = target.parent.x + 150;
						minOffset = target.parent.x;  //0 point
						dragOffset = ev.stageX;
						//console.log(target.parent.x);
						if (dragOffset >= minOffset && dragOffset <= maxOffset){
							target.x = ev.stageX-target.parent.x;
							target.y = 25;
							//console.log(target.x);
							target.parent.valueOf = Math.floor(((target.x/150)*target.parent.range)+target.parent.min);
							target.parent.text.text = target.parent.label_txt+" ("+ target.parent.min+" - "+ target.parent.max + ") val: "+target.parent.valueOf;// = new Text("sweet", "12px Times", "#3300ff");
						}
						}
						//stage.update();
						//offsetx = Math.min(target.parent.x+target.parent.track.width,offset.x);
						//target.x = ev.stageX+offset.x;
						//target.x = offsetx+offset.x;
						
						// indicate that the stage should be updated on the next tick:
//						update = true;
					}
				}
			this.thumb.onMouseOver = function(evt) {
					//evt.target.scaleX = evt.target.scaleY = evt.target.scale*1.2;
					
				}
				this.thumb.onMouseOut = function(evt) {
					//evt.target.scaleX = evt.target.scaleY = evt.target.scale;
				
				}
	
	
	
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-8.7,0,158.8,34.8);

(lib.thumb = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();

		this.shape.graphics.beginFill('rgba(122,122,122,.1)').drawRoundRect(-17,-17, 35, 35, 5);

	this.shape.graphics.endStroke();
	this.shape.graphics.f("#666666").p("AhaABQAAAlAaAbQAbAbAmAAQAmAAAagbQAbgbAAglQAAgmgbgbQgagagmAAQgmAAgbAaQgaAbAAAm").f().s("#666666").ss(1,1,1,3).p("AhaABQAAgmAagbQAbgaAmAAQAmAAAaAaQAbAbAAAmQAAAlgbAbQgaAbgmAAQgmAAgbgbQgagbAAgl").cp();
	this.shape.setTransform(0.4,0.4);

	this.addChild(this.shape);
	
}).prototype = p = new Container();




(lib.scrubber = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
		this.shape.graphics.beginFill('rgba(122,122,122,.1)').drawRoundRect(0,0, 35, 35, 5);

	this.shape.graphics.endStroke();
		this.shape.graphics.moveTo(0,17);
	this.shape.graphics.setStrokeStyle(2);
	
				this.shape.graphics.beginStroke("#000000",1);
				this.shape.graphics.lineTo(35,17);
				this.shape.graphics.endStroke();
	this.addChild(this.shape);
	
	this.onPress = function(evt) {
					var target = evt.target;
					var tempPause = paused;
					paused = true;
					evt.onMouseMove = function(ev) {
							target.y = ev.stageY;

						}
						evt.onMouseUp = function(ev) {
			
							target.x = canvas.width -35;
							target.y = ev.stageY;
							
							paused = tempPause; 
							setTimeLineByPercent(ev.stageY/canvas.height);
						
						}
					}
				}
	
	
	
	
	
	

	
	
	
).prototype = p = new Container();























function processLessons(lessons, stage) {
	var hw = Math.min(canvas.width, canvas.height);
	var lessonCenterX, lessonCenterY;
	for ( i = 0; i < lessons.length; i++) {
		var myDegrees = (360 / lessons.length) * i;
		//console.log(i)
		parentHostX = (Math.sin((myDegrees * (Math.PI / 180))) * (hw / 3)) + hw / 2;
		parentHostY = (Math.cos((myDegrees * (Math.PI / 180))) * (hw / 3)) + hw / 2;

		for ( j = 0; j < lessons[i].modules.length; j++) {
			//console.log(j);
			myDegree = (360 / lessons[i].modules.length) * j;
			exportRoot = new lib.module(lessons[i].modules[j]['module_title'], lessons[i].modules[j]['module_id'], lessons[i].modules[j]['module_thumb'], i, j, lessons[i]['id'],lessons[i]['lesson_name']);

		//	myElementX = (Math.sin((myDegree * (Math.PI / 180))) * (hw / 12)) + parentHostX;
		//	myElementY = (Math.cos((myDegree * (Math.PI / 180))) * (hw / 12)) + parentHostY;

			stage.addChild(exportRoot);
			moduleObjects.push(exportRoot);
	//		exportRoot.x = myElementX;
	//		exportRoot.y = myElementY;
			//console.log("x:"+myElementX+ " y:"+myElementY);

		}
		relayout();
	}

}

paused = false;
function setPause() {
	paused = !paused;
}

var ontick = function() {
		var hw = Math.min(canvas.width, canvas.height);
	var firstTime = events[0]['event_time'];
	var lastTime = events[events.length-1]['event_time'];
	var realTimeDuration = lastTime - firstTime;
	var durationPerTick = Math.ceil(realTimeDuration/(30*slider.valueOf));
	
	
	if (paused == true) {
		
			g.clear();
		for ( i = 0; i < userObjects.length; i++) {
			var myDegrees = (360 / userObjects.length) * i + increment;
			
			 
			 for (gPoint=0; gPoint < userObjects[i].trail.length; gPoint++){
			 	if (userObjects[i].trail[gPoint].xy == 0){
			 		g.moveTo(userObjects[i].x, userObjects[i].y);
			 	}else {
			 	if (gPoint == 0){
			 			g.beginStroke(userObjects[i].color)
				g.moveTo(userObjects[i].x, userObjects[i].y);
					g.lineTo(userObjects[i].trail[gPoint].xy.x, userObjects[i].trail[gPoint].xy.y);
				g.endStroke();
			 	} else {
			 		//stroke = Math.ceil((gPoint/userObjects[i].trail.length)*12);
			 		//stroke = (gPoint/.25)+1; 
			 		
			 		//myalpha = 1 -(gPoint/userObjects[i].trail.length)
			 		g.setStrokeStyle(1);
							g.beginStroke(userObjects[i].color);
							
			 		g.moveTo(userObjects[i].trail[gPoint-1].xy.x,userObjects[i].trail[gPoint-1].xy.y);
			 		g.lineTo(userObjects[i].trail[gPoint].xy.x,userObjects[i].trail[gPoint].xy.y);
			 		g.endStroke();
			 	}
			 	
			 	}
			 }
				
}

	} else {
		increment++;
		g.clear();
stage.setChildIndex(drawCanvas, stage.getNumChildren() - 1);
createPlayHeadAndEvents();
		//console.log(userObjects);
 	processUsersLayout();
 	currentTime +=durationPerTick;
 
		while (events[nextEvent].event_time < currentTime) {
//			for (runEvents = 0; runEvents<slider.valueOf; runEvents++){
			if (nextEvent == events.length -1 ){
			currentTime = Math.floor(events[0].event_time);
			nextEvent = 0;
			break;
		}
			playNextEvent();
					//timeAverage = Math.floor(timeDiffs / timeObject.length);
		
		}
		
	document.getElementById("numbers").innerHTML = "<h2>Current Frame :" + nextEvent + " of " + events.length + " " + new Date(currentTime*1000) + "</h2>";

		//console.log('tick');
		//drawCanvas = new Shape(g);
		//ontick();
	}
	

	
	
	stage.update();
}

function createPlayHeadAndEvents() {
	//var hw = Math.min(canvas.width, canvas.height);
	var firstTime = events[0]['event_time'];
	var lastTime = events[events.length-1]['event_time'];
	var realTimeDuration = lastTime - firstTime;
	var durationPerTick = Math.ceil(realTimeDuration/(30*slider.valueOf));
	
	currentPercentPosition =  (currentTime-firstTime) / realTimeDuration * canvas.height;
	
	scrubber.y = currentPercentPosition;
	scrubber.x = canvas.width - 35;
	//create playhead light grey
	// g.moveTo(canvas.width,currentPercentPosition);
	// g.setStrokeStyle(2);
				// g.beginStroke("#000000");
				// g.lineTo(canvas.width-(35),currentPercentPosition);
// 	
	// g.endStroke();
	
	
	
}


function setupTimeLine(){
		var firstTime = events[0]['event_time'];
		scrubber.regY=17;
	var lastTime = events[events.length-1]['event_time'];
	var realTimeDuration = lastTime - firstTime;
	var durationPerTick = Math.ceil(realTimeDuration/(30*slider.valueOf));
	timeLine.clear();
	for (vent = 0; vent < events.length; vent++){
		renderTime = (events[vent].event_time - firstTime)/realTimeDuration * canvas.height;
		for (users = 0; users < userObjects.length;users++){
			if (userObjects[users].id == events[vent].user){
		timeLine.moveTo(canvas.width, renderTime);
		timeLine.setStrokeStyle(.25);
		timeLine.beginStroke(userObjects[users].color,".51");
		timeLine.lineTo(canvas.width -(25),renderTime);
		timeLine.endStroke();
		}}
	}	
}



function processUsersLayout() {
	var firstTime = events[0]['event_time'];
	var lastTime = events[events.length-1]['event_time'];
	var realTimeDuration = lastTime - firstTime;
	var durationPerTick = Math.ceil(realTimeDuration/(30*slider.valueOf));
	var hw = Math.min(canvas.width, canvas.height);
	for ( i = 0; i < userObjects.length; i++) {
		var myDegrees = (360 / userObjects.length) * i + increment;
		if (userObjects[i].trail.length > 0) {
			if (Math.abs(userObjects[i].trail[0].event_time -currentTime) >= 17600) {
				userObjects[i].trail.shift();
			}
		}
		for ( gPoint = 0; gPoint < userObjects[i].trail.length; gPoint++) {
			if (userObjects[i].trail[gPoint].xy == 0){
				g.moveTo(userObjects[i].x, userObjects[i].y);
			}
			else {
			
			if (gPoint == 0) {
				g.beginStroke(userObjects[i].color)
				g.moveTo(userObjects[i].x, userObjects[i].y);
					g.lineTo(userObjects[i].trail[gPoint].xy.x, userObjects[i].trail[gPoint].xy.y);
				g.endStroke();
			
			} else {
				//stroke = Math.ceil((gPoint/userObjects[i].trail.length)*12);
				//stroke = (gPoint/.25)+1;

				myalpha = (Math.abs(userObjects[i].trail[gPoint].event_time-firstTime)/(currentTime-firstTime))*1.2;
				//console.log(myalpha);
				g.setStrokeStyle(1);
				g.beginStroke(userObjects[i].color, myalpha);

				g.moveTo(userObjects[i].trail[gPoint - 1].xy.x, userObjects[i].trail[gPoint - 1].xy.y);
				g.lineTo(userObjects[i].trail[gPoint].xy.x, userObjects[i].trail[gPoint].xy.y);
				g.endStroke();
			}

		}
}
		if (userObjects[i].fed > 0) {
			// userObjects[i].x = (Math.sin((myDegrees * (Math.PI / 180))) * (hw / 16) * ((i % 5 + .5) / 10) * 5) + hw / 2;
			// userObjects[i].y = (Math.cos((myDegrees * (Math.PI / 180))) * (hw / 16) * ((i % 5 + .5) / 10) * 5) + hw / 2;
		// } else {

	userObjects[i].fed -= .1;
}
		userObjects[i].x = (Math.sin((myDegrees * (Math.PI / 180))) * (hw / 16) * ((i % 5 + .5) / 10) * 5) + hw / 2;
		userObjects[i].y = (Math.cos((myDegrees * (Math.PI / 180))) * (hw / 16) * ((i % 5 + .5) / 10) * 5) + hw / 2;
			// circleXTarget = (userObjects[i].targetX - userObjects[i].x);
			// circleYTarget = (userObjects[i].targetY - userObjects[i].y);
			// if (Math.abs(circleXTarget) < 15 && Math.abs(circleYTarget) < 15) {
// 
				// userObjects[i].x = ((Math.sin((myDegrees * (Math.PI / 180))) * 5) + userObjects[i].targetX );
				// userObjects[i].y = ((Math.sin((myDegrees * (Math.PI / 180))) * 5) + userObjects[i].targetY );
// 
			// } else {
// 
				// userObjects[i].x += circleXTarget / 6;
				// userObjects[i].y += circleYTarget / 6;
// 
			// }

		
//		}
	}

}



function setTimeLineByPercent(percent){

var firstTime = events[0]['event_time'];
	var lastTime = events[events.length-1]['event_time'];
	var realTimeDuration = lastTime - firstTime;
	currentTime = (realTimeDuration *percent) + firstTime;
	
	for (mod= 0; mod < events.length; mod++){
		
		if (events[mod].event_time > currentTime){
			nextEvent = mod;
			break;
		}
		
	}
	
}

function processUsersLayout2(){

		var hw = Math.min(canvas.width, canvas.height);
		for ( i = 0; i < userObjects.length; i++) {
			var myDegrees = (360 / userObjects.length) * i + increment;
			
			 if (userObjects[i].trail.length >0 ){
			 	if (increment % 20 == 1) {
			userObjects[i].trail.shift();
			}	
			 }
			 
			 for (gPoint=0; gPoint < userObjects[i].trail.length; gPoint++){
			 	if (gPoint == 0){
			 			g.moveTo(userObjects[i].trail[gPoint].xy.x,userObjects[i].trail[gPoint].xy.y);
			 		
			 	} else {
			 		//stroke = Math.ceil((gPoint/userObjects[i].trail.length)*12);
			 		//stroke = (gPoint/.25)+1; 
			 		
			 		myalpha = 1 -(gPoint/userObjects[i].trail.length)
			 		g.setStrokeStyle(1);
							g.beginStroke(userObjects[i].color,myalpha);
							
			 		g.moveTo(userObjects[i].trail[gPoint-1].xy.x,userObjects[i].trail[gPoint-1].xy.y);
			 		g.lineTo(userObjects[i].trail[gPoint].xy.x,userObjects[i].trail[gPoint].xy.y);
			 		g.endStroke();
			 	}
			 	
			 	
			 }
				

			if (userObjects[i].fed <= 0) {
				userObjects[i].x = (Math.sin((myDegrees * (Math.PI / 180))) * (hw / 16)*( (i%5+.5)/10)*5) + hw / 2;
				userObjects[i].y = (Math.cos((myDegrees * (Math.PI / 180))) * (hw / 16)*( (i%5+.5)/10)*5) + hw / 2;
			} else {
				
				
				for (drawI= 0; drawI < userObjects[i].trail.length; drawI++){
					

					
				}
				
				
				circleXTarget = (userObjects[i].targetX - userObjects[i].x);
				circleYTarget = (userObjects[i].targetY - userObjects[i].y);
				if (Math.abs(circleXTarget) <15 && Math.abs(circleYTarget) <15){
					
				userObjects[i].x = ((Math.sin((myDegrees * (Math.PI / 180))) * 5) + userObjects[i].targetX ) ;
				userObjects[i].y = ((Math.sin((myDegrees * (Math.PI / 180))) * 5) + userObjects[i].targetY ) ;

					
				}else {
					
				userObjects[i].x += circleXTarget/6 ;
				userObjects[i].y += circleYTarget/6 ;

					
				}
				
				
				
				userObjects[i].fed -= .1;
			}
		}	
	
	
}



function resetUsers(){
	var hw = Math.min(canvas.width, canvas.height);
	for (i = 0; i < userObjects.length; i++){
		var myDegrees = (360 / userObjects.length) * i + increment;
		userObjects[i].fed = 0;
		userObjects[i].trail = [];
			userObjects[i].x = (Math.sin((myDegrees * (Math.PI / 180))) * (hw / 16)*( (i%5+.5)/10)*5) + hw / 2;
				userObjects[i].y = (Math.cos((myDegrees * (Math.PI / 180))) * (hw / 16)*( (i%5+.5)/10)*5) + hw / 2;
	}
}
function resizeCanvas() {
	canvas = document.getElementById("canvas");
	canvas.width = window.innerWidth-30;
	canvas.height = window.innerHeight-30;
	setupTimeLine();
	scrubber.x = canvas.width -35;
	relayout();
}

function relayout() {
	var hw = Math.min(canvas.width, canvas.height);
	for ( k = 0; k < moduleObjects.length; k++) {
		var i = moduleObjects[k].i;
		var j = moduleObjects[k].j;
		var myDegrees = (360 / lessons.length) * i;
		parentHostX = (Math.sin((myDegrees * (Math.PI / 180))) * (hw / 3)) + hw / 2;
		parentHostY = (Math.cos((myDegrees * (Math.PI / 180))) * (hw / 3)) + hw / 2;
		myDegree = (360 / lessons[i].modules.length) * j;
		myMod = 5;
		moduleObjects[k].x = (Math.sin((myDegree * (Math.PI / 180))) * (hw / 12)*( (k%myMod+1.25)/10)*3.5) + parentHostX;
		moduleObjects[k].y = (Math.cos((myDegree * (Math.PI / 180))) * (hw / 12)*( (k%myMod+1.25)/10)*3.5) + parentHostY;

	}
}

function playNextEvent() {

	var eventUser = 0;
	var eventModule = 0;

	for ( i = 0; i < userObjects.length; i++) {
		if (userObjects[i]['id'] == events[nextEvent]["user"]) {
			eventUser = userObjects[i];
			break;
		}
	}

	for ( i = 0; i < moduleObjects.length; i++) {
		if (moduleObjects[i]['id'] == events[nextEvent]["module_id"]) {
			eventModule = moduleObjects[i];
			break;
		}
	}
	if (eventModule == 0) {
		for ( i = 0; i < moduleObjects.length; i++) {
			if (moduleObjects[i]['lesson_id'] == events[nextEvent]["lesson_id"]) {
				eventModule = moduleObjects[i];
				events[nextEvent].module_id = moduleObjects[i].id;
				//console.log('lesson');
				break;
			}
		}
	}
	//eventUser = userObjects[0];
	//eventModule = moduleObjects[30];

	if (eventUser != 0 && eventModule != 0) {
		eventUser.fed = Math.min(20, eventUser.fed + 5);
		eventUser.targetX = eventModule.x;
		eventUser.targetY = eventModule.y;
		eventUser.scaleX = Math.min(5, eventUser.scaleX + .3);
		eventUser.scaleY = Math.min(5, eventUser.scaleY + .3);
		//timeToScale = 600* eventUser.scaleX;

		scaledown = createjs.Tween.get(eventUser).to({
			scaleX : 1,
			scaleY : 1
		}, 600);
		eventModule.scaleX = 2;
		eventModule.scaleY = 2;
		createjs.Tween.get(eventModule).to({
			scaleX : 1,
			scaleY : 1
		}, 400);
		stage.setChildIndex(eventModule, stage.getNumChildren() - 1);
		stage.setChildIndex(eventUser, stage.getNumChildren() - 1);

		timeObject.push(events[nextEvent]["event_time"]);
		timeDiffs = 0;
		lastTime = timeObject[0];
		
		if (timeObject.length > 25){
			timeObject.shift();
		}
		for ( t = 0; t < timeObject.length; t++) {
			timeCurrent = timeObject[t];
			timeDiffs += timeCurrent - lastTime;
			lastTime = timeCurrent;
		}

		timeAverage = Math.floor(timeDiffs / timeObject.length);

		document.getElementById("numbers").innerHTML = "<h2>Current Frame :" + nextEvent + " of " + events.length + " " + new Date(events[nextEvent]["event_time"]*1000) + " " + timeAverage + "</h2>";
if (eventUser.trail.length >10){
	eventUser.trail.unshift();
}
	eventUser.trail.push( {xy:eventModule,event_time:events[nextEvent].event_time});
		nextEvent++;
	//	if (nextEvent == events.length) {
			//nextEvent = 0;
	//	} else {

		//}
	} else {
		nextEvent++;
		//playNextEvent();
	}
}

function showAllLinkstoUser(userDot){
	
	
		for ( i = 0; i < events.length; i++) {
		if (userDot.id == events[i]["user"]) {
			myModule = 0;
				for ( j = 0; j < moduleObjects.length; j++) {
		if (moduleObjects[j]['id'] == events[i]["module_id"]) {
			myModule = moduleObjects[j];
			
			userDot.parent.trail.push({xy:myModule,event_time:currentTime});
			
		}
			if (myModule == 0) {
		for ( k = 0; k < moduleObjects.length; k++) {
			if (moduleObjects[k]['lesson_id'] == events[i]["lesson_id"]) {
				myModule = moduleObjects[k];
			//	console.log('lesson'+k);
				break;
			}
		}
	}
	
	

	
	
	

			myModule.scaleX = 2;
			myModule.scaleY = 2;
			if (myModule.scaledown == undefined ){
			myModule.scaledown = createjs.Tween.get(myModule).to({
			scaleX : 1,
			scaleY : 1
		}, 600).call(function(myModule){  this.scaledown = undefined; });;
		}
		}
	}
		}
	}
	
	
	function showAllUsertoModule(module){
		//console.log("hey");
		if (paused == true){
			resetUsers();
		}
		for (event = 0; event < events.length; event++){
			if (module.id == events[event].module_id){
				
				for (users = 0; users < userObjects.length;users++){
					if (userObjects[users].id == events[event].user){
						
						userObjects[users].scaleX = 2;
						userObjects[users].scaleY = 2;
						userObjects[users].userdot.nametext.visible = true;
						myuser = userObjects[users];
						if (myuser.scaledown == undefined){
						myuser.scaledown = createjs.Tween.get(userObjects[users]).wait(200).to({
			scaleX : 1,
			scaleY : 1
		}, 500).wait(500).call(function(myuser){ this.userdot.nametext.visible=false; this.scaledown = undefined; });
					}
					}
				}
				
			}
			
		}
		
	}
	
	
	function backLinkFieability(module){
		backLinkArray = [];
		
		for (event = 0; event < events.length; event++){ // iterate all events
			if (module.id == events[event].module_id){  //make current module match iterated module
				
				for (users = 0; users < userObjects.length;users++){ // iterate the user
					if (userObjects[users].id == events[event].user){ //user matches then find out where they came from
					
						for(eventDec =event-1; eventDec >=1; eventDec--){
							if (userObjects[users].id == events[eventDec].user && events[eventDec].module_id != module.id ){
								backLinkArray.push(events[eventDec].module_id); 
								addlineFromUserToModuleId(userObjects[users],events[eventDec].module_id, false); //to this found module
								addlineFromUserToModuleId(userObjects[users],module.id,true); //to the clicked module
								break;
							}
							
							
						}
						
						
				
					}
				}
				
			}
			
		} 
		backLinkCommon = mode(backLinkArray);
		//console.log(backLinkCommon);
		if (backLinkCommon != null){
		for (m = 0; m<moduleObjects.length; m++) {
		if (moduleObjects[m].id == backLinkCommon){
			moduleObjects[m].scaleX = 2;
			moduleObjects[m].scaleY = 2;
			
			createjs.Tween.get(moduleObjects[m]).to({
			scaleX : 1,
			scaleY : 1
		}, 800);
			
		}	
		}
		}
	}


function addlineFromUserToModuleId(user, moduleID,resetLine){
	
	for (mo = 0; mo < moduleObjects.length; mo++){
		if (moduleID == moduleObjects[mo].id){
			user.fed += 1;
			
			user.trail.push({xy:moduleObjects[mo],event_time:currentTime});
			if (resetLine == true){
			user.trail.push({xy:0,event_time:currentTime});
			}
		}
		
	}
	
	
}

function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
                modeMap[el] = 1;
        else
                modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
                maxEl = el;
                maxCount = modeMap[el];
        }
    }
    return maxEl;
}



function byte2Hex(n) {
	var nybHexString = "0123456789ABCDEF";
	return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
}