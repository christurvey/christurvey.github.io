(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"nitrateadventure_HTML5_atlas_", frames: [[0,258,300,210],[258,0,200,52],[0,0,256,256]]}
];


// symbols:



(lib.moon = function() {
	this.spriteSheet = ss["nitrateadventure_HTML5_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nitratedlabel = function() {
	this.spriteSheet = ss["nitrateadventure_HTML5_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.perlin = function() {
	this.spriteSheet = ss["nitrateadventure_HTML5_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nitratedlabel();
	this.instance.parent = this;
	this.instance.setTransform(-69.9,37.1,0.757,0.892,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.9,-69.9,139.8,139.8);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("AnKfVQhxgXiXjlQgcgqgYg/Qj6hUAQjBQARjLAAn0QAAn1F5liQB6hyCKhNQiEhBALh6QAMiZAAl6QAAl6EdkMQEckLGUAAQBpAAA5AHQA+AIAtAWQApAUAzAsQAXATBeBZQA/A8h3BPQhJAxjqBlQj5BsheA4QijBhAABUQAABTCOCPQBDBCDoDGQDDCnBDBUQA1BDAGAwIAxAuQBVBPieBpQhOA0jWBfQAqA4AwA4QBWBkAXAiQAtBHATBbQAWBnAACzQAACZAaCbQAeCbAJBBQAQBrgTBVQgXBnhRB7IgSAZQAAAqghAfQhnBhh/AnQhFAdhQAOQhmASiVAAQipgEhRAAQhEAAiDANQgqADggAAQgmAAgYgFg");
	this.shape.setTransform(-0.9,-201.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-101.8,-402.1,202,402), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("AnjehQhzgWiZjdQiWjYgor2QgGh5gEiLIABAEQAmCxBQhyQDHk6BdhoQCVilDYAAQAVAAAVgBQhLg7i9g5QjUhAANicQANicAAmCQAAmCEjkSQBmhgB2g+QgRgKgQgLQgngdAjgzIFHARQDYjQE4BwQARAGAPAKQBYAPBWAGQgoAhhSATQhCAQgxAPQAeATAiAdQAXAUBhBbQBBA9h6BQQhLAzjvBnQj+BvhhA5QimBjAABVQAABVCSCSQBDBEDtDKQDICrBEBWQBmB+hCA+QhhBbh8AZQAwA/A7BAQBXBgAXAhQAuBEAUBXQAWBjAACsQAACTAaCVQAfCVAJA/QAQBmgTBSQgXBjhTB2QiZDakdAwQhnASiZAAQirgEhTAAQhFAAiGAMQgrADgiAAQglAAgYgEg");
	this.shape.setTransform(-0.8,-195.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-96,-391.4,190.5,391.5), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("Ancf5Qh1gVicjTQiZjPgorYQgHhzgEiGIABAEQAnCqBShuQDKktBfhjQCXifDcAAQA/AABDgOQgLgMgKgNQhHhEjZhAQjYhBANifQANigAAmKQAAmKEpkYQA7g4BAgsQABgiArgyQArgxBxhcIAIgoQAeimhfBIQAjgbAfgTQCJhWBJBJQB0grAiBfQgWAsgYA3QgfBIgiBbIgPAnQj/KpAABVQAABWCUCVQBFBGDyDOQDLCuBGBYQBoCAhDA/Qh+B3isAJIgHAAQA8BOBOBQQBZBdAXAfQAvBBAUBUQAWBfAAClQAACNAbCPQAgCOAJA9QAQBigUBPQgXBfhVBxQibDRkiAuQhpARibAAQiugEhVAAQhHAAiHAMQgrADghAAQgpAAgYgFgAMb6aQAQgNAJgCQA2gPgjAkIAUARQAAABABAAQAAAAAAAAQAAAAAAAAQAAABgBAAQgFAAg7gZg");
	this.shape.setTransform(-2.5,-204.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-97.9,-409.2,190.8,409.2), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("EgH1AruQh3gVifjKQibjGgpq5QgHhugEiAIABADQAoCjBThpQDNkgBhhgQCaiYDgAAQA0AAA2gIIgSgXQhJhIjdhGQjdhGAOiqQANiqAAmkQAAmbEhkmQg3gVgvgjQg3gqBWhWQA6g6CphzQDHiIkpCnQjtCFA+hNQAAABAAABQAAAAAAAAQAAAAAAgBQABgBAAgBQAQgUAlgiIABgCQglASgNAbIAph9QA3inBUgSQBVgTA5gfQA5gfBkBbQBlBcBLgBQBLAAB3CaQB3CaBclqQBclqAAEEQAAEFALBqQABAKAAAJQAlAWAqAmQAZAWBkBjQBEBDh/BYQhPA2j5BxQkJB5hkA+QitBsAABeQAABcCXCeQBHBLD3DcQDQC6BHBdQBqCLhEBDQh3B1ifASQA5BDBGBEQBbBZAXAeQAwA+AUBQQAXBcAACdQAACHAbCJQAhCIAJA6QAQBfgUBLQgYBbhVBsQieDIknAsQhsAQidAAQiygDhWAAQhIAAiKALQgtADgiAAQgnAAgZgEgEgEVgjcQhfglA2gJQCCgWBYgxQBbgzAAg4QAAgZgigtQgMgRg6hDQhdhrAdgeIATgSQgDAOAoAAQBzAABQBRQBRBRAABzQAABzhRBRQhQBShzAAQg+AAhegkg");
	this.shape.setTransform(0,-280.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-98.6,-560.5,197.3,560.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("EgHzAk0Qh5gUiijBQiei+gqqaQgHhpgDh6IABADQAoCcBUhlQDSkTBihbQCIh/C+gQQhIgghogfQjihFAOilQAOimAAmaQAAmbE2kjQAnglAqggQg2gDggAAQhMAAgsgSQgkgOGlhUQAHgJDKhUIAPATQB9gdCKAAQByAAA+AJQBDAJAxAXQAtAWA3AvQAZAWBmBgQBFBBiBBWQhQA1j+BuQkOB2hnA9QiwBpAABbQAABaCaCbQBIBJD8DWQDUC0BJBcQBsCHhGBBQhQBLhhAhIAtArQBcBVAYAdQAxA7AUBNQAXBXAACXQAACBAcCDQAhCCAKA3QAQBagUBIQgYBXhYBoQigC/ktAqQhtAPigAAQi0gDhYAAQhJAAiMALQguACgjAAQgoAAgZgDgAi/4iQl1klgFgVQgEgVDjhFQDjhFBuilQBtikAjAPQAhAPApAfIBdBNQAyArhfA4Qg6Aki6BIQjEBOEoBNQEpBMjlBDQjjBDBwDCQApBIAWArQh9hAjDiZg");
	this.shape.setTransform(0,-236);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-99.3,-471.9,198.6,471.9), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("EgH2AkLQh6gTili4Qihi1gqp7QgHhkgEh0IABADQApCUBWhgQDVkGBjhXQBfhTB5ghQgogOgugOQjmhGAPipQANipAAmiQAAmjE8kpQAegbAegaQhDgBgpgRQglgPDcivQkBBIFNkBQFNkAjkgQQjlgPhojsQhojsEngDQEngCglh1Qglh1AtAiQAuAiAjA4QAjA4AegvQAeguBMBBQA0AthhA6Qg8Ali+BLQjJBQhNAqQiEBII+A1QI/A2lkBaQlkBZijDoQikDpHHiTQBlgRBuAAQB0AAA/AIQBEAJAyAZQAuAWA4AwQAaAWBoBiQBHBCiFBXQhRA3kDBwQkUB4hoA+Qi0BrAABdQAABcCdCeQBKBKEADbQDZC4BKBeQBuCJhHBDQg2Azg+AfIABABQBeBRAYAcQAxA4AVBKQAYBTAACPQAAB7AcB9QAiB8AJA1QARBWgUBEQgZBThZBjQijC2kyAoQhvAPijAAQi3gDhZAAQhKAAiPAKQgvACgjAAQgpAAgagDg");
	this.shape.setTransform(0,-231.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-100.3,-463.7,200.8,463.7), null);


(lib.switchplate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1.5,1,1).p("ACoiPQAAAPgLALQgLALgPAAQgPAAgLgLQgKgLAAgPQAAgPAKgLQALgKAPAAQAPAAALAKQALALAAAPgAg2C0IhxiM");
	this.shape.setTransform(35.6,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgZAaQgLgLABgPQgBgOALgLQALgLAOAAQAPAAAKALQAMALAAAOQAAAPgMALQgKALgPgBQgOABgLgLg");
	this.shape_1.setTransform(48.7,-9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(1.5,1,1).p("AAkiPQAAAPALALQAKALAPAAQAPAAALgLQALgLAAgPQAAgPgLgLQgLgKgPAAQgPAAgKAKQgLALAAAPgAhsC0IBwiM");
	this.shape_2.setTransform(41.4,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0066").s().p("AgZAaQgLgLABgPQgBgOALgLQALgLAOAAQAPAAALALQAKALAAAOQAAAPgKALQgLALgPgBQgOABgLgLg");
	this.shape_3.setTransform(48.7,-9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s("#CCCCCC").ss(1.5,1,1).rc(-29.6,-13,59.2,26,13,13,0,0);
	this.shape_4.setTransform(29.6,13);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-14.5,61.2,41.5);


(lib.smoke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_95 = function() {
		var _this = this;
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("AhgARQgogHgBgKQABgJAogHQAogHA4AAQA5AAAoAHQApAHAAAJQAAAKgpAHQgoAHg5AAQg4AAgogHg");
	this.shape.setTransform(9.8,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(64,64,64,0.973)").s().p("Ag2AlQgagDgVgJQgngKgBgNQABgMAngJQASgGAWgFIAKgBIAIABQASgBAZgDIALgBQASgCAPABIATAAQAPACAOAFIAJADQAVAFAKAHQAKAFAAAGQgBAJgdAIIgMADQgMAEgPACQgaADgjAGIgNACQgZADgUAAIgIAAg");
	this.shape_1.setTransform(9.4,-4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(62,62,62,0.945)").s().p("Ag7A0QgagFgVgOQgmgMAAgRQAAgOAmgMQASgJAVgHIAKgCQAEAAAFACQATAAAbgGIANgCQATgEAQAAQAKgCAKABQAQADAOAHIAKAEQAUAIAKAJQAJAGAAAGQAAAMgdAJIgMAFQgOAFgPADQgZADgoAMIgOADQgeAIgVAAIgEAAg");
	this.shape_2.setTransform(9,-6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(61,61,61,0.918)").s().p("AhBBDQgZgGgVgUQglgOAAgVQAAgRAlgOQARgMAVgJIALgCQAEAAAFACQAUAAAegIIANgDQAWgGAPgBQANgDAJABQARADAPAKIAJAGQAVAKAJALQAJAHAAAHQgBAOgcALIgMAGQgPAGgQADQgZADgsATIgPADQgjAOgWAAIgBAAg");
	this.shape_3.setTransform(8.6,-7.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(59,59,59,0.894)").s().p("AhGBRQgagGgTgaQgkgRgBgXIAAgBQAAgTAkgRQARgOAUgMIANgDQAEAAAEAEQAVgBAhgLIAOgEQAYgIAQgBQANgEAKACQARADAPANIAKAHQAVALAJAOQAIAIAAAIQgBAQgcAMIgNAHQgOAJgSADQgYADgxAYIgQAFQglASgVAAIgCAAg");
	this.shape_4.setTransform(8.2,-9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(57,57,57,0.867)").s().p("AhMBgQgZgIgTgfQgjgTAAgbQgBgWAjgUQARgRATgPQAEgCAKgBQAEAAAFAFQAVAAAjgOIAPgFQAagKAQgCQAPgFAKACQASAEAQAPIAJAJQAVANAJAQQAIAIAAAKQgCASgbANIgNAJQgPAKgTAEQgYADg1AeIgQAGQgrAXgUAAIgBAAg");
	this.shape_5.setTransform(7.8,-11.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(55,55,55,0.839)").s().p("Ah9BCQgigWAAgfIAAAAQAAgZAhgWQAQgUATgRQAEgCAKgCQAEAAAGAGQAVAAAngRIAQgFQAcgMAQgDQAQgGAKACQATAEAQASIAKALQAUAPAJASQAIAJgBAKQgBAVgbAPIgOAJQgQAMgUAEQgXADg5AkIgRAIQgvAcgTAAQgZgJgTgkg");
	this.shape_6.setTransform(7.4,-13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(54,54,54,0.812)").s().p("AiCBKQghgZAAgiIAAAAQAAgbAggZQAQgWASgUQAEgDALgBQAEAAAGAGQAWABAqgUIAQgHQAegOARgDQARgHALACQATAFARAVIAKAMQAUARAIAUQAIAKgBALQgBAXgcAQQgGAGgHAFQgRANgVAFQgXADg9AqIgSAJQgyAhgTAAQgYgKgTgqg");
	this.shape_7.setTransform(7,-14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(52,52,52,0.784)").s().p("AiHBSQgggbAAgmQAAgeAggbQAPgZARgXQAEgCAMgCQAEAAAGAIQAXAAAsgWIASgIQAfgQASgEQATgIAKACQAUAGARAXIAKANQAUAUAIAWQAHALAAAMQgBAZgcARQgGAHgIAGQgRAPgWAFQgWADhBAwIgUAKQg1AlgSABQgYgMgTgvg");
	this.shape_8.setTransform(6.6,-16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(50,50,50,0.757)").s().p("AiLBaQgfgdgBgpIAAAAQAAghAfgeQAOgbARgZQAEgDANgCQAEAAAGAIQAXABAwgZIASgJQAigSASgEQAUgJAKACQAVAGASAaQAFAHAFAIQATAVAIAYQAHANAAAMQgCAbgbATQgHAIgHAGQgSAQgXAGQgWADhFA2IgUALQg5AqgSABQgYgNgRg1g");
	this.shape_9.setTransform(6.2,-18.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(48,48,48,0.729)").s().p("AiQBjQgeggAAgtIAAAAQgBgjAeghQAOgeARgcQADgDAOgCQAEAAAGAKQAYABAzgdIATgJQAjgUASgFQAWgLAKADQAXAHARAcIAKAQQAUAYAHAaQAHAOgBANQgBAdgbAVQgHAIgIAGQgSATgZAGQgVADhJA7IgVANQg8AvgRABQgYgOgRg6g");
	this.shape_10.setTransform(5.8,-19.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(46,46,46,0.702)").s().p("AiVBrQgdgjAAgvIAAgBQgBgmAdgjQANghARgeQADgDAPgDQAEAAAGALQAZABA1gfIAVgLQAlgWASgFQAXgMALADQAXAHARAgQAGAIAFAJQATAZAHAdQAHAPgBAOQgCAegbAXQgGAJgIAHQgTAUgaAGQgVADhNBCIgWAOQg/A0gRABQgXgPgRhAg");
	this.shape_11.setTransform(5.4,-21.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(45,45,45,0.678)").s().p("AiaBzQgcglAAgzIAAgBQAAgoAbgmQANgjAQghQADgEAQgDQAEAAAGAMQAZABA5ghIAVgMQAngYATgGQAYgNALAEQAYAHASAiQAGAJAEAKQATAbAHAfQAHAQgBAOQgCAhgbAYQgHAKgIAIQgTAVgbAHQgUADhSBIIgXAPQhCA4gQABQgXgQgRhFg");
	this.shape_12.setTransform(5,-23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(43,43,43,0.651)").s().p("AifB7QgbgnAAg3IAAgBQAAgqAagpQAMgmAQgkQADgDAQgDQAEAAAHAMQAaACA8glIAWgMQApgaATgHQAZgOALAEQAZAIASAkQAGAKAFALQATAdAGAhQAHARgBAPQgDAjgaAaQgHAKgIAIQgVAXgbAIQgUADhWBNIgXARQhGA9gQABQgWgRgRhLg");
	this.shape_13.setTransform(4.6,-25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(41,41,41,0.624)").s().p("AijCDQgagqgBg6IAAAAQAAguAZgrQAMgpAPgmQACgEASgDQAEAAAHAOQAbABA+gnIAXgOQArgcAUgHQAagPAMAEQAZAIATAoQAGAKAEAMQATAfAGAjQAGARAAARQgDAlgaAbQgHALgJAJQgVAZgcAHQgUADhaBUIgYASQhJBBgPACQgXgTgPhQg");
	this.shape_14.setTransform(4.2,-26.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(39,39,39,0.596)").s().p("AioCLQgZgsgBg+IAAAAQAAgwAYguQAMgrAOgpQACgFATgDQAEAAAHAPQAbACBCgqIAYgPQAtgeAUgIQAbgQAMAEQAaAJATAqQAGALAFANQASAhAGAlQAGASgBASQgCAngbAcQgHAMgIAJQgWAbgeAIQgTADheBaIgZATQhMBGgPACQgWgUgPhWg");
	this.shape_15.setTransform(3.8,-28.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(37,37,37,0.569)").s().p("AitCTQgYguAAhBIAAgBQgBgzAXgwQALguAOgsQACgEAUgDQAEgBAHAQQAcACBEgtIAZgQQAvgfAUgJQAdgRAMAEQAbAKATAtQAHAMAEAMQATAjAGAoQAFATgBASQgDApgaAfQgHAMgJAKQgWAcgfAJQgSADhjBfIgaAVQhPBLgOACQgWgVgPhcg");
	this.shape_16.setTransform(3.4,-30.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(36,36,36,0.541)").s().p("AiyCcQgXgyAAhEIAAgBQgBg1AWgzQALgxANguQACgFAVgDQAEAAAHAQQAdADBHgwIAagRQAxgiAUgJQAegSANAEQAbAKAUAwQAGANAFANQASAlAGAqQAFAUgBATQgDArgaAgQgHANgJALQgXAdggAJQgSADhnBmIgaAWQhTBPgOACQgVgWgPhgg");
	this.shape_17.setTransform(3,-31.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(34,34,34,0.514)").s().p("Ai3CkQgWg0AAhIIAAgBQgBg4AVg1QAKgzANgxQACgFAWgEQAEAAAHASQAdACBLgzIAagRQAzgkAVgKQAfgTANAFQAcAKAUAyQAHAOAEAOQASAnAGAsQAFAVgBAUQgEAtgZAhQgIAOgJALQgXAgghAJQgSADhrBrIgbAYQhWBUgNACQgVgXgPhmg");
	this.shape_18.setTransform(2.6,-33.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(32,32,32,0.49)").s().p("Ai7CsQgVg2gBhMIAAgBQAAg6AUg4QAJg2AMgzQACgGAXgEQAEAAAHATQAeACBNg1IAcgTQA0glAWgKQAhgVAMAFQAdALAVA1IALAdQASApAFAvQAFAVgCAVQgDAvgaAjQgHAOgKAMQgXAhgjAKQgRADhvBxIgcAYQhZBZgMADQgWgYgNhsg");
	this.shape_19.setTransform(2.2,-35.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(30,30,30,0.463)").s().p("AjAC0QgUg5gBhOIAAgCQAAg8ATg7QAJg5ALg2QACgFAYgEQAEgBAHAUQAeADBRg4IAcgUQA3goAWgKQAigWANAFQAdAMAVA3IAMAfQARAqAFAyQAFAWgCAVQgDAxgaAlQgIAPgJAMQgYAjgkALQgQADh0B3IgdAZQhcBegMADQgVgagNhxg");
	this.shape_20.setTransform(1.8,-36.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(29,29,29,0.435)").s().p("AjEC8QgTg7gBhSIAAgBQgBhAASg9QAJg7AKg5QACgGAZgEQAEAAAIAUQAfADBTg7IAdgUQA5gqAWgLQAjgXAOAFQAdAMAWA6IAMAhQARAsAEA0QAFAXgCAWQgDAzgaAmQgHAQgKANQgZAkglALQgQADh4B9IgdAbQhgBigLADQgVgagMh3g");
	this.shape_21.setTransform(1.3,-38.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(27,27,27,0.408)").s().p("AjKDEQgSg9AAhWIAAgBQgBhCARhAQAIg+AKg7QACgGAZgFQAEAAAIAWQAgADBWg+IAegWQA7grAWgMQAlgYANAFQAfANAWA9IAMAhQARAvAEA2QAEAYgBAXQgEA1gZAoQgIAQgKAOQgaAmglALQgQADh8CDIgeAcQhjBngLADQgUgcgNh8g");
	this.shape_22.setTransform(1,-40.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(25,25,25,0.38)").s().p("AjPDMQgRhAAAhZIAAgBQgBhFAQhCQAHhBAKg+QACgGAagFQAEAAAIAXQAgADBahAIAfgXQA8guAXgMQAmgZAOAGQAfANAWA/IAMAjQARAxAEA4QAEAZgCAYQgEA3gZApQgIARgKAOQgaAognAMQgPADiACJIgfAdQhmBsgKADQgUgdgNiCg");
	this.shape_23.setTransform(0.6,-42);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(23,23,23,0.353)").s().p("AjTDUQgQhCgBhdIAAgBQAAhHAPhFQAHhDAIhBQACgHAcgEQAEgBAIAYQAhAEBchEIAggYQA+gvAYgNQAngaAOAGQAfANAXBDIAMAkQARAzAEA6QADAagBAYQgEA6gZArQgJARgKAPQgaApgoAMQgPADiFCPIgfAfQhqBwgJAEQgUgegMiIg");
	this.shape_24.setTransform(0.1,-43.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(21,21,21,0.325)").s().p("AjYDdQgPhGgBhfIAAgCQgBhKAOhHQAHhGAIhDQABgHAdgFQAEAAAJAYQAhAEBfhGIAhgZQBAgyAYgNQAogbAOAGQAhAOAXBFIAMAmQARA0ADA9QAEAbgCAZQgEA7gZAuQgIARgLAPQgbArgpANQgOADiJCVIggAgQhuB1gIAEQgUgggLiMg");
	this.shape_25.setTransform(-0.2,-45.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(20,20,20,0.302)").s().p("AjdDlQgOhHgBhkIAAgBQAAhMAMhLQAGhIAIhGQABgHAegFQAEgBAJAaQAhAEBjhJIAigaQBCgzAYgOQApgcAPAGQAhAOAYBIIAMAnQAQA3ADA+QAEAcgCAaQgFA+gYAvQgJASgKAQQgcAsgqANQgOADiNCbIghAhQhxB6gIAEQgTghgLiSg");
	this.shape_26.setTransform(-0.6,-47.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(18,18,18,0.275)").s().p("AjhDtQgNhKgBhmIAAgCQgBhPAMhNQAFhLAHhIQACgIAegFQAEAAAJAaQAjAEBlhLIAjgbQBEg2AYgOQArgdAPAGQAhAPAZBKQAGAUAGAVQAQA4ADBBQADAdgCAbQgFA/gYAxQgJATgKAQQgdAugrAOQgNADiSChIghAiQh0B+gIAFQgTgigKiYg");
	this.shape_27.setTransform(-1.1,-48.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(16,16,16,0.247)").s().p("AjnD1QgMhNAAhqIAAgBQgBhSAKhQQAFhNAHhLQABgIAfgFQAEgBAKAcQAjAEBohOIAlgcQBFg4AYgPQAsgeAPAHQAjAPAYBNQAHAVAGAVQAQA7ADBDQACAegCAbQgFBCgYAyQgIATgLARQgeAwgsAOQgMADiXCnIgiAkQh3CDgHAEQgSgjgLidg");
	this.shape_28.setTransform(-1.4,-50.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(14,14,14,0.22)").s().p("AjrD+QgLhPgBhuIAAgCQgBhUAJhSQAFhQAGhOQABgIAggFQAEgBAKAdQAjAEBshRIAlgdQBHg5AZgQQAtggAQAHQAjAQAZBQQAHAVAFAXQAQA8ADBFQACAfgCAdQgFBDgYA0QgJAUgLARQgeAygtAOQgMADibCtIgiAlQh7CIgGAEQgTgkgJiig");
	this.shape_29.setTransform(-1.8,-52.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(12,12,12,0.192)").s().p("AjwEGQgKhSgBhxIAAgBQgBhXAJhVQAEhTAFhQQABgIAhgGQAEgBAKAeQAkAFBuhVIAngdQBJg8AZgQQAvghAPAHQAkARAZBSQAHAWAGAXQAPA/ADBHQACAggCAdQgFBGgYA1QgJAVgLASQgfAzguAPQgMADifCyIgjAnQh+CMgGAFQgSglgJiog");
	this.shape_30.setTransform(-2.2,-53.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(11,11,11,0.165)").s().p("Aj1EOQgJhUgBh1IAAgBQgBhaAIhXQADhWAFhSQABgJAigGQAEAAAKAeQAlAFBxhXIAngfQBLg9AagRQAwgiAPAIQAlARAaBVQAHAWAFAYQAQBBACBJQACAhgCAeQgGBIgYA2QgJAWgLATQgfA0gvAQQgMADijC4IgkAoQiBCRgFAFQgSgmgJiug");
	this.shape_31.setTransform(-2.6,-55.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(9,9,9,0.137)").s().p("Aj6EWQgIhWgBh4IAAgCQAAhcAGhaQADhYAEhWQABgIAjgHQAEAAAKAgQAlAFB1haIAoggQBMg/AbgSQAxgjAQAIQAlARAaBYQAHAXAGAZQAPBCACBMQACAigDAfQgFBJgYA5QgJAWgLATQggA3gxAPQgKADioC/IglApIiJCbQgRgogJizg");
	this.shape_32.setTransform(-3,-57.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(7,7,7,0.11)").s().p("Aj/EeQgHhZAAh7IAAgCQgBhfAFhcQAChbAEhYQABgJAkgGQAEgBAKAhQAmAFB3hdIApggQBPhCAagSQAzgkAQAIQAmASAbBaQAHAYAFAaQAPBEACBOQABAjgCAgQgGBLgXA6QgJAXgMAUQggA4gyAQQgKADisDEIglArQiICagEAGQgRgpgJi5g");
	this.shape_33.setTransform(-3.4,-59);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(5,5,5,0.086)").s().p("AkDEmQgGhbgBh/IAAgCQgBhhAEhfQACheADhaQABgKAlgGQAEgBAKAiQAnAFB6hfIAqgiQBQhDAbgTQA0glAQAIQAnATAbBdQAHAZAGAaQAPBGABBQQABAkgCAgQgGBOgXA7QgKAYgLAUQghA6gzARQgKADiwDKIgmAsQiLCfgEAFQgRgqgHi+g");
	this.shape_34.setTransform(-3.8,-60.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(4,4,4,0.059)").s().p("AkIEuQgFhegBiCIAAgCQgBhjADhiIAEi+QAAgJAngHQAEAAAKAiQAnAGB9hjIArgiQBThGAbgTQA1gmARAIQAnATAbBgQAIAaAFAbQAPBIABBSQABAlgCAhQgGBQgYA9QgJAYgMAVQghA7g0ARQgKADi0DRIgnAsQiOCkgDAGQgRgrgHjEg");
	this.shape_35.setTransform(-4.2,-62.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(2,2,2,0.031)").s().p("AkNE3QgEhhgBiFIAAgCQgBhnAChkIADjDQAAgKAngHQAEAAALAkQAoAFCAhlIAsgjQBUhIAcgUQA2gnARAJQAoATAcBiQAHAbAGAbQAOBKABBVQABAmgDAiQgGBRgXA/QgJAZgMAWQgjA9g1ARQgIADi5DWIgoAuQiRCpgDAGQgQgsgHjJg");
	this.shape_36.setTransform(-4.6,-64.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.004)").s().p("AkWBRQgBjSADjGQAAgKAogHQAEgBALAlQAvAHCpiOQBXhJAcgVQA3goARAJQApAUAcBlQAcBiAAB4QABCCggBbQgmBohJAZQgIADi9DcQi9DbgCAIQgYhEgDmmg");
	this.shape_37.setTransform(-5,-65.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},58).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).wait(1));

	// Layer_5
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#424242").s().p("AgwAeQgTgMgBgSQABgRATgNQAVgNAbAAQAdAAATANQAVANgBARQABASgVAMQgTANgdABQgbgBgVgNg");
	this.shape_38.setTransform(-6.1,-7.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(65,65,65,0.98)").s().p("AABAwQgKAAgIgDIgSgFQgHgCgGgDIgFgDQgHgEgDgIQgGgJAAgJQgBgKAKgKQAFgGAIgGQALgGALgDIAEgCIADgBIAEgBIAEgBIALgCIAQgBQAKAAAJADQAHACAHAFIABABQARAMABARIABAFIAAAEIAAABIAAADIgBAEIgBADIgCADIgCADQgFAGgIAFQgIAGgJAEQgKAFgLACIgJABIgDAAg");
	this.shape_39.setTransform(-6.6,-9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(63,63,63,0.957)").s().p("AAFA1QgMAAgIgEIgUgEQgIgCgGgDIgFgDQgHgEgEgJQgGgLAAgJQgDgJANgLQAHgHAIgGQANgHAKgDIAEgCIACgCIAFgBIAEgBIAKgEIAPgCQAKgCAKACQAIADAGAGIACAAQAQANACAUIABAFIAAAEIABABIAAACIgBAFIgCADIgCAEIgCADQgFAHgHAGQgIAHgJAFQgJAHgLADIgKAAIgCAAg");
	this.shape_40.setTransform(-7,-10.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(62,62,62,0.937)").s().p("AAIA6QgNAAgIgEQgIgDgNgBQgJgCgHgDIgGgCQgGgFgEgKQgGgNgBgJQgEgIAPgNQAIgHAJgGQAOgIAKgDIAEgCIACgCIAFgCIAEgBIAJgFQAHgDAIgCQAJgDALACQAJACAGAHIABABQARAOABAVIABAGIABAEIABACIAAABQAAADgBACIgBAEIgDAEIgCADQgFAIgHAHQgHAIgJAGQgJAIgKAEIgKAAIgDAAg");
	this.shape_41.setTransform(-7.5,-11.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(61,61,61,0.918)").s().p("AALBAQgPAAgIgGQgHgCgQgBQgJgBgHgDIgHgDQgGgEgEgMQgHgPAAgIQgGgIASgNIASgOQAQgJAKgEIADgCIACgCIAFgCIAEgCQAEgEAEgCQAHgEAIgDQAJgEALABQAKABAHAJIABAAQARAQgBAYQABADACACIABAFIABABIAAACIgBAFIgBAEIgDAEIgCAEQgFAIgHAIQgHAJgIAHQgJAKgJAFIgLAAIgDAAg");
	this.shape_42.setTransform(-7.9,-13.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(59,59,59,0.898)").s().p("AAOBGQgQAAgIgHQgHgCgRgBQgKgBgIgDQgFAAgCgCQgGgEgFgOQgGgQgBgIQgHgIAVgOQAJgIAKgHQARgKAKgDIADgDIACgCIAFgDIAEgCIAHgHQAGgFAIgEQAJgFAMAAQAKABAHAJIACABQARARgBAaQAAADACADIACAEIABABIAAADIAAAFIgCAEIgDAEIgCAEQgFAKgHAIQgHAKgHAIQgJALgIAGIgMABIgDAAg");
	this.shape_43.setTransform(-8.3,-14.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(58,58,58,0.875)").s().p("AARBMQgRgBgIgHQgHgDgTAAQgLgBgIgCQgGAAgBgCQgHgEgEgQQgHgRgBgIQgIgHAXgQQAKgIALgHQATgLAJgEIADgDIABgDIAGgCIAEgCIAGgKQAGgFAIgFQAJgHAMAAQALABAHAKIACABQAQASgBAcQAAADADADIACAFIABABIABACQABADgBADIgCAEIgDAEIgDAFQgFAKgGAKIgOAUQgIAMgIAHIgNABIgDAAg");
	this.shape_44.setTransform(-8.8,-16.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(56,56,56,0.855)").s().p("AAUBSQgUgBgGgIQgIgDgUAAQgMAAgIgCQgHAAgBgCQgGgEgFgRQgHgTgBgIQgKgHAagQIAWgQQAVgMAJgFIACgDIABgCIAGgEQADAAABgCQACgGAEgEQAFgIAHgFQAKgIAMAAQAMgBAIAMIABABQARATgDAeQABAEADADIADAFIABAAIABADQABADgBADIgCAEIgEAFIgCAFQgFALgGAKIgOAWQgHAOgHAIIgOABIgDAAg");
	this.shape_45.setTransform(-9.2,-17.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(55,55,55,0.835)").s().p("AAXBXQgVAAgGgJQgHgDgXABQgMAAgJgCQgHAAgCgCQgGgEgFgTQgHgVgBgHQgLgGAcgSQAMgJAMgHIAfgSIACgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAIAGgEIADgCQACgHAEgFQAEgIAIgHQAJgJANgBQANgBAHANIACACQARATgDAhQAAAEADADIAEAEIABAAIABADQABAEgBADIgCAEIgDAFIgDAGIgLAXIgNAXQgHAQgGAJIgOAAIgEAAg");
	this.shape_46.setTransform(-9.6,-19.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(54,54,54,0.812)").s().p("AAaBdQgXAAgFgKQgHgEgZACQgNAAgJgCQgHAAgCgBQgGgEgFgUQgIgXgBgIQgMgEAfgUIAYgRIAhgSQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAIAFgEQADgCABgBQABgHAEgGQAEgJAHgIQAJgLAOgBQANgBAIANIACADQAQAUgDAjQAAAEAEADIAEAEQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIABADQACADgBAEIgCAEQgDADgBADIgCAFQgFANgGAMIgNAaQgGARgGAKIgPAAIgEAAg");
	this.shape_47.setTransform(-10.1,-20.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(52,52,52,0.792)").s().p("AAdBjQgYAAgGgLQgGgEgaACQgOABgJgCQgJAAgBgCQgGgDgGgWQgHgZgBgHQgPgEAigWQANgJANgHIAjgUIABgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAFgEQAEgBABgCQABgIADgHQADgJAIgJQAJgMAOgCQAOgBAIAOIACADQAQAVgEAlQAAAEAEADIAFAFQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAIACADQACAEgBAEIgDAEQgDADgBADIgCAGIgLAaIgMAcQgGATgFAKIgPABIgFAAg");
	this.shape_48.setTransform(-10.5,-22.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(51,51,51,0.773)").s().p("AAgBpQgagBgGgMQgGgDgcACQgOABgKgBQgJAAgBgCQgGgDgGgYIgJghQgPgDAkgXQAOgKANgIIAkgUQABgBAAAAQAAgBAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAFgEQAFgCAAgCQAAgIADgIQADgLAHgJQAJgOAQgCQAOgCAJAQIABACQARAXgFAnQAAAFAEADIAFAEQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACADQACAEgBAFIgDAEQgDADgBADIgCAHIgLAbIgMAeIgJAgIgQABIgFAAg");
	this.shape_49.setTransform(-10.9,-23.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(50,50,50,0.753)").s().p("AAjBuQgbAAgGgNQgFgEgeAEQgPABgKgCQgKABgBgCQgGgDgGgaIgJgiQgSgDAngYIAdgSIAlgWQACgCgBgDQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBIAFgEQAFgCAAgCQAAgKACgIQACgMAIgKQAJgPAQgCQAPgDAIARIACACQARAYgGAqQAAAEAFADIAGAFQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIACAEQACAEAAAFQgBACgCACQgEADgBADIgCAHIgLAeIgLAfIgIAjIgRAAIgFAAg");
	this.shape_50.setTransform(-11.4,-25.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(48,48,48,0.729)").s().p("AAmB0QgcAAgGgOQgFgEggAEQgQABgKgBQgKABgCgCQgGgDgGgcIgJgjQgTgCApgaIAfgTIAngWQAAgDAAgCQgBgDABgCIAFgFQAFgCAAgCQgBgKACgJQACgNAHgLQAJgRARgCQAPgDAJARIACADQAQAZgGAsQAAAEAGAEIAGAEQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIADADQACAFgBAEQAAADgDACQgDADgBAEIgDAHIgKAfIgLAiIgHAkIgRABIgGAAg");
	this.shape_51.setTransform(-11.8,-26.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(47,47,47,0.71)").s().p("AAqB6QgfAAgFgPQgGgEghAEQgQACgLgBQgLABgBgCQgGgDgHgdIgJglQgUgBAsgbIAfgUIAogXQABgDgBgDQgBgDAAgCIAHgFQAFgCAAgCQgCgLACgKQABgNAHgNQAJgSASgDQAQgDAJASIACAEQAQAagHAuQAAAEAGAEQADACAEACQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIADAEQACAFAAAFQgBACgDADQgDADgBADIgCAIIgLAgIgKAkIgGAoIgSAAIgFAAg");
	this.shape_52.setTransform(-12.3,-28.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(45,45,45,0.69)").s().p("AAsCAQgfgBgGgPQgGgFgiAGQgRABgLgBQgMACgBgCQgGgDgHgfIgJgmQgWgBAvgcIAhgUIAogZQACgDgBgDQgDgDABgCIAHgFQAFgDAAgCQgCgLABgLQABgOAHgOQAJgTASgEQARgDAJATIACAEQARAbgIAwQgBAFAHADIAHAEQABAAAAAAQAAgBABAAQAAAAAAAAQAAABAAAAIADADQADAFgBAFQAAADgEADQgDADgBAEIgDAIIgKAiIgJAmIgGApIgSABIgGAAg");
	this.shape_53.setTransform(-12.7,-30);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(44,44,44,0.667)").s().p("AAvCGQghAAgFgRQgGgFgkAGQgSACgLAAQgMABgBgCQgGgDgHggIgKgoQgXAAAxgdIAigVIArgaQABgDgCgDQgCgDABgCIAHgGQAFgDAAgCQgDgMABgLQABgQAHgOQAJgVASgEQARgEAKAUIACAEQAQAcgIAyQAAAGAHADIAHAEQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAIADAEQADAFAAAGQgBACgDAEQgEADgBADIgCAJIgKAjQgGAVgDATQgEAcAAARIgUAAIgGAAg");
	this.shape_54.setTransform(-13.1,-31.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(43,43,43,0.647)").s().p("AAzCMQgjgBgFgRQgFgFgmAGQgTADgMgBQgMACgCgCQgGgDgHgiIgKgpQgYABAzgfIAkgWQAlgVAHgFQABgEgCgDQgCgDABgDQABgCAGgEQAFgDAAgCQgDgNAAgMQAAgQAHgPQAJgWATgFQASgFAKAWIACAEQAQAdgJA1QAAAFAHADIAIAFQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAAAAAIAEAEQADAGgBAFQAAADgEAEQgEADgBAEIgCAJIgKAlIgIApQgDAeAAARIgUABIgGAAg");
	this.shape_55.setTransform(-13.6,-33);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(41,41,41,0.627)").s().p("AA1CSQgkgBgFgSQgFgFgnAHQgUACgMAAQgNACgCgDQgFgCgIgkIgKgqQgaABA2ggIAlgWQAmgWAHgGQACgDgCgEQgDgDABgDQABgCAGgEQAGgDgBgDQgDgNgBgNQAAgRAHgRQAJgXATgFQATgFAKAXIACAEQARAegKA3QgBAFAIAEIAJAEQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAABIAEAEQADAFgBAGQAAADgEAEQgEADgBAEIgCAJIgKAnIgIAsQgCAeAAATIgUABIgHAAg");
	this.shape_56.setTransform(-14,-34.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(40,40,40,0.604)").s().p("AA5CYQgmgBgFgTQgFgFgpAHQgVADgMAAQgOACgBgCQgGgCgHgmIgLgsQgbACA5ghIAmgXQAogXAHgGQABgEgCgDQgEgEABgCQABgDAHgEQAGgDgBgDQgEgOgBgNQgBgTAHgRQAJgZAUgFQAUgGAKAYIACAEQAQAggKA5QgBAFAJAEIAJAEQAAgBAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIAEAFQAEAFgBAGQAAADgEAEQgFAEgBAEIgCAJIgKApQgEAXgDAWQgCAhABATIgVABIgGAAg");
	this.shape_57.setTransform(-14.4,-36.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(38,38,38,0.584)").s().p("AA8CeQgngBgFgUQgFgGgrAIQgVADgNABQgOACgBgDQgGgCgIgnQgJgpgCgEQgdADA8gjIAogYQApgYAHgGQABgDgDgEQgDgEABgCQABgDAHgEQAGgEgBgDQgFgPgBgNQgBgUAHgSQAIgaAVgGQAUgGALAYIACAFQAQAhgLA7QAAAGAIADQAEADAGABQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAABIAEAEQAEAGAAAGQgBADgEAEQgEAFgBADIgDAKIgJAqQgFAYgCAYQgBAhACAVIgWABIgHAAg");
	this.shape_58.setTransform(-14.9,-37.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(37,37,37,0.565)").s().p("AA+CjQgogBgEgUQgFgGgtAJQgWADgNAAQgPACgBgCQgGgCgIgpQgJgqgCgFQgeAEA+gkIApgZQArgYAGgGQACgEgDgEQgEgEABgDQABgCAHgFQAGgDgBgEQgFgPgBgPQgCgUAHgTQAIgcAWgGQAUgGALAZIADAFQAQAigMA9QgBAGAKAEQAEACAGACQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAAAAAIAEAEQAEAGAAAHQAAADgFAEQgFAFgBADIgCALIgJArQgFAZgBAZQgBAjACAWIgWAAIgIAAg");
	this.shape_59.setTransform(-15.3,-39.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(36,36,36,0.545)").s().p("ABCCpQgqgBgFgVQgEgHgvAKQgWADgOABQgPACgCgCQgFgCgIgqQgKgtgCgEQggAFBBgmIArgZQAsgZAHgHQABgEgDgEQgEgEABgDQABgCAHgFQAGgEgBgDQgGgRgBgPQgDgVAHgUQAJgdAWgHQAVgHALAbIACAFQARAjgNA/QgBAGAKAEIALAEQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAAAAAIAFAFQAEAGgBAHQAAADgEAEQgFAFgBADIgDALIgJAtQgEAbgBAZQgBAlADAWIgXABIgHAAg");
	this.shape_60.setTransform(-15.7,-40.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(34,34,34,0.522)").s().p("ABECvQgrgBgEgWQgEgHgxAKQgXAEgOABQgQACgBgCQgGgBgIgtQgKgugCgEQghAGBDgnIAsgaQAugaAGgHQACgEgEgEQgEgEABgDQABgDAHgFQAHgEgCgEQgGgRgCgPQgDgXAHgVQAIgeAXgHQAWgIAMAcIACAGQAQAjgNBCQgBAGAKAEIALAEQABgBAAAAQABgBAAAAQABgBAAAAQAAAAAAABIAFAEQAEAHAAAHQgBADgEAFQgGAEgBAEIgCALQgFAYgEAXQgEAbgBAbQAAAmAEAYIgYAAIgIAAg");
	this.shape_61.setTransform(-16.1,-42.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(33,33,33,0.502)").s().p("ABIC1QgtgBgEgXQgEgHgzALQgYAEgOABQgRACgBgCQgFgBgJguQgJgwgDgEQgiAHBGgpIAtgbQAwgbAGgGQABgFgEgEQgEgEAAgDQABgDAIgFQAHgFgCgDQgHgSgCgQQgDgYAGgWQAJgfAXgIQAXgIAMAdIACAGQAQAlgOBDQgBAHALADIALAFQABgBAAgBQABgBAAAAQABAAAAAAQAAAAAAAAIAFAFQAFAGgBAIQAAADgFAFQgFAFgBAEIgCALQgGAYgDAYQgEAdgBAbQAAAoAFAYIgYABIgIAAg");
	this.shape_62.setTransform(-16.6,-43.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(32,32,32,0.482)").s().p("ABLC7QgvgBgDgYQgEgHg0ALQgZAEgPABQgRADgBgCQgGgCgIgvQgKgxgDgEQgkAHBJgqIAugbQAygcAGgHQABgEgEgFQgFgFABgDQABgCAIgGQAGgEgBgEQgHgSgDgSQgEgYAHgXQAIghAYgIQAXgIAMAdIADAGQAQAngPBFQgBAHALAEQAFACAHACQABgBAAgBQABAAAAgBQABAAAAAAQAAAAAAAAIAFAFQAFAHAAAHQAAAEgFAFQgGAFgBAEIgCAMIgJAxQgEAeAAAcQABApAFAaIgZABIgIAAg");
	this.shape_63.setTransform(-17,-45.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(30,30,30,0.459)").s().p("ABNDBQgvgBgEgZQgEgHg2ALQgZAFgPABQgSADgBgCQgFgBgJgyQgKgygDgEQglAIBLgrIAwgcQAzgdAFgHQACgFgFgEQgFgFABgDQABgDAIgGQAHgEgCgFQgIgSgDgSQgEgaAGgYQAJgiAYgJQAYgIANAfIACAGQAQAngPBIQgBAHALAEIANAEQAAgBABgBQABgBAAAAQAAAAABgBQAAAAAAABIAFAFQAFAHAAAHQAAAEgFAFQgGAFgBAFIgCAMQgGAagDAZQgEAeAAAeQACArAGAaIgaABIgJAAg");
	this.shape_64.setTransform(-17.4,-46.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(29,29,29,0.439)").s().p("ABRDHQgygBgDgaQgDgIg4AMQgbAGgPABQgSADgBgCQgGgBgJgzQgKg1gDgDQgnAJBOgtIAxgdQA1gdAGgHQABgFgFgFQgFgFABgDQAAgDAJgGQAHgFgCgEQgIgUgEgSQgFgbAHgZQAIgjAZgJQAZgKANAgIACAHQAQAogQBKQgBAHAMAEQAFADAIABQAAgBABgBQABAAAAgBQAAAAABAAQAAAAAAAAIAGAFQAFAHAAAIQgBAEgFAFQgGAFgBAGIgCALIgJA1QgDAgAAAeQACAsAHAcIgbABIgIAAg");
	this.shape_65.setTransform(-17.9,-48.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(28,28,28,0.42)").s().p("ABUDMQgzgBgDgbQgDgHg6ANQgbAFgQABQgTAEgBgCQgFgBgJg1QgLg2gDgDQgoAJBQgtIAzgeQA3gfAFgHQABgFgFgFQgFgFAAgEQABgDAIgGQAIgFgCgEQgJgUgEgUQgFgbAGgaQAJglAZgJQAagKAMAhIADAHQAQApgRBMQgBAHANAEIANAFQABgBAAgBQABgBAAAAQABgBAAAAQAAAAABAAIAFAGQAGAHgBAIQAAAEgFAFQgHAFgBAGIgCAMQgFAbgDAcQgDAgAAAfQACAuAIAdIgbAAIgJAAg");
	this.shape_66.setTransform(-18.3,-49.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(26,26,26,0.4)").s().p("ABXDSQg0gBgDgcQgDgIg8AOQgbAFgRACQgTAEgBgDQgFgBgKg2QgKg4gEgCQgpAKBTgvIA0gfQA4gfAFgHQABgGgFgFQgGgFABgEQABgDAIgGQAIgFgCgFQgKgVgEgUQgGgcAHgbQAIgmAagKQAagKANAiIADAHQAQAqgSBOQgBAIANAEIAOAEQABgBAAgBQABAAAAgBQABAAAAAAQAAAAABAAIAGAFQAFAHAAAJQAAAEgGAFQgGAGgBAFIgDANQgFAcgDAcQgDAhABAhQADAvAIAdIgcABIgJAAg");
	this.shape_67.setTransform(-18.8,-51.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(25,25,25,0.376)").s().p("ABaDYQg2gBgDgcQgDgJg9AOQgcAGgRACQgUAEgBgCQgFgBgKg4QgLg6gDgCQgrALBWgwIA1gfQA6ghAFgHQABgGgGgFQgGgGABgDQABgEAJgGQAHgFgCgFQgKgWgEgUQgHgeAHgbQAIgoAbgLQAagKAOAjIACAHQAQAsgSBQQgBAIANAEQAGACAJACQAAgBABgBQAAgBABAAQAAgBABAAQAAAAAAAAIAGAGQAHAHgBAJQAAAEgGAGQgGAFgBAGIgDANQgFAdgDAdQgDAiACAhQADAxAJAfIgdAAIgJAAg");
	this.shape_68.setTransform(-19.2,-52.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(23,23,23,0.357)").s().p("ABdDeQg3gBgDgeQgDgIg/APQgdAGgRACQgVAEAAgDQgFAAgKg6QgLg7gEgCQgsALBYgxIA3ggQA8giAEgHQABgGgGgFQgGgGAAgDQABgEAJgGQAIgGgCgFQgLgWgFgVQgHgfAHgdQAIgpAcgLQAbgKANAkIADAHQAQAtgTBSQgBAIAOAEQAGADAJABQADgEABABIAGAFQAGAIAAAJQAAAEgGAGQgHAFgBAGIgDANQgFAegDAeQgCAjACAjQADAyAKAfIgdABIgKAAg");
	this.shape_69.setTransform(-19.6,-54.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(22,22,22,0.337)").s().p("ABgDkQg4gCgDgeQgCgIhBAPQgeAGgSACQgVAFgBgDQgFAAgKg8QgLg9gEgBQgtAMBagzIA5ggQA9gjAEgIQABgFgGgGQgGgGAAgEQABgDAJgHQAIgGgCgFQgLgXgGgWQgHgfAGgeQAIgqAdgLQAcgMANAlIADAIQAQAugUBVQgBAHAOAFQAHACAJACQADgFABABIAGAFQAHAIgBAJQAAAFgGAGQgHAFgBAHIgCANQgGAfgCAeQgCAkACAkQAEA0AKAgIgeABIgKAAg");
	this.shape_70.setTransform(-20.1,-55.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(21,21,21,0.314)").s().p("ABjDqQg6gBgCggQgDgIhDAPQgeAHgSADQgWAEAAgDQgGAAgKg9QgLg/gEgBQgvANBdg0IA6ghQA/gkAEgIQABgGgHgFQgGgGAAgEQABgEAJgHQAJgGgDgFQgMgYgFgWQgIghAGgeQAIgsAdgMQAdgMAOAmIACAIQAQAvgUBXQgBAIAOAFQAHACAJACQADgGABABIAHAGQAHAIAAAKQgBAEgGAGQgHAGgBAGIgCAOQgGAggCAfQgCAlACAkQAFA2ALAhIgfABIgKAAg");
	this.shape_71.setTransform(-20.5,-57.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(19,19,19,0.294)").s().p("ABmDwQg7gCgDggQgCgJhEARQggAHgSACQgWAFgBgDQgFAAgKg/QgMhAgEgBQgwANBgg1IA7giQBAgkAEgIQABgGgHgGQgHgGABgEQAAgEAKgHQAJgGgDgGQgMgYgGgXQgJgiAHgfQAIgtAdgNQAdgMAOAnIADAIQAQAwgVBZQgBAJAPAEIAQAEQAEgFABABIAHAGQAHAIgBAJQAAAFgGAGQgIAGgBAHIgCAOQgGAggCAgQgCAmADAmQAFA3AMAiIggABIgKAAg");
	this.shape_72.setTransform(-20.9,-58.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(18,18,18,0.275)").s().p("ABpD1Qg9gBgCghQgCgJhGARQggAHgTADQgXAEAAgCQgFAAgLhBQgMhBgEgCQgyAPBjg3IA8giQBDgmADgIQABgGgHgGQgHgGAAgEQABgEAKgIQAJgGgDgFQgNgZgGgYQgJgjAGggQAIgvAegNQAegMAOAoIADAIQAQAxgWBcQgBAIAPAEQAHADAKABQAEgFABABIAHAGQAHAIAAAKQAAAFgHAGQgIAGgBAHIgCAOQgFAhgCAhQgCAnADAnQAFA4ANAkIggAAIgLAAg");
	this.shape_73.setTransform(-21.4,-60.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(17,17,17,0.255)").s().p("ABsD7Qg+gBgCgiQgCgKhIASQghAIgTACQgXAFgBgCQgFAAgLhDQgMhDgEgBQgzAPBlg4IA+gjQBEgmADgIQABgHgHgGQgIgGABgFQAAgDAKgIQAJgGgCgGQgOgagHgZQgJgjAGghQAIgwAegNQAfgOAPAqIADAIQAPAygWBeQgCAIARAFQAHACAKACQADgGACABIAHAGQAHAJAAAKQAAAEgHAHQgIAGgBAHIgCAPQgFAigCAiQgCAnAEAoQAFA6ANAkIggABIgLAAg");
	this.shape_74.setTransform(-21.8,-61.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(15,15,15,0.231)").s().p("ABvEBQhAgBgBgjQgCgKhKATQghAHgUADQgYAGAAgDQgFAAgMhEQgMhFgEAAQg1APBog5IA/gkQBGgnADgIQABgHgHgGQgIgHAAgEQABgEAKgIQAJgHgDgFQgOgbgHgZQgKgkAGgjQAIgxAfgOQAggNAOAqIADAJQAQAzgXBgQgCAIARAFQAHACALACQAEgGABABIAHAGQAIAJAAAKQAAAFgIAGQgHAHgBAHIgDAPQgFAjgCAiQgBApAEApQAGA7ANAlIghABIgLAAg");
	this.shape_75.setTransform(-22.2,-63.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(14,14,14,0.212)").s().p("AByEHQhBgCgBgjQgCgKhMATIg2ALQgYAFgBgCQgFAAgLhGQgMhGgFgBQg2ARBrg7IBAgkQBHgoADgJQABgHgIgGQgIgHABgEQAAgEALgIQAJgHgDgGQgPgbgHgaQgLgmAGgjQAIgzAggOQAggOAPArIADAJQAQA1gYBiQgBAJARAEQAHADALABQAEgGABABIAIAGQAHAKAAAKQAAAFgHAGQgIAHgBAHIgDAQQgFAjgCAjQgBAqAFAqQAGA9APAmIgiABIgMAAg");
	this.shape_76.setTransform(-22.7,-64.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(12,12,12,0.192)").s().p("AB1ENQhDgBgBglQgBgKhOATQgjAJgUADQgZAGgBgDQgEAAgMhHQgMhIgFAAQg4ARBtg8IBCglQBJgpADgJQAAgHgHgGQgIgHAAgFQAAgEALgIQAKgHgDgGQgQgcgIgbQgLgmAGglQAIg0AhgOQAggPAQAtIADAJQAPA1gYBkQgCAJASAFQAHADAMABQADgGACABIAIAGQAIAKgBAKQAAAFgHAHQgIAHgBAHIgDAQQgFAkgCAkQgBArAFArQAHA+APAnIgiABIgMAAg");
	this.shape_77.setTransform(-23.1,-66.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(11,11,11,0.169)").s().p("AB4ETQhFgCgBglQgBgKhPAUQgkAIgUAEQgaAFAAgCQgFAAgMhJQgNhKgEAAQg5ASBvg9IBDgmQBLgqACgIQABgIgIgGQgIgHAAgFQAAgEALgJQAKgHgDgGQgQgdgIgbQgMgnAGgmQAIg1AhgPQAhgPAQAtIADAKQAPA2gYBnQgCAJASAEIATAFQAEgHABABIAJAHQAIAJAAALQAAAFgIAHQgJAHgBAHIgCARQgFAkgCAlQgBAsAGAsQAHBAAQAoIgjABIgMAAg");
	this.shape_78.setTransform(-23.5,-67.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(10,10,10,0.149)").s().p("AB6EZQhGgCgBgmQAAgLhSAVQgkAJgVADQgaAGgBgDQgFABgMhLQgMhLgFAAQg7ATBzg/IBEgmQBMgrADgJQAAgHgIgHQgJgIABgEQAAgFALgIQAKgIgDgGQgRgdgIgcQgMgoAGgnQAHg3AigPQAigPAQAuIADAKQAPA3gZBpQgCAJASAFQAIACAMACQAEgHABABIAJAHQAIAKAAALQAAAEgIAIQgIAHgBAHIgDARQgFAmgBAmQgBAsAFAtQAIBCARApIgkABIgMAAg");
	this.shape_79.setTransform(-23.8,-69.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(8,8,8,0.129)").s().p("AB8EfQhHgCgBgnQAAgLhTAVQgmAKgVAEQgbAGAAgDQgFAAgMhMQgNhNgFABQg8ATB1hAIBGgnQBOgsACgJQAAgHgIgIQgJgHAAgFQAAgEAMgJQAKgIgDgGQgRgegJgdQgNgpAGgnQAIg5AigPQAjgQAQAvIADAKQAPA5gaBrQgCAJATAFQAIACAMACQAEgHACABIAIAHQAJAKAAALQAAAFgIAHQgJAIgBAHIgCARQgGAngBAmQAAAuAFAuQAJBDARAqIgkABIgNAAg");
	this.shape_80.setTransform(-24.2,-70.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(7,7,7,0.106)").s().p("AB+ElQhIgCgBgoQAAgLhVAVQgmAKgWAEQgbAGAAgDQgFABgNhOQgNhPgFABQg9AUB3hBIBIgnQBPgtACgKQABgHgJgHQgJgIAAgFQAAgFAMgJQAKgHgEgHQgRgfgJgdQgNgqAFgoQAIg6AjgQQAjgRARAxIADAKQAPA6gbBtQgCAJATAFQAJADAMABQAEgHACABIAJAHQAJAKAAAMQgBAFgIAHQgJAIgBAHIgCASQgGAnAAAoQgBAuAGAvQAJBFASArIglABIgNAAg");
	this.shape_81.setTransform(-24.5,-72.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(5,5,5,0.086)").s().p("ACBEqQhKgBAAgpQgBgMhWAXIg9AOQgcAGAAgDQgFABgNhQQgNhQgFABQg/AVB6hDIBJgoQBRguACgJQAAgIgJgHQgJgIAAgFQAAgFAMgJQALgIgEgHQgSgfgKgeQgNgrAFgpQAIg7AjgRQAkgRARAxIADALQAPA7gbBvQgCAKATAFQAJACANACQAEgIABABIAKAHQAJALAAALQAAAFgJAIQgJAIgBAIIgCASQgGAoAAAoQgBAvAHAwQAJBGATAsIgmABIgNAAg");
	this.shape_82.setTransform(-24.9,-73.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(4,4,4,0.067)").s().p("ACDEwQhLgCAAgqQgBgLhYAXQgnAKgXAEQgdAHAAgDQgEABgNhRQgOhSgFABQhAAVB9hDIBKgpQBTgvABgKQAAgIgJgHQgKgIAAgFQABgFAMgJQALgIgEgHQgTgggKgfQgOgsAGgrQAHg8AkgRQAlgRARAyIADALQAPA8gcBxQgCAKAUAFQAJADANABQAEgHACABIAJAHQAJAKAAAMQAAAFgIAIQgKAIgBAIIgCASQgGApAAApQAAAxAHAxQAKBHATAtIgnABIgNAAg");
	this.shape_83.setTransform(-25.3,-75.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(3,3,3,0.047)").s().p("ACFE2QhNgCAAgqQABgMhbAXIg/AQQgdAGAAgDQgFABgNhTQgNhTgGABQhBAWB/hFIBLgpQBVgwABgKQAAgIgJgIQgKgIAAgFQAAgFANgJQALgJgEgHQgUgggKggQgPgtAGgrQAIg+AkgRQAmgSARAzIADALQAPA9gdB0QgCAKAVAFQAJACANACQAEgIACABIAJAIQAKAKAAAMQAAAGgJAIQgJAIgBAIIgDASQgFAqgBAqQABAxAHAyQAKBJAUAuIgnABIgOAAg");
	this.shape_84.setTransform(-25.6,-77);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(1,1,1,0.024)").s().p("ACIE8QhPgCAAgsQABgLhdAYIg/APQgeAHAAgDQgFABgNhUQgOhWgFACQhEAXCChGIBNgrQBWgwABgKQABgJgKgHQgKgJAAgFQAAgFAMgKQAMgIgFgHQgUgigKggQgPguAFgsQAIg/AlgSQAmgSARA0IAEALQAPA+gdB2QgDAKAVAFQAJADAOABQAFgHABABIAKAHQAKALAAAMQAAAFgJAJQgKAIgBAIIgDATQgFAqAAArQAAAzAIAzQAKBKAVAvIgoABIgNAAg");
	this.shape_85.setTransform(-26,-78.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.004)").s().p("ACKFCQhQgCAAgtQABgMheAZQhgAZAAgFQgEABgOhWQgOhXgFACQhFAXCFhHQCmhaAAgNQABgIgKgIQgLgJAAgFQAAgFANgKQAMgJgFgHQgyhTAJhMQAHhBAmgSQAngTARA2QAVA/ggCDQgEAPAuAFQAFgIABABIAKAHQAKALAAANQAAAFgJAJQgKAIgBAIIgCAUQgMBeAPBgQALBMAVAwIgxABIgFAAg");
	this.shape_86.setTransform(-26.3,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38}]},42).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).wait(6));

	// Layer_4
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#424242").s().p("AhGAkQgdgPAAgVQAAgVAdgPQAegPAoAAQApAAAeAPQAdAPAAAVQAAAVgdAPQgeAPgpABQgogBgegPg");
	this.shape_87.setTransform(8.3,-6.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(66,66,66,0.976)").s().p("AgSA0QgSgBgPgFQgIgCgIgEIgBgBQgKgFgGgGQgNgLgBgOQgBgWAegPIAGgDIAHgDIANgEIAEgBIABAAIATgEIATgDQAXAAASACQALACAKAEIAHAEIALAHQASANABASQABASgUAOIgIAFIgIAFIgLAEIgJADQgRAFgWAAIgLABIgMgBg");
	this.shape_88.setTransform(8,-7.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(66,66,66,0.953)").s().p("AgwAxQgJgCgIgEIgBgBQgJgEgIgGQgNgMgBgOQgDgXAggPIAGgDIAHgEIALgEIAFgBIABAAIATgEIATgEQAWgCASABQALAAAJAEQAEABAEAEIALAHQASAOABATQACATgTANIgHAGIgIAFIgLAEIgJADQgPAGgWACIgXABQgSgCgQgEg");
	this.shape_89.setTransform(7.8,-8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(66,66,66,0.933)").s().p("AgsA1QgKgCgIgDIgBgBQgKgFgIgHQgOgLgCgPQgEgXAhgQIAHgDQAEgBADgDQAEgDAGgBIAEgCIABAAIAUgEIATgGIAngDQAKgBAKAEQADABAEAEQAGADAFAFQASAOADAUIAAAAQACAUgSANIgHAGIgIAGIgKAEIgKAEQgNAGgUACQgLACgNAAQgRAAgRgEg");
	this.shape_90.setTransform(7.5,-8.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(66,66,66,0.91)").s().p("AgpA5QgKgBgIgEIgCgBQgJgEgJgHQgPgMgCgPQgFgZAigPIAHgDQAEgBACgDQAEgDAGgCIAEgCIAAAAIAVgFIATgGIAmgHQAKgCAJAEIAIAFIALAJQARAOAEAWQADAVgRANIgGAGIgIAGIgLAFIgJAEQgLAHgUACQgKADgNABQgSAAgSgEg");
	this.shape_91.setTransform(7.3,-9.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(66,66,66,0.886)").s().p("AglA9QgLgBgIgDIgCgBQgJgFgKgHQgPgMgDgPQgHgaAkgPIAHgDQAFgCABgCQAEgEAFgCIADgCIABAAIAVgGIATgHIAlgJQAKgEAJAEQADABAFAFIALAKQARAOAEAWQAFAXgRANIgFAGIgHAGIgMAGIgJAEQgJAHgTAEQgKADgOABQgSAAgSgDg");
	this.shape_92.setTransform(7,-10.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(66,66,66,0.863)").s().p("AgiBBQgMgBgIgDIgCgBQgKgEgJgIQgQgMgDgQQgJgaAlgQIAIgDQAEgBABgDQADgEAFgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIABAAIAVgGQALgDAJgFQAUgGAQgGQAJgFAJAEQADABAEAFIAMAKQARAPAFAXQAGAYgRANIgFAGQgCADgEAEIgMAGIgJAEQgHAIgSAEQgJAEgQACIgFABQgPAAgQgDg");
	this.shape_93.setTransform(6.8,-11.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(66,66,66,0.839)").s().p("AgfBGQgMgBgJgDIgBgBQgKgEgLgIQgQgNgEgPQgJgcAmgPIAHgDQAFgCABgDQACgFAFgCQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIABAAIAVgHQALgDAJgHQAUgGAPgIQAJgGAIADQADABAFAGQAGAFAFAGQARAPAGAYIAAAAQAHAZgQANIgEAGIgGAIIgMAGIgJAEQgFAJgRAFQgJAEgQADIgMAAIgagBg");
	this.shape_94.setTransform(6.5,-11.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(66,66,66,0.82)").s().p("AgbBKQgNAAgJgEIgBAAQgKgEgLgJQgRgNgEgQQgMgcAogQIAIgDQAFgBAAgEQABgFAFgBQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAIAXgHQAKgEAJgIQAUgHAOgKQAJgHAIAEQADAAAFAHQAGAFAFAGQAQAPAIAaQAHAagPAMIgDAHQgCAEgEAEIgMAGIgJAFQgDAKgRAFQgIAFgRADIgQABIgWgBg");
	this.shape_95.setTransform(6.2,-12.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(66,66,66,0.796)").s().p("AgYBOQgNAAgJgDIgCgBQgKgEgLgJQgSgNgFgQQgMgeApgPIAIgDQAFgCAAgEQAAgFAFgCIACgDIABAAIAXgHQAKgEAJgJQATgIAOgMQAIgIAIADQAEABAEAHQAGAFAFAHQARAPAIAbIAAAAQAIAbgOAMIgDAHQgBAEgEAEIgMAHIgJAGQgBAKgQAGQgIAFgRAEIgWABIgSAAg");
	this.shape_96.setTransform(6,-13.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(66,66,66,0.773)").s().p("AgVBSQgOAAgJgDIgCgBQgKgDgMgJQgSgOgFgQQgOgfAqgPIAIgDQAGgCgBgEQAAgGAEgCQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAgBIABAAIAXgIQALgEAJgKQASgJANgNQAIgKAIADQADABAFAIQAGAFAFAHQAQAQAJAbIAAABQAKAcgNAMIgDAHQgBAEgDAFIgNAHIgJAFQABALgPAHQgHAGgSAFIgaABIgPAAg");
	this.shape_97.setTransform(5.8,-14.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(66,66,66,0.749)").s().p("AgRBWQgPABgJgDIgCgBQgKgEgNgJQgTgOgGgQQgPggArgPIAJgDQAGgCgBgEQgBgGAEgCQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAAAIAYgJQALgEAJgKQASgLAMgPQAIgKAIADQADAAAFAJQAGAFAFAIQAQAPAJAdIABAAQAKAegNAMIgBAHQgBAEgDAFIgNAIQgIADgBACQADAMgPAHQgGAHgTAFQgQACgSAAIgHAAg");
	this.shape_98.setTransform(5.5,-15.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(66,66,66,0.725)").s().p("AgnBYIgCAAQgKgEgNgKQgTgOgHgQQgRgiAtgPIAJgDQAGgBgCgFQgBgGAEgCQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAgBgBIAAAAIABAAIAYgJQALgFAJgLQARgMAMgQQAHgMAIADQADAAAFAJQAGAGAFAIQAQAPAKAfIABAAQALAegMAMQABAEgCADQAAAFgDAFQgEADgKAFQgIAEgBACQAGAMgOAIQgGAIgUAFQgUAEgWgBIgFAAQgLAAgJgCg");
	this.shape_99.setTransform(5.3,-15.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(66,66,66,0.706)").s().p("AgkBcIgCAAQgKgEgPgKQgTgOgHgRQgSgiAugPIAJgDQAGgCgCgFQgCgGAEgDQAAAAAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAIAAgBQAMgEAMgFQAMgFAJgMQARgNALgSQAHgNAHACQADABAGAJQAFAGAGAJQAPAPAMAgQAMAggLALIAAAHQAAAFgEAGIgNAIQgJAEAAADQAHAMgNAJQgFAIgUAGQgVAEgXAAIgFAAQgMAAgIgCg");
	this.shape_100.setTransform(5,-16.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(66,66,66,0.682)").s().p("AgiBhIgCgBQgKgEgPgKQgUgOgHgSQgUgjAvgPIAKgDQAGgCgCgFQgDgHADgCQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAAAIAZgKQAMgGAJgNQAQgNALgUQAGgOAIACQADAAAFAKIALAPQAPAQANAhIAAAAQANAhgKALQABAEgBAEQAAAFgDAFQgDAEgKAFQgJAFAAACQAJANgMAKQgFAIgVAHQgUAEgYABIgKAAQgKAAgHgBg");
	this.shape_101.setTransform(4.8,-17.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(66,66,66,0.659)").s().p("AgfBlIgCgBQgKgDgQgKQgVgPgIgSQgVgkAxgQIAKgCQAGgCgDgFQgDgIADgCQAAAAABgBQAAAAAAAAQAAgBAAgBQgBAAAAgBIABAAIAZgLQAMgGAJgOQAQgOAKgWQAGgPAHACQADAAAGALIALAQQAOAQAOAhIAAABQAOAhgJAMQABADAAAEQAAAGgDAFQgDAEgLAGQgJAFAAACQAMAOgMAKQgEAJgWAIQgUAEgZABIgNAAIgOgBg");
	this.shape_102.setTransform(4.5,-18.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(66,66,66,0.635)").s().p("AgdBpIgCAAQgKgEgRgLQgVgPgIgRQgXglAygRIAKgDQAHgBgEgFQgEgIADgCQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIAAgBIABAAQANgFANgGQALgGAJgPQAQgPAJgYQAGgQAHACQADAAAGALQAFAHAGAJQAOARAOAiIABABQAOAjgIALIACAIQAAAFgCAGQgEAEgLAGQgJAFAAACQAOAPgLAKQgEAKgWAIQgVAFgZACIgOAAIgOgBg");
	this.shape_103.setTransform(4.3,-18.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(66,66,66,0.612)").s().p("AgaBuIgDgBQgKgDgRgLQgWgPgJgSQgXgmAzgRIAKgDQAHgCgEgEQgFgJADgCQAAgBABAAQAAAAAAgBQAAAAgBgBQAAgBAAgBIAAAAIAAAAQANgFANgHQAMgGAJgQQAPgQAJgZQAGgSAGACQADAAAGAMQAGAHAFAKQAOAQAPAkIABAAQAQAkgIALQACAEAAAEQABAGgCAGQgEAEgLAGQgKAGABACQAQAPgKAMQgEAKgWAJQgWAFgbACIgPABIgMgBg");
	this.shape_104.setTransform(4.1,-19.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(66,66,66,0.592)").s().p("AgZByIgCgBQgLgDgRgLQgWgQgKgSQgZgnA0gRIALgDQAHgBgEgFQgGgJADgCQABgBgCgEIAAgBQAOgFANgHQAMgGAJgRQAPgRAIgbQAFgTAGACQADgBAGANQAGAHAGAKQAOARAQAlIAAAAQARAmgHAKQACAEAAAFQACAGgDAGQgDAEgLAGQgLAGACADQARAPgJAMQgDAMgXAJQgWAFgcADIgPABIgNgBg");
	this.shape_105.setTransform(3.9,-20.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(66,66,66,0.569)").s().p("AgXB2IgDgBQgKgCgSgMQgXgQgKgTQgbgoA2gQIALgDQAHgCgFgGQgGgIADgDQABgBgCgEIAAAAQAOgFANgIQAMgGAJgSQAOgTAIgcQAFgUAGABQADAAAGANIALASQAOARARAmIAAAAQASAngGALQACAEABAEQACAGgDAHQgDAEgMAHQgKAFABADQAUAQgIANQgDAMgYAKQgWAGgcACIgSACIgLgBg");
	this.shape_106.setTransform(3.8,-21.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(66,66,66,0.545)").s().p("AgWB7IgCgBQgLgDgSgMQgYgQgKgTQgcgpA3gQIAKgDQAIgCgFgHQgHgIACgDQACgBgDgEIAAAAIAAAAQAOgGAOgHQAMgHAIgTQAPgTAHgfQAEgVAGABQADAAAGAOIAMASQANASASAnIAAAAQATAogGAKQAEAEAAAFQADAGgDAHQgDAEgMAHQgLAGACADQAWARgIANQgCANgYAKQgWAHgeADIgUABIgKAAg");
	this.shape_107.setTransform(3.6,-22);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(66,66,66,0.522)").s().p("AgUB/IgCgBQgLgCgTgNQgYgQgLgTQgegqA5gRIALgDQAIgCgGgHQgIgIADgDQABgBgDgEIAAgBIAAAAQAOgFAOgIQANgIAIgTQAOgVAGggQAEgWAGABQADAAAGAOQAGAIAGALQANASASAoIABAAQATApgEAKQADAEABAFQADAGgCAIQgDAEgNAHQgLAGACADQAYASgHAOQgBANgaALQgWAHgeADQgNACgJAAIgJAAg");
	this.shape_108.setTransform(3.4,-22.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(66,66,66,0.502)").s().p("AgSCDIgDgBQgLgCgUgNQgYgRgMgTQgfgrA6gRIAMgDQAHgBgFgHQgJgJACgDQABgBgDgFIAAAAIAAAAQAPgGAOgIQANgIAHgUQAOgWAGghQADgYAGABQADgBAHAPQAFAIAGAMQANASAUApIAAAAQAUAqgEAKQAFAFAAAEQADAHgCAHQgCAFgOAHQgLAHADADQAZASgFAPQgCANgZAMQgXAHgfAEQgNACgJAAIgJAAg");
	this.shape_109.setTransform(3.3,-23.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(66,66,66,0.478)").s().p("AgQCHIgDAAQgLgDgUgNQgZgRgNgTQgggsA7gRIAMgDQAIgCgHgHQgJgKACgCQABgBgDgFIAAgBQAPgFAOgJQANgIAIgVQAMgWAGgkQADgZAGABQACgBAHAQQAGAIAFAMQANASAVAqIAAABQAVArgDAKQAFAEABAFQAEAHgDAHQgCAFgOAIQgMAGAEADQAbATgFAQQgBAOgaAMQgXAIgfAEQgPACgJAAIgIAAg");
	this.shape_110.setTransform(3.1,-24.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(66,66,66,0.455)").s().p("AgPCLIgDAAQgKgCgWgOQgZgRgNgUQgigsA9gSIAMgDQAIgBgHgIQgKgLACgBQABgBgEgFIAAgBQAPgGAPgJQANgIAIgXQAMgXAFglQADgaAFABQADgBAHAQQAFAJAGAMQAMASAWArIAAABQAWAsgCAKQAFAEACAFQADAHgCAIQgCAFgOAIQgMAHADADQAeATgFAQQAAAPgbANQgXAIggAFQgQACgJAAIgIAAg");
	this.shape_111.setTransform(3,-25.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(66,66,66,0.431)").s().p("AgOCQIgDgBQgLgCgWgOQgagRgNgUQgjguA9gRIAMgDQAJgCgIgIQgKgLACgDQABAAgEgFIgBgBIABAAQAPgGAPgJQANgJAHgXQAMgYAFgnQACgcAFABQADgBAHARQAGAJAFANQANASAWAsIAAABQAXAtgBAKQAFAEACAGQAEAHgCAIQgCAEgPAJQgMAHAEADQAgAUgEARQAAAQgbANQgXAJgiAFQgRADgLAAIgFAAg");
	this.shape_112.setTransform(2.9,-25.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(66,66,66,0.408)").s().p("AgOCUIgDgBQgLgCgWgOQgbgSgOgUQgkgvA/gRIAMgDQAJgCgJgIQgKgLABgDQABgBgEgEIgBgBIABAAQAPgGAPgKQAOgJAHgYQAMgZADgpQACgdAFABQADgBAHARIALAXQAMASAXAuIABAAQAYAugBAKQAGAFACAFQAEAHgBAIQgCAFgQAJQgMAHAEADQAiAVgDASQABAQgcAOQgYAJgiAFQgSAEgLAAIgFAAg");
	this.shape_113.setTransform(2.9,-26.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(66,66,66,0.388)").s().p("AgOCYIgDgBQgKgCgYgOQgbgSgOgVQgmgvBAgSIANgDQAJgBgJgJQgLgLABgDQAAgCgEgEIAAgBQAQgGAPgKQAOgJAHgZQAMgaADgrQABgeAEABQADgBAIASIALAWQAMATAYAvIAAAAQAZAwAAAJQAGAFADAFQAEAHgCAJQgBAFgQAJQgNAHAFAEQAjAVgCASQACARgdAPQgYAJgjAGQgTAEgLAAIgFAAg");
	this.shape_114.setTransform(2.9,-27.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(66,66,66,0.365)").s().p("AgOCcIgDAAQgLgCgXgPQgcgSgPgVQgngwBBgSIANgDQAJgCgJgIQgMgMABgDQABgBgFgFIAAgBQAQgGAPgLQAOgJAHgaQAMgbADgsQABggADABQADgBAHASQAGAKAGAOQALATAZAvIABABQAaAwAAAKQAHAEACAGQAGAHgCAJQgCAFgQAKQgNAHAFAEQAmAWgCATQACARgdAPQgYAKgkAGQgUAEgLAAIgFAAg");
	this.shape_115.setTransform(2.9,-28.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(66,66,66,0.341)").s().p("AgNCgIgDAAQgLgCgZgPQgcgSgPgVQgpgyBDgRIANgDQAJgCgJgJQgNgMABgEQAAgBgEgGIgBAAIAAAAQARgGAPgLQAOgJAHgbQALgcADguQABghAEAAQABgBAIATQAFAKAGAOQAMAUAZAwIABABQAbAyABAJQAHAFADAFQAFAIgBAJQgCAFgQAKQgOAHAGAEQAnAXAAATQACASgeAQQgYAKgkAHQgVAFgLAAIgFgBg");
	this.shape_116.setTransform(2.8,-28.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(66,66,66,0.318)").s().p("AgNCkIgDAAQgLgBgZgQQgdgTgQgVQgqgyBEgSIANgDQAKgCgKgJQgOgNABgDQABgBgFgGIgBgBIAAAAQARgGAQgLQAOgKAGgcQALgdACgvQABgiADAAQADgBAHAUQAFAJAGAPIAmBFIAAABQAcAzADAJQAHAFADAFQAGAIgCAKQgBAFgRAKQgOAIAGADQAqAYAAAUQADATgfAQQgZALglAHQgVAFgLAAIgFgBg");
	this.shape_117.setTransform(2.8,-29.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(66,66,66,0.294)").s().p("AgNCpIgDAAQgLgCgagQQgdgTgRgVQgrgzBFgSIAOgDQAKgCgLgJQgOgOAAgDQABgBgGgGIAAgBIAAAAQARgGAQgMQAOgKAHgdQAKgdABgyQABgjADAAQADgBAHAUQAFAKAGAPIAmBHIABABQAdA0ADAIQAHAFAEAGQAGAIgBAKQgCAFgRAKQgOAJAGADQAsAYABAVQADATgfARQgZAMgmAHQgXAFgMAAIgDAAg");
	this.shape_118.setTransform(2.8,-30.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(66,66,66,0.275)").s().p("AgMCtIgEAAQgLgBgagRQgegTgRgWQgtg0BHgSIAOgDQAKgCgLgJQgPgOAAgDIgFgIIgBgBQARgGARgMQAOgKAHgeQAKgfAAgzQAAgkAEAAQACgCAIAVQAFALAGAPIAnBIIAAABIAiA9QAHAFAEAGQAHAJgCAKQgBAFgRAKQgPAJAHAEQAtAYACAWQAEAUggARQgZAMgmAIQgZAFgMAAIgCAAg");
	this.shape_119.setTransform(2.8,-31.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(66,66,66,0.251)").s().p("AgMCxIgEAAQgLgBgbgRQgegTgSgWQgug1BIgSIAOgDQAKgCgLgKQgQgOAAgDQABgCgGgGIgBgBQASgHAQgMQAPgKAGgfQAKggAAg1QgBglAEAAQACgCAIAWQAGAKAFAQQAKAUAdA1IABABIAjA/QAIAFAEAGQAHAIgBAKQgBAGgSALQgPAIAHAEQAwAZACAWQAFAVghASQgZAMgnAIQgZAGgNAAIgCAAg");
	this.shape_120.setTransform(2.8,-31.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(66,66,66,0.227)").s().p("AgQC2QgLgCgbgRQgfgTgTgWQgvg3BJgSIAOgDQALgCgLgKQgRgOAAgDQAAgCgGgGIgBgBIAAAAQASgIARgLQAPgLAFggQAKghgBg2QgBgnAEAAQACgCAJAWIAKAbIAoBLIABAAIAlBAQAIAFAEAGQAIAJgBAKQgCAGgRALQgQAJAIAEQAxAaAEAXQAEAVghASQgaANgoAJQgbAGgNAAIgEAAg");
	this.shape_121.setTransform(2.8,-32.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(66,66,66,0.204)").s().p("AgPC6QgLgBgdgSQgfgTgTgXQgxg3BLgSIAOgDQALgCgMgKQgRgPgBgEQABgBgHgHIgBgBIABAAQARgIARgMQAPgLAGggQAJgigBg4QgBgoADgBQACgBAJAWIALAcQAJAUAfA4IABAAQAgA6AGAHQAJAFAFAGQAHAJgBALQgBAGgSALQgQAJAIAEQA0AbAEAXQAFAWgiATQgaANgoAJQgcAHgNAAIgEAAg");
	this.shape_122.setTransform(2.7,-33.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(66,66,66,0.18)").s().p("AgPC+QgLgBgdgSQgggUgUgWQgyg5BMgSIAPgDQALgCgNgKQgSgPAAgEIgHgIIgBgCIABAAQASgHARgNQAPgLAGghQAIgjgCg6QgBgpADgBQACgCAJAXIALAdQAJAUAfA5IABABQAhA6AIAHQAJAGAFAGQAHAJAAALQgBAFgTAMQgQAJAIAFQA2AbAFAYQAGAWgjAUQgaAOgpAJQgdAHgNAAIgEAAg");
	this.shape_123.setTransform(2.7,-34.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(66,66,66,0.161)").s().p("AgPDCQgLgBgdgSQghgUgUgXQg0g5BOgTIAPgDQALgCgOgKQgSgQgBgDQAAgCgGgHIgBgBQASgIASgNQAPgLAGgjQAIgkgDg7QgCgqADgBQACgCAJAYIALAcQAKAVAgA6IAAABQAiA7AIAHQAKAGAFAGQAIAJgBALQAAAGgUAMQgQAKAJAEQA3AcAGAZQAHAXgkAUQgaAOgqAKQgdAHgOAAIgEAAg");
	this.shape_124.setTransform(2.7,-35);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(66,66,66,0.137)").s().p("AgPDHQgLgBgegTQghgUgVgXQg1g6BPgTIAPgDQALgCgNgLQgTgQgBgDQAAgCgHgHIgCgBIABAAQASgIASgNQAPgMAGgkQAIgkgDg+QgDgrADgBQACgCAJAYIALAeQAJAVAhA6IABABQAjA9AJAHQAKAFAFAHQAIAJAAAMQgBAGgTAMQgRAKAJAEQA6AcAGAaQAHAXgkAVQgaAPgrAKQgeAHgOABIgEAAg");
	this.shape_125.setTransform(2.7,-35.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(66,66,66,0.114)").s().p("AgPDLQgLgBgfgTQgigUgUgYQg3g7BQgSIAPgDQAMgCgOgMQgUgQgBgEIgHgJIgCgBIABAAQATgIARgNQAQgMAFglQAIgmgEg/QgCgsACgCQACgCAJAZQAFAMAGASQAJAWAiA7IABABQAkA+AJAHQAKAGAGAGQAJAKgBALQAAAGgUANQgRAKAJAEQA8AdAHAaQAIAZglAVQgbAPgrALQgfAHgOABIgEAAg");
	this.shape_126.setTransform(2.7,-36.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(66,66,66,0.09)").s().p("AgODPQgMgBgfgTQgigVgWgXQg4g8BSgTIAPgDQAMgCgPgMQgUgQgBgEIgIgJIgBgBIAAAAQATgJASgNQAQgNAFglQAHgngEhBQgDgtACgCQACgCAJAaQAGAMAGASQAIAWAjA8IABABQAlA/AKAHQAKAGAGAGQAKAKgBAMQAAAGgVANQgRAKAKAFQA9AdAIAbQAJAZgmAWQgbAPgsALQgfAIgOABIgEAAg");
	this.shape_127.setTransform(2.6,-37.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(66,66,66,0.067)").s().p("AgODTQgMAAgggTQgjgWgVgXQg6g+BTgSIAQgDQALgCgPgMQgVgRgBgEQAAgBgIgIIgBgCIAAAAQATgIATgOQAPgNAGgmQAGgogEhCQgEgvACgCQACgCAJAaIAMAfQAIAWAjA+IABABQAmBAALAHQALAFAGAHQAKAKAAAMQgBAGgVAOQgRAKAKAFQBAAeAIAbQAJAagmAXQgbAPgtAMQggAIgOAAIgEAAg");
	this.shape_128.setTransform(2.6,-38.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(66,66,66,0.047)").s().p("AgODYQgMgBgggUQgkgVgWgYQg7g+BUgTIAQgDQAMgCgPgMQgWgRgCgEIgIgKIgCgBIABAAQATgJATgOQAQgNAFgnQAGgpgFhEQgEgwACgCQACgCAJAaIAMAgQAIAWAkA/IABABQAnBBAMAHQALAFAGAHQAKAKAAANQAAAGgVAOQgSAKAKAFQBCAfAJAcQAKAagnAXQgbARguALQggAJgPABIgEAAg");
	this.shape_129.setTransform(2.6,-38.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(66,66,66,0.024)").s().p("AgODcQgLAAgigVQgkgVgWgZQg9g/BWgTIAQgDQAMgCgQgMQgWgRgCgEQAAgCgJgIIgBgCIAAAAQAUgJATgOQAQgNAFgoQAGgqgGhGQgEgyABgBQACgDAKAcIALAgQAIAWAlBAIABABQAoBDAMAHQAMAFAHAGQAKALAAANQAAAGgWAOQgSAKALAFQBEAgAKAdQAKAagoAYQgbARgvAMQghAJgOABIgFAAg");
	this.shape_130.setTransform(2.6,-39.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(66,66,66,0)").s().p("Ag7DLQglgWgXgYQhDhGBsgQQANgCgRgNQgXgSgCgEIgJgKIgBgBIAAAAQAUgJATgPQAhgcgNiNQgEgzABgCQADgDAUA+QAIAWAmBBQApBFAOAHQAdAOAAAVQAAAHgWAOQgSALALAFQCHA+hUAzQgcARgvANQgmAKgPAAQgLAAgigVg");
	this.shape_131.setTransform(2.6,-40.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_87}]},29).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).wait(23));

	// Layer_3
	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#424242").s().p("AgiARQgPgHAAgKQAAgJAPgHQAPgHATAAQAVAAAOAHQAPAHAAAJQAAAKgPAHQgOAHgVAAQgTAAgPgHg");
	this.shape_132.setTransform(-19.7,-5.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(65,67,65,0.98)").s().p("AAAAaIgBAAQgNgBgLgDQgHgBgGgFIgFgCQgKgJAAgHQAAgKARgIQAGgDAHgBIAQgBIAJgBQAOAAALAEQAIABAFADQAPAIgCALIAAACIAAACIgCAEQgEAFgKAFIAAAAQgHAEgHACQgGACgIAAIgJgBg");
	this.shape_133.setTransform(-19.8,-6.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(64,67,64,0.961)").s().p("AgBAcIgBAAQgOgBgMgEQgHgBgGgGIgFgEQgKgKAAgIQAAgJATgKQAGgCAJAAIARgBIAJAAQAPAAANAEQAIACAGADQAPAJgEALIAAADIAAACQgBACgCACQgEAFgLAGIAAABQgIAEgHACQgGABgHAAIgMgBg");
	this.shape_134.setTransform(-20,-7.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(62,68,62,0.945)").s().p("AgCAeIgCAAQgPgBgNgFQgGgBgHgIIgFgEQgKgLAAgJQAAgKAWgKQAGgCAJAAIATAAIAKAAQAQAAAOAEQAJADAGAEQAPAJgHANIABADIAAACIgDAFQgEAFgMAHIgBAAQgIAGgHABIgKABQgIAAgJgCg");
	this.shape_135.setTransform(-20.1,-8.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(61,69,61,0.925)").s().p("AgEAhIgBgBQgQgCgPgFQgGgBgHgJIgEgFQgLgNAAgJQAAgKAYgLQAHgCAKABQAMABAIAAIAKgBQATABAOAEQAKADAFAFQAQAKgJAOIAAADQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBADgCACQgEAFgNAIIgBABQgKAGgHACIgIAAQgIAAgNgCg");
	this.shape_136.setTransform(-20.2,-9.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(60,69,60,0.906)").s().p("AgFAjIgCAAQgRgDgQgFQgGgCgHgKIgFgFQgKgPAAgJIAAgBQAAgJAagNQAHgCALACQAOACAHgBIAMAAQATABAPAFQALADAGAFQAPALgKAPIAAADIAAADQAAACgDADQgEAFgOAJIgBABQgLAHgHABIgHABQgJAAgOgEg");
	this.shape_137.setTransform(-20.2,-10.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(59,70,59,0.886)").s().p("AgHAmIgCgBQgSgDgQgGQgHgCgHgMIgEgGQgLgRAAgJQAAgJAdgOIAAAAQAGgCANADQAPACAHAAIAMAAQAVAAAQAGQAMADAGAGQAPAMgMAQQgBABAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQgBADgDACQgEAFgPAKIgBABQgMAIgHACIgGAAQgKAAgRgEg");
	this.shape_138.setTransform(-20.3,-11);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(57,71,57,0.867)").s().p("AgIAoIgCAAQgTgEgSgHQgGgBgHgOIgFgGQgLgTAAgJQAAgKAfgPIABAAQAGgBAOADQAQADAHAAIANgBQAWABARAGQANAEAGAGQAPANgPARIABADQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAAAQgBADgDADQgEAFgQALIgCABQgNAJgHACIgFAAQgKAAgTgGg");
	this.shape_139.setTransform(-20.4,-11.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(56,71,56,0.851)").s().p("AgKArIgCAAQgUgFgTgHQgGgCgIgPIgEgHQgMgVAAgJQAAgJAigQIABAAQAGgCAPAEQARAEAIgBIANAAQAYABASAGQANAFAGAGQAPAOgQATQAAAAAAAAQgBABABAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAAAgBABQAAADgEADQgDAEgSANIgCABQgNAKgHABIgGABQgKAAgVgHg");
	this.shape_140.setTransform(-20.5,-12.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(55,72,55,0.831)").s().p("AgLAuIgDgBQgVgFgUgIQgGgBgHgRIgFgHQgMgXAAgJIAAgBQAAgJAkgRIABAAQAHgBAQAEQASAFAHgBIAPAAQAZABASAHQAPAEAGAHQAPAPgSAUQgBAAAAABQAAAAAAAAQAAABABAAQAAABAAAAIACAEQgBADgEADQgDAEgTAOIgCABQgPALgHABIgEAAQgLAAgXgHg");
	this.shape_141.setTransform(-20.6,-13.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(54,73,54,0.812)").s().p("AgNAxIgDgBQgWgGgVgIQgGgCgIgSIgEgIQgMgZAAgJQAAgKAmgSIABAAQAHgBARAFQAUAGAGgBIAQAAQAaABAUAHQAPAFAGAIQAQAPgVAVQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABgBAAQAAAEgEADQgEAEgUAOIgCACQgQAMgHABIgDAAQgLAAgagIg");
	this.shape_142.setTransform(-20.6,-14.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(52,73,52,0.792)").s().p("AgPAzIgCAAQgXgHgWgJQgHgBgHgUIgFgJQgMgaAAgKQAAgJApgTIABAAQAHgCASAGQAVAGAGAAIARAAQAbABAVAHQAQAGAGAIQAQAQgXAXQAAAAAAAAQgBABAAAAQAAABABAAQAAABAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAADgEADQgEAFgVAPIgDACQgQANgHABIgEAAQgLAAgcgKg");
	this.shape_143.setTransform(-20.7,-15.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(51,74,51,0.773)").s().p("AgQA2IgDgBQgYgHgXgKQgHgBgIgWIgFgJQgLgcgBgKIAAAAQAAgJAsgVIABAAQAHgBATAGQAWAIAHgBIARAAQAdACAVAHQARAGAHAJQAPAQgZAYQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQAAAEgFADIgaAVIgDACQgRANgHABIgDABQgMAAgdgLg");
	this.shape_144.setTransform(-20.8,-16.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(50,75,50,0.753)").s().p("AgSA4IgDgBQgZgHgZgKQgGgCgIgXIgFgJQgMgfAAgJIAAgBQAAgJAugVIABAAQAHgBAUAGQAYAJAGgBIASAAQAfACAWAIQASAGAGAJQAQARgbAaQAAAAgBABQAAAAAAABQAAAAABABQAAAAAAABQABAAABABQAAAAAAABQABAAAAAAQAAABAAAAQgBAEgFAEQgDAEgYARIgDADQgSAOgHABIgCAAQgLAAghgMg");
	this.shape_145.setTransform(-20.8,-17.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(49,76,49,0.737)").s().p("AgUA7IgEgBQgZgIgagKQgGgCgIgZIgFgKQgMggAAgKQAAgJAwgXIABAAQAIgBAUAIQAaAIAGAAIASAAQAgACAXAIQATAGAHAKQAPASgdAbQAAABAAAAQgBABAAAAQAAABABAAQAAABABAAQABABAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAAEgFADQgEAEgYATIgDADQgUAPgHABIgCAAQgMAAgigNg");
	this.shape_146.setTransform(-20.9,-18.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(47,76,47,0.718)").s().p("AgWA+IgEgBQgagJgbgLQgGgCgIgaIgFgLQgNgiAAgKIAAAAQAAgJAzgYIABAAQAIAAAWAIQAaAJAGAAIATAAQAiACAYAIQATAHAHAKQAQATgfAcQgBABAAAAQAAABAAABQAAAAAAABQABAAAAABQABAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAEgGADQgDAEgaAUIgDADQgVAQgHABIgCAAQgLAAglgOg");
	this.shape_147.setTransform(-20.9,-19);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(46,77,46,0.698)").s().p("AgXBBIgEgCQgcgJgbgLQgGgCgJgcIgFgLQgNglAAgJIAAgBQAAgJA1gYIACAAQAIgBAWAJQAcAKAGAAIAUAAQAjACAZAJQAUAHAHALQAQAUgiAdQAAAAgBABQAAAAAAABQAAAAABABQAAAAABABQADADAAABQAAAFgGADIgeAZIgEADQgVAQgHACIgCAAQgMAAgmgPg");
	this.shape_148.setTransform(-21,-19.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(45,78,45,0.678)").s().p("AgZBDIgEgBQgdgKgdgMQgGgCgIgdIgFgMQgNgmAAgKIAAAAQAAgJA3gaIACAAQAIgBAYAKQAdALAGAAIAUAAQAkACAaAJQAWAIAGALQAQAVgjAeQgCACACADQAEACAAACQgBAEgGAEQgDAEgcAWIgEADQgWARgHABIgCAAQgMAAgogQg");
	this.shape_149.setTransform(-21.1,-20.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(44,78,44,0.659)").s().p("AgbBGIgEgCQgegKgegNQgGgCgJgeIgFgNQgNgoAAgKQAAgJA6gbIACAAQAIgBAZAKQAeAMAGAAIAVAAQAmACAbAKQAWAIAHALQAQAWgmAgQgCACADADQAEACgBACQAAAFgGADQgDAEgeAXIgEAEQgXASgHABIgCAAQgLAAgrgRg");
	this.shape_150.setTransform(-21.1,-21.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(42,79,42,0.643)").s().p("AgdBIIgEgBQgfgLgfgNQgGgCgJggIgFgNQgNgrAAgKIAAAAQAAgJA8gcIACAAQAIAAAaAKQAgANAGAAIAVAAQAoACAbAKQAXAJAHAMQAQAWgnAhQgDADADACQAEADAAABQAAAFgHAEIgiAcIgEAEQgYATgHABIgBAAQgMAAgtgTg");
	this.shape_151.setTransform(-21.2,-22.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(41,80,41,0.624)").s().p("AgeBLIgFgCQgfgLgggOQgGgCgKgiIgFgMQgNgtAAgKIAAgBQAAgIA/geIABAAQAJAAAbALQAgAOAHAAIAWAAQApACAcALQAYAIAHANQAQAXgqAiQgCADADACQAEADAAACQAAAFgHAEIgjAdIgEAEQgZATgHABIgCABQgLAAgvgUg");
	this.shape_152.setTransform(-21.3,-23.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(40,80,40,0.604)").s().p("AggBOIgFgCQgggMghgOQgGgCgKgkIgFgNQgNgvgBgKQAAgJBCgeIABAAQAJAAAcALQAhAPAHgBIAXABQAqACAeALQAZAJAHANQAPAYgrAkQgDACAEADQAEADAAACQgBAFgGAEIglAdIgEAFQgaAUgHABIgCAAQgLAAgxgUg");
	this.shape_153.setTransform(-21.3,-24.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(39,81,39,0.584)").s().p("AgiBRIgFgCQghgNgjgPQgFgCgKglIgFgOQgOgwAAgLIAAAAQAAgJBEgfIABAAQAJAAAdAMQAjAQAHgBIAXABQAsACAeAMQAaAJAHANQAQAZguAlQgDADAEACQAFADgBACQAAAGgHAEIglAeIgFAFQgbAVgHABIgBAAQgLAAg0gVg");
	this.shape_154.setTransform(-21.4,-25.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(37,82,37,0.565)").s().p("AgkBTIgFgCQgigNgkgPQgFgCgKgnIgGgOQgNgzAAgKIAAgBQAAgIBGghIABAAQAKABAdANQAkAPAHAAQANAAAMABQAsACAgAMQAaAJAIAPQAPAZgvAmQgDADAEADQAEADAAACQAAAFgIAEIgmAgIgFAFQgcAWgHABIgCAAQgLAAg1gXg");
	this.shape_155.setTransform(-21.4,-26.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(36,82,36,0.549)").s().p("AgmBWIgFgCQgjgNglgRQgGgCgKgoIgFgPQgOg0AAgLIAAAAQAAgJBJgiIABABQAKAAAfAOQAlAQAHAAIAZABQAuACAgAMQAcAKAHAPQAQAagyAnQgDAEAEACQAFAEAAABQgBAGgHAEIgoAhIgFAFQgdAXgHABIgBAAQgMAAg3gYg");
	this.shape_156.setTransform(-21.5,-27.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(35,83,35,0.529)").s().p("AgnBYIgGgCQgkgOgmgRQgGgCgKgpIgFgQQgOg2AAgLIAAgBQAAgIBLgjIABABQAKAAAgAOQAmASAHgBIAaABQAvADAiAMQAcAKAHAQQAQAbg0AoQgDADAEADQAGAEgBABQAAAGgIAFIgoAhIgGAFQgeAYgHABIAAABQgLAAg6gag");
	this.shape_157.setTransform(-21.5,-27.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(34,84,34,0.51)").s().p("AgpBcIgGgDQglgOgngSQgGgCgKgrIgFgQQgPg4AAgLIAAgBQAAgIBOgkIABAAQAKABAhAPQAoASAHAAIAaAAQAxADAiANQAdALAIAPQAQAcg2AqQgEADAFADQAFAEAAABQAAAHgIAEIgqAjIgGAFQgfAZgHAAIgBAAQgLAAg7gZg");
	this.shape_158.setTransform(-21.6,-28.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(32,84,32,0.49)").s().p("AgrBeIgGgCQgmgQgogSQgGgCgKgsIgGgRQgOg7AAgKIAAgBQAAgIBPglIADAAQAJABAiAPQApATAHAAIAbABQAzADAiANQAfALAHAQQAQAdg4ArQgDADAEADQAGAEAAACQgBAGgIAEIgrAkIgGAFQgfAagIABIAAAAQgLAAg+gbg");
	this.shape_159.setTransform(-21.6,-29.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(31,85,31,0.471)").s().p("AgtBhIgFgCQgogQgpgTQgFgCgLguIgFgRQgPg9AAgKIAAgBQAAgIBSgmIACAAQAKABAjAQQAqATAHAAIAcABQA0AEAjANQAgALAHARQAQAeg6AsQgEADAFADQAGAEAAACQgBAGgIAEIgsAlIgGAGQghAagHABIgCAAQgLAAg/gcg");
	this.shape_160.setTransform(-21.7,-30.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(30,86,30,0.451)").s().p("AguBjIgGgCQgpgRgqgTQgFgCgLgvIgGgTQgOg+gBgLIAAAAQAAgIBVgnIACAAQAKABAkAQQAsAVAGAAIAdAAQA1AEAlAOQAgALAIASQAQAeg9AuQgDADAFADQAGAEgBACQAAAGgJAFIgtAmIgGAFQgiAcgHAAIgBAAQgKAAhCgdg");
	this.shape_161.setTransform(-21.8,-31.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(29,86,29,0.435)").s().p("AgwBmIgGgCQgqgRgrgUQgGgCgLgxIgFgTQgPhAAAgLIAAgBQAAgIBXgoIACAAQAKABAmARQAsAWAHgBIAdABQA3AEAlAOQAhAMAIASQAQAfg+AvQgEADAFAEQAGADAAACQAAAHgJAFIgvAmIgGAGQgjAdgHAAIAAAAQgLAAhEgeg");
	this.shape_162.setTransform(-21.8,-32.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(27,87,27,0.416)").s().p("AgyBpIgGgDQgrgRgsgVQgGgCgLgyIgFgUQgPhCAAgLIAAAAQAAgIBZgqIACAAQALABAmATQAuAVAGAAIAfABQA3AEAnAOQAiANAHASQARAghBAwQgEAEAFADQAHAEAAACQgBAHgJAEIgvAoIgHAGQgkAdgHABIgBAAQgLAAhFgfg");
	this.shape_163.setTransform(-21.9,-33.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(26,88,26,0.396)").s().p("Ag0BsIgGgDQgsgSgtgVQgGgCgLg0IgGgUQgPhEAAgLIAAgBQAAgIBcgrIACABQALABAnATQAvAWAHAAIAfABQA5AEAnAPQAjAMAIATQAQAhhCAxQgFAEAGAEQAGAEAAABQAAAIgKAEIgwApIgHAGQgkAegIABIAAAAQgLAAhIggg");
	this.shape_164.setTransform(-21.9,-34.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(25,88,25,0.376)").s().p("Ag2BuIgGgCIhbgpQgGgCgLg1IgGgVQgPhGAAgLIAAgBQAAgIBegrIACAAQALABAoAUQAxAXAGAAIAgABQA6AEApAPQAjANAIAUQARAhhFAzQgEAEAFADQAHAEAAACQAAAHgKAFIgyAqIgHAGQglAfgIABIAAAAQgLAAhKgig");
	this.shape_165.setTransform(-22,-35.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(24,89,24,0.357)").s().p("Ag4BxIgGgDIhdgpQgGgCgMg4IgFgVQgQhHAAgMIAAAAQAAgIBhgtIACAAQALACApAUQAyAYAHAAIAgABQA8AEApAQQAlANAIAUQAQAihHA0QgEAEAGADQAHAFAAACQgBAHgKAFIgyArIgIAGQgmAggIAAIAAAAQgKAAhNgig");
	this.shape_166.setTransform(-22,-36);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(22,90,22,0.341)").s().p("Ag5B0IgHgDQgvgUgwgXQgGgCgMg5IgFgVQgQhKAAgLIAAgBQAAgIBjguIACABQAMABAqAVQAzAZAGAAIAhABQA+AEAqAQQAlAOAIAUQAQAjhIA1QgFAEAGAEQAHAEAAACQAAAIgKAFIg0ArIgIAHQgnAhgHAAIgBAAQgKAAhOgjg");
	this.shape_167.setTransform(-22.1,-36.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(21,90,21,0.322)").s().p("Ag7B2IgHgDQgwgUgxgYQgGgCgMg6IgGgXQgPhLgBgMIAAAAQAAgIBmgvIACAAQAMACArAVQA0AaAHAAIAhABQA/AFArAQQAmAOAJAVQAQAkhLA2QgFAEAHAEQAHAEAAACQAAAIgLAFIg1AtIgIAHQgoAhgHABIAAAAQgKAAhRglg");
	this.shape_168.setTransform(-22.1,-37.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(20,91,20,0.302)").s().p("Ag9B5IgHgDQgwgVgzgYQgGgCgMg8IgFgXQgQhNgBgMIAAgBQAAgHBogxIADABQALABAtAWQA1AbAHAAIAiABQBAAFAsAQQAnAPAIAVQARAlhNA3QgFAFAGADQAIAFAAACQAAAIgLAFIg2AuIgIAHQgpAigIAAIAAABQgLAAhSgmg");
	this.shape_169.setTransform(-22.2,-38.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(19,92,19,0.282)").s().p("Ag/B8IgHgEQgxgVg0gZQgGgCgMg9IgGgYQgQhPAAgMIAAAAQAAgIBqgxIADAAQAMACAtAWQA3AcAGAAIAjABQBCAFAtARQAoAOAIAWQAQAmhPA5QgFAEAHAEQAIAEAAACQgBAJgLAFIg3AuIgIAIQgqAjgIAAIAAAAQgLAAhUgmg");
	this.shape_170.setTransform(-22.3,-39.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(17,92,17,0.263)").s().p("AhAB+IgIgDIhngvQgGgCgMg/IgGgYQgQhSgBgLIAAgBQAAgIBtgyIADAAQAMACAuAXQA4AdAHgBIAjACQBDAFAuARQApAPAIAWQARAnhRA6QgFAEAGAEQAIAFAAACQAAAIgLAGIg5AvIgIAIQgrAkgIAAIAAAAQgJAAhXgog");
	this.shape_171.setTransform(-22.3,-40.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(16,93,16,0.247)").s().p("AhDCBIgIgDIhpgwQgFgDgNhAIgGgZQgQhTAAgMIAAgBQAAgHBvg0IADABQAMACAvAYQA6AcAGAAIAkACQBEAFAvARQAqAQAIAXQARAnhTA7QgGAFAHAEQAJAFgBACQAAAIgLAFIg6AxIgIAIQgtAlgHAAIAAAAQgKAAhZgpg");
	this.shape_172.setTransform(-22.3,-41.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(15,94,15,0.227)").s().p("AhFCEIgIgEIhrgxQgFgCgNhCIgGgaQgRhVAAgMIAAAAQAAgIByg0IADAAQAMACAwAZQA7AdAGAAQAUAAARACQBGAFAwASQAqAQAJAXQAQAohVA9QgFAEAHAEQAIAFAAACQAAAJgMAFIg7AyIgIAIQgtAlgIABIAAAAQgJAAhcgqg");
	this.shape_173.setTransform(-22.4,-42.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(14,95,14,0.208)").s().p("AhGCGIgJgDIhtgzQgFgCgOhEIgFgaQgRhXAAgMIAAgBQAAgHB0g2IADABQAMADAxAYQA9AfAGAAIAlABQBIAGAwASQArAQAJAYQARAphYA+QgFAEAHAFQAJAEAAACQAAAJgNAGIg7AzIgJAIQguAmgIAAIAAABQgJAAhdgsg");
	this.shape_174.setTransform(-22.4,-43.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(12,95,12,0.188)").s().p("AhICJIgJgDIhvg0QgFgCgOhFIgGgbQgQhZgBgMIAAgBQAAgHB3g3IADABQAMACAyAaQA+AfAGAAIAnABQBIAGAyASQAsARAJAYQAQAqhZA/QgGAFAIAEQAIAFAAACQAAAJgMAGIg9A0IgJAIQgvAngIAAIAAAAQgJAAhfgsg");
	this.shape_175.setTransform(-22.5,-44.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(11,96,11,0.169)").s().p("AhKCMIgIgEIhyg1QgFgCgOhHIgFgbQgRhbgBgMIAAgBQAAgHB5g4IADAAQANADAzAaQA/AgAGAAIAnACQBKAFAzATQAtARAIAZQARArhbBAQgGAFAHAEQAKAFgBACQAAAKgMAFIg+A1IgKAJQgwAogHAAIgBAAQgIAAhigtg");
	this.shape_176.setTransform(-22.6,-44.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(10,97,10,0.149)").s().p("AhLCOIgJgEIh0g1QgFgDgOhIIgGgcQgRhcAAgNIAAgBQAAgHB7g5IADABQANACA0AbQBBAhAGAAQAUAAATACQBMAFAzAUQAuARAJAZQARAsheBBQgGAFAIAFQAJAFAAACQAAAJgNAGIg/A2IgKAJQgxAogHABQgIAAhkgvg");
	this.shape_177.setTransform(-22.6,-45.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(9,97,9,0.133)").s().p("AhNCRIgJgEIh2g3QgFgCgOhKIgGgcQgRhfgBgMIAAgBQAAgHB+g6IADAAQANADA2AbQBBAiAGAAIApACQBMAFA0AUQAvASAJAaQARAshfBDQgHAFAIAEQAKAFAAADQAAAJgOAGIhAA3IgKAJQgxApgIAAIAAAAQgJAAhlgvg");
	this.shape_178.setTransform(-22.7,-46.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(7,98,7,0.114)").s().p("AhPCUIgJgEIh4g4QgFgDgOhLIgGgdQgShgAAgNIAAgBQAAgHCAg7IADAAQAOADA2AcQBDAjAGAAIApABQBOAGA1AUQAwASAJAbQAQAthhBEQgGAFAIAEQAJAGAAACQAAAKgNAGIhBA3IgLAKQgyAqgIAAIAAAAQgJAAhngwg");
	this.shape_179.setTransform(-22.7,-47.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(6,99,6,0.094)").s().p("AhRCXIgJgFIh6g5QgFgCgPhNIgFgeQgShigBgNIAAAAQAAgHCDg9IAEABQANADA3AcQBEAkAGAAQAWAAAUABQBPAGA2AVQAxASAJAbQARAuhkBFQgGAFAIAFQAKAFAAADQAAAKgOAGIhCA4IgLAKQgzArgIAAQgIAAhqgxg");
	this.shape_180.setTransform(-22.8,-48.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(5,99,5,0.075)").s().p("AhTCZIgJgEIh8g6QgFgDgPhOIgGgeQgShlAAgMIAAgBQAAgHCFg9IAEAAQANADA4AeQBGAjAGAAIAqACQBRAGA3AVQAxATAKAbQAQAvhlBHQgHAFAJAEQAKAGAAACQAAAKgOAGIhEA6IgKAKQg1AsgIAAIAAAAQgJAAhrgzg");
	this.shape_181.setTransform(-22.8,-49.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(4,100,4,0.055)").s().p("AhVCcIgJgEIh+g8QgGgCgOhQIgGgfQgShmAAgNIAAgBQAAgGCHg/IAEAAQANADA6AfQBGAkAGAAIArACQBTAGA3AWQAzATAJAcQARAvhoBIQgHAFAJAFQAKAGAAACQAAAKgOAGQgCABhDA6IgKAKQg2AtgIAAQgIAAhug0g");
	this.shape_182.setTransform(-22.9,-50.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(2,101,2,0.039)").s().p("AhXCeIgJgEIiBg9QgFgCgOhSIgGgfQgShogBgNIAAgBQAAgHCKg/IAEAAQANADA7AfQBIAmAGAAIArABQBUAHA5AVQAzAUAJAcQARAxhqBJQgGAFAIAFQALAGAAACQAAAKgPAHIhFA7IgLAKQg3AugHAAQgJAAhwg1g");
	this.shape_183.setTransform(-22.9,-51.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(1,101,1,0.02)").s().p("AhYCiIgKgFIiDg+QgFgCgPhTIgFggQgThqAAgNIAAgBQAAgHCMhBIAEABQAOADA7AgQBJAmAGAAIAtACQBVAGA5AWQA0AUAKAdQARAxhsBKQgHAGAJAFQALAGAAACQAAALgPAGIhHA8IgLALQg4AugHAAQgIAAhyg1g");
	this.shape_184.setTransform(-23,-52.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(0,102,0,0)").s().p("AhkCfIiFg/QgGgDgUh0QgThwAAgKQAAgHCPhCQAFgCBJAmQBLAnAGAAQB1ADBJAcQCQA3ixB6QgFAEAJAFQALAGAAACQAAALgPAGIhIA+QhDA6gIAAQgJAAh9g8g");
	this.shape_185.setTransform(-23,-53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_132}]},15).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).wait(28));

	// Layer_2
	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#333333").s().p("AhkAnQgqgQAAgXQAAgWAqgQQAqgQA6AAQA7AAApAQQArAQgBAWQABAXgrAQQgpAQg7AAQg6AAgqgQg");
	this.shape_186.setTransform(17.8,-6.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(51,51,51,0.984)").s().p("AgTA5IgQgCIgRgDQgbgEgYgLIgEgBQglgRgBgVIAAgBQAAgWApgPIADgBQAdgKAhgEQAUgCAWAAIAOABQAfABAaAGQARAEAOAHIAMAGQAeAPgBAUQAAARgbAOIgRAHQgSAHgTAEIgOABIgSACIgcACIgGAAIgGABIgMgBg");
	this.shape_187.setTransform(17.8,-7.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(52,52,52,0.965)").s().p("AgWA8IgQgDIgRgEQgagEgZgMIgEgCQgmgTgBgUIAAgBQAAgWArgQIAEgBQAegKAigEQATgCAYABIAOABQAiACAZAGQARAEAOAJIAMAGQAdARAAAUIAAAAQgBASgcANIgSAHQgUAHgTAEIgNABIgUABIgcADIgGAAIgKAAIgJAAg");
	this.shape_188.setTransform(17.8,-8.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(52,52,52,0.949)").s().p("AgZA/QgIgBgIgDIgQgFQgagEgagPIgEgCQgogVAAgUIAAgBQABgVAugQIACgBQAhgKAigEQATgCAZACIAQABQAiACAbAHQAQAEAOAKIALAHQAdASAAAVIAAABQgCAQgdAOIgTAHIgnAKQgHABgIAAIgUABQgNABgQACIgGAAIgMABIgIAAg");
	this.shape_189.setTransform(17.8,-9.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(52,52,52,0.933)").s().p("AgbBBQgJAAgHgEIgQgGQgZgEgcgRIgEgCQgpgYAAgTIAAgBQACgWAvgPIADgBQAjgKAhgEQAUgCAaACIAQABQAkAEAbAGQARAEANANIAMAHQAcATAAAWIgBABQgCAQgeANIgUAHIgoAKQgHACgJgBIgUABIgdADIgHABIgNABIgHgBg");
	this.shape_190.setTransform(17.8,-10.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(52,52,52,0.914)").s().p("AgeBEQgJgBgHgEIgPgHQgZgEgdgTIgEgDQgqgZABgUIAAAAQABgWAygPIADgBQAlgKAhgEQAUgCAcADIAQABQAlAEAcAHQAQAEAOAOIALAIQAcAUgBAYIAAAAQgDAQggANQgJAEgLADIgpAKQgIABgIgBIgVABQgNAAgRAEIgIAAIgOACIgGgBg");
	this.shape_191.setTransform(17.8,-12);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(53,53,53,0.898)").s().p("AghBHQgJgBgHgFIgOgIQgZgEgdgVIgFgDQgrgbABgTIAAgBQACgVAzgQIAEgBQAmgKAigEQAUgBAdADIARACQAnAEAbAHQARAEANAQIALAJQAbAUAAAZIgBAAQgCARgiAMIgVAHIgrAKQgHABgJgBIgVAAQgNABgSADIgIABIgOABIgHAAg");
	this.shape_192.setTransform(17.8,-13.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(53,53,53,0.882)").s().p("AgjBKQgKgBgGgGQgHgEgHgFQgYgEgfgXIgEgDQgtgdABgUIAAgBQADgUA2gQIADgBQApgKAhgEQAUgBAfAEIARABQAoAGAdAHQAQAEANARIALAKQAbAVgBAaIgBABQgDAQgjAMIgVAGIgsAKQgIACgJgCQgLgBgLABQgNAAgSAFIgIABQgKABgHAAIgFAAg");
	this.shape_193.setTransform(17.7,-14.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(53,53,53,0.863)").s().p("AgmBNQgKgCgGgGIgNgKQgYgEgggaIgFgDQgtgfABgTIAAgBQADgUA4gQIADgBQArgKAigEQATgBAgAEIATACQApAGAdAHQAQAFANATIALAKQAaAWAAAbIgCABQgDAPgkAMIgWAHIguAJQgHACgKgCQgMgBgLAAQgNABgTAFIgIABQgKACgHAAIgFAAg");
	this.shape_194.setTransform(17.8,-15.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(53,53,53,0.847)").s().p("AgpBPQgJgBgGgIQgHgEgGgGQgXgEgigcIgEgDQgvghACgTIAAgBQADgUA6gQIADgBQAtgKAigEQAUgBAhAFIATACQArAGAdAIQAQAEANAVIAKALQAaAXAAAcIgBABQgEAPgmAMIgXAGIguAKQgIABgKgCQgMgBgLAAQgOABgTAFIgJABQgKADgHAAIgGgBg");
	this.shape_195.setTransform(17.7,-16.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(54,54,54,0.831)").s().p("AgrBTQgKgCgGgIIgMgMQgXgEgjgeIgFgDQgvgjACgTIAAgBQADgUA8gPIAEgBQAvgLAigDQAUgCAjAGIATACQAsAHAdAIQARAEAMAXIALALQAZAYgBAeIgBAAQgEAQgnALIgYAGIgwAKQgHABgLgCQgMgCgLAAQgOABgVAGIgIABQgLADgIAAIgEAAg");
	this.shape_196.setTransform(17.7,-17.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(54,54,54,0.812)").s().p("AguBVQgKgBgFgJQgHgGgFgHQgXgEgkggIgFgDQgwgmACgTIAAAAQAEgUA+gQIAEgBQAxgKAigDQATgCAlAGIATADQAuAIAeAIQAQAEANAYIAKAMQAZAZgBAfIgBABQgFAPgpALIgXAGIgyAJQgIACgKgDQgNgCgMAAQgNABgWAGIgIACQgLADgIAAIgFgBg");
	this.shape_197.setTransform(17.7,-19);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(54,54,54,0.796)").s().p("AgxBYQgKgBgFgKQgGgGgFgHQgWgEgmgjIgFgDQgxgoACgTIAAAAQAEgUBBgPIADgBQA0gLAhgDQAUgCAmAHIAUADQAvAJAfAIQAQAEAMAaQAGAGAEAHQAYAZAAAgIgCABQgFAPgqALIgYAGIgzAJQgIACgLgDQgNgDgMAAQgOABgWAHIgIACQgLACgIAAIgGAAg");
	this.shape_198.setTransform(17.7,-20.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(54,54,54,0.78)").s().p("Ag0BbQgKgCgFgKQgGgHgFgIQgVgEgngkIgFgEQgygqADgSIAAgBQAEgTBCgPIAEgBQA1gLAigDQAUgCAnAIIAVADQAxAJAeAJQAQAEANAbIAJAOQAYAaAAAiIgCAAQgGAPgrALIgZAFQgjAFgRAEQgIACgMgDQgNgDgMAAQgOABgXAHIgJACQgMAEgIAAIgFgBg");
	this.shape_199.setTransform(17.7,-21.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(55,55,55,0.761)").s().p("Ag2BeQgLgCgEgMQgGgGgFgJQgVgEgognIgFgDQgzgsADgSIAAgBQAEgTBFgPIAEgBQA3gLAigDQAUgCApAJIAVADQAyAKAfAIQAQAFAMAdIAKAOQAXAbgBAjIgCAAQgGAPgsAKIgaAGQgkAFgRAEQgIACgMgEQgOgEgMABQgOABgYAIIgJACQgMADgIAAIgFAAg");
	this.shape_200.setTransform(17.7,-22.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(55,55,55,0.745)").s().p("Ag5BhQgLgCgEgNQgFgHgFgJQgUgEgqgpIgFgEQg0guADgSIAAAAQAFgTBHgPIADgBQA6gLAigDQAUgCAqAJIAWAEQAzAKAfAJQARAEALAfQAGAHAEAHQAXAdgBAkIgCABQgHAOguAKIgaAFQgmAFgQAEQgJACgMgEQgOgEgMABQgOAAgZAJIgJACQgNAEgJAAIgEAAg");
	this.shape_201.setTransform(17.7,-23.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(55,55,55,0.729)").s().p("Ag8BkQgLgCgDgOQgGgHgEgKQgUgDgrgsIgFgEQg2gwAEgRIAAgBQAFgSBJgQIAEgBQA8gLAigDQAUgBArAJIAWAEQA1ALAgAJQAQAEAMAhIAJAPQAWAeAAAkIgCABQgHAOgwAKIgbAFQgnAFgQAEQgJACgNgEQgOgFgMABQgPABgZAJIgJACQgOAEgIAAIgFAAg");
	this.shape_202.setTransform(17.7,-24.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(55,55,55,0.714)").s().p("Ag+BmQgLgCgEgOQgFgHgEgLQgTgEgsgtIgFgEQg3gzAEgRIAAgBQAFgSBLgPIAEgBQA+gLAigDQAUgBAtAKIAXAEQA2ALAgAKQAQAEAMAiIAJAQQAWAfgBAlIgCABQgIAOgxAKIgbAFQgpAFgQADQgJADgNgFQgPgFgMABQgPAAgZAKIgKACQgNAFgJAAIgFgBg");
	this.shape_203.setTransform(17.7,-26);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(56,56,56,0.694)").s().p("AhBBpQgLgCgDgPQgFgIgEgLQgTgEgtgvIgFgFQg4g0AEgRIAAgBQAGgSBNgPIAEgBQBAgLAigDQAUgBAuAKIAXAFQA4AMAhAJQAQAFALAkIAJAQQAVAgAAAmIgDABQgIAOgyAJIgcAFQgqAFgQAEQgJACgNgFQgQgFgMAAQgOABgbAKIgKADQgPAFgJAAIgEgBg");
	this.shape_204.setTransform(17.7,-27.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(56,56,56,0.678)").s().p("AhEBsQgLgCgDgQQgFgIgDgLQgTgEgugyIgFgFQg5g3AEgQIAAgBQAGgRBQgQIAEgBQBCgLAigCQAUgCAwALIAXAFQA5ANAhAJQAQAFAMAmIAIAQQAVAhgBAoQAAAAAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgJANgzAJIgdAFQgrAFgQAEQgJACgOgFQgQgGgMABQgOAAgcALIgKADQgPAFgJAAIgFgBg");
	this.shape_205.setTransform(17.7,-28.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(56,56,56,0.663)").s().p("AhHBvQgLgDgCgQQgFgJgDgMQgSgDgwg0IgFgFQg6g5AEgQIAAgBQAHgRBRgQIAEgBQBFgLAhgCQAUgCAyAMIAYAFQA6ANAiAKQAQAFALAnIAIARQAVAigBApQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgIANg2AJIgdAFQgtAEgPAEQgKADgNgGQgRgGgNAAQgNABgdALIgKADQgPAFgKAAIgFAAg");
	this.shape_206.setTransform(17.7,-29.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(56,56,56,0.643)").s().p("AhJByQgMgDgCgRQgEgJgDgNQgSgEgxg2IgFgFQg8g7AFgQIAAAAQAHgRBUgQIAEgBQBGgLAigCQAUgCAzANIAZAEQA8AOAiALQAQAEAKApQAFAJAEAJQAUAjgBAqQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAQgJANg3AJIgeAEQguAFgQADQgJADgOgGQgRgGgNAAQgOABgdALIgKADQgQAGgKAAIgEAAg");
	this.shape_207.setTransform(17.7,-30.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(57,57,57,0.627)").s().p("AhMB1QgMgDgCgSQgEgJgCgNQgSgEgyg4IgFgGQg9g9AGgQIAAAAQAHgRBVgPIAFgBQBIgMAigCQAUgBA0ANIAaAFQA9AOAiALQAQAEALArQAEAJAEAKQATAkAAArIgDABQgKANg4AIIgfAEQgvAFgQADQgJADgPgGQgRgHgNAAQgOABgeAMIgLADQgQAGgKAAIgEAAg");
	this.shape_208.setTransform(17.7,-31.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(57,57,57,0.612)").s().p("AhPB4QgMgDgBgTQgEgKgDgOQgQgDg0g7IgFgFQg+g/AGgQIAAgBQAHgQBYgPIAFgBQBKgMAigCQAUgBA2ANIAZAGQA/APAjALQAQAEAKAtIAIATQATAlgBAsIgDABQgKAMg5AJIggAEQgwAEgQAEQgJACgPgGQgSgHgNAAQgOABgfAMIgLAEQgQAGgKAAIgFAAg");
	this.shape_209.setTransform(17.7,-33);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(57,57,57,0.592)").s().p("AhSB7QgMgDgBgUQgEgKgCgOQgQgEg1g9IgFgFQg/hCAGgPIAAAAQAIgRBagPIAEgBQBNgLAigDQATgBA4AOIAaAGQBAAQAjALQAQAEALAuIAHAUQATAmgBAtIgDACQgLAMg7AIIgfAEQgzAEgPAEQgKACgPgGQgSgIgNAAQgOABggANIgLAEQgRAGgKAAIgFAAg");
	this.shape_210.setTransform(17.7,-34.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(57,57,57,0.576)").s().p("AhUB9QgMgDgBgUQgEgLgBgOQgQgEg2g/IgGgGQhAhDAHgPIAAgBQAIgQBcgPIAFgBQBOgLAigDQATgBA6APIAaAGQBCAQAkALQAPAFALAwIAHAUQASAngBAuQAAABAAAAQAAAAgBAAQAAAAgBAAQgBABAAAAQgLAMg8AHIghAEQgzAEgQAEQgJADgQgHQgSgIgOAAQgOABghAOIgLADQgRAHgKAAIgFgBg");
	this.shape_211.setTransform(17.6,-35.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(58,58,58,0.561)").s().p("AhXCAQgMgDgBgVQgDgLgBgPQgQgEg3hBIgGgGQhBhGAHgPIAAAAQAIgQBegPIAFgBQBRgMAigCQATgBA7APIAbAGQBDASAkALQAQAFAKAxQAEAKADALQASAogBAvQAAABAAAAQgBAAAAAAQgBAAAAABQgBAAgBAAQgLAMg+AHIghAEQg1AEgPADQgKADgQgHQgSgIgOAAQgPAAghAPIgLAEQgSAHgKAAIgFgBg");
	this.shape_212.setTransform(17.6,-36.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(58,58,58,0.541)").s().p("AhZCDQgNgDAAgWQgDgLgCgQQgPgEg4hDIgGgGQhChIAHgOIAAgBQAJgPBggQIAFgBQBTgLAhgCQAUgBA8APIAcAHQBEARAlAMQAQAFAJAzIAIAWQARApgBAwQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAQgMAMg/AHIgiAEQg2AEgPADQgKADgQgIQgTgIgOAAQgPABgiAPIgLADQgTAIgKAAIgEgBg");
	this.shape_213.setTransform(17.6,-37.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(58,58,58,0.525)").s().p("AhcCGQgNgDAAgXQgDgMgBgQQgOgEg6hFIgGgHQhDhKAHgOIAAAAQAJgPBjgQIAFgBQBUgLAigCQAUgBA+AQIAcAHQBGASAkAMQAQAEAKA1IAHAXQAQAqgBAxQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgNALhAAHIgiADQg4AEgPAEQgKADgRgIQgTgJgOAAQgPAAgjAQIgLAEQgTAHgKAAIgFAAg");
	this.shape_214.setTransform(17.6,-38.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(58,58,58,0.51)").s().p("AhfCJQgNgEAAgXQgCgNgBgQQgOgEg7hIIgGgFQhEhNAHgOIAAgBQAKgOBkgQIAFgBQBXgLAigCQATgBBAAQIAdAHQBHATAlAMQAQAFAJA3QAEAKADANQAQArgBAyQAAAAAAAAQAAABgBAAQAAAAgBAAQgBABgBAAQgNALhBAGIgjAEQg6ADgOAEQgKADgRgIQgUgKgPABQgOAAgkAQIgLAEQgUAIgKAAIgFAAg");
	this.shape_215.setTransform(17.6,-40);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(59,59,59,0.49)").s().p("AhiCMQgMgEAAgYQgDgNAAgRQgOgEg8hJIgGgGQhFhPAIgOIAAAAQAJgPBngPIAFgBQBZgMAigCQATgBBBASIAdAHQBJATAmANQAPAEAKA5IAGAWQAQAtgBA0QAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgNALhEAHIgjADQg7ADgOAEQgLADgRgJQgUgJgPAAQgPAAgkARIgMAEQgTAIgLAAIgFAAg");
	this.shape_216.setTransform(17.6,-41.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(59,59,59,0.475)").s().p("AhkCPQgNgEAAgZQgCgNAAgSQgNgEg+hMIgGgFQhGhSAIgNIAAgBQAKgOBogPIAGgBQBbgMAigCQATgBBCASIAeAHQBKAVAmAMQAQAFAJA6IAHAXQAPAugBA1QAAAAAAAAQgBAAAAABQgBAAgBAAQAAAAgCAAQgNALhFAGIgkAEQg8ADgOADQgLAEgSgKQgUgKgOABQgQAAglARIgMAFQgUAIgLAAIgEAAg");
	this.shape_217.setTransform(17.6,-42.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(59,59,59,0.459)").s().p("AhnCSQgNgEABgaQgCgOAAgSQgMgEg/hOIgHgFQhHhUAIgNIAAgBQALgOBrgPIAFgBQBdgMAigCQATgBBEATIAeAIQBMAVAmAMQAQAFAJA8IAGAYQAPAugBA2QAAAAgBABQAAAAgBAAQAAAAgBABQgBAAgBAAQgOAKhGAGIgkAEQg+ACgOAEQgLAEgSgKQgVgKgOAAQgQAAgmASIgLAFQgVAIgLAAIgFAAg");
	this.shape_218.setTransform(17.6,-43.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(59,59,59,0.439)").s().p("AhqCUQgNgDABgbQgCgOAAgTQgMgEhAhQIgGgGQhIhWAIgMIAAgBQALgOBtgPIAFgBQBfgMAigCQAUgBBFAUIAfAIQBNAVAmANQAQAFAJA9IAGAZQAOAvgBA3QAAAAAAABQAAAAgBAAQAAAAgBABQgBAAgBAAQgPAKhHAGIgmADQg/ADgOAEQgKADgTgKQgVgLgOABQgQAAgnASIgMAFQgVAJgLAAIgFgBg");
	this.shape_219.setTransform(17.6,-44.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(60,60,60,0.424)").s().p("AhsCXQgOgEACgbQgCgPABgTQgMgEhBhSIgHgGQhJhYAJgNIAAAAQALgOBvgPIAFgBQBigMAigCQATgBBHAUIAfAIQBOAWAnAOQAQAFAJA/IAGAZQANAwgBA4QAAABAAAAQAAAAgBAAQgBABAAAAQgBAAgBAAQgPAKhJAGIgmADQhBACgNAEQgLAEgTgLQgWgLgOAAQgQABgoASIgMAFQgWAKgLAAIgEgBg");
	this.shape_220.setTransform(17.6,-45.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(60,60,60,0.408)").s().p("AhvCaQgNgEABgcQgBgPABgUQgLgEhDhTIgHgIQhKhaAJgMIAAgBQALgNBxgPIAGgBQBjgMAigCQAUgBBIAVIAgAIQBQAXAnANQAQAFAIBBQAEAMACAOQANAxgBA5QAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgCAAQgPAKhKAFIgnADQhCADgNADQgLAEgUgLQgWgLgOAAQgRABgoATIgMAFQgWAKgLAAIgFgBg");
	this.shape_221.setTransform(17.6,-47);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(60,60,60,0.388)").s().p("AhyCdQgNgEABgdQgBgPACgVQgLgEhEhVIgHgIQhLhcAJgMQAMgNBzgQIAGgBQBlgMAigBQAUgBBJAVIAhAIQBRAYAoANQAPAFAJBDIAFAaQANAzgBA6QAAABgFABQgQAKhMAEIgnADQhDADgOADQgLAEgTgLQgXgMgOAAQgRABgpAUIgMAFQgXAJgLAAIgFAAg");
	this.shape_222.setTransform(17.6,-48.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(60,60,60,0.373)").s().p("Ah0CgQgOgFACgdQgBgQABgVQgKgEhFhYIgHgHQhMhfAJgLIAAgBQAMgNB2gPIAGgBQBngMAigBQATgBBMAVIAgAJQBTAYAoAOQAQAFAIBEIAGAbQAMA0gCA7QAAABgFABQgQAJhNAFIgoADQhEACgOAEQgLADgUgLQgXgMgPAAQgQABgqAUIgMAFQgXAKgLAAIgFAAg");
	this.shape_223.setTransform(17.6,-49.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(61,61,61,0.357)").s().p("Ah3CjQgOgFACgeQgBgQACgWQgKgDhGhaIgHgIQhNhhAKgLIAAgBQAMgMB3gPIAGgBQBqgNAigBQATgBBNAWIAhAKQBUAYApAOQAPAFAJBGIAFAcQALA0gBA9QAAABgFABQgRAJhOAEIgpADQhGACgNAEQgLADgUgLQgYgNgPAAQgQABgrAVIgNAFQgXAKgLAAIgFAAg");
	this.shape_224.setTransform(17.6,-50.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(61,61,61,0.337)").s().p("Ah5CmQgPgFADgfQAAgRACgWQgKgEhIhcIgGgIQhPhiAKgMQANgMB5gPIAHgBQBrgNAigBQAUgBBOAXIAhAJQBWAZApAPQAQAFAHBHIAGAdQALA1gCA+QAAABgFABQgRAJhQAEIgpACQhHACgOAEQgLAEgVgMQgXgNgPAAQgRABgrAVIgNAFQgZALgLAAIgEAAg");
	this.shape_225.setTransform(17.5,-51.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(61,61,61,0.322)").s().p("Ah8CoQgPgEADggQAAgRACgXQgIgEhKheIgGgIQhQhlAKgLIAAAAQANgMB8gPIAGgBQBugNAigBQATgBBQAYIAiAJQBXAaAqAPQAPAFAIBJIAFAdQAKA2gBA/QAAABgFABQgSAJhRAEIgqACQhJACgNADQgLAEgVgMQgYgNgQAAQgQAAgsAWIgNAGQgZALgMAAIgEgBg");
	this.shape_226.setTransform(17.5,-52.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(61,61,61,0.306)").s().p("Ah/CrQgOgEADghQAAgRACgYQgIgDhLhhIgGgIQhRhnALgLIAAAAQANgMB+gPIAGgBQBwgMAigCQATAABRAYIAjAJQBYAbAqAPQAQAFAHBLIAFAdQAKA4gBA/QAAACgGABQgSAIhTAEIgqACQhKACgNADQgMAEgVgMQgYgOgQAAQgRAAgsAXIgOAGQgYALgMAAIgFgBg");
	this.shape_227.setTransform(17.5,-54);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(62,62,62,0.286)").s().p("AiCCuQgOgFADghQAAgSADgYQgIgDhLhjIgHgJQhShpALgKQANgMCAgPIAHgBQBxgNAjgBQATAABSAYIAkAKQBaAbAqAPQAPAFAIBNIAEAeQAKA5gBBAQAAACgGABQgTAIhUADIgrACQhLACgNAEQgMAEgVgNQgZgOgQAAQgRAAgtAXIgOAGQgZAMgMAAIgFgBg");
	this.shape_228.setTransform(17.5,-55.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(62,62,62,0.271)").s().p("AiFCxQgOgFADgiQABgTADgYQgHgEhNhkIgHgJQhThrALgLQAOgLCCgPIAGgBQB0gNAigBQAUAABUAZIAkAKQBbAcAqAPQAQAFAHBOIAEAfQAKA6gCBBQAAACgGABQgTAIhVADIgsACQhNABgMAEQgMAEgWgNQgZgOgQAAQgRAAguAXIgOAHQgZAMgMAAIgGgBg");
	this.shape_229.setTransform(17.5,-56.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(62,62,62,0.255)").s().p("AiHC0QgPgFAEgjQAAgTAEgZQgHgDhOhnIgHgJQhVhtAMgKIAAgBQAOgLCEgPIAHgBQB2gMAigBQAUgBBVAaIAkAKQBdAdArAPQAPAFAIBQIAEAgQAIA6gBBDQAAABgGABQgTAIhXADIgtACQhOABgMAEQgMAEgXgNQgZgPgQAAQgSAAguAYIgOAHQgaALgMAAIgFAAg");
	this.shape_230.setTransform(17.5,-57.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(62,62,62,0.239)").s().p("AiKC3QgPgFAEgkQABgTAEgaQgHgDhPhpIgHgKQhWhvAMgKIAAAAQAPgLCGgPIAHgBQB4gMAigBQAUgBBWAaIAlALQBeAdAsAQQAPAFAHBSIAEAfQAIA8gBBEQAAABgGACQgUAHhZADIgsABQhQACgMADQgNAFgWgOQgagPgQAAQgSAAgvAYIgOAHQgbAMgMAAIgFAAg");
	this.shape_231.setTransform(17.5,-58.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(63,63,63,0.22)").s().p("AiMC5QgPgFAEglQABgTAEgaQgGgDhRhsIgHgJQhWhyAMgJQAPgLCIgPIAHgBQB6gNAiAAQAUgBBYAbIAmALQBfAdAsAQQAPAGAHBTIAEAgQAHA9gBBFQAAACgGABQgVAHhZACIguACQhRABgMAEQgMAEgXgOQgbgQgQAAQgSABgwAZIgOAGQgbANgNAAIgEgBg");
	this.shape_232.setTransform(17.5,-59.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(63,63,63,0.204)").s().p("AiQC9QgPgGAFglQABgUAEgbQgFgDhShuIgHgJQhYh0ANgJIAAAAQAPgKCKgPIAHgBQB8gNAigBQAUAABaAbIAmALQBhAeAsARQAPAFAHBVIADAhQAIA+gCBGQAAABgGABQgVAHhbADIguABQhTABgMAEQgMAEgXgOQgagQgSAAQgRAAgxAZIgPAHQgbANgNAAIgFAAg");
	this.shape_233.setTransform(17.5,-61);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(63,63,63,0.188)").s().p("AiSC/QgPgFAFgnQABgUAFgbQgFgDhUhwIgHgKQhZh1ANgJIAAgBQAQgJCMgPIAHgBQB/gNAhgBQAVAABbAcIAmALQBiAfAtAQQAPAFAHBXIADAiQAHA/gCBHQAAABgGABQgVAHhdACIgvABQhUABgLAEQgNAFgYgPQgagRgRAAQgSABgyAaIgOAHQgdANgMAAIgFgBg");
	this.shape_234.setTransform(17.5,-62.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(63,63,63,0.169)").s().p("AiVDCQgPgFAFgnQACgVAFgbQgFgEhVhyIgHgKQhah4ANgIQAQgKCPgPIAHgBQCAgNAigBQAUAABdAdIAnALQBkAgAtAQQAPAGAGBYIADAiQAHBAgCBIQAAACgHABQgVAHheABIgvABQhWABgLAEQgNAFgYgQQgbgQgSAAQgRAAgzAbIgOAHQgcANgNAAIgGgBg");
	this.shape_235.setTransform(17.5,-63.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(64,64,64,0.153)").s().p("AiXDFQgQgGAFgnQACgVAGgcQgFgEhWh0IgHgKQhbh6AOgJQAQgJCRgPIAHgBQCCgNAigBQAUAABeAdIAoAMQBlAgAtARQAPAFAHBaIADAjQAFBBgBBJQAAACgHABQgWAHhfABIgwABQhXABgMADQgMAFgZgPQgbgSgSAAQgSABgzAbIgPAHQgdAOgNAAIgEgBg");
	this.shape_236.setTransform(17.5,-64.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(64,64,64,0.137)").s().p("AiaDIQgQgGAGgpIAHgyIhbh5IgHgKQhch9AOgIIAAAAQAQgJCTgPIAIgBQCEgNAhgBQAVAABgAeIAnAMQBnAgAuASQAPAFAGBcIADAjQAFBCgCBKQAAACgGABQgXAHhhABIgwAAQhYABgMAEQgNAFgYgQQgcgSgSAAQgSAAg0AcIgPAHQgdAPgNAAIgFgBg");
	this.shape_237.setTransform(17.5,-65.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(64,64,64,0.118)").s().p("AidDLQgQgGAGgpQADgWAFgdQgDgEhZh4IgHgKQhdh/AOgIQARgJCVgPIAHgBQCHgNAhAAQAVgBBhAfIAoAMQBoAhAuASQAQAFAFBeIADAkQAFBDgCBLQAAACgHABQgXAGhiABIgxAAQhaABgLAEQgNAEgZgQQgcgSgSAAQgSABg1AcIgPAHQgeAOgNAAIgFAAg");
	this.shape_238.setTransform(17.5,-66.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(64,64,64,0.102)").s().p("AigDOQgQgGAHgrQACgWAGgdIhdh+IgHgLQheiBAOgHQARgJCYgPIAHgBQCJgNAhAAQAVgBBiAfIApANQBpAiAvARQAPAGAGBfIACAlQAFBEgCBMQAAACgHABQgYAGhjAAIgyABQhbAAgLAEQgNAFgagRQgcgSgSAAQgTAAg1AdIgPAIQgeAOgOAAIgFAAg");
	this.shape_239.setTransform(17.5,-68);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(65,65,65,0.086)").s().p("AiiDQQgRgGAHgrQADgWAGgfIhdiAIgIgKQhfiDAOgHIAAgBQASgICZgPIAIgBQCKgNAiAAQAVgBBjAgIAqANQBrAiAvASQAPAFAFBhIADAmQADBFgBBNQAAACgIABQgXAGhlAAIgzAAQhcABgLADQgNAFgagQQgdgTgSAAQgTAAg2AdIgPAIQgfAPgNAAIgFgBg");
	this.shape_240.setTransform(17.5,-69.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(65,65,65,0.067)").s().p("AilDUQgRgHAHgrQADgXAHgfIheiDIgIgKQhgiFAPgHQARgICcgPIAHgBQCNgOAiAAQAUAABmAgIAqANQBsAjAvASQAPAGAGBiIACAmQADBGgCBPQAAABgHACQgYAFhnAAIgzAAQheABgKADQgOAFgagRQgdgTgTAAQgSAAg3AeIgQAIQgeAPgOAAIgFAAg");
	this.shape_241.setTransform(17.5,-70.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(65,65,65,0.051)").s().p("AioDWQgRgGAIgtQADgXAHgfQgCgEhdiBIgIgLQhhiHAPgHQASgICdgPIAIgBQCPgNAhAAQAVAABnAhIAqANQBuAkAwASQAPAFAFBlIACAmQADBHgCBQQAAABgIACQgYAFhoAAIg0AAQhfAAgKAEQgOAFgagSQgegTgTAAQgSAAg4AeIgQAJQgfAPgOAAIgFgBg");
	this.shape_242.setTransform(17.5,-71.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(65,65,65,0.035)").s().p("AiqDZQgRgGAIgtQADgYAHggQgBgDhfiEIgIgLQhiiJAPgHQATgHCggPIAHgBQCRgNAigBQAVAABoAiIArANQBvAkAwATQAPAFAFBnIACAnQACBIgCBQQAAACgHACQgaAEhpAAIg0AAQhhAAgKADQgOAGgbgSQgdgUgTAAQgTAAg5AfIgPAIQggAQgOAAIgFgBg");
	this.shape_243.setTransform(17.4,-72.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(66,66,66,0.016)").s().p("AitDcQgRgGAHgvIALg4QAAgEhgiFIgIgLQhkiMAQgGQATgHCigPIAIgBQCSgOAiAAQAVAABpAiIAsAOQBxAlAwATQAPAFAFBoIACAoQABBJgBBRQAAACgIACQgaAEhqAAIg1gBQhiAAgLAEQgNAFgcgSQgegUgTAAQgTAAg5AfIgQAJQghAQgNAAIgFgBg");
	this.shape_244.setTransform(17.5,-73.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(66,66,66,0)").s().p("AiwDfQgRgHAIgvQAEgYAIghQAAgEhqiTQhkiNAQgGQATgHCkgPQCcgPAiAAQAZAACTAxQByAlAxATQASAHADCRQACBKgCBSQAAAJiOgCQiXgBgMAEQgOAGgcgTQgegUgUAAQgTAAg6AgQgtAZgRAAIgGgBg");
	this.shape_245.setTransform(17.4,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_186}]},4).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).wait(33));

	// Layer_1
	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#333333").s().p("Ag1AjQgWgOgBgVQABgTAWgPQAXgPAeAAQAgAAAWAPQAWAPAAATQAAAVgWAOQgWAPggAAQgeAAgXgPg");
	this.shape_246.setTransform(1.2,-5.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(51,51,51,0.98)").s().p("AgBA2IgFgBIgPgCQgHgCgHgDQgLgDgKgIIgHgGQgQgPABgQIAAAAQABgWAYgPQAIgGAKgEQARgFAUACIABAAQAZADATAJIAKAGQAOALAFANQADAHAAAGIgBAFQgDAMgIAJQgFAFgIAGIgCABQgGAFgIADQgKAEgLAAIgMABIgGAAg");
	this.shape_247.setTransform(0.1,-6.9);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(51,51,51,0.957)").s().p("AgDA5IgFgBIgQgDIgNgFQgLgEgKgKIgIgGQgPgRAAgQIABAAQADgXAXgQQAKgHAKgDQARgFAUAEIABAAQAbAGATAJIAKAHQAPALAEAOQADAHgBAHIgBAGQgEAMgIAJIgNAMIgCABQgHAFgIADQgKAEgMAAIgFAAIgOgBg");
	this.shape_248.setTransform(-1.1,-8.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(51,51,51,0.937)").s().p("AAPA+QgKABgJgDIgGgBIgQgEQgIgCgGgEQgKgEgLgMIgHgHQgQgSABgQIAAgBQAFgYAYgQQAKgHAKgDQASgGAVAIIABAAQAcAIASAJIALAIQAPAMAEAOQADAHgBAIQAAADgCADQgFAMgIAJIgNANIgCACQgIAGgIADQgJADgJAAIgFgBg");
	this.shape_249.setTransform(-2.2,-10.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(51,51,51,0.914)").s().p("AANBDQgKAAgKgDIgFgCIgRgFQgIgDgGgEQgKgEgLgOIgHgHQgQgUABgRQAHgZAYgRQALgIALgDQARgFAXAKIAAAAIAvAUIALAIQAPANAFAQQADAHgCAIIgCAGQgGANgIAJIgOAOIgCACQgIAGgJADQgHACgIAAIgJAAg");
	this.shape_250.setTransform(-3.3,-11.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(51,51,51,0.894)").s().p("AAMBHQgKAAgKgEIgGgCIgRgFQgIgEgGgFQgKgEgLgPIgIgJQgQgVACgRIAAAAQAIgbAZgRQALgIALgDQASgFAXAMIABAAIAwAXIALAJQAQANAEARQADAIgCAIIgDAGQgHAOgIAJIgOAPIgDACQgHAHgKACQgHADgHAAIgLgCg");
	this.shape_251.setTransform(-4.5,-13.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(51,51,51,0.871)").s().p("AALBMQgKgBgLgFIgGgCIgSgGQgIgEgGgGQgKgEgLgRIgIgJQgQgWACgSIABAAQAJgcAagSQAMgJALgDQASgEAYAOIABAAIAwAaIAMAKQAQAOAEARQADAIgDAJIgCAGQgJAPgIAIIgPARIgCABQgIAIgKADQgGACgHAAQgGAAgHgCg");
	this.shape_252.setTransform(-5.6,-15.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(51,51,51,0.851)").s().p("AAJBQQgJgBgMgFIgHgDIgSgHQgIgEgGgHQgJgEgMgTIgIgJQgQgYADgSIAAgBQALgdAagSQANgJALgDQATgFAYARIABAAQAgAUARAJIAMAKQAQAPAFASQACAJgDAJIgDAGQgKAPgIAJIgPARIgCACQgIAJgKACQgGACgGAAQgIAAgIgDg");
	this.shape_253.setTransform(-6.7,-16.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(51,51,51,0.831)").s().p("AAIBVQgJgCgNgGIgGgDIgTgIQgJgEgFgIQgKgEgLgVIgIgKQgRgZADgTQANgeAbgTQANgJAMgDQATgFAZATIABAAQAgAXASAJIAMALQARAQAEASQACAKgDAJIgDAHQgLAPgIAJIgQASIgCACQgJAJgLADIgKABQgJAAgJgDg");
	this.shape_254.setTransform(-7.9,-18.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(51,51,51,0.808)").s().p("AAHBZQgKgCgNgHIgHgDIgTgJQgJgEgFgJQgJgEgMgWIgIgLQgRgbADgTIAAAAQAPggAbgTQAOgKAMgDQATgEAbAVIAAAAQAiAaARAJIANAMQAQAQAEAUQADAKgEAJQgBAEgDADQgMAQgIAIIgQAUIgCACQgJAKgLACIgJABQgKAAgKgEg");
	this.shape_255.setTransform(-9,-20.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(51,51,51,0.788)").s().p("AAFBeQgKgDgNgHIgHgEIgUgKQgIgFgFgIQgJgFgNgYIgIgLQgRgdAEgTIAAgBQAQggAcgUQAPgKAMgDQATgFAbAYIABAAQAiAdARAJIAOAMQAQASAEAUQADAKgFAKQgBAEgCADIgWAZQgFAGgLAPIgCACQgJAKgMADIgJABQgKAAgMgFg");
	this.shape_256.setTransform(-10.1,-21.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(51,51,51,0.765)").s().p("AAEBjQgKgDgOgJIgHgDIgVgLQgIgFgFgKQgJgFgNgZIgIgMQgSgfAFgTIAAAAQASgiAcgUQAQgLAMgDQAUgEAcAaIABAAQAjAfAQAJQAIAGAGAHQARASAEAWQACALgFAKIgEAHIgWAZIgRAWIgCACQgJALgNACIgIABQgLAAgMgFg");
	this.shape_257.setTransform(-11.2,-23.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(51,51,51,0.745)").s().p("AADBnQgLgEgOgJIgHgEQgKgFgLgGQgJgGgFgKQgIgFgOgcIgHgMQgSggAFgUIAAAAQATgjAdgVQAQgLANgDQATgEAeAcIAAABQAkAiARAIIAOAPQARASAEAXQACALgFAKIgEAHIgYAaQgGAGgLARIgDACQgJAMgNACIgIABQgMAAgMgGg");
	this.shape_258.setTransform(-12.4,-25);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(51,51,51,0.722)").s().p("AABBrQgLgEgOgJIgHgFIgWgMQgJgGgFgLQgIgFgOgdIgHgNQgTgiAGgUIAAAAQAVglAdgVQARgMANgCQAUgEAeAeIABABQAlAlAQAIIAOAPQASAUAEAXQACAMgGAKIgFAHIgYAbQgGAGgMASIgCACQgKANgNACIgIABQgMAAgOgIg");
	this.shape_259.setTransform(-13.5,-26.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(51,51,51,0.702)").s().p("AAABwQgLgFgPgKIgHgFIgXgNQgJgGgEgMQgIgFgOgfIgIgOQgSgjAFgUIABgBQAWglAegVQARgNANgDQAVgEAfAhIAAABQAmAoARAIIAOAQQASAUAEAZQACALgGALIgFAIIgaAbQgGAGgNATIgCACQgKANgOACIgHABQgNAAgOgIg");
	this.shape_260.setTransform(-14.6,-28.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(51,51,51,0.682)").s().p("AgBB0QgMgEgPgMIgIgFIgWgOQgKgHgEgMQgIgFgOghIgIgOQgTgmAHgTIAAgBQAYgnAegVQASgOAOgCQAUgEAgAkIABAAQAnArAQAIIAPAQQASAWADAZQACAMgGALQgCAEgEAEIgbAbQgGAHgMATIgDADQgKAOgOACIgGAAQgOAAgPgJg");
	this.shape_261.setTransform(-15.7,-30);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(51,51,51,0.659)").s().p("AgCB5QgMgFgQgMIgIgGIgXgPQgJgHgFgNQgHgFgPgiIgIgQQgTgnAHgTIAAgBQAagoAfgWQATgOANgDQAVgDAhAmIABAAQAnAuAQAIQAJAIAHAJQASAWADAaQACANgHALQgCAEgDAEIgdAcQgGAGgNAVIgCADQgKAOgPACIgGABQgPAAgPgKg");
	this.shape_262.setTransform(-16.9,-31.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(51,51,51,0.639)").s().p("AgEB9QgMgFgQgNIgIgGQgLgHgNgJQgKgHgEgOQgHgFgPgkIgIgQQgTgpAHgUIABAAQAbgqAfgWQAUgPAOgCQAVgDAhAoIABAAQApAxAPAIQAJAIAHAKQATAWADAcQACANgIALIgGAIQgWAVgHAIQgGAGgOAWIgCADQgLAPgPABIgGABQgPAAgQgLg");
	this.shape_263.setTransform(-18,-33.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(51,51,51,0.616)").s().p("AgFCCQgMgGgRgOIgIgGIgYgQQgKgIgEgOQgHgGgPgmIgIgQQgUgrAIgUIAAgBQAdgqAggXQAUgPAOgCQAWgEAiArIABAAQApAzAQAJQAJAJAHAJQATAXADAdQACANgIAMIgGAIQgYAWgHAIQgGAGgOAXIgCADQgLAPgQACIgGAAQgPAAgRgLg");
	this.shape_264.setTransform(-19.1,-34.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(51,51,51,0.596)").s().p("AgGCGQgNgGgQgOIgJgHIgZgRQgKgIgEgPQgGgGgQgoIgIgRQgTgsAHgUIABgBQAegsAhgXQAVgQAOgCQAWgDAjAtIAAAAQArA2APAJQAKAJAHAKQATAXADAfQACANgJAMQgCAFgEADQgZAWgHAIQgGAGgOAYIgDADQgLARgQABIgGABQgQAAgRgNg");
	this.shape_265.setTransform(-20.3,-36.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(51,51,51,0.573)").s().p("AgICLQgMgHgSgPIgIgHIgagSQgKgJgEgPQgGgGgQgpIgIgSQgUguAJgUIAAgBQAggtAhgYQAVgQAPgCQAWgDAkAvIABAAQArA5APAJQAKAJAHALQAUAYADAfQABAOgIAMIgHAJQgaAWgHAIQgGAGgPAZIgCADQgMARgRACIgFAAQgRAAgSgNg");
	this.shape_266.setTransform(-21.4,-38.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("rgba(51,51,51,0.553)").s().p("AgJCPQgNgHgRgQIgJgHIgagTQgKgJgEgQQgGgGgQgrIgIgSQgVgwAJgVIABgBQAhguAigYQAWgRAPgCQAWgDAlAyIABAAQAsA8APAJQAKAKAHAKQAUAZADAgQABAPgJAMIgHAJQgbAXgHAIQgGAGgPAaIgDADQgLASgSABIgEABQgSAAgTgPg");
	this.shape_267.setTransform(-22.5,-39.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("rgba(51,51,51,0.533)").s().p("AgKCUQgOgIgRgQIgJgIIgbgUQgLgJgDgRQgGgGgQgtIgIgTQgVgxAJgVIABgBQAjgvAigZQAXgRAPgCQAXgDAlA0IABABQAtA+APAJQAKAKAIALQATAaADAhQACAOgKANIgHAJQgdAYgGAHQgHAHgPAbIgDADQgMASgRACIgEAAQgTAAgTgPg");
	this.shape_268.setTransform(-23.6,-41.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("rgba(51,51,51,0.51)").s().p("AgLCYQgOgIgSgRIgJgIIgcgVQgKgJgEgSQgFgGgRgvIgIgSQgVg0AKgVIAAgBQAlgxAjgZQAXgSAQgBQAXgDAmA2IABABQAuBBAOAJQALAKAIAMQAUAaACAiQACAPgKANQgDAFgFAEQgeAYgGAIQgHAGgQAcIgCAEQgMATgSABIgEAAQgTAAgUgQg");
	this.shape_269.setTransform(-24.8,-43.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("rgba(51,51,51,0.49)").s().p("AgNCdQgOgJgSgSIgKgIIgbgVQgLgKgDgTQgGgHgRgvIgIgTQgVg2AKgVIABgBQAmgzAjgZQAYgSAQgCQAXgCAnA4IABABQAvBEAOAJQALAKAIAMQAUAbADAjQABAQgKAOIgIAIQgfAZgHAIQgGAGgQAdIgDAEQgMATgTABIgEABQgUAAgUgRg");
	this.shape_270.setTransform(-25.9,-44.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("rgba(51,51,51,0.467)").s().p("AgOChQgOgJgTgSIgKgJIgcgWQgLgLgDgTQgFgHgRgxIgJgUQgVg3ALgWIAAgBQAogzAkgaQAZgSAQgCQAXgDAoA7IABABQAwBHAOAJQALALAIAMQAVAcACAkQABAQgLAOIgIAJQggAZgHAHQgGAHgRAeIgCAEQgNATgTACIgEAAQgUAAgVgSg");
	this.shape_271.setTransform(-27,-46.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("rgba(51,51,51,0.447)").s().p("AgQCmQgOgKgTgTIgKgJIgdgXQgLgLgDgTQgFgIgRgzIgJgUQgVg5ALgWIAAgBQAqg1AkgaQAagTAQgBQAXgDAqA9IAAABQAxBKAOAJQALALAIANQAVAcACAlQACAQgMAPIgIAJQghAagHAHQgHAHgRAfIgCADQgNAVgUABIgEAAQgUAAgWgSg");
	this.shape_272.setTransform(-28.1,-48.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("rgba(51,51,51,0.427)").s().p("AgRCqQgOgJgUgVIgKgJIgdgYQgMgLgCgUQgFgIgSg1IgIgVQgWg6ALgWIABgBQArg2AlgbQAagTAQgCQAYgCAqBAIABAAQAyBNANAJQAMALAIANQAVAeACAmQACAQgMAPIgJAJQgiAagHAIQgHAGgRAgIgDAEQgNAVgUACIgDAAQgVAAgXgUg");
	this.shape_273.setTransform(-29.3,-49.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("rgba(51,51,51,0.404)").s().p("AgTCvQgOgKgUgVIgKgKIgegZQgMgLgCgVQgFgIgSg2IgIgWQgWg8AMgWIAAgBQAtg4AlgbQAbgUARgBQAXgCAsBCIAAAAQAzBQANAIQAMAMAJAOQAVAeACAnQABARgMAPIgJAJQgkAbgGAHQgHAHgSAhIgCAEQgOAWgUABIgDAAQgWAAgYgUg");
	this.shape_274.setTransform(-30.4,-51.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("rgba(51,51,51,0.384)").s().p("AgUCzQgOgKgVgWIgKgKIgfgaQgLgLgDgWQgEgIgSg4IgJgWQgWg+AMgXIABgBQAug4AmgcQAbgUARgCQAYgCAtBFIAAAAQA0BTANAIQAMANAJAOQAVAfACAnQABASgMAPQgEAFgGAEQglAcgGAHQgHAHgSAiIgDAEQgNAWgWACIgDAAQgWAAgYgWg");
	this.shape_275.setTransform(-31.5,-53.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("rgba(51,51,51,0.361)").s().p("AgVC4QgPgLgVgXIgLgKIgfgaQgLgMgDgXQgEgIgSg6IgJgXQgWg/AMgXIABgBQAvg6AngcQAcgVARgBQAZgCAtBHIAAAAQA1BWANAIQAMANAJAOQAWAgACApQABARgNAQQgEAFgGAEQgmAdgHAHQgGAGgTAkIgDAEQgNAXgWABIgCAAQgXAAgZgWg");
	this.shape_276.setTransform(-32.6,-54.7);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("rgba(51,51,51,0.341)").s().p("AgXC8QgOgLgWgXIgKgLIgggbQgMgNgCgXQgEgIgTg8IgIgXQgXhBANgXIABgBQAxg7AngdQAdgVARgBQAZgCAuBJIAAABQA2BYAMAIQANANAJAPQAWAgACAqQABASgOAQIgKAKQgnAcgGAHQgHAHgTAkIgDAFQgOAXgWABIgDAAQgXAAgagXg");
	this.shape_277.setTransform(-33.8,-56.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("rgba(51,51,51,0.318)").s().p("AgYDBQgPgMgWgYIgKgLIghgcQgMgNgCgYQgDgIgTg9IgJgYQgXhDANgXIABgCQAzg8AngdQAegWASgBQAZgCAuBMIABABQA3BbAMAIQANAOAJAPQAWAhACArQABASgOAQIgLAKQgoAdgGAHQgHAHgUAlIgCAEQgPAZgWABIgDAAQgYAAgagYg");
	this.shape_278.setTransform(-34.9,-58);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("rgba(51,51,51,0.298)").s().p("AgZDFQgQgMgWgZIgLgLIgggdQgNgNgCgZQgDgIgTg/IgJgZQgXhFAOgWIAAgCQA1g9AogeQAegWASgBQAZgCAwBOIAAABQA4BeAMAIQANAOAJAPQAXAiABAsQABATgOAQIgLAKQgqAegGAHQgHAHgTAmIgDAEQgPAZgXABIgCAAQgYAAgbgZg");
	this.shape_279.setTransform(-36,-59.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("rgba(51,51,51,0.278)").s().p("AgaDKQgQgNgWgZIgMgMIghgeQgMgNgCgZIgXhKIgJgZQgXhHAOgXIABgBQA2g/AogdQAggYASgBQAZgBAxBQIAAABQA5BhALAIQAOAOAJAQQAXAjABAsQABATgPARQgEAFgHAFQgrAfgGAGQgHAHgUAoIgDAEQgOAagYABIgCAAQgZAAgbgag");
	this.shape_280.setTransform(-37.2,-61.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("rgba(51,51,51,0.255)").s().p("AgcDOQgQgNgXgaIgLgMIgigfQgMgNgCgaIgXhLIgJgaQgXhJAOgXIABgBQA4hAApgeQAggYASgBQAagBAxBSIAAABQA6BkALAIQAOAOAKAQQAXAkABAuQABATgQARQgEAFgHAFQgsAfgGAHQgHAHgVAoIgCAFQgPAagZABIgBAAQgaAAgcgbg");
	this.shape_281.setTransform(-38.3,-63);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("rgba(51,51,51,0.235)").s().p("AgdDSQgQgNgXgbIgMgNIgigfQgNgOgCgbIgXhNIgIgaQgYhKAPgYIABgBQA5hBApgfQAhgYATgBQAZgBAzBVIAAABQA7BmALAIQAOAPAKARQAXAlABAuQABAUgQAQQgFAGgHAFQgtAggGAGQgHAHgVAqIgDAEQgPAbgZABIgCABQgZAAgdgdg");
	this.shape_282.setTransform(-39.4,-64.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("rgba(51,51,51,0.212)").s().p("AgfDXQgQgOgYgbIgLgOIgjgfQgNgPgCgbIgXhPIgIgbQgYhMAPgXIABgCQA7hCAqgfQAhgZATgBQAagBAzBXIAAABQA8BqALAIQAOAPAKARQAYAlABAvQAAAVgQARIgMALQgvAggFAGQgIAIgVAqIgDAFQgPAbgZABIgCAAQgaAAgegdg");
	this.shape_283.setTransform(-40.5,-66.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("rgba(51,51,51,0.192)").s().p("AggDcQgQgPgYgcIgMgOIgkggQgNgPgBgcIgXhRIgJgcQgYhNAQgYIABgBQA8hEAqgfQAigaAUAAQAagBA0BZIAAABQA9BtALAIQAOAPAKARQAYAmABAxQAAAUgQASIgNALQgwAhgFAGQgIAHgVAsIgDAFQgQAcgZAAIgCAAQgaAAgfgdg");
	this.shape_284.setTransform(-41.7,-67.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("rgba(51,51,51,0.169)").s().p("AgiDgQgQgOgZgdIgMgPIgkghQgNgPgBgdQgCgJgVhJIgJgdQgYhPAQgYIABgCQA9hEAsggQAigaAUgBQAagBA1BdIAAAAQA+BwALAIQAOAQAKARQAYAnABAxQABAVgRASIgNALQgxAhgGAHQgHAHgWAsIgDAFQgQAdgaABIgBAAQgbAAgggfg");
	this.shape_285.setTransform(-42.8,-69.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("rgba(51,51,51,0.149)").s().p("AgjDlQgQgPgZgeIgMgPIglgiQgOgPAAgeIgYhUIgIgdQgZhRAQgYIABgCQBAhGArghQAkgZATgBQAbgBA2BfIAAABQA/BxAKAJQAPAQAKARQAZAoAAAyQABAVgSATQgFAFgIAGQgyAigFAGQgIAIgWAtIgDAFQgRAegaAAIgBAAQgbAAghgfg");
	this.shape_286.setTransform(-43.9,-71.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("rgba(51,51,51,0.129)").s().p("AgkDpQgRgPgZgfIgNgPIglgjQgOgQAAgeQgCgJgWhNIgIgeQgZhSARgZIAAgBQBBhHAtghQAkgbAUAAQAbgCA2BhIAAABQBAB2AKAHQAPARALASQAYApABAyQAAAWgSATQgFAFgIAGQgzAjgGAGQgIAHgWAvIgDAFQgRAegbABIAAAAQgcAAghghg");
	this.shape_287.setTransform(-45,-72.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("rgba(51,51,51,0.106)").s().p("AgmDtQgRgQgZgfIgNgPIgmgkQgNgQgBgfQgBgJgWhPIgJgeQgZhUARgZIABgCQBDhIAsghQAlgcAUAAQAcgBA3BkIAAABQBBB3AKAIQAPARALATQAYApABA0QAAAWgSASQgGAGgIAGQg0AjgGAHQgHAHgYAvIgCAFQgRAfgcABIgBAAQgcAAgigig");
	this.shape_288.setTransform(-46.2,-74.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("rgba(51,51,51,0.086)").s().p("AgnDyQgRgQgaggIgNgQIgmgkQgOgRAAgfQgBgKgXhQIgJggQgZhVASgZIABgCQBEhJAtgiQAmgcAUAAQAcgBA4BmIAAABQBCB6AJAJQAQAQALAUQAZAqAAA0QAAAXgTATQgFAGgJAGQg1AjgGAHQgHAHgYAwIgDAGQgRAfgcABQgdgBgjgig");
	this.shape_289.setTransform(-47.3,-76.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("rgba(51,51,51,0.063)").s().p("AgoD3QgSgRgaghIgNgQIgnglQgOgRAAggQgBgKgXhSIgJggQgZhXASgZIABgCQBGhLAtgiQAmgcAVgBQAcAAA5BoIAAABQBDB9AJAIQAQASALATQAZArABA2QAAAXgTATIgPAMQg3AkgFAGQgIAIgYAxIgDAGQgRAggcAAIgBAAQgeAAgigjg");
	this.shape_290.setTransform(-48.4,-77.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("rgba(51,51,51,0.043)").s().p("AgpD7QgSgRgbgiIgNgQIgngnQgPgQAAgiQAAgJgXhUIgJghQgahZATgYIAAgDQBIhMAugiQAngdAVAAQAcgBA6BrIAAABQBECAAJAIQAQASALATQAZAsABA3QAAAXgUATQgGAHgJAFQg4AlgFAGQgIAIgYAyIgDAGQgSAhgdAAIgBAAQgdAAgjgkg");
	this.shape_291.setTransform(-49.6,-79.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("rgba(51,51,51,0.02)").s().p("AgrEAQgSgSgbgjIgNgQIgognQgPgSAAghQAAgKgXhWIgJggQgahcATgZIABgBQBJhOAugjQAogeAVABQAdgBA6BtIAAABQBFCDAJAIQAQASALAVQAaArAAA4QAAAYgUAUQgGAGgJAGQg5AlgFAGQgIAIgZA0IgDAFQgSAhgdABQgfAAgkglg");
	this.shape_292.setTransform(-50.7,-81.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("rgba(51,51,51,0)").s().p("AgSBBQgJgFgQgMIgRgKQgGgFAAgJQAAgCgNgdQgMgYAJgHQA5gjAUgBQALAAAZAcQAdAiAEACQAWAOAAAUQAAAIgPAHIgaAKQgEACgLAPQgIAJgMAAQgNAAgPgKg");
	this.shape_293.setTransform(-51.8,-82.7,2.395,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_246}]}).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-10.2,15.3,10);


(lib.reel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(3,1,1).p("ACQoEQAACJgpBgQgoBhg5AAQg4AAgohhQgohhAAiIQAAiIAohhQAohhA4AAQA6AAAnBhQApBhAACIgAIog+Qh8A3hqACQhoADgXg1QgWg0BIhLQBIhNB9g2QB8g2BqgDQBpgCAWA0QAYA1hKBKQhGBMh/A3gAOTAAQAAF7kMEMQkMEMl7AAQl6AAkMkMQkMkMAAl7QAAl6EMkMQEMkMF6AAQF7AAEMEMQEMEMAAF6gAG8EwQBVBrAeBlQAdBkgsAkQgtAjhcgxQhcg0hVhqQhVhpgehmQgdhlAtgjQAsgkBcAzQBbAxBWBrgAmRlnQB4BABDBSQBCBRgbAzQgcAxhngKQhpgLh4hBQh3g/hDhRQhDhTAcgxQAagzBpALQBmAJB6BCgAjNHiQhTBthbA0QhaA1gugjQgtgjAahkQAchnBRhrQBUhtBag1QBag1AuAjQAuAjgbBkQgbBmhSBtg");
	this.shape.setTransform(-0.6,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AqGKHQkMkMAAl7QAAl6EMkMQEMkMF6AAQF7AAEMEMQEMEMAAF6QAAF7kMEMQkMEMl7AAQl6AAkMkMgAj7CaQhbA1hTBtQhRBrgbBnQgbBlAtAiQAuAjBag1QBbg0BShtQBThtAahlQAchlgvgiQgSgPgZAAQgmAAg2AggACDCFQguAjAeBmQAeBlBVBqQBUBpBdA0QBbAxAugjQAsgkgehkQgdhmhVhqQhWhrhbgxQg2gegmAAQgaAAgSAPgAKglyQhqADh9A2Qh8A2hJBNQhHBMAWAzQAXA1BogDQBpgCB9g2QB+g4BHhMQBJhKgXg1QgVgyhjAAIgHAAgAr0mKQgcAxBDBTQBDBSB3A+QB4BBBpAMQBnAJAcgxQAbgzhDhQQhChSh4hBQh6hChmgJQgUgCgQAAQhJAAgWAqgAhbrtQgnBhAACIQAACIAnBhQApBhA4ABQA5gBAohhQAohgAAiJQAAiIgohhQgnhgg6AAQg4AAgpBgg");
	this.shape_1.setTransform(-0.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.6,-93.3,186,186);


(lib.projectorbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s("#CCCCCC").ss(1.5,1,1).rc(-5.4,-3.15,10.8,6.3,0,0,3.15,3.15);
	this.shape.setTransform(151.6,198.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#CCCCCC").ss(1.5,1,1).rc(-19.65,-16.5,39.3,33,16.5,0,0,16.5);
	this.shape_1.setTransform(238.8,64.7,0.682,1.404,0,0,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1.5,1,1).rc(-5.3,-37.5,10.6,75,0,5.3,5.3,0);
	this.shape_2.setTransform(196.3,68.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s("#CCCCCC").ss(1.5,1,1).rc(-26.05,-17,52.1,34,0,17,17,0);
	this.shape_3.setTransform(221,65.8,0.692,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s("#CCCCCC").ss(1.5,1,1).rc(-19.65,-16.5,39.3,33,16.5,0,0,16.5);
	this.shape_4.setTransform(145.1,66,1.062,0.942,0,0,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(1.5,1,1).p("AGwjcQAAAOgLAKQgKALgOAAQgPAAgKgLQgKgKAAgOQAAgPAKgKQAKgKAPAAQAOAAAKAKQALAKAAAPgAgdBDIgVAMAgdBDQgCASgTgGQADgJACgBQAIACAIgEgAgmBEQADACAGgDIAAAAAgtBFIAHgBAkBiMQBaAAA/A6QBAA7AABSQgBAHADACAkBiMQAEAJgFADQgGAEgIgBQgFgIAEgFQAEgGAMAEgAhiA/QAAA2gnAnQgnAng2AAQg3AAgngnQgmgnAAg2QAAg3AmgmQAngmA3AAQA2AAAnAmQAnAmAAA3gAmaAjQgDAJgCABIgHABAjLD/QhaAAg/g6QhAg7AAhTQABgHgDgCQgDgCgGADIAAAAQADgSASAGAmfAtQgIgCgIAEIAVgMAjLD/QgEgJAFgDQAGgEAIABQAFAIgEAFQgEAGgMgEg");
	this.shape_5.setTransform(92.6,54.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CCCCCC").ss(6,1,1).p("AA8AAQAAAZgRASQgSARgZAAQgYAAgSgRQgRgSAAgZQAAgYARgSQASgRAYAAQAZAAASARQARASAAAYg");
	this.shape_6.setTransform(69.3,60.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AgYAYQgKgKAAgOQAAgNAKgLQALgKANAAQAOAAAKAKQALALAAANQAAAOgLAKQgKALgOAAQgNAAgLgLg");
	this.shape_7.setTransform(132.3,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s("#CCCCCC").ss(1.5,1,1).rc(-5.4,-3.15,10.8,6.3,0,0,3.15,3.15);
	this.shape_8.setTransform(36.2,198.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s("#CCCCCC").ss(1,1,1).rc(-6.65,-24.25,13.3,48.5,6.65,0,0,6.65);
	this.shape_9.setTransform(174.9,66.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s("#CCCCCC").ss(1,1,1).rr(-90.5,-63,181,126,7);
	this.shape_10.setTransform(96.1,69.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CCCCCC").ss(1,1,1).p("AsNBTIDIAAAsNAwIDPAAAsNANIDZAAAsNgWIDXAAAsNh/IDjAAAsNhcIDjAAAsNg5IDhAAAsNCAIYbAA");
	this.shape_11.setTransform(96.5,175.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer_1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().rc(-78.25,-38.8,156.5,77.6,7.5,7.5,0,0);
	this.shape_12.setTransform(96.5,168.5,1,0.704);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().rr(-95.5,-69,191,138,10);
	this.shape_13.setTransform(95.5,69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,253.2,203.1);


(lib.perlin_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		var _this = this;
		
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer_1
	this.instance = new lib.perlin();
	this.instance.parent = this;
	this.instance.setTransform(-23,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:90,x:233},0).wait(2).to({rotation:180,y:166},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-90,256,256);


(lib.moonalpha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.moon();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.764,0.764);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.moonalpha, new cjs.Rectangle(0,0,229.2,160.4), null);


(lib.flicker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.6)","rgba(255,255,255,0)"],[0,1],-15.6,0,15.6,0).s().p("AibCXIAAkjID0iGQCHEYiHENg");
	this.shape.setTransform(15.6,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.6)","rgba(255,255,255,0)"],[0,1],-15.6,0,15.6,0).s().p("AibCXIAAkjIDziGQCIEYiIENg");
	this.shape_1.setTransform(15.6,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape}]},2).to({state:[]},3).to({state:[{t:this.shape}]},3).to({state:[]},3).to({state:[{t:this.shape}]},3).to({state:[]},3).to({state:[{t:this.shape_1}]},2).to({state:[]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.fire09fixed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("EgH+AjxQh9gSiniwQikirgrpcQgHhggEhuIABACQAqCOBXhbQDYj6BmhTQA5gvBDgeIgPgFQjrhHAPisQAOitAAmqQAAmrFCkuQAYgXAYgUQgNgKgMgNQhDgxFklkQFiljjfBrQjfBqD1lRQD1lSmmhnQmohoGBAdQGAAcA5AGQA9AHAsAQQApAQAyAhQAWAPBdBEQA/AuB/AbQCAAbhTBBQhTBBkPA7QkQA7D1BPQD2BOl3BnQl3BnDkCYQBgBABAAwIAmgBQB2AABBAJQBGAJAyAZQAvAWA5AxQAbAXBqBjQBIBEiHBZQhTA4kIBzQkZB6hrA/Qi2BtAABfQAABdCfChQBLBLEGDgQDdC8BLBfQBxCMhJBFQgcAageAWQA9AzATAUQAyA2AWBFQAYBPAACJQAAB1AdB3QAiB2AKAyQARBSgVBBQgaBPhaBdQimCuk2AmQhxAOimAAQi6gDhbAAQhLAAiSAKQguACgkAAQgqAAgagDgAv8RaIAAAAIAAAAg");
	this.shape.setTransform(0.1,-229.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fire09fixed, new cjs.Rectangle(-102,-458.4,204.1,458.5), null);


(lib.fire9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("EgJHAjMQh/gQiqinQimijgso9QgHhagEhpIABACQAqCGBZhWQDcjtBnhOQAXgSAZgQQjGhKAOigQAOiwAAmyQAAmzFIk1QAggeAhgbQgQgNgOgSQAThmDsk/QDrk/CFA7QCGA7hikZQhhkYjph2Qjqh1FXAAQBZAAAwAGQA1AHAmARQAjAQArAjQAUAPBQBGQA2AwhlA/Qg/AmFTAPQFUAOhZA6QhYA7DCCdQDBCdkhBJQkiBKjlBvQjkBvA+A6QA1gEA4AAQB4AABCAJQBHAJA0AZQAwAXA6AyQAaAXBtBmQBJBFiJBbQhVA4kNB1QkfB8hsBBQi6BwAABgQAABeCiClQBNBNELDkQDgC/BOBhQByCPhKBGIgGAFQAiAcAOANQAzAzAVBCQAZBLAACCQAABvAdBwQAjBwAKAwQARBNgVA+QgaBLhcBZQioClk8AkQhzANioAAQi+gChcAAQhMAAiUAIQgwADgkAAQgrAAgagEg");
	this.shape.setTransform(6.5,-225.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fire9, new cjs.Rectangle(-103.7,-451.2,220.5,451.2), null);


(lib.fire8fixed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("EgJ1AjnQiBgQitidQipiagsoeQgIhWgEhjIABACQArB/BahSQDRjQBphPQiehMAMiRQAOi0AAm7QAAm6FPk7QCuijDUhPQgUgvBIhPQBAhFC3iIQDaiiA/g3QCFh1AAhEQAAhEiZhQQhZgujqhYQjbhThFgpQhxhAA8gxQBZhJAWgQQAvgjAngRQAqgSA6gHQA2gGBiAAQF9AAEMDcQENDbAAE2QAAE1AMB+QAMB9jEAzQjAAyhBA0IAKAJQAbAXBuBoQBLBGiMBdQhXA5kSB3QkjB/hvBCQi+BxAABiQAABhCmCnQBOBPEQDoQDlDDBOBjQBQBkgKBAQAWARALAJQAzAxAWA+QAZBHAAB6QAABpAeBrQAjBqAKAtQASBJgWA7QgaBHhdBUQirCclBAiQh1AMirAAQjAgCheAAQhOAAiWAIQgwADgkAAQgsAAgbgEg");
	this.shape.setTransform(10.3,-228.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fire8fixed, new cjs.Rectangle(-105.3,-456.5,231.3,456.6), null);


(lib.fire4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("EgIwAgMQiJgMi4h6Qi0h3gvmiQgIhCgEhMIABACQAuBhBgg/IBzhSQgig4AGhIQAQjBAAncQAAnbFnlRQAqgoAsgjQABgvA2hFQA+hOCziaQDUi2A9g+QCCiEAAhMQAAhNiVhaQhXg0jjhjQjWhehEgtQhthJA6g3QBXhSAVgSQAugoAmgSQApgVA5gHQA1gHBfAAQFyAAEGD3QEFD3AAFdQAAFcALCNQAFA5gcArIANALQAdAZB2BvQBRBMiXBjQhcA+knCAQk5CHh3BHQjLB5AABqQAABoCxC0QBOBOECDdQAaACAXAEQBaASBiBAQBPA1BpA1QBpA1AbASQA3AmAYAwQAaA2AABfQAABRAgBSQAlBSALAjQATA4gXAtQgcA3hjBBQi3B4lUAaQh8AKi2AAIkxgCQhSAAigAHIhXABQgwAAgegCg");
	this.shape.setTransform(0.1,-206.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fire4, new cjs.Rectangle(-112,-412.5,224.1,412.5), null);


(lib.fire7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("EgJkAh/QhHgIhCgjQhGgkhjhUQjGiogeqXIABADQArB3BchNQAugmBdhVQBPhHArgiQh8hKALiEQAPi3AAnDQAAlhAZitQAwlCCUiMQBxhpD8AEIDTALQB9AHBKgJQBahbDfjFQCzirAAhUQAAhHiDhSQhMgvjJhbQi8hWg6gqQhhhDA0gyQB7h7AsgWQA/ggCaAAQFGAADlDiQDmDjAAE/QAAFGAKB7QAWBnADA1QAHBghGAWQgdAJiKBSQiTBYgJAEQBMBHiZAcQhLAOk8ASQkqARiHAfQjNAvAABlQAABUCUCpQBrB6DlDYIFtFXQC3CzAwBXQBjBBAhA3QAsBJAACUQAABjAeBkQAjBkALAqQASBGgWA3QgbBCheBQQiuCTlGAgQh3AMitAAQhiAAjBgDQhQAAiXAIQgzADgnAAQgqAAgbgEg");
	this.shape.setTransform(8.7,-219.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fire7, new cjs.Rectangle(-106,-437.4,229.4,435.7), null);


(lib.fire6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("EgIfAhZQiFgOiziMQiuiIgungQgHhMgEhYIABACQAsBwBdhIQB6hpBYhEQhbhJAJhxQAQi6AAnMQAAnKFalGQBPhLBXg5QALgkAmgvQA8hJCuiRQDNitA7g6QB+h8AAhIQAAhJiQhVQhUgxjcheQjQhYhBgrQhqhEA4g1QBUhNAUgRQAtgmAlgRQAogTA3gHQAzgHBcAAQFnAAD9DpQD9DqAAFJQAAFJALCFQAIBchWA3QAkAgBcBWQBOBJiRBgQhaA8kcB8QkvCDhzBEQjEB1AABmQAABkCsCuQBQBSEaDwQCUB+BXBXQAuAfA0AgQBlA9AbAUQA1ArAXA4QAaA+AABtQAABdAeBeQAkBeALAoQASBBgWA0QgbA+hgBLQixCKlLAeQh4ALiwAAIkogCQhQAAibAIQgwACglAAQgvAAgcgDg");
	this.shape.setTransform(0,-214);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fire6, new cjs.Rectangle(-108.7,-428,217.5,428), null);


(lib.fire5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("EgIoAgzQiHgOi1iCQiwiAgvnBQgIhHgEhSIABACQAtBpBfhEQBZhHBHg1Qg8hCAIhfQAQi9AAnUQAAnSFglMQDEi4DyhSQA/hCBwhgQDOixA7g8QB+iBAAhKQAAhLiQhXQhUgyjdhhQjPhbhBgsQhqhHA4g1QBUhQAVgRQAsgnAlgSQAogUA2gHQAzgHBdAAQFnAAD9DwQD+DwAAFTQAAFTALCJQALCEitA6IBHBCQBPBLiTBhQhbA9kiB+Qk0CFh1BFQjHB4AABnQAABnCuCxQBTBTEeD0IAhAcQBEAYBKA1QBOA4BoA5QBnA5AbAUQA2AoAXAzQAaA7AABmQAABXAfBYQAlBYALAlQASA9gWAwQgcA7hhBGQi0CBlQAcQh6AKizAAIksgCQhSAAidAHQg0ACgnAAQgsAAgcgCg");
	this.shape.setTransform(0,-210.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fire5, new cjs.Rectangle(-110.3,-420.3,220.8,420.3), null);


(lib.fire3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("Ao4fmQiLgMi7hwQi2hugwmDQgIg+gEhGIABABQAvBbBhg6IBMgyQgMgoAEguQAQjEAAnkQAAnlFtlWQBNhIBTg5QiNg+AKh6QAMiRAAlmQAAlnETj+QERj+GFAAQBlAAA3AHQA7AIArAVQAoATAxApQAWATBbBUQA9A5hzBKQhHAvjhBgQjvBnhbA1QicBcAABPQAABOCJCIQA/BADgC7QA7AyAvAqQA0ALAqAUQA1AaBBA4QAdAZB5BxQBRBNiZBlQheA/krCCQk/CJh5BIQjPB8AABsQAABpC1C4QBHBHDdC+QBAgEA1AKQBbAQBjA8QBRAwBrAxQBqAyAbAQQA4AjAYAtQAbAyAABYQAABLAgBMQAmBMALAgQATA0gXAqQgdAyhkA8Qi5BwlaAYQh+AJi4AAIk1gCQhUAAiiAGIheACQguAAgcgCg");
	this.shape.setTransform(0,-202.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fire3, new cjs.Rectangle(-113.7,-404.8,227.5,404.8), null);


(lib.fire2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("ApAe/QiNgKi+hoQi5hlgwlkQgIg5gFhBIABACQAwBTBig2IAwgcQgBgQACgRQAQjHgBnsQABntFzlcQBWhQBdg+Qhdg9AJhmQAMiVAAlwQAAlwEYkFQEWkFGNAAQBmAAA4AIQA9AIAsAVQAoATAzArQAWATBcBWQA/A6h1BNQhIAwjmBjQj0BphcA3QigBeAABSQAABQCMCMQBBBBDjDAQBFA7A1AwIAOAHQA3AaBBA4QAeAaB6BzQBUBOicBnQhfBAkxCDQlECNh7BJQjSB+AABtQAABsC3C6QBCBCC8CjIAFgBQBjgMBLAMQBeAPBlA4QBRAsBtAtQBrAuAcAPQA5AgAYApQAbAuAABRQAABFAhBGQAmBGALAdQAUAwgYAnQgcAuhnA4Qi8BmlfAWQh/AJi8AAIk5gCQhVAAikAGIhYABQgzAAgfgCg");
	this.shape.setTransform(0,-198.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fire2, new cjs.Rectangle(-115.3,-397,230.8,397), null);


(lib.fire1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("ApJeeQiPgKjAheQi8hdgxlFQgIgzgFg8IABACQAwBMBkgxIAggRQAOjQAAnSQAAn0F5liQBmhgBxhGQg9g5AHhUQANiZAAl6QAAl6EdkMQEckLGUAAQBoAAA5AHQA+AIAtAWQAqAUAyAsQAXATBeBZQBAA8h3BPQhKAxjqBlQj4BshfA4QiiBhAABUQAABTCOCPQBCBCDoDGQDDCnBDBUQANAPAJAOIBAA8QBVBQieBoQhiBBk1CGQlKCPh9BKQjWCAAABvQAABuC8C9QA7A8CfCLIA9gIQBlgLBNALQBeANBmAzQBTAoBuAqQBtApAdAOQA5AdAZAmQAbAqAABKQAAA/AhBAQAnA/AMAbQATAsgYAjQgdArhnAyQi8BcleAWQgtAJgvACQhDAEiBgHIgoAAIk+gCQhXAAimAFIhfABQgwAAgegBg");
	this.shape.setTransform(0,-195.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fire1, new cjs.Rectangle(-117,-390.3,234.1,390.3), null);


(lib.filmbacking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#666666"],[0.549,1],-49.7,0,49.8,0).s().p("AlfFfQiSiRAAjOQAAjNCSiSQCSiRDNAAQDOAACRCRQCTCSAADNQAADOiTCRQiRCSjOAAQjNAAiSiSg");
	this.shape.setTransform(-0.2,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-50.9,99.5,99.5);


(lib.fillm = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		var _this = this;
		this.gotoAndPlay(0);
	}
	this.frame_85 = function() {
		var _this = this;
		var frametogoto = 65 + Math.floor(Math.random()*8)
		this.gotoAndPlay(70);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(78).call(this.frame_85).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AKzljQAAABmTBZQmTBZgVAOQgVANgmB7QgaAxAaAuQAAABAtABQAuAAAWAbQAVAbAAAUIAGAvQAZAhAlgmQAmgnADgaQADgbANgVQAAgpA3gcQA3gcABgEQABgFAXgQQAXgRAHABQAHAABZAXQBYAWAWAVQAWAVAOAMIAADlQgDAOgCAdQgBAggQAqQgIAUgDAEQgDADgOATQgOASgTADQgTACgFABQgFAAhcglQhdgmAAABQAAABhWgpQhXgpAAABQAAABgFgFQgGgEAAAAQAAABgcgRQgbgRAAABQAAABgUgGQgGgCgEgBQAAAAgBgCQgCgCgFgDQgIgHgZAGQgZAGgLgGQgLgHgXgNQgXgOgGhCQgGg6gUgIQgCgCgDgBQg1gljJjJIiChjQAAACgoi7AhfD5QgIgCAHAA");
	this.shape.setTransform(69.1,45.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("AKzlmQAAABmTBZQmTBZgVAOQgVANgmB7QgaAxAaAuQAAABAtABQAuAAAWAbQAVAbAAAUIAGAvQAZAhAlgmQAmgnADgaQADgbANgVQAAgpA3gcQA3gcANgcQANgdAZABQAYABAagHQAZgHA5AlQA4AkAWAWQAWAUAOAMIAADlQgDAOgCAdQgBAggQAqQgIAUgDAEQgDADgOATQgOASgTADQgTACgHAGQgHAFhigZQhjgZgWgBQgXgChBgzQhBgzAFAAQAEgBgGgEQgGgFAFgDQAFgDgcgRQgbgRAAABQAAABgUgGQgGgCgEgBQAAAAgBgCQgCgCgFgDQgIgHgZAGQgZAGgLgGQgLgHgXgNQgXgOgGhCQgGg6gUgIQgCgCgSgvQgRgujeiSIiChjQAAACgoi7AhfD2QgIgCAHAA");
	this.shape_1.setTransform(69.1,45.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("AKzlhQAAABmTBZQmTBZgVANQgVAOgmB6QgaAxAaAvQAAABAtAAQAuABAWAbQAVAbAAATIAGAvQAZAiAlgnQAmgmADgbQADgbANgUQAAgpA3gdQA3gbABgFQABgEAXgRQAXgQAJgGQAJgFBaARQBZAQATAhQATAhAOAMIAADlQgDAOgCAcQgBAggQAqQgIAVgDADQgDAEgOASQgOATgTACQgTACgBgGQgCgHhZgtQhagugHgFQgGgGhWgUQhXgVAAACQAAACgFgEQgGgFAAABQAAABgcgRQgbgRAAABQAAABgUgGQgGgCgEgBQAAgBgBgBQgCgDgFgDQgIgHgZAHQgZAGgLgHQgLgGgXgOQgXgOgGhBQgGg7gUgIQgCgBgxgRQgwgRigjNIiChjQAAABgoi6AhfD7QgIgDAHAB");
	this.shape_2.setTransform(69.1,44.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(1,1,1).p("AK0lkQgJgamQBgQmOBfgCAaQgCAagzBTQgzBSANAVQANAWAuAAQAtABAWAbQAWAbAAATIAFAvQAZAiAlgnQAmgmADgbQADgbANgUQAPgjA1geQA0gcgEgHQgEgGAYgRQAXgQAHAAQAHABBYAWQBYAXAXAUQAWAWAOAMIAADlQgEAOgBAcQgCAggPAqQgIAVgDADQgDAEgOASQgPATgSACQgTACgGAEQgFADhegeQhfgeAFgQQAFgQhXgoQhWgogDAHQgCAGgGgCQgHgCgUAIQgTAIgFgsIgNgKQACADgTgGQgGgCgDgBQgIgDAGABQgCgCgEgEQgIgHgZAHQgZAGgLgHQgLgGgXgOQgXgOgGhBQgGg7gFgLQgFgLglgZQgmgZjDiwIiChjQgwhdAIhcAheD4QAAgBgCgB");
	this.shape_3.setTransform(69.1,45.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1).p("AKzlkQAHgJmJBgQmIBhgkAFQgkAFgiBbQgiBaAQAZQAQAZAtAAQAuABAWAbQAVAbAAATIAGAvQAdAkA1gfQA2gegPgkQgPgkANgUQgCgqA0geQAzgdAFgDQAGgCAXgRQAXgQAKgIQAJgJBbANQBbANARAoQARAnAOAMIAADlQgDAOgCAcQgBAggQAqQgIAVgDADQgCADgHAKAGeGyQgBABgCABIAAAAQgLAJgMABQgTACgFAEQgGADhegeQhegeAEgQQAFgQhXgoQhWgogDAHQgCAGgFgEQgGgFgOgFQgNgFgSgNIgOgKQADADgTgGQgGgCgEgBQgIgDAHABQgCgCgFgEQgIgHgZAHQgZAGgLgHQgLgGgXgOQgXgOgGhBQgGg7gJgIQgKgJgbgbQgcgcjNiwIiChjIgoi5AhfD4QAAgBgBgB");
	this.shape_4.setTransform(69.1,45.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(1,1,1).p("AKzlkQAAgQmTBWQmTBVgKAaQgKAZg8B6QgaAxAaAvQAAABAtAAQAuABAWAbQAVAbAAATIAGAvQAgAsA5gLQA6gMgUg7QgVg7AjAPQAXgMA5gUQA5gVgJgoQgJgnAigNQAigNANglQANgkA9AwQA8AwATAZQASAYAOAMIAADlQgDAOgCAcQgBAggQAqQgIAVgDADQgCADgHAKAFvHDQgCAAgBABQgGADhegeQhegegKAAQgKABhNgyQhNgzADABQACAAgFgEQgGgFgOgFQgNgFgSgNQgLgIgTgFQgGgCgEgBQAAgBgBgBQgCgCgFgEQgIgHgZAHQgZAGgLgHQgLgGgXgOQgXgOgGhBQgGg7gJgIQgKgJgGg1QgHg1j/hsIh6h0Igoi5AhfD4QgIgDAHAB");
	this.shape_5.setTransform(69.2,45.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(1,1,1).p("AKzliQAGgKmjBYQmiBYgBAbQAAAbgoBPQgoBPAaAuQAAABAtABQAuAAAWAbQAVAbAAAUIAGAvQAZAhA2gGQA3gGAqABIAhgtQAygsgKhIQgKhIgEgGQgEgHAXgQQAXgRAHABQAHAABZAXQBYAWAWAVQAWAVAOAMIAADlQgDAOgCAdQgBAggQAqQgIAUgDAEQgCACgHAKAFVHCQgZgGg0gRQhegeAFgPQAEgQhWgoQhXgpgCAHQgDAHgFgFQgGgEgOgFQgNgFgSgNIgOgKQADACgTgGQgGgCgEgBQAAAAgBgCQgCgCgFgDQgIgHgZAGQgZAGgLgGQgLgHgXgNQgXgOgGhCQgGg6gJgJQgKgJgTgmQgTgmjeibIiChjIgoi5AhfD6QgIgCAHAA");
	this.shape_6.setTransform(69.3,45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#333333").ss(1,1,1).p("AKzlaQAAgPmTBVQmTBWgKAZQgKAZg8B7QgaAxAaAuQAAABAtABQAuAAAWAbQAVAbAAAUIAGAvQAZAhAogDQApgDAQAgQARAgAgAIQAgAIAIhRQAIhRgKg5QgKg6AUgVQAUgUgEgGQgEgHAXgQQAXgRAHABQAHAABZAXQBYAWAWAVQAWAVAOAMIAADlQgDAOgCAdQgBAggQAqQgIAUgDAEQgCACgHAKAEcG6QgJgDgLgEQhegeAFgPQAEgQhWgoQhXgpgCAHQgDAHgFgFQgGgEgOgFQgNgFgSgNIgOgKQADACgTgGQgGgCgEgBQAAAAgBgCQgCgCgFgDQgIgHgZAGQgZAGgLgGQgLgHgXgNQgXgOgGhCQgGg6gJgJQgKgJgTgmQgTgmjeibIiChjIgoi5AhfECQgIgCAHAA");
	this.shape_7.setTransform(69.3,44.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#333333").ss(1,1,1).p("AKzlSQAAgPmTBVQmTBWgKAZQgKAZg8B7QgaAxAaAuQAAABAtABQAuAAAWAbQAVAbAAAUIAGAvQAZAhAnAUQApAVgHgmQgHgmBQBFQBPBGANiYQANiYgEgGQgEgHAygzQAxgzAHAAQAHABAsAjQArAjAWAVQAWAVAOAMIAADlQgDAOgCAdQgBAggQAqQgIAUgDAEQgCACgHAKAC4GbQgLgIACgFQAEgQhWgoQhXgpgCAHQgDAGgFgEQgGgEgOgFQgNgFgSgNIgOgKQADABgTgFQgGgCgEgBQgIgCAHAAQgCgCgFgDQgIgHgZAGQgZAGgLgGQgLgHgXgNQgXgOgGhCQgGg6gJgJQgKgJgTgmQgTgnjeiaIiChjIgoi5AhfEKQAAAAgBgC");
	this.shape_8.setTransform(69.2,43.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#333333").ss(1,1,1).p("AKzlSQAAgPmTBVQmTBWgKAZQgKAZg8B7QgaAxAaAuQAAABAtABQAuAAAWAbQAVAbAAAUIAGAvQAZAhAngiQApgjBBAKQBBAKADArQADAqAhgBQAhgCATALIBDAAQAcgPg+iYQg9iXBVAPQBVAPAWAVQAWAVAOAMIAADlQgDAOgCAdQgBAggQAqQgIAUgDAEQgCACgHAKAhgEIQgCgCgFgDQgIgHgZAGQgZAGgLgGQgLgHgXgNQgXgOgGhCQgGg6gJgJQgKgJgTgmQgTgnjeiaIiChjIgoi5ACMFuQgSgLgdgNQhXgpgCAHQgDAGgFgEQgGgEgOgFQgNgFgSgNIgOgKQADABgTgFQgGgCgEgBQgIgCAHAAAhfEKQAAAAgBgC");
	this.shape_9.setTransform(69.2,43.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#333333").ss(1,1,1).p("AEFF4QAMgDAzgOQBPgUg+iWQg+iWgNgvQgOgxBsAKQBrAKgFAmQgFAnAOAMIAADlQgDAOgCAdQgBAggQAqQgIAUgDAEQgCACgHAKAEFF4QAAACgCAAQgFAAAHgCgAKzlSQAAgPmTBVQmTBWgKAZQgKAZg8B7QgaAxAaAuQAAABAtABQAuAAAWAbQAVAbAAAUIAGAvQAZAhAngHQApgHADgbQADgbBkB4QBpBJAAAJAhgEIQgCgCgFgDQgIgHgZAGQgZAGgLgGQgLgHgXgNQgXgOgGhCQgGg6gJgJQgKgJgRg4QgSg3jhh4QhwgugSg1QAUh8g8g9AA7FGQg2gXgBAFQgDAHgEgHQgFgIgLgJQgLgKgZACIgOgKQADABgTgFQgGgCgEgBQAAAAgBgCAhfEKQgIgCAHAA");
	this.shape_10.setTransform(69.2,43.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#333333").ss(1,1,1).p("ACWEyQBYERBZh9QBZh8hAiPQhAiQBAAkQBAAjhChaQhBhZAngBQAmgBAHgfQAHgfA3gHQA2gGgOA+QgOA+AOAMIAADkQgDAOgCAcQgBAggQAqQgIAVgDADQgCADgHAKACNEzQAFgBAEAAACNEzQAFgFAEAEAKzmNQAAgQmTBWQmTBVgKAaQgKAZg8B6QgaAyAaAuQAAABAtAAQAuABAWAbQAVAbAAATIAGAvQAQAVAfABQAdABB4CHAhgDNQgCgCgFgEQgIgHgZAHQgZAGgLgHQgLgGgXgOQgXgOgGhBQgGg7gJgIQgKgJgTgmQgTgmjeibIiChjIgoi5AAAD8QgCAAgCgBQgGgFgOgFQgNgFgSgNIgOgKQADACgTgFQgGgCgEgBQAAgBgBgBAhfDPQgIgDAHAB");
	this.shape_11.setTransform(69.2,49.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#333333").ss(1,1,1).p("AKznoQAAgQmrBiQmrBhAIARQAIAQglBTQglBTAaAvQAAABAtAAQAuABAWAbQAVAbAAASIAGAvQAZAiAlgnQAFgFAHgBQAHgCAMACQANACAYASQgFATBAAnQABAwADAKQAHAYgDAyQgEAyBzDTQByDThynQQhynPCXgXQCWgYAJBEQAIBEAOAMIAADkQgDAOgCAcQgBAggQAqQgIAVgDADQgCADgHAKAhgByQgCgCgFgEQgIgHgZAHQgZAGgLgHQgLgGgXgOQgXgOgGhBQgGg6gJgIQgKgJgkglQglgli7ieIhah/QgNhShDhLAhfB0QgIgDAHABAhFB6QADACgTgFQgGgCgEgBQAAgBgBgB");
	this.shape_12.setTransform(69.2,58.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#333333").ss(1,1,1).p("AK2o5QAAgPmrBhQmrBiAIAQQAIAQgmBUQglBTAaAuQAAABAuABQAtAAAXAbQAVAbAAAUIAGAvQAZAgAlglQAFgFAHgCQAGgCANACQAMACAZATQgFARBAAnQABAxADAJQAHAYAPDnQAQDoBnBDQBoBEhHnFQhInEBkhIQBkhIAJBEQAIBDAOAMIAADkQgDAOgCAdQgBAggQAqQgIAUgDAEQgCACgHAKAjTAFQgVgPgGg+QgGg7gJgIQgKgJgTgnQgTgmjeibIiChjIgoi5");
	this.shape_13.setTransform(69.5,66.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#333333").ss(1,1,1).p("AK3pkQAAgQmdBlQmdBlgVgHQgWgGgZBjQgaBkARAbQARAbAtAAQAuABAWAbQAVAbAAATIAGAvQAZAiAlgnQAFgFAHgBQAHgCAMACQANACAYASQgFASBAAnQABAwADAKQAHAXATEJQASEJBpBWQBpBVhMn4QhLn4BjhIQBkhIAJBEQAIBEAOAMIAADkQgDAOgCAcQgBAggQAqQgIAVgDADQgCADgHAKAjuhrQAAgFgBgFQgGg7gJgIQgKgJgTgnQgTgmjeibIiChjIgoi5");
	this.shape_14.setTransform(69.6,71);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#333333").ss(1,1,1).p("AK5p0QABgZmcBYQmbBYgXALQgYALgZBkQgaBjARAbQARAbAtABQAuAAAWAbQAVAbAAAUIAGAvQAZAhAlgmQAFgFAHgCQAHgCAMACQANACAYATQgFASBAAnQABAwATATQAUASgSEPQgREPCMBkQCMBkhQoAQhQn/BahXQBbhXAJBEQAIBDAOAMIAADlQgDANgCAdQgBAggQAqQgIAUgDAEQgCACgHAKAknkIQgpgvi+iFIiChjIgoi5");
	this.shape_15.setTransform(69.8,72.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#333333").ss(1,1,1).p("AK3qTQAAgQmeBlQmcBkgWgGQgVgHgaBkQgZBjARAcQAQAbAuAAQAtABAWAbQAWAbAAATIAFAvQAZAiAlgnQAFgFAHgBQAHgCANACQAMACAZASQgFASA/AoQACAvAOARQAOAQAfFrQAeFqBWABQBWAAg0nnQg0nmBQheQBRheACA8QACA8AOAMIAADlQgEAOgBAbQgCAggPAqQgIAVgDADQgCADgIAKAlklhQg8gwhshLIiChjIgoi5");
	this.shape_16.setTransform(69.6,76.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#333333").ss(1,1,1).p("AK5qkQAAgQmdBlQmdBkgVgGQgWgHgZBkQgaBjARAcQARAbAtAAQAuABAWAbQAVAbAAATIAGAvQAZAiAlgnQAFgFAHgBQAHgCAMACQANACAYASQgFASBAAoQABAwAPAOQAQANAeECQAeECAxDCQAxDCgCnOQgCnNA8jVQA8jWAJBEQAIBEAOAMIAADlQgDAOgCAcQgBAfgQAqQgIAVgDADQgCADgHAKAm6mzQglgcgvggIiChjIgoi5");
	this.shape_17.setTransform(69.8,78);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#333333").ss(1,1,1).p("AK3q6QAAgQmcByQmaByg2gUQg2gUgHBjQgHBjAcAcQAdAcAuAAQAtABAWAbQAWAbAAATIAFAvQAZAiAlgnQAFgFAHgBQAHgCANACQAMACAZASQgFASA/AoQACAwAbAOQAcAOAUEDQAVEFAuDgQAuDfACnuQABntA9jWQA8jVAFBEQAFBEAOAMIAADlQgEAOgBAcQgCAggPApQgIAVgDADQgCADgIAKAoYoUIh2hXQgehcgKhd");
	this.shape_18.setTransform(69.6,80.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#333333").ss(1,1,1).p("AK4rYQAAgQmdBlQmdBkg6gSQg6gTgjBgQgjBhA/AqQA/ArAtAAQAtABAWAbQAWAbAAATIAFAvQAZAiAlgnQAFgFAHgBQAHgCANACQAMACAZASQgFASA/AoQACAwAsAcQAsAdASEJQASELAiD5QAjD4gFobQgEobA9jVQA8jWAIBEQAJBEAOAMIAADlQgDAOgCAcQgBAggQApQgIAVgDADQgCADgIAKAqEqPIgLgJIgoi5");
	this.shape_19.setTransform(69.7,85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#333333").ss(1,1,1).p("AK4rWQAAgPmeBkQmcBlg6gTQg6gTgjBhQgjBgA/ArQA+AqAuABQAtAAAWAbQAWAbAAAUIAFAvQAZAhAlgmQAFgFAHgCQAHgCANACQAMACAZATQgFASA/AnQAEAwA0AaQAzAaAKEMQAJENAiD5QAiD5AGocQAHobA0jVQAzjVAHBEQAHBDAOAMIAADlQgEAOgBAdQgCAggPApQgIAUgDAEQgCACgIAKAqEqNIgLgJIgoi+");
	this.shape_20.setTransform(69.7,85.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#333333").ss(1,1,1).p("AK4rXQAAgPmeBkQmcBlg6gTQg6gTgjBhQgjBgA/ArQA+AqAuABQAtAAAWAbQAWAbAAAUIAFAvQAZAhAlgmQAFgFAHgCQAHgCANACQAMACAZATQgFASA/AnQABAxBEAaQBEAZgEEMQgFENAjD5QAjD5AMoZQAMoZAqjYQAqjXAJBEQAJBDAOAMIAADlQgEAOgBAdQgCAggPApQgIAUgDAEQgCACgIAKAqEqOIgLgJIgoi8");
	this.shape_21.setTransform(69.7,85.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#333333").ss(1,1,1).p("AK7rVQgCgpmeBbQmdBag5AEQg4AEgnBnQgoBmBBAoQBAAoAxgDQAvgDAXAbQAVAbAAATIAGAvQAZAiATAJQASAICRA7QARASAgAMQBCAYAEEMQAEENAbD6QAaD6AQobQAPobApjVQAojWAJBEQAIBEAOAMIAADlQgDAOgCAcQgBAggQApQgIAVgDADQgCADgHAKAqIqRIgMgJIgmi5");
	this.shape_22.setTransform(70.1,85.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#333333").ss(1,1,1).p("AK5rUQgEg8mfBSQmeBSg3AWQg2AWgoBnQgoBmBBAoQBAAoAxgDQAwgDAWAbQAVAbAAATIAGAvQAZAiATAJQATAICQA7QARASBBAWQBAAXgJEIQgJEJAYD6QAYD5AYocQAYoaAljWQAljVADBEQAFBEAOAMIAADlQgEAOgBAcQgCAggPApQgIAVgEADQgBADgIAKAq2tNIgCgH");
	this.shape_23.setTransform(69.8,85.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#333333").ss(1,1,1).p("AHzsRQgCgjmeBdQmdBdg5gCQg4gBgoBnQgnBnBAAoQBBAoAwgDQAwgEAWAbQAWAbAAAUIAFAvQAZAhAUAJQATAJCQA6QARASA7AQQA8AQgFEOQgFEPAZD7QAZD8ASoPQASoOAmjjQAljjAJBEQAJBDAOAMIAADlQgEAOgBAdQgCAggPAqQgIAUgDAEQgCACgIAK");
	this.shape_24.setTransform(88.5,89.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_9}]},4).to({state:[{t:this.shape_10}]},4).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_12}]},4).to({state:[{t:this.shape_13}]},4).to({state:[{t:this.shape_14}]},4).to({state:[{t:this.shape_15}]},5).to({state:[{t:this.shape_16}]},4).to({state:[{t:this.shape_17}]},4).to({state:[{t:this.shape_18}]},5).to({state:[{t:this.shape_19}]},4).to({state:[{t:this.shape_20}]},4).to({state:[{t:this.shape_21}]},4).to({state:[{t:this.shape_22}]},5).to({state:[{t:this.shape_23}]},4).to({state:[{t:this.shape_24}]},4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,140.3,92.2);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(0.3,-248.8,1,1,0,0,0,0.3,-248.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("AAVDJQgHgIgLgjQgYhPgnAAIBMgMQgwgJAAgoQAAgeg8hHQAmAAAqhMQASghAKgJQARgMASASQBRBRAAByQAAB0hRBQQgLALgIAAQgGAAgFgGgAiBhUQgLhRAvAOIAEABQgggBAABIQAAAQABAQIgJglg");
	this.shape.setTransform(8.4,-549.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-96,-570.1,190.5,570.2), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(0.3,-245,1,1,0,0,0,0.3,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-97.9,-409.2,190.8,409.2), null);


(lib.rollingreeltakeup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.reel("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,1,1,0,0,0,-0.7,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.6,rotation:177.3,x:-0.4,y:-0.3},23).to({rotation:270.1,x:-0.5,y:-0.4},12).to({regX:-0.7,rotation:356.5,y:-0.5},13).wait(1));

	// Layer 2
	this.instance_1 = new lib.filmbacking("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,1,0.645,0.645,0,0,0,0.1,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.4,-93.4,186,186);


(lib.rollingreel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.8,1,1,0,0,0,8.4,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:180,x:-0.4,y:0.9},23).to({rotation:270,x:-0.5},12).to({rotation:348},13).wait(1));

	// reel
	this.instance_1 = new lib.reel("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,-0.5,1,1,0,0,0,-0.7,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.6,rotation:177.3,x:-0.4,y:-0.3},23).to({rotation:270.1,x:-0.5,y:-0.4},12).to({regX:-0.7,rotation:356.5,y:-0.5},13).wait(1));

	// film
	this.instance_2 = new lib.filmbacking("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,0.9,1.131,1.131,0,0,0,0.2,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.4,-93.4,186,186);


(lib.reelstopped = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.reel("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.7,-0.4,1,1,0,0,0,-0.7,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.filmbacking("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.6,1,1.131,1.131,0,0,0,0.3,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.reelstopped, new cjs.Rectangle(-93.6,-93.3,186,186), null);


(lib.moonburn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
	}
	this.frame_68 = function() {
		var _this = this;
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(68).call(this.frame_68).wait(1));

	// masklayer (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax5MiIAA5DMAjzAAAIAAZDg");
	mask.setTransform(114.3,80.2);

	// whiteout
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.82)","rgba(95,95,95,0.039)","rgba(51,51,51,0.588)","rgba(51,51,51,0.149)"],[0,0.498,0.631,0.702],103.7,-64.1,0,103.7,-64.1,85.6).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape.setTransform(114.3,80.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.824)","rgba(122,122,122,0.2)","rgba(56,56,56,0.565)","rgba(56,56,56,0.196)"],[0,0.467,0.671,0.729],103,-66,0,103,-66,69.8).s().p("AyNM2IAA5sMAkbAAAIAAZsg");
	this.shape_1.setTransform(114.3,80.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.827)","rgba(148,148,148,0.361)","rgba(61,61,61,0.537)","rgba(61,61,61,0.247)"],[0,0.435,0.71,0.757],102.3,-67.8,0,102.3,-67.8,71.2).s().p("AyhNKIAA6UMAlDAAAIAAaUg");
	this.shape_2.setTransform(114.3,80.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(255,255,255,0.835)","rgba(175,175,175,0.522)","rgba(67,67,67,0.514)","rgba(67,67,67,0.294)"],[0,0.404,0.749,0.784],101.7,-69.6,0,101.7,-69.6,88.8).s().p("Ay1NfIAA69MAlqAAAIAAa9g");
	this.shape_3.setTransform(114.4,80.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,255,255,0.839)","rgba(202,202,202,0.678)","rgba(72,72,72,0.49)","rgba(72,72,72,0.341)"],[0,0.373,0.788,0.812],101,-71.5,0,101,-71.5,115.6).s().p("AzINzIAA7lMAmRAAAIAAblg");
	this.shape_4.setTransform(114.4,80.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(255,255,255,0.843)","rgba(228,228,228,0.839)","rgba(77,77,77,0.463)","rgba(77,77,77,0.392)"],[0,0.341,0.827,0.839],100.3,-73.3,0,100.3,-73.3,146.5).s().p("AzcOHIAA8NMAm5AAAIAAcNg");
	this.shape_5.setTransform(114.4,80.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(255,255,255,0.847)","#FFFFFF","rgba(82,82,82,0.439)"],[0,0.31,0.867],99.7,-75.1,0,99.7,-75.1,179.4).s().p("AzxObIAA82MAnjAAAIAAc2g");
	this.shape_6.setTransform(114.4,80.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(255,255,255,0.855)","#FFFFFF","rgba(89,89,89,0.439)"],[0,0.31,0.867],100.7,-74.8,0,100.7,-74.8,197.6).s().p("A0NO4IAA9vMAobAAAIAAdvg");
	this.shape_7.setTransform(114.4,80.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(255,255,255,0.859)","#FFFFFF","rgba(97,97,97,0.435)"],[0,0.31,0.867],101.7,-74.6,0,101.7,-74.6,215.9).s().p("A0qPWIAA+qMApUAAAIAAeqg");
	this.shape_8.setTransform(114.4,80.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(255,255,255,0.867)","#FFFFFF","rgba(104,104,104,0.435)"],[0,0.31,0.867],102.7,-74.3,0,102.7,-74.3,234.2).s().p("A1GPzIAA/lMAqNAAAIAAflg");
	this.shape_9.setTransform(114.4,80.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["rgba(255,255,255,0.871)","#FFFFFF","rgba(111,111,111,0.431)"],[0,0.31,0.867],103.6,-74,0,103.6,-74,252.7).s().p("A1jQPMAAAggdMArHAAAMAAAAgdg");
	this.shape_10.setTransform(114.4,80.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(255,255,255,0.878)","#FFFFFF","rgba(118,118,118,0.431)"],[0,0.31,0.867],104.6,-73.7,0,104.6,-73.7,271.2).s().p("A1/QsMAAAghXMAr/AAAMAAAAhXg");
	this.shape_11.setTransform(114.4,80.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["rgba(255,255,255,0.882)","#FFFFFF","rgba(126,126,126,0.427)"],[0,0.31,0.867],105.6,-73.4,0,105.6,-73.4,289.8).s().p("A2cRJMAAAgiRMAs4AAAMAAAAiRg");
	this.shape_12.setTransform(114.4,80.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["rgba(255,255,255,0.89)","#FFFFFF","rgba(133,133,133,0.427)"],[0,0.31,0.867],106.6,-73.1,0,106.6,-73.1,308.4).s().p("A24RmMAAAgjLMAtxAAAMAAAAjLg");
	this.shape_13.setTransform(114.4,80.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["rgba(255,255,255,0.894)","#FFFFFF","rgba(138,138,138,0.447)"],[0,0.31,0.867],106,-73.9,0,106,-73.9,344.5).s().p("A3KR4MAAAgjvMAuVAAAMAAAAjvg");
	this.shape_14.setTransform(114.4,80.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["rgba(255,255,255,0.898)","#FFFFFF","rgba(142,142,142,0.471)"],[0,0.31,0.867],105.5,-74.7,0,105.5,-74.7,380.6).s().p("A3bSKMAAAgkTMAu3AAAMAAAAkTg");
	this.shape_15.setTransform(114.4,80.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["rgba(255,255,255,0.902)","#FFFFFF","rgba(147,147,147,0.49)"],[0,0.31,0.867],104.9,-75.5,0,104.9,-75.5,416.6).s().p("A3tScMAAAgk3MAvbAAAMAAAAk3g");
	this.shape_16.setTransform(114.4,80.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["rgba(255,255,255,0.906)","#FFFFFF","rgba(151,151,151,0.514)"],[0,0.31,0.867],104.4,-76.3,0,104.4,-76.3,452.7).s().p("A3/SuMAAAglbMAv/AAAMAAAAlbg");
	this.shape_17.setTransform(114.4,80.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["rgba(255,255,255,0.91)","#FFFFFF","rgba(156,156,156,0.533)"],[0,0.31,0.867],103.8,-77,0,103.8,-77,488.8).s().p("A4RTAMAAAgl/MAwjAAAMAAAAl/g");
	this.shape_18.setTransform(114.4,80.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(255,255,255,0.914)","#FFFFFF","rgba(160,160,160,0.557)"],[0,0.31,0.867],103.3,-77.8,0,103.3,-77.8,524.8).s().p("A4jTSMAAAgmjMAxGAAAMAAAAmjg");
	this.shape_19.setTransform(114.4,80.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(255,255,255,0.918)","#FFFFFF","rgba(165,165,165,0.576)"],[0,0.31,0.867],102.7,-78.6,0,102.7,-78.6,560.9).s().p("A40TkMAAAgnHMAxpAAAMAAAAnHg");
	this.shape_20.setTransform(114.4,80.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(255,255,255,0.922)","#FFFFFF","rgba(169,169,169,0.6)"],[0,0.31,0.867],102.2,-79.4,0,102.2,-79.4,597).s().p("A5GT2MAAAgnrMAyNAAAMAAAAnrg");
	this.shape_21.setTransform(114.4,80.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(255,255,255,0.925)","#FFFFFF","rgba(174,174,174,0.62)"],[0,0.31,0.867],101.6,-80.2,0,101.6,-80.2,633.1).s().p("A5YUIMAAAgoPMAyxAAAMAAAAoPg");
	this.shape_22.setTransform(114.4,80.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["rgba(255,255,255,0.933)","#FFFFFF","rgba(184,184,184,0.667)"],[0,0.31,0.867],101.6,-80.2,0,101.6,-80.2,633.1).s().p("A6AUwMAAAgpgMA0BAAAMAAAApgg");
	this.shape_23.setTransform(114.4,80.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(255,255,255,0.945)","#FFFFFF","rgba(194,194,194,0.714)"],[0,0.31,0.867],101.6,-80.2,0,101.6,-80.2,633.1).s().p("A6nVZMAAAgqxMA1QAAAMAAAAqxg");
	this.shape_24.setTransform(114.5,80.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["rgba(255,255,255,0.953)","#FFFFFF","rgba(204,204,204,0.761)"],[0,0.31,0.867],101.6,-80.2,0,101.6,-80.2,633.1).s().p("A7QWBMAAAgsCMA2gAAAMAAAAsCg");
	this.shape_25.setTransform(114.5,80.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["rgba(255,255,255,0.965)","#FFFFFF","rgba(215,215,215,0.812)"],[0,0.31,0.867],101.5,-80.2,0,101.5,-80.2,633.1).s().p("A73WqMAAAgtTMA3vAAAMAAAAtTg");
	this.shape_26.setTransform(114.5,80.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["rgba(255,255,255,0.973)","#FFFFFF","rgba(225,225,225,0.859)"],[0,0.31,0.867],101.6,-80.2,0,101.6,-80.2,633.1).s().p("A8fXTMAAAgukMA4/AAAMAAAAukg");
	this.shape_27.setTransform(114.5,80.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["rgba(255,255,255,0.98)","#FFFFFF","rgba(235,235,235,0.906)"],[0,0.31,0.867],101.6,-80.2,0,101.6,-80.2,633.1).s().p("A9HX7MAAAgv1MA6PAAAMAAAAv1g");
	this.shape_28.setTransform(114.5,80.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["rgba(255,255,255,0.992)","#FFFFFF","rgba(245,245,245,0.953)"],[0,0.31,0.867],101.5,-80.2,0,101.5,-80.2,633.1).s().p("A9vYkMAAAgxGMA7fAAAMAAAAxGg");
	this.shape_29.setTransform(114.5,80.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ax3MiIAA5DMAjvAAAIAAZDg");
	this.shape_30.setTransform(114.5,80.3,1.699,2.011);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},38).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).wait(1));

	// blackout
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["rgba(51,51,51,0.82)","rgba(34,34,34,0.047)","rgba(49,49,49,0.047)","rgba(17,17,17,0.047)"],[0,0.31,0.831,0.867],0,0,0,0,0,627.4).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_31.setTransform(114.3,80.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["rgba(51,51,51,0.82)","rgba(37,37,37,0.078)","rgba(49,49,49,0.078)","rgba(18,18,18,0.078)"],[0,0.318,0.831,0.867],-0.3,0.6,0,-0.3,0.6,606.8).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_32.setTransform(114.3,80.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["rgba(51,51,51,0.82)","rgba(40,40,40,0.114)","rgba(49,49,49,0.11)","rgba(20,20,20,0.11)"],[0,0.322,0.831,0.863],-0.7,1.1,0,-0.7,1.1,586.2).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_33.setTransform(114.3,80.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["rgba(51,51,51,0.82)","rgba(43,43,43,0.145)","rgba(49,49,49,0.137)","rgba(21,21,21,0.137)"],[0,0.329,0.831,0.863],-1,1.7,0,-1,1.7,565.6).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_34.setTransform(114.3,80.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["rgba(51,51,51,0.82)","rgba(46,46,46,0.176)","rgba(49,49,49,0.169)","rgba(23,23,23,0.169)"],[0,0.337,0.831,0.859],-1.4,2.3,0,-1.4,2.3,544.9).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_35.setTransform(114.3,80.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["rgba(51,51,51,0.82)","rgba(49,49,49,0.212)","rgba(49,49,49,0.2)","rgba(24,24,24,0.2)"],[0,0.341,0.831,0.859],-1.7,2.8,0,-1.7,2.8,524.3).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_36.setTransform(114.3,80.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["rgba(51,51,51,0.82)","rgba(52,52,52,0.243)","rgba(49,49,49,0.231)","rgba(25,25,25,0.231)"],[0,0.349,0.831,0.859],-2.1,3.4,0,-2.1,3.4,503.7).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_37.setTransform(114.3,80.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["rgba(51,51,51,0.82)","rgba(55,55,55,0.275)","rgba(49,49,49,0.259)","rgba(27,27,27,0.259)"],[0,0.357,0.831,0.855],-2.5,3.9,0,-2.5,3.9,483.1).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_38.setTransform(114.3,80.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["rgba(51,51,51,0.82)","rgba(58,58,58,0.31)","rgba(49,49,49,0.29)","rgba(28,28,28,0.29)"],[0,0.361,0.831,0.855],-2.8,4.5,0,-2.8,4.5,462.5).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_39.setTransform(114.3,80.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["rgba(51,51,51,0.82)","rgba(61,61,61,0.341)","rgba(49,49,49,0.322)","rgba(30,30,30,0.322)"],[0,0.369,0.831,0.851],-3.2,5,0,-3.2,5,441.9).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_40.setTransform(114.3,80.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["rgba(51,51,51,0.82)","rgba(64,64,64,0.373)","rgba(49,49,49,0.353)","rgba(31,31,31,0.353)"],[0,0.376,0.831,0.851],-3.6,5.6,0,-3.6,5.6,421.3).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_41.setTransform(114.3,80.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["rgba(51,51,51,0.82)","rgba(67,67,67,0.408)","rgba(49,49,49,0.384)","rgba(32,32,32,0.384)"],[0,0.38,0.831,0.851],-3.9,6.1,0,-3.9,6.1,400.7).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_42.setTransform(114.3,80.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["rgba(51,51,51,0.82)","rgba(69,69,69,0.439)","rgba(49,49,49,0.412)","rgba(34,34,34,0.412)"],[0,0.388,0.831,0.847],-4.3,6.7,0,-4.3,6.7,380.1).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_43.setTransform(114.3,80.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["rgba(51,51,51,0.82)","rgba(72,72,72,0.475)","rgba(49,49,49,0.443)","rgba(35,35,35,0.443)"],[0,0.392,0.831,0.847],-4.6,7.3,0,-4.6,7.3,359.5).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_44.setTransform(114.3,80.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["rgba(51,51,51,0.82)","rgba(75,75,75,0.506)","rgba(49,49,49,0.475)","rgba(36,36,36,0.475)"],[0,0.4,0.831,0.847],-5,7.8,0,-5,7.8,338.9).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_45.setTransform(114.3,80.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["rgba(51,51,51,0.82)","rgba(78,78,78,0.537)","rgba(49,49,49,0.506)","rgba(38,38,38,0.506)"],[0,0.408,0.831,0.843],-5.4,8.4,0,-5.4,8.4,318.3).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_46.setTransform(114.3,80.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["rgba(51,51,51,0.82)","rgba(81,81,81,0.573)","rgba(49,49,49,0.537)","rgba(39,39,39,0.537)"],[0,0.412,0.831,0.843],-5.7,8.9,0,-5.7,8.9,297.7).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_47.setTransform(114.3,80.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["rgba(51,51,51,0.82)","rgba(84,84,84,0.604)","rgba(49,49,49,0.565)","rgba(41,41,41,0.565)"],[0,0.42,0.831,0.839],-6.1,9.5,0,-6.1,9.5,277.2).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_48.setTransform(114.3,80.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["rgba(51,51,51,0.82)","rgba(87,87,87,0.635)","rgba(49,49,49,0.596)","rgba(42,42,42,0.596)"],[0,0.427,0.831,0.839],-6.5,10,0,-6.5,10,256.6).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_49.setTransform(114.3,80.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["rgba(51,51,51,0.82)","rgba(90,90,90,0.671)","rgba(49,49,49,0.627)","rgba(43,43,43,0.627)"],[0,0.431,0.831,0.839],-6.8,10.6,0,-6.8,10.6,236.1).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_50.setTransform(114.3,80.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["rgba(51,51,51,0.82)","rgba(93,93,93,0.702)","rgba(49,49,49,0.659)","rgba(45,45,45,0.659)"],[0,0.439,0.831,0.835],-7.2,11.2,0,-7.2,11.2,215.5).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_51.setTransform(114.3,80.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["rgba(51,51,51,0.82)","rgba(96,96,96,0.733)","rgba(49,49,49,0.686)","rgba(46,46,46,0.686)"],[0,0.447,0.831,0.835],-7.5,11.7,0,-7.5,11.7,195).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_52.setTransform(114.3,80.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["rgba(51,51,51,0.82)","rgba(99,99,99,0.769)","rgba(49,49,49,0.718)","rgba(48,48,48,0.718)"],[0,0.451,0.831,0.831],-7.9,12.3,0,-7.9,12.3,174.5).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_53.setTransform(114.3,80.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["rgba(51,51,51,0.82)","rgba(102,102,102,0.8)","rgba(49,49,49,0.749)"],[0,0.459,0.831],-8.3,12.8,0,-8.3,12.8,154.1).s().p("Ax5MiIAA5DMAjzAAAIAAZDg");
	this.shape_54.setTransform(114.3,80.2);

	var maskedShapeInstanceList = [this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31}]},33).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).wait(13));

	// burn-red
	this.instance = new lib.perlin_1();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.894,0.627,0,0,0,-22.9,-90);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({alpha:1},35).wait(18));

	// moon
	this.instance_1 = new lib.moonalpha();
	this.instance_1.parent = this;
	this.instance_1.setTransform(117,98.1,1,1,0,0,0,117.2,98);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({scaleX:1,y:98},0).to({scaleX:1.28,scaleY:1.34,x:139,y:98.1},27).to({scaleX:1.24,scaleY:1.28,x:136.7,y:98.2},3).to({scaleX:1.09,scaleY:1.12,x:117},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0.1,229.2,160.4);


(lib.backgroundprojector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.reelstopped();
	this.instance.parent = this;
	this.instance.setTransform(317.6,23.7,0.76,0.76,0,0,0,-0.7,-0.4);

	this.instance_1 = new lib.reelstopped();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.4,31.6,0.749,0.749,0,0,0,-0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AU+qyQAAACsQCtQsOCtgpAaQgoAahLDuQgzBgAzBaQAAACBYABQBZABAqA0QAqA1AAAmIAKBbQAxBBBJhLQBKhLAFgzQAHg0AYgoQAAhPBsg4QBqg2ACgJQACgJAuggQAsggAOABQANABCsAsQCrArAsApQArAqAbAXIAAG9QgHAbgDA3QgDA+geBSQgPAogHAGQgFAHgbAkQgdAkgkAFQgkAEgKACQgKABizhJQi1hJAAABQAAACinhQQiohOAAABQAAACgKgJQgNgJAAABQAAACg1ghQg2ghAAACQAAACgngMQgMgDgGgCQgQgFANABAi5HkQAAgCgDgCQgEgEgJgHQgPgOgxANQgwAMgWgNQgVgNgtgaQgsgbgMh/QgLhygogPQgEgDgFgDQhohHmGmHIj8jAQAAADhOlq");
	this.shape.setTransform(191,128.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance_2 = new lib.projectorbody("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(222.5,201.4,1,1,0,0,0,126.5,101.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.backgroundprojector, new cjs.Rectangle(12.8,-46.9,375.6,350), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(0.3,-245,1,1,0,0,0,0.3,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-97.9,-409.2,190.8,409.2), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(0.3,-245,1,1,0,0,0,0.3,-245);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE604").s().p("AiZDoQgCgaARgnQARgnAagcQAdggAbgFIBNgMQgwgJAAgoQAAgYgigtIgaggQAlAAAqhMQASghALgJQAQgMASASQBSBRAABzQAABzhSBQQhPBSh0AAQgbAAgDgegAhejAQgMhRAwAOIADABQgfgBgBBJQAAAQACAQIgJgmg");
	this.shape.setTransform(4.7,-538.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-97.9,-564.8,190.8,564.8), null);


(lib.fire = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_45 = function() {
		var _this = this;
		_this.gotoAndPlay(15);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(1));

	// Layer_17
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("AhgARQgogHgBgKQABgJAogHQAogHA4AAQA5AAAoAHQApAHAAAJQAAAKgpAHQgoAHg5AAQg4AAgogHg");
	this.shape.setTransform(9.8,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("AgzAaQgagDgVgEQgngIgBgKQAAgKAogIQASgDAWgDIAJgBIAIAAIApgBIALAAQARgBAPABIASABQAQABANAEIAIABQAWAEAKAFQAJAEAAAFQAAAIgcAHIgNACIgaAEQgZADghACIgOAAIgVABIgegBg");
	this.shape_1.setTransform(9.8,-3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(67,67,67,0.996)").s().p("Ag4AjQgagDgVgIQgmgJgBgNQAAgMAngJQASgFAWgEIAJgCIAJABIAtgDIALgBQASgCAQABQALgBAIACQAQABAOAFIAJACQAVAFAKAHQAJAFAAAFQAAAKgdAIIgMADQgNADgPACIg+AJIgNABQgXADgSAAIgOgBg");
	this.shape_2.setTransform(9.9,-4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(67,67,67,0.988)").s().p("Ag/AzQgagEgVgOQgngMgBgRQAAgOAogNQARgIAWgGIALgCQAEAAAEACQAWgBAdgGIALgBQAWgEAPAAQANgCAKACQARACAOAHIAJAEQAWAHAKAKQAIAGABAGQgBAMgdAJIgNAFQgOAFgQACQgbADgpAMIgPACQgfAIgWAAIgFAAg");
	this.shape_3.setTransform(10,-5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(68,68,68,0.98)").s().p("AhJBJQgagGgVgWQgmgQgCgWQAAgTAngQQASgMAVgKIANgDQAEAAAFADQAXAAAigKIANgDQAZgHARAAQAPgEAKACQASADAQAMIAJAFQAXALAJANQAJAHAAAHQgBAPgeAMIgNAHQgQAHgSAEQgaADgxAUIgQAEQgnAPgXAAIgDAAg");
	this.shape_4.setTransform(10,-7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(69,69,69,0.969)").s().p("AhWBmQgagJgWggQgmgVgBgdQAAgYAngVQARgRAVgQQAEgCALgBQAEAAAGAFQAYAAApgPIAQgFQAdgKASgCQASgFALACQAUADARARIAKAIQAXAPAJARQAJAJAAAJQgBAUgfAPQgHAFgIAEQgRAKgVAEQgaAEg7AfIgRAGQgxAZgXAAIgBAAg");
	this.shape_5.setTransform(10.2,-10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(71,71,71,0.957)").s().p("AiWBRQgmgbgBgmQAAgeAmgcQARgXAVgVQAEgDANgCQAEAAAHAIQAbAAAxgWIASgHQAigOAVgEQAUgHAMACQAXAFATAXIAKALQAYATAJAXQAJAMgBALQgBAZggASQgHAHgJAFQgTAPgYAFQgbADhGAtIgUAJQg7AkgWAAQgcgLgVgtg");
	this.shape_6.setTransform(10.4,-14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(73,73,73,0.941)").s().p("AipBoQglgigBgwQgBgmAmgjQAQgeAVgcQAEgEAQgCQAFAAAGAKQAeABA7gdIAVgKQApgUAWgFQAZgKANADQAaAGAUAeIALAPQAZAZAJAdQAIAOAAAOQgCAfghAWQgIAJgKAHQgVATgcAGQgbAEhTA9IgYALQhFAxgXAAQgcgOgVg7g");
	this.shape_7.setTransform(10.6,-18.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(75,75,75,0.922)").s().p("Ai/CCQgkgqgBg7QgBgvAlgsQAQgmAUgkQAEgEATgDQAFAAAIANQAhABBGgmIAZgMQAwgbAYgGQAegOAOAEQAdAIAXAnIALATQAaAfAJAkQAIARgBAQQgCAmgjAcQgIALgLAIQgYAZggAHQgbAEhkBPIgaAQQhSA/gWABQgdgSgWhMg");
	this.shape_8.setTransform(10.8,-23);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(77,77,77,0.902)").s().p("AjXCgQgkg0gBhIQAAg4Ajg2QAQgvATgtQAEgFAXgEQAGAAAJARQAkABBSgvIAdgQQA4ghAbgIQAjgSAPAFQAhAKAZAvIANAYQAaAmAJAtQAIAUgBAUQgDAtgkAiQgJANgMALQgbAegmAJQgaAEh2BjIgdAUQhhBQgWABQgegWgVheg");
	this.shape_9.setTransform(11,-28.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(79,79,79,0.878)").s().p("AjyDAQgjg+gChWQAAhDAihAQAQg5ATg3QAEgGAbgFQAGAAAJAUQApADBgg7IAhgTQBBgpAegKQAogWARAGQAlAMAcA6IAOAdQAbAuAJA1QAIAZgCAXQgEA1glApQgLAPgMANQgfAkgrAMQgbAEiJB6IghAYQhxBigVACQgfgagVh0g");
	this.shape_10.setTransform(11.3,-34.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(82,82,82,0.855)").s().p("AkQDkQgihJgChmQAAhPAhhLQAPhFAThCQADgHAggFQAGAAALAYQAtADBvhGIAmgXQBLgxAggNQAvgaATAHQApAOAfBFIAPAjQAdA2AIBAQAIAcgCAbQgEA/goAvQgLATgOAPQgiArgxAOQgcAEieCTIgmAdQiCB1gUAEQgggggWiKg");
	this.shape_11.setTransform(11.6,-40.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(85,85,85,0.831)").s().p("AkwEKQghhVgCh2QgBhcAghYQAPhQAShOQADgIAlgGQAHAAAMAdQAxAECAhUIArgbQBWg6AjgPQA2gfAVAHQAuARAiBRQAJAUAHAVQAeBAAIBKQAHAhgCAfQgFBJgqA3QgMAWgPASQgnAyg3AQQgcAFi2CtIgqAiQiUCLgUAEQghglgWijg");
	this.shape_12.setTransform(12,-47.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(88,88,88,0.8)").s().p("AlSE0QghhigBiIQgBhqAehlQAOheAShZQADgKAqgHQAHAAAOAhQA2AFCShhIAwggQBhhDAngSQA9glAXAJQAzATAlBfQAKAXAIAYQAfBKAIBWQAHAmgCAiQgHBUgrA/QgOAagQAVQgrA6g/ASQgbAFjQDKIguAoQioCigUAFQgigrgWi9g");
	this.shape_13.setTransform(12.3,-54.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(91,91,91,0.773)").s().p("Al3FfQgghvgBibQgBh5AdhzQANhsARhnQADgLAwgHQAIgBAPAnQA7AFCkhwIA3gkQBthOAqgVQBFgqAZAKQA5AWApBsQAKAbAJAcQAhBVAHBiQAHAqgDAoQgHBfguBIQgPAdgSAYQgvBDhGAUQgcAGjqDoIg0AuQi9C7gUAGQgjgxgWjag");
	this.shape_14.setTransform(12.7,-62.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(95,95,95,0.741)").s().p("AmeGOQgeh+gCivQgBiIAciDQAMh5ARh2QADgMA2gJQAIAAAQArQBCAHC4iAIA8gpQB7hYAtgYQBNgwAcALQA+AYAtB8QAMAeAJAgQAiBgAHBvQAGAwgDAsQgIBrgwBSQgQAhgUAaQg0BNhOAXQgcAFkHEJIg4A0QjVDVgSAHQglg3gXj4g");
	this.shape_15.setTransform(13.1,-70.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(99,99,99,0.706)").s().p("AnHHAQgdiOgCjEQgBiZAaiSQAMiJAQiEQADgOA8gKQAIgBATAyQBHAHDNiQIBDguQCIhkAxgbQBWg2AeAMQBEAbAxCLQANAiAKAlQAjBrAHB9QAGA1gDAyQgJB4g0BbQgRAlgVAeQg6BWhWAaQgcAGkkErIg+A6QjtDxgSAIQgmg/gXkWg");
	this.shape_16.setTransform(13.5,-79.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(103,103,103,0.671)").s().p("AnxHyQgcidgCjbQgCipAYijQAMiZAPiUQACgPBEgLQAIgBAUA3QBOAJDiihQAkgYAngdQCVhvA2gfQBfg8AgANQBLAfA1CbQAOAmALApQAlB4AGCKQAGA8gEA3QgKCFg2BmQgTApgXAhQg/BghfAdQgcAGlDFPIhEBBQkFENgRAKQgphGgWk4g");
	this.shape_17.setTransform(14,-88.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(107,107,107,0.635)").s().p("AoeIoQgbiugCjyQgBi7AWi0QAKiqAPikQACgRBKgMQAKgBAVA+QBUAKD5izQAngbArggQCkh8A6giQBphDAjAPQBRAiA6CsQAOAqAMAtQAnCFAGCaQAFBBgEA9QgMCTg4BwQgUAtgaAmQhEBqhoAgQgdAGljF0IhKBJQkfEqgQALQgqhNgXlag");
	this.shape_18.setTransform(14.5,-98.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(111,111,111,0.596)").s().p("ApMJfQgZi/gDkKQgCjNAVjHQAKi6ANi1QADgTBRgNQAKgBAXBEQBaALERjGQArgdAugjQC0iJA/glQByhKAlAQQBZAlA+C+QAPAvANAxQApCSAFCpQAFBIgFBCQgMChg8B8QgVAygcApQhKB1hxAjQgdAHmFGZIhQBRQk6FKgQALQgrhVgXl9g");
	this.shape_19.setTransform(15,-108.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(115,115,115,0.557)").s().p("Ap8KZQgYjSgCkiQgCjgATjZQAIjNANjFQACgVBZgOQALgBAZBKQBhAMEpjZIBghGQDEiWBDgpQB9hSAoASQBgApBCDQQARAzANA2QArCgAFC4QAFBPgGBIQgNCwg/CHQgXA3gdAtQhRCAh6AmQgeAHmnHBIhXBZQlVFpgPANQgthdgYmhg");
	this.shape_20.setTransform(15.5,-118.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(120,120,120,0.518)").s().p("AqsLTQgXjkgDk7QgCj0ARjsQAIjfAMjXQACgXBhgPQAKgCAcBSQBoANFCjsQAxgkA3gpQDUikBIgtQCHhZArATQBnAtBHDiQASA4AOA7QAtCuAEDJQAEBWgFBOQgPC/hCCSQgZA8gfAxQhWCLiFApQgeAInLHqIhdBgImAGZQgvhlgXnHg");
	this.shape_21.setTransform(16,-128.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(124,124,124,0.478)").s().p("AreMPQgWj2gDlWQgCkIAPj/QAHjyAMjpQABgYBogRQAMgCAdBZQBwAOFbkAQA1gnA7gtQDlixBMgxQCShhAuAVQBuAxBMD1QAUA8AOBAQAvC9AEDZQAEBdgGBUQgQDPhFCeQgbBBghA1QhdCXiOAsQgfAJnvITIhkBoQmPGsgNAQQgxhugXntg");
	this.shape_22.setTransform(16.5,-139.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(129,129,129,0.435)").s().p("AsRNMQgUkJgDlwQgDkcANkUQAGkEALj8QABgaBxgSQALgCAgBfQB3AQF1kVQA5gpA/gxQD2i/BRg2QCdhoAxAXQB2A0BREIQAVBBAPBFQAxDMAEDqQADBkgHBbQgRDehICqQgdBGgjA5QhjCkiZAvQgfAJoUI+IhrBxQmsHNgNARQgyh2gYoUg");
	this.shape_23.setTransform(17.1,-150.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(134,134,134,0.392)").s().p("AtFOKQgTkdgDmLQgCkxAKknQAGkYAKkOQABgdB4gTQANgCAhBnQB+AQGQkpICAhhQEHjOBXg5QCnhwA1AYQB9A4BWEcQAWBGARBKQAyDbAED8QACBqgHBiQgTDuhLC2QgeBMglA9QhqCvikA0QgfAJo5JpIhyB5QnLHwgMATQg0h/gYo8g");
	this.shape_24.setTransform(17.6,-161.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(138,138,138,0.349)").s().p("At6PJQgRkwgDmmQgClGAHk8QAFkrAKkiQAAgeCAgVQAOgCAjBuQCGASGrk+QBBgwBHg4QEZjdBbg9QCzh4A3AaQCFA8BcEwQAXBLASBPQA0DpADEOQADBygJBoQgTD+hPDDQgfBRgpBBQhwC8iuA3QgfAKpgKUIh5CCQnpITgLAUQg2iIgZpkg");
	this.shape_25.setTransform(18.2,-172.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(143,143,143,0.306)").s().p("AuvQJQgPlFgEnCQgDlaAHlRQADk/AJk1QAAggCJgWQAOgCAlB1QCOATHGlTQBEgzBMg8QErjrBghCQC+iAA7AcQCNBABgFEQAZBQASBUQA3D5ACEfQACB5gIBvQgWEPhRDPQgiBWgqBGQh3DIi5A7QggAKqGLAIiACLQoII3gKAVQg4iRgZqMg");
	this.shape_26.setTransform(18.8,-183.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(148,148,148,0.263)").s().p("AvkRJQgOlYgEneQgDlwAFllQAClTAIlIQAAgiCRgYQAPgCAnB8QCVAVHhlpQBJg2BQhAQE9j6BlhFQDKiIA9AdQCVBEBmFYQAaBVATBZQA5EJACExQABCAgJB1QgWEghVDcQgkBcgsBKQh+DUjDA+QggALquLsIiHCUQonJagJAXQg6iagZq1g");
	this.shape_27.setTransform(19.3,-195.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(153,153,153,0.22)").s().p("AwqEjQgFr4ANrKQAAgkCZgZQAPgCAqCEQC0AZKHn+QFOkJBrhKQDUiQBBAeQCdBIBrFtQBqFjACGwQADHVh8FIQiQF6kXBYQggALrUMZQrUMYgJAbQhaj0gM3zg");
	this.shape_28.setTransform(19.9,-206.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},17).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).wait(1));

	// Layer_18
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#424242").s().p("AgwAeQgTgMgBgSQABgRATgNQAVgNAbAAQAdAAATANQAVANgBARQABASgVAMQgTANgdABQgbgBgVgNg");
	this.shape_29.setTransform(-6.1,-7.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(59,59,59,0.902)").s().p("ABBC0QgugBgHgVQgIgHgyAIQgYACgPgBQgRACgCgDQgIgEgKgrIgMg1IgBAAQggAABEgoQAZgQAWgMQAygcAJgHQACgEgDgEQgDgEACgDQABgDAIgFQAHgEAAgDQgFgRABgPQABgVAKgSQAMgcAZgFQAXgHAOAcIADAHQAWAmgLBBQgBAIAMAFIAJAFQABAAAAgBQABAAAAgBQAAAAABAAQAAAAAAABIADAGQAFAHgBAHQgBAEgFAFQgGAEgCAFIgDAMQgHAXgFAYQgGAbgEAaQgFAlgBAWIgdABIgHAAg");
	this.shape_30.setTransform(-14.5,-38);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(53,53,53,0.8)").s().p("ACEFAQhSgCgGgpQgHgMhdATQgqAIgaACQgfAFgCgFQgJgCgPhSQgQhLgFgOIgBAAQhAAMCBhHIBRgvQBZgxAJgMQACgIgHgHQgJgIACgGQACgEANgKQAMgHgCgHQgPghgFgfQgGgpAKgmQAPg4AqgOQApgPAUAzIAGANQAaBCgZB0QgCAMAYAIIASAFQAEgGABACIAJAJQAIAMAAAMQgBAHgJAIQgKAJgCAIIgFAUQgIArgFAqQgGAyABAwQACBHAKAsIgyABIgKAAg");
	this.shape_31.setTransform(-22.8,-68.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(46,46,46,0.702)").s().p("ADHHNQh2gDgFg9QgGgRiIAeQg8ANgkAEQgtAJgCgGQgLgBgVh4QgUhsgIgRIgCgBQhfAYC8hmIB0hBQCChIAIgPQACgMgMgLQgNgMABgHQABgIAUgNQARgMgFgKQgagxgKguQgOg9ANg5QARhWA6gXQA6gXAdBKIAGAUQAfBcgmCoQgEARAkAKIAbAGQAGgKACACIANAMQAOARgBASQgBAIgNANQgOAMgDAMIgFAdQgLA9gDA+QgFBIAFBHQAIBpAVBBIhFACIgPAAg");
	this.shape_32.setTransform(-31.1,-99.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(40,40,40,0.6)").s().p("AEKJZQiagEgEhRQgFgWizAqQhOARgvAIQg7ALgBgGQgNgBgbieQgZiNgLgUIgDgBQh+AjD5iFICWhTQCqhdAIgUQACgQgSgOQgSgQABgKQACgJAZgSQAWgQgHgNQglhBgQg+QgUhRAOhNQAThzBLgfQBLggAkBiIAIAaQAkB4g0DaQgFAXAwALQAPAEAVADQAIgNADACIASAPQASAWgBAXQgBALgRAQQgTAPgDAQIgGAmQgMBQgDBSQgEBeAJBeQAOCKAgBXIhYACIgTAAg");
	this.shape_33.setTransform(-39.4,-130.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(33,33,33,0.502)").s().p("AFLLlQi9gFgDhkQgEgcjeA1QhhAXg4AKQhKAPgBgIQgOABggjEQgfivgOgWIgDgCQieAvE1ikIC5hlQDTh0AGgYQACgTgWgSQgXgUABgMQABgMAfgWQAbgTgJgRQgvhRgWhOQgchlAQhgQAWiQBbgoQBdgoArB6IAKAfQAoCThCEOQgGAbA8AOQATAEAZAEQALgSADADIAXASQAXAagBAdQAAANgWAUQgXATgDAUIgHAuQgPBkgCBkQgDB1ANB0QAVCsArBsQhLADghAAIgPAAIgJAAg");
	this.shape_34.setTransform(-47.6,-161.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(26,26,26,0.404)").s().p("AGINxQjhgGgCh4QgCghkJBAQh0AchDANQhXASgBgJQgPADgnjrQgkjRgQgYIgEgCQi9A7FxjEQB+hDBdg0QD7iKAGgcQACgXgbgWQgcgXABgPQAAgNAlgcQAhgWgMgUQg6hhgbhdQgjh6ARh0QAYisBtgxQBtgxAzCSQAGARAFAUQAtCvhPFBQgHAfBIAQQAWAFAeAEQANgVAEADIAbAVQAcAfgBAiQAAAQgZAXQgcAWgEAYIgIA3QgQB3gCB3QgCCLASCMQAaDNA3CCIiAADIgSAAIgKAAg");
	this.shape_35.setTransform(-55.4,-191.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(20,20,20,0.302)").s().p("AHFP9QkFgHgBiMQgBgmk0BMQiGAhhNAPQhlAVgBgJQgRADgskRQgpjygTgbIgFgCQjdBGGujjQCShNBsg8QEjigAFggQACgbgggZQghgbABgRQAAgQArggQAlgagNgYQhFhxghhsQgqiOASiHQAbjKB9g5QB/g5A6CpQAHAUAGAXQAyDKheF0QgIAlBUARQAaAGAkAEQAOgZAFAEIAgAYQAgAkAAAnQAAASgeAbQggAagEAbIgJBAQgSCKgCCLQgBChAXCiQAgDwBCCWIiUAEIgUAAIgMAAg");
	this.shape_36.setTransform(-63.1,-222.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(13,13,13,0.204)").s().p("AICSJQkpgHAAigQAAgrlfBXQiYAmhXASQh0AYgBgKQgSAEgyk3QgukTgWgeIgFgDQj9BSHqkCQCmhXB7hEQFMi2ADgkQACgfgkgdQgmgeAAgUQAAgSAxgkQArgfgQgaQhQiBgmh8QgyijAUiaQAejnCNhBQCQhCBCDAQAIAYAGAaQA2DlhrGnQgJAqBgATQAeAHAoAEQARgcAFADIAlAcQAlAoAAAtQAAAUgiAfQglAdgEAeIgKBJQgUCdgBCfQAAC3AbC5QAnERBNCtIioADIgXAAIgNAAg");
	this.shape_37.setTransform(-70.8,-253.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(7,7,7,0.102)").s().p("AI/UVQlNgIABi0QABgwmKBiQiqArhiAVQiBAcgBgMQgTAGg4leQg0k1gYggIgGgDQkcBeImkhQC6hiCJhLQF0jNADgoQACgjgpggQgrgiAAgWQAAgVA2goQAwgigSgfQhaiRgsiLQg5i3AVitQAgkECfhKQChhLBJDYQAJAbAHAdQA7EAh5HbQgLAuBsAWQAiAHAuAEQASggAGAEIAqAfQApAtAAAyQAAAWglAjQgqAggEAjIgLBRQgWCxAACxQAADOAgDQQAtEzBYDBIi8AEIgaAAIgOAAg");
	this.shape_38.setTransform(-78.6,-284.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.004)").s().p("AJ8WhQlxgJADjHQACg2m1BuQm5BwAAgXQgVAHg+mDQhAmGgaAJQk8BpJjlAQMCmSACg8QACgmgugkQgwgmAAgZQAAgWA8gtQA1gmgVgiQjplzAqlVQAikhCvhSQCyhTBRDvQBhEdiWJKQgQBDDUAVQAVgkAGAEIAvAiQAuAxAAA4QAAAZgqAmQguAkgFAmIgLBaQg1GlBDGuQAzFVBjDXQitAFg4AAIgXgBg");
	this.shape_39.setTransform(-86.3,-314.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29}]},19).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(17));

	// Layer_19
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#424242").s().p("AhGAkQgdgPAAgVQAAgVAdgPQAegPAoAAQApAAAeAPQAdAPAAAVQAAAVgdAPQgeAPgpABQgogBgegPg");
	this.shape_40.setTransform(8.3,-6.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(66,66,66,0.933)").s().p("AgJBcQgbgBgRgFIgGgCQgOgFgPgIQgbgQgJgTIAAgBQgYgiA9gRIANgEQAJgCgDgEQgCgHAGgCQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBgBAAIAAgBIABAAIAigIQAMgDAJgHQAUgKAMgQQAGgKAIACQALACAQASIABACQATANAUAWQAMAPAFANQAHAMgCAIQAIALgJAKQgEAFgOAGIgBAAQgLAFAAADQAXAXg3ALIgLACQgXACgaAAIgOAAg");
	this.shape_41.setTransform(2,-29.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(66,66,66,0.867)").s().p("AgsCHIgJgCQgSgFgYgMQgogUgSgXIAAgBQgwgvBcgWIAUgEQANgCgKgHQgLgKAFgDQABgBgEgFIAAAAQAYgGAYgIQAQgGALgNQAWgUAJgkQAEgVAHABQALACAYAgIACADQAWASAgAiQATAUAKARQANASACAIQATANgIAPQgEAGgWAJIgBABQgRAGAEAEQBIAjhLAWIgQAEQgnAHgzADIgRAAQgdAAgRgEg");
	this.shape_42.setTransform(-3.9,-52.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(66,66,66,0.8)").s().p("AgrC3IgMgCQgWgGghgOQg1gYgbgdIgBAAQhIg9B8gZIAZgFQASgCgQgKQgVgNAEgEQABgBgIgHIgBgBIABAAQAfgHAfgMQAVgIAMgUQAZgeAFg3QABghAIABQALAAAeAuIAEAFQAZAXAsAuQAaAaAOAUQAUAXAFAJQAfAQgHATQgEAHgdAMIgCABQgZAJAKAFQB5AvhfAgIgVAHQgwALhFAFQgZACgSAAQgYAAgPgDg");
	this.shape_43.setTransform(-9,-74.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(66,66,66,0.733)").s().p("AguDoIgQgDQgagHgqgRQhCgcgkghIgBAAQhghKCbgcIAggGQAWgDgXgMQgegSACgEQABgCgLgIIgCgBIABAAQAmgKAmgPQAZgKAPgcQAbgnABhKQgBgtAHAAQAMgBAlA8IAFAHIBVBVQAfAhAUAYIAjAkQArATgHAYQgEAIgkAPIgDABQgfALAOAGQCqA7hyArIgaAJQg6APhXAJQgpAEgbAAQgTAAgNgCg");
	this.shape_44.setTransform(-13.6,-97.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(66,66,66,0.667)").s().p("AgyEYIgSgDQgfgHgzgUQhPghgtglIgCgBQh3hWC6ggIAmgGQAbgDgdgPQgogWABgGQABgCgPgJIgCgCIAAAAQAugLAsgTQAegNAQgiQAdgxgDheQgDg4AHAAQANgCAtBJIAFAJQAfAhBFBFQAmAnAZAbQAhAgAMAKQA2AWgGAcQgDAKgsARIgDABQgnAOATAHQDbBHiGA2IgfALQhDAThoALQg5AGgjAAIgcgBg");
	this.shape_45.setTransform(-18.2,-120.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(66,66,66,0.6)").s().p("Ag1FIQgJAAgNgDQgjgIg8gXQhcgkg2gqIgCgBQiPhkDZgjIAtgGQAfgEgkgSQgxgaAAgGQAAgCgSgMIgDgCIABAAQA0gNAzgWQAjgPASgpQAfg8gHhwQgGhEAHgBQANgDA1BXIAHALQAhAmBSBRIBKBLQAnAmAQAJQBCAZgGAhQgDALg0AUIgDABQgtAQAXAIQEMBTiZBBQgQAHgUAGQhNAXh5APQhIAIgpAAIgagBg");
	this.shape_46.setTransform(-22.8,-143.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(66,66,66,0.533)").s().p("Ag5F4QgJAAgPgDQgogJhFgaQhpgpg/gtIgCgCQinhwD5gnQAXgEAbgDQAkgEgrgUQg6gegCgHQAAgDgWgOIgDgCIABAAQA8gPA5gZQAogSATgwQAhhFgLiEQgIhPAHgCQAOgEA8BlIAIANQAlArBdBcIBWBVQAuArASAJQBOAcgFAmQgCALg8AXIgEACQg0ASAcAJQE+BfiuBMQgSAIgXAHQhWAbiLASQhYALgwAAIgWgBg");
	this.shape_47.setTransform(-27.4,-165.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(66,66,66,0.467)").s().p("Ag8GpQgLgBgRgDQgsgKhOgdQh2gshJgzIgCgBQi+h+EYgqIA4gHQApgEgxgYQhFghgCgIQgBgDgZgQIgEgDIABAAQBDgRBAgcQAsgVAWg2QAjhPgPiYQgKhaAHgDQAOgFBDBzIAKAOQAoAxBoBoIBhBeQA1AwAWAKQBZAfgEApQgCAOhDAZIgEACQg8AVAgAKQFwBrjCBWQgTAJgaAJQhhAeibAVQhsAOg2AAIgPAAg");
	this.shape_48.setTransform(-32,-188.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(66,66,66,0.4)").s().p("AhAHZQgMgBgTgDQgwgLhXggQiDgxhSg2IgCgCQjXiKE4guQAdgEAhgDQAtgFg4gaQhNgmgEgJQgBgDgdgRIgEgDIABAAQBKgUBHggQAxgXAXg9QAlhZgTirQgNhmAHgDQAPgGBLCAIAKARQArA1B1B0QBBA/AsApQA7A1AZAKQBlAigDAuQgCAOhKAdIgGABQhCAYAlALQGhB3jWBhQgVAKgdAKQhqAiitAYQh9ARg7AAIgMAAg");
	this.shape_49.setTransform(-36.5,-211.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(66,66,66,0.333)").s().p("AhDIJQgOAAgVgEQg0gLhggjQiQg1hbg7IgDgCQjuiYFXgwQAggFAlgEQAxgFg+gdQhXgpgFgKQgCgDgggUIgFgDIACAAQBRgVBNgkQA1gZAZhEQAohjgYi+QgOhyAGgEQAPgGBTCOIALASQAuA6CCCAQBHBFAxAsQBCA6AcALQBxAkgDAzQgCAPhSAgIgFACQhJAZApAMQHSCDjpBsQgYALggALQhzAmi+AbQiLAUhBAAIgLAAg");
	this.shape_50.setTransform(-41.1,-234.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(66,66,66,0.267)").s().p("AhHI5QgPAAgWgFQg5gLhpgmQidg5hkhAIgDgCQkGilF2g0QAjgFAogDQA2gGhFgfQhggugHgKQgBgEgkgVIgGgEIACAAQBYgXBUgnQA6gcAbhKQAphugbjRQgRh9AGgFQAQgHBaCbIANAUQAxBACNCLQBOBLA1AwQBJA/AgALQB8AngCA3QgBARhaAiIgGACQhQAcAuANQIDCPj9B3QgaAMgiAMQh9AqjQAeQicAXhFAAIgJAAg");
	this.shape_51.setTransform(-45.7,-256.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(66,66,66,0.2)").s().p("AhLJpQgQAAgYgFQg+gMhxgpQiqg+huhDIgDgDQkdixGVg4QAlgFAsgEQA7gGhMgiQhqgxgIgLQgCgFgngXIgGgEIACAAQBfgZBbgqQA+gfAdhRQArh3gfjlQgTiJAGgFQAQgIBhCpQAFAJAJANQA0BECaCXQBUBSA7AzQBPBDAjANQCIApgBA8QgBAShhAkIgHADQhXAeAyAOQI1CbkRCBQgcAOglANQiHAujhAhQitAahKAAIgGAAg");
	this.shape_52.setTransform(-50.3,-279.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(66,66,66,0.133)").s().p("AhOKZQgRAAgbgFQhCgNh6gsQi3hBh3hJIgDgCQk2i/G1g6QApgGAugEQBAgHhTgkQhzg1gJgMQgCgFgrgZIgHgEIACAAQBmgbBiguQBDghAehYQAuiCgjj3QgWiVAGgFQARgKBoC3QAGAKAJAOQA3BJCnCjQBaBYBAA2QBVBIAnAOQCUAsgBBAQgBAThoAnIgIADQheAhA3APQJmCnkkCMQgeAOgpAPQiQAyjyAkQi+AchQAAIgCAAg");
	this.shape_53.setTransform(-54.9,-302.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(66,66,66,0.067)").s().p("AhSLJQgTAAgcgFQhGgOiEguQjEhGh/hNIgEgCQlNjMHUg+QArgGAygEQBEgHhZgoQh9g5gKgMQgDgFgugbIgHgFIACAAQBtgdBpgxQBHgkAghfQAwiLgnkLQgYigAGgGQARgLBwDFQAGALAKAPQA6BOCzCvQBgBdBFA6QBcBOAqANQCgAvgBBFQAAAUhwAqIgIADQhlAjA8AQQKXCzk4CXQghAQgrAPQiZA2kEAnQjMAfhVAAIgCAAg");
	this.shape_54.setTransform(-59.4,-325);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(66,66,66,0)").s().p("AlfK0QjUhLiJhTQmGjtJ4g4QBIgHhggqQiGg9gLgOQgDgFgygdIgIgFIACAAQB1gfBvg1QC9hdhJniQgairAGgHQARgMB4DTQArBMDiDdQDyDpBPAYQCrAyAABJQAAAWiAAwQhrAlBAARQMSDTnmCvQijA6kVAqQjdAihaAAQhDAAjGhFg");
	this.shape_55.setTransform(-64,-347.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40}]},27).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).wait(4));

	// Layer_5
	this.instance = new lib.fire1();
	this.instance.parent = this;
	this.instance.setTransform(-6.6,-35.9,0.496,0.208,0,0,0,0,-163);
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,33);

	this.instance_1 = new lib.fire2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.4,-30.6,0.766,0.169,0,0,0,0,-171);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,51,0,1)",0,0,64);

	this.instance_2 = new lib.fire3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.5,-38.3,0.684,0.195,0,0,0,0.1,-178.8);
	this.instance_2.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,42);

	this.instance_3 = new lib.fire4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.5,-46.1,0.839,0.234,0,0,0,0.1,-186.6);
	this.instance_3.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,55);

	this.instance_4 = new lib.fire5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.4,-67.9,0.864,0.345,0,0,0,0,-194.6);
	this.instance_4.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,49);

	this.instance_5 = new lib.fire6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.4,-60.6,1,0.295,0,0,0,0,-202.4);
	this.instance_5.shadow = new cjs.Shadow("rgba(204,0,0,1)",0,0,50);

	this.instance_6 = new lib.fire7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.4,-105.3,1,0.498,0,0,0,0,-210.2);
	this.instance_6.shadow = new cjs.Shadow("rgba(153,0,0,1)",0,0,65);

	this.instance_7 = new lib.fire8fixed();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.4,-122.1,1,0.551,0,0,0,0,-218.2);
	this.instance_7.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,37);

	this.instance_8 = new lib.fire9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0.4,-113.5,1,0.504,0,0,0,0,-225.6);
	this.instance_8.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,38);

	this.instance_9 = new lib.fire09fixed();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.4,-11.2,1,0.585,0,0,0,0,-15.8);
	this.instance_9.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,112);

	this.instance_10 = new lib.Symbol2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0.4,-150,1,0.635,0,0,0,0,-233.4);
	this.instance_10.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,53);

	this.instance_11 = new lib.Symbol3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1.4,-173.8,1,0.723,0,0,0,0.4,-237.3);
	this.instance_11.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,43);

	this.instance_12 = new lib.Symbol4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(2.3,-174.6,1,0.622,0,0,0,0.3,-280.2);
	this.instance_12.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,44);

	this.instance_13 = new lib.Symbol10();
	this.instance_13.parent = this;
	this.instance_13.setTransform(3.4,-232.6,1,0.823,0,0,0,0.4,-282.4);
	this.instance_13.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,60);

	this.instance_14 = new lib.Symbol11();
	this.instance_14.parent = this;
	this.instance_14.setTransform(3,-280.2,1,1,0,0,0,0.3,-285.1);
	this.instance_14.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,79);

	this.instance_15 = new lib.Symbol8();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1.5,-181.1,1,1,0,0,0,0.3,-186.1);
	this.instance_15.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regY:-163,scaleX:0.496,scaleY:0.208,x:-6.6,y:-35.9}}]}).to({state:[{t:this.instance_1,p:{regY:-171,scaleX:0.766,scaleY:0.169,y:-30.6}}]},1).to({state:[{t:this.instance_2,p:{regX:0.1,scaleX:0.684,scaleY:0.195,x:0.5,y:-38.3}}]},1).to({state:[{t:this.instance_3,p:{regX:0.1,regY:-186.6,scaleX:0.839,scaleY:0.234,x:0.5,y:-46.1}}]},1).to({state:[{t:this.instance_4,p:{scaleX:0.864,scaleY:0.345,y:-67.9}}]},1).to({state:[{t:this.instance_5,p:{scaleY:0.295,y:-60.6}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.498,y:-105.3}}]},1).to({state:[{t:this.instance_7,p:{regY:-218.2,scaleY:0.551,y:-122.1}}]},1).to({state:[{t:this.instance_8,p:{scaleY:0.504,y:-113.5}}]},1).to({state:[{t:this.instance_9,p:{regY:-15.8,scaleY:0.585,y:-11.2}}]},1).to({state:[{t:this.instance_10,p:{regY:-233.4,scaleY:0.635,y:-150}}]},1).to({state:[{t:this.instance_11,p:{regY:-237.3,scaleY:0.723,y:-173.8}}]},1).to({state:[{t:this.instance_12,p:{scaleY:0.622,y:-174.6}}]},1).to({state:[{t:this.instance_13,p:{regX:0.4,scaleY:0.823,x:3.4,y:-232.6}}]},1).to({state:[{t:this.instance,p:{regY:-163.1,scaleX:1,scaleY:1,x:0.4,y:-159.9}}]},1).to({state:[{t:this.instance_1,p:{regY:-170.9,scaleX:1,scaleY:1,y:-167.6}}]},1).to({state:[{t:this.instance_2,p:{regX:0,scaleX:1,scaleY:1,x:0.4,y:-175.3}}]},1).to({state:[{t:this.instance_3,p:{regX:0,regY:-186.7,scaleX:1,scaleY:1,x:0.4,y:-183.1}}]},1).to({state:[{t:this.instance_4,p:{scaleX:1,scaleY:1,y:-190.9}}]},1).to({state:[{t:this.instance_5,p:{scaleY:1,y:-198.6}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1,y:-206.3}}]},1).to({state:[{t:this.instance_7,p:{regY:-218.1,scaleY:1,y:-214}}]},1).to({state:[{t:this.instance_8,p:{scaleY:1,y:-221.4}}]},1).to({state:[{t:this.instance_9,p:{regY:-229.5,scaleY:1,y:-225.2}}]},1).to({state:[{t:this.instance_10,p:{regY:-233.3,scaleY:1,y:-228.9}}]},1).to({state:[{t:this.instance_11,p:{regY:-237.2,scaleY:1,y:-232.7}}]},1).to({state:[{t:this.instance_12,p:{scaleY:1,y:-275.5}}]},1).to({state:[{t:this.instance_13,p:{regX:0.3,scaleY:1,x:3.3,y:-277.6}}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance,p:{regY:-163.1,scaleX:1,scaleY:1,x:0.4,y:-159.9}}]},1).to({state:[{t:this.instance_1,p:{regY:-170.9,scaleX:1,scaleY:1,y:-167.6}}]},1).to({state:[{t:this.instance_2,p:{regX:0,scaleX:1,scaleY:1,x:0.4,y:-175.3}}]},1).to({state:[{t:this.instance_3,p:{regX:0,regY:-186.7,scaleX:1,scaleY:1,x:0.4,y:-183.1}}]},1).to({state:[{t:this.instance_4,p:{scaleX:1,scaleY:1,y:-190.9}}]},1).to({state:[{t:this.instance_5,p:{scaleY:1,y:-198.6}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1,y:-206.3}}]},1).to({state:[{t:this.instance_7,p:{regY:-218.1,scaleY:1,y:-214}}]},1).to({state:[{t:this.instance_8,p:{scaleY:1,y:-221.4}}]},1).to({state:[{t:this.instance_9,p:{regY:-229.5,scaleY:1,y:-225.2}}]},1).to({state:[{t:this.instance_10,p:{regY:-233.3,scaleY:1,y:-228.9}}]},1).to({state:[{t:this.instance_11,p:{regY:-237.2,scaleY:1,y:-232.7}}]},1).to({state:[{t:this.instance_12,p:{scaleY:1,y:-275.5}}]},1).to({state:[{t:this.instance_13,p:{regX:0.3,scaleY:1,x:3.3,y:-277.6}}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).wait(1));

	// Layer_20
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#424242").s().p("AgiARQgPgHAAgKQAAgJAPgHQAPgHATAAQAVAAAOAHQAPAHAAAJQAAAKgPAHQgOAHgVAAQgTAAgPgHg");
	this.shape_56.setTransform(-19.7,-5.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(62,68,62,0.937)").s().p("AgUBBIgKgDQgggIgegMQgGgCgJgUIgHgPQgPgiAAgKQAAgLA6gYIABAAQAKgCAZAHQAeAJAIgBIATAAQApACAeAJQAQAFAKAHQAaAUgkAfIgDAEQgBABAAAAQAAABAAAAQAAABABAAQAAABABAAQAAABABAAQAAABABABQAAAAAAAAQAAABAAAAQgBAEgGAEQgEAEgcATIgBAAQgbASgKABIgEABQgNAAgjgLg");
	this.shape_57.setTransform(-15.6,-31.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(58,71,58,0.875)").s().p("AgsBsIgRgGQgygQgzgUQgIgDgLgmIgKgbQgUg/AAgNQAAgMBkgoIADAAQAOAAArAPQAzATALgBQAPAAAOABQBGADAvAPQAdAJANAMQAmAhhHA0IgHAGQgDADAFADQAGAEAAACQgBAHgLAFQgEAEgyAjIgBABQguAggMABIgCAAQgPAAhFgXg");
	this.shape_58.setTransform(-11.3,-57.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(54,73,54,0.812)").s().p("AhFCXIgYgJQhFgXhHgdQgJgDgPg5IgNgmQgYhdAAgOQAAgNCPg6IADAAQASABA+AYQBKAdAMAAIAoAAQBhAFBCAVQAoANASARQAyAuhsBJIgKAIQgFAEAIAFQAKAFAAADQgBAJgPAHIhMA2IgCACQhCAugOABIgBAAQgSAAhkgkg");
	this.shape_59.setTransform(-6.8,-83.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(50,75,50,0.749)").s().p("AhcDCIgfgLQhYgghcglQgKgDgThMIgPgzQgeh4AAgRQAAgPC7hKIAEABQAWABBQAgQBhAoANAAIAzABQB8AGBVAbQAzARAXAWQA9A6iPBfIgOAKQgGAFAKAGQAOAHgBADQAAAMgUAIIhhBGIgDACQhWA9gPABIgBAAQgTAAiEgxg");
	this.shape_60.setTransform(-2.5,-109.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(45,77,45,0.686)").s().p("Ah1DtIglgOQhsgohwgtQgLgEgXheIgQg/QgkiVAAgUQAAgPDmhbIAFABQAaACBiApQB4AyAPgBIA9ACQCYAIBnAhQA/AUAbAbQBJBIizB0IgSAMQgHAFANAIQARAIAAAEQgBAPgYAJIh3BWIgEACQhpBMgRABIgBAAQgVAAikg+g");
	this.shape_61.setTransform(1.9,-134.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(41,80,41,0.624)").s().p("AiNEYIgsgRQh/gwiEg1QgMgFgbhwIgThLQgpiyAAgWQAAgQERhsIAHABQAdAEB1AxQCPA8AQgBQAlABAiACQC0AJB5AnQBLAYAfAgQBVBUjXCKIgVAOQgJAGAQAJQAUAKAAAEQgBARgdAMIiMBlIgEADQh9BagTABIgBAAQgWAAjEhLg");
	this.shape_62.setTransform(6.3,-160.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(37,82,37,0.561)").s().p("AilFDIg0gUQiRg3iZg+QgNgFgeiCIgVhYQgvjPAAgYQAAgRE8h8QACgBAGABQAhAFCHA6QCmBGARAAQArAAAoACQDPALCLAtQBWAcAlAlQBfBhj6CfIgZAQQgKAHATAKQAXAMAAAFQgBAUghAMIihB1IgGAEQiQBogVABIgBAAQgXAAjkhYg");
	this.shape_63.setTransform(10.7,-186.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(33,84,33,0.502)").s().p("Ai+FuIg6gXQikg/iuhGQgOgFgiiVIgXhkQg0jsAAgaQAAgSFniNQACgBAHABQAlAGCZBDQC9BQATAAIBcADQDrAMCdAzQBjAgAoAqQBsBukfC0IgbASQgNAIAWALQAbANAAAGQgBAWglAPIi3CEIgGAEQikB3gYABIAAAAQgaAAkDhlg");
	this.shape_64.setTransform(15.2,-212.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(29,86,29,0.439)").s().p("AjWGZIhBgZQi3hHjDhPQgPgGgminIgZhwQg5kIAAgcQAAgUGSieIAKABQApAHCrBLQDUBaAUAAQA1ABAzADQEGANCvA5QBuAkAuAvQB3B7lDDKIgfAUQgOAIAZAMQAeAPAAAGQAAAZgrARQgHAEjFCPIgHAFQi4CFgZABIgBAAQgbAAkihyg");
	this.shape_65.setTransform(19.6,-238.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(25,89,25,0.376)").s().p("AjvHEIhHgcQjKhPjXhXQgQgGgqi6Igch8Qg+klAAgfQAAgUG9ivQADgBAIACQAtAIC+BTQDqBlAWAAQA7ABA3ADQEiAPDBA/QB6AnAyA1QCCCIlmDfIgiAWQgQAJAcANQAhAQAAAHQAAAcgvASQgIAEjaCfIgHAGQjMCTgbAAIgBAAQgcAAlDh+g");
	this.shape_66.setTransform(24,-264.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(21,91,21,0.314)").s().p("AkHHvIhPgfQjchWjshgQgRgHgtjMQgOg8gQhMQhElCAAghQAAgVHojAQADgBAJACQAxAJDQBcQECBvAWAAQBBABA8ADQE+ARDTBFQCGArA2A5QCOCVmKD1IgmAXQgRALAeAOQAmASAAAHQgBAfgzATQgIAEjwCvIgIAGQjfCigdAAIgBAAQgdAAljiLg");
	this.shape_67.setTransform(28.4,-290.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(17,93,17,0.251)").s().p("AkfIaIhWghQjvhfkAhoQgTgHgxjeIggiVQhJleAAgjQAAgXITjRQADgBAKADQA1AKDjBkQEYB6AYAAQBGABBBADQFaATDmBKQCQAvA7A+QCaCimuEKIgpAaQgTALAhAQQApATAAAIQAAAhg4AVQgJAEkEC+IgJAHQjzCwgfAAIgBAAQgfAAmCiYg");
	this.shape_68.setTransform(32.8,-316);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(12,95,12,0.188)").s().p("Ak3JFIhdgkQkDhmkUhxQgTgIg1jwIgiihQhPl7AAgmQAAgXI+jiQAEgBALADQA4ALD1BtQEvCEAagBQBLACBHAEQF1AUD4BQQCcAyBABEQClCvnSEfIgtAcQgUAMAkARQAsAUAAAJQAAAkg9AWQgIAEkaDOIgKAHQkGC/ghAAQggAAmjilg");
	this.shape_69.setTransform(37.2,-341.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(8,98,8,0.125)").s().p("AlQJwIhjgnQkWhukph5QgUgIg5kDIglitQhTmYAAgoQAAgZJpjyQAEgBALADQA9AMEHB1QFGCOAbAAQBRACBLAEQGRAVEKBXQCoA2BEBJQCxC7n1E1IgxAeQgVAMAmATQAwAWAAAJQAAAmhBAZQgKAEkuDdIgLAIQkaDNgjAAIAAAAQgjAAnBiyg");
	this.shape_70.setTransform(41.6,-367.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(4,100,4,0.063)").s().p("AloKbIhrgqQkoh2k9iBQgWgJg8kVIgni5QhZm1AAgqQAAgaKUkCQAEgCANADQBAANEaB/QFcCXAdAAQBWADBRADQGsAYEcBcQC0A6BJBNQC8DJoZFKIg0AgQgXANApAUQAzAYAAAJQAAAphGAaQgJAElEDtIgLAIQkuDbglABQgjAAnii/g");
	this.shape_71.setTransform(46,-393.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,102,0,0)").s().p("AnyKZQk7h9lSiKQgdgMhjnqQhenSAAgsQAAgbK/kTQAbgLFnChQF0CjAdAAQJBAMFnB1QLJDmtpIBQgYAOAsAVQA2AZAAALQAAArhKAcQgKAElZD8QlMDzgoAAQgpAApvj5g");
	this.shape_72.setTransform(50.4,-419.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56}]},20).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).wait(10));

	// Layer_21
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AhkAnQgqgQAAgXQAAgWAqgQQAqgQA6AAQA7AAApAQQArAQgBAWQABAXgrAQQgpAQg7AAQg6AAgqgQg");
	this.shape_73.setTransform(17.8,-6.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(52,52,52,0.941)").s().p("AAACFQgNgCgLgRIgHgGQgJgHgIgKQgkgCgwhCIgOgOQg1g7ACgWIAAgBQADgTA1gTIAdgKQAbgHASgDQAXgFAvARIAzAOIAWAGQAmAEAcA/QAKAMAJANQAdAeAIAjQADAIgMAHQgFAIgOAHQgkALgZALIgEABQgGABgIgDQgNgGgMACQgNACgVAOQgRAMgMAAIgDAAg");
	this.shape_74.setTransform(12,-25.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(53,53,53,0.882)").s().p("AggDXQgRgEgJgjIgFgMQgIgPgGgSQgigEhBh5IgSgYQhBhmAFgYIAAgBQAHgUBQgYIArgMQAqgKAVgDQAbgEBIAjIBGAdIAdANQAnAGAbB3QAKAUAIAWQAcAyAGA4QADAKgXAGQgLAIgWAHQg+AJgaAMQgDACgDAAQgIAAgLgIQgSgOgOACQgQACgfAbQgYAVgPAAIgDgBg");
	this.shape_75.setTransform(6.3,-45.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(54,54,54,0.824)").s().p("AhCEpQgTgGgHg2IgEgRQgHgWgFgbQgfgFhTixIgTgiQhNiSAHgYIAAgBQAKgXBtgcIA3gOQA5gNAZgDQAegDBhA2IBZArIAlAUQAoAJAaCuQAJAdAIAfQAZBFAHBNQACALgiAHQgRAIgeAFQhZAIgaAOQgEACgEAAQgKgBgOgNQgXgVgSABQgTACgnAnQggAegRAAIgFgBg");
	this.shape_76.setTransform(0.7,-65);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(55,55,55,0.765)").s().p("AhkF8QgVgKgFhHIgDgXQgFgdgEglQgdgGhkjpIgWgsQhZi9AKgZIAAgBQANgYCJghIBEgRQBJgPAcgCQAigEB6BJIBrA7IAtAaQApALAZDlIAQBOQAXBZAGBhQACAOguAGQgWAIgmAFQhzAHgbAOQgFADgFAAQgMgCgRgSQgdgdgUABQgWACgxAzQgoAogTAAIgGgBg");
	this.shape_77.setTransform(-5,-84.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(55,55,55,0.706)").s().p("AiFHOQgYgMgChaIgDgcQgEglgCgtQgbgIh0kgIgZg2QhljpAMgZIAAgBQARgaClgmIBQgTQBYgSAhgCQAlgDCTBbIB+BKIA0AhQAqAOAYEbIAPBhQAWBsAEB2QACAPg5AHQgcAHguAEQiNAGgcAQQgFADgHgBQgOgCgUgWQgigmgXACQgYABg8A/QgvAxgVAAQgEAAgDgBg");
	this.shape_78.setTransform(-10.7,-104.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(56,56,56,0.647)").s().p("AinIgQgagOAAhsIgCgiQgDgsAAg2QgZgJiFlZIgchAQhxkTAPgbIAAgBQAVgbDAgrIBdgVQBogVAkgCQAngDCtBuICRBZIA8AoQArAQAWFTQAIA4AGA7QAVB/ADCLQACARhEAHQgiAHg2ADQioAFgdAQQgGAFgHgCQgQgCgXgcQgngtgaABQgaABhGBLQg3A7gYAAQgEAAgEgCg");
	this.shape_79.setTransform(-16.3,-124.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(57,57,57,0.588)").s().p("AjJJyQgcgRACh9IgBgoQgBg0ABg+QgXgLiXmRIgehJQh9k/ASgbIAAgBQAYgdDcgwIBqgXQB3gXAogCQAqgDDGCBICkBoIBEAuQAsASAVGLIANCFQASCSAECfQABAThQAHQgnAHg+ADQjCADgeASQgHAFgIgCQgSgDgaghQgsg1geABQgdABhPBXQg+BEgbAAQgFAAgEgCg");
	this.shape_80.setTransform(-22,-143.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(58,58,58,0.529)").s().p("AjqLFQgfgUAFiPIAAguQgBg7ADhHQgUgMionJIghhTQiJlqAVgcIAAgBQAbgfD4g1IB2gZQCHgaAsgCQAtgCDfCTIC3B3IBLA2QAtAUAUHCIAMCXQARCmACCzQACAVhcAHQgtAHhGACQjcACgfATQgHAFgKgCQgUgEgdglQgxg+ggACQggABhaBjQhFBNgeAAQgFAAgEgCg");
	this.shape_81.setTransform(-27.7,-163.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(59,59,59,0.471)").s().p("AkLMXQghgWAGiiIABg0QABhBAEhRQgSgNi5oBIgjhdQiVmWAXgdIAAAAQAeggEVg6ICDgcQCVgcAwgCQAxgCD4CmQB5BPBRA3IBSA8QAuAXAUH5QAGBTAEBWQAPC5ACDJQABAWhnAHQgzAGhNACQj4ABgfAUQgIAGgLgCQgVgFgggqQg3hGgiABQgkABhjBwQhNBXghAAQgFAAgEgDg");
	this.shape_82.setTransform(-33.4,-183.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(60,60,60,0.412)").s().p("AktNpQgkgYAJi0IACg5QAChJAGhaQgQgOjKo5IgmhnQihnBAageQAigiEwg/ICQgdQClggAzgBQA1gCEQC5QCFBXBYA+QA2AmAkAcQAvAaASIxQAGBbAEBfQANDNABDdQABAYhzAHQg4AGhWABQkRAAggAVQgJAHgMgDQgXgFgkgvQg7hOgmABQgmABhtB8QhUBfgjAAQgGAAgFgDg");
	this.shape_83.setTransform(-39,-203);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(61,61,61,0.353)").s().p("AlPO8QgmgcALjFIADg/QAEhRAHhiQgOgPjbpyIgphxQitnsAdgeQAlgkFMhEQBXgSBGgOQC0ghA3gCQA4gBEqDLQCQBhBfBDQA7ArAnAeQAwAcARJoIAJDNQALDgAADxQABAbh+AHQg+AFheABQksgCghAWQgJAIgNgDQgagGgmg0QhBhWgoABQgpABh3CIQhcBpglAAQgHAAgFgDg");
	this.shape_84.setTransform(-44.7,-222.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(62,62,62,0.294)").s().p("AlxQOQgogeANjXIAEhFQAFhYAIhsQgLgQjsqpIgsh7Qi4oXAfggQAoglFohJQBegUBMgOQDDgkA6gBQA8gCFDDeQCcBqBmBKQA/AuArAhQAxAeAQKgQAEBtADByQAKDzgBEGQABAciKAHQhDAGhmAAQlGgEgiAYQgLAIgNgDQgcgHgpg5QhFhdgsAAQgsABiACUQhkBygoAAQgHAAgGgDg");
	this.shape_85.setTransform(-50.3,-242.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(62,62,62,0.235)").s().p("AmSRgQgrggAQjqIAEhKQAGhgAKh0QgJgSj9rhIguiFQjEpCAhggQAsgnGEhOIC2gkQDTgnA+gBQA/gBFcDxQCnByBuBQQBEAyAtAkQAyAhAPLXQAEB2ACB7QAIEGgBEbQAAAeiVAHQhJAFhugBQlggEgjAYQgLAJgPgEQgdgHgtg9QhKhmgvABQgvAAiKCgQhrB8grAAQgHAAgGgEg");
	this.shape_86.setTransform(-56,-262.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(63,63,63,0.176)").s().p("Am0SyQgtgjASj7IAFhQQAIhnALh9IkVssIgxiPQjQpuAkghQAvgoGghTQBtgWBWgQQDigqBCgBQBDgBF0EEQCzB7B1BWQBJA2AwAnQAzAjAOMPIAFECQAGEagCEvQAAAgigAIQhPAEh2gBQl7gGgkAaQgLAJgQgEQgfgIgwhCQhPhugzABQgxAAiUCsQhzCGgtAAQgIAAgGgFg");
	this.shape_87.setTransform(-61.7,-281.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(64,64,64,0.118)").s().p("AnWUEQgvglAUkOIAGhWQAJhtANiHQgFgUkftRIgziZQjdqZAnghQAzgrG8hXQBzgYBcgQQDxgtBGAAQBGgBGOEWQC+CEB8BdQBOA5AzAqQA0AmAMNFIAFEVQAEEtgDFEQAAAiisAHQhUAFh+gDQmWgHgkAbQgMAKgRgEQgigJgyhHQhVh1g1AAQg0AAieC4Qh6CPgwAAQgJAAgGgFg");
	this.shape_88.setTransform(-67.3,-301.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(65,65,65,0.059)").s().p("An4VXQgygoAXkgIAHhcQAKh1AOiPQgCgVkxuKIg2iiQjorEApgjQA2gsHYhcIDcgrQEBgvBKAAQBJAAGmEoQDLCOCDBiQBSA+A2AsQA1AoAMN9IADEnQACFAgDFZQAAAji4AIQhaAEiGgDQmwgIglAcQgNALgSgFQgjgJg2hNQhZh9g5AAQg3AAinDFQiCCYgyAAQgJAAgHgFg");
	this.shape_89.setTransform(-72.9,-321.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(66,66,66,0)").s().p("AiwDfQgRgHAIgvQAEgYAIghQAAgEhqiTQhkiNAQgGQATgHCkgPQCcgPAiAAQAZAACTAxQByAlAxATQASAHADCRQACBKgCBSQAAAJiOgCQiXgBgMAEQgOAGgcgTQgegUgUAAQgTAAg6AgQgtAZgRAAIgGgBg");
	this.shape_90.setTransform(-78.5,-419.6,3.046,6.502,0,0,0,0,-12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_73}]},18).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).wait(11));

	// Layer_22
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("Ag1AjQgWgOgBgVQABgTAWgPQAXgPAeAAQAgAAAWAPQAWAPAAATQAAAVgWAOQgWAPggAAQgeAAgXgPg");
	this.shape_91.setTransform(1.2,-5.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(54,54,54,0.976)").s().p("AAQBrQgPgCgSgMIAAAAIgTgJQgKgGgGgJQgPgGgQgfIgFgIQgXgiAEgYQAOgnAegXQANgKAKgDQAVgGAcAZIAFADQAiAcASAJQALAJAIAKQAQASAFAVQAEAOgEANIgCAFQgLASgHAKIgTAbIgDACQgHAKgLADQgFABgGAAQgJAAgKgEg");
	this.shape_92.setTransform(-0.5,-13.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(58,58,58,0.949)").s().p("AAICmQgSgIgZgWIgBgBIgYgSQgMgJgHgSQgOgIgUg3IgGgMQgbg4AIgdQAbg6AmgeQASgPAOgDQAZgHAnA0IAGAGQArA4AUALQANANAKARQAUAbAFAgQADAUgIASIgEAGIgdAmQgHAKgRAgIgEAEQgKAQgPADIgIAAQgQAAgRgMg");
	this.shape_93.setTransform(-2.2,-21.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(61,61,61,0.925)").s().p("AAADhQgWgNgegiIgCgCIgfgaQgOgOgGgZQgOgLgZhNIgHgRQgehOALgiQAphNAugmQAYgVAQgDQAfgGAwBOIAHAJQA1BUAVAMQARATAMAXQAWAkAFAsQAEAagNAWIgGAJQgfAjgIAMQgJAMgWAtIgDAFQgOAXgTACIgHABQgWAAgXgVg");
	this.shape_94.setTransform(-3.9,-29.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(64,64,64,0.898)").s().p("AgJEbQgZgSglgsIgCgDIglgjQgQgSgGghQgNgNgdhlIgIgUQgjhlAPgnQA3hfA1guQAegbAUgCQAjgGA6BnIAIAMQA/BxAVAOQAVAYAOAcQAZAuAFA3QAEAggSAbIgHAKQgqAsgJANQgKAOgaA6IgEAHQgQAdgYACIgGABQgbAAgegfg");
	this.shape_95.setTransform(-5.6,-37.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(67,67,67,0.875)").s().p("AgSFWQgcgXgrg4IgCgDIgrgsQgTgVgGgqQgMgPgih8IgIgZQgnh7ATgrQBEhzA9g1QAkghAXgCQAngGBECCIAJAPQBKCNAWAPQAYAeAQAiQAcA3AFBDQADAmgWAfIgJAMQg0A1gJAOQgMAPgeBIIgFAIQgTAjgcACIgGAAQghAAgkgng");
	this.shape_96.setTransform(-7.3,-45.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(71,71,71,0.847)").s().p("AgaGRQgggcgxhDIgDgEIgxg0QgVgagFgxQgNgSgliTIgJgeQgriRAWgwQBSiGBFg8QAqgmAagDQAsgGBNCcIAKASQBUCqAXAQQAbAjASApQAgBAAEBOQADAsgaAkIgLAOQg9A9gLAPQgMARgjBVIgGAKQgWApggACIgFAAQgnAAgqgwg");
	this.shape_97.setTransform(-9,-53.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(74,74,74,0.824)").s().p("AgjHMQgjghg3hPIgDgEIg3g9QgYgegFg5QgMgUgpiqIgKgjQgwimAag2QBhiYBMhFQAwgrAdgDQAvgFBYC2IALAVQBeDFAYASQAfApAUAuQAiBKAFBZQADAygfApIgNAQQhHBFgLAQQgOATgoBiIgGALQgYAwgmACIgEAAQgsAAgxg5g");
	this.shape_98.setTransform(-10.7,-61.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(77,77,77,0.8)").s().p("AgrIHQgngng8hZIgEgGIg+hFQgZgigGhBQgLgXgujBIgLgnQgzi9Aeg6QBuirBUhMQA1gyAggCQA1gFBhDQIANAYQBoDhAYAUQAiAuAXA1QAlBTAEBkQADA4gjAuQgHAJgIAIQhRBOgMARQgPAUgsBwIgGANQgcA2gqACIgEAAQgxAAg3hCg");
	this.shape_99.setTransform(-12.4,-69.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(81,81,81,0.773)").s().p("Ag0JCQgqgshChlIgFgGIhDhOQgcgmgFhJQgLgZgyjXIgMgtQg3jSAhhAQB8i+BchUQA7g3AjgCQA6gFBrDqIANAbQByD+AZAVQAmAzAYA7QApBdADBwQADA9gnAzIgQATQhcBWgMATQgRAVgwB+IgHANQgfA9guACIgDAAQg3AAg+hLg");
	this.shape_100.setTransform(-14.1,-77.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(84,84,84,0.749)").s().p("Ag8J9QgugyhIhvIgGgHIhJhXQgegqgFhQQgKgcg3jvIgMgxQg8joAlhEQCKjRBkhcQBAg8AngDQA+gEB1EEIAOAeQB8EaAaAWQAqA5AZBBQAsBmAEB7QACBEgsA3QgHAKgLAKQhlBfgNAUQgSAXg1CLIgHAPQgiBDgzACIgDAAQg8AAhDhUg");
	this.shape_101.setTransform(-15.7,-85.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(87,87,87,0.722)").s().p("AhFK4Qgxg3hPh7IgFgHIhQhfQgggvgFhYQgJgfg7kFIgNg2QhAj+AphJQCXjkBshjQBGhCAqgCQBCgFB/EeIAPAhQCHE3AaAYQAtA9AcBIQAuBvAECGQACBKgwA8IgUAWQhwBogNAVQgTAYg5CYIgJARQgkBJg3ACIgDAAQhCAAhJhdg");
	this.shape_102.setTransform(-17.4,-93.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(90,90,90,0.698)").s().p("AhOLyQg0g8hViGIgFgIIhWhnQgjgzgEhgQgJghg/kdIgOg6QhEkTAshPQClj3BzhrQBNhIAtgCQBHgECIE4IAQAkQCRFTAbAZQAwBEAeBNQAyB4ADCSQADBQg1BBQgKAMgMALQh6BwgOAWQgUAbg+ClIgJASQgmBQg8ABIgEABQhGAAhQhng");
	this.shape_103.setTransform(-19.1,-101.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(94,94,94,0.675)").s().p("AhXMtQg3hBhaiRIgHgJIhchwQglg3gEhoIhMlXIgPg/QhIkqAxhTQCykJB7hzQBThOAvgBQBMgECSFSIARAnQCbFuAdAcQAzBIAgBTQA1CDADCdQACBVg5BGIgXAZQiFB5gOAXQgWAchCCyIgJAUQgqBWhAABIgDAAQhMAAhXhvg");
	this.shape_104.setTransform(-20.8,-109.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(97,97,97,0.647)").s().p("AhfNoQg7hGhgicIgHgKIhih5Qgng7gEhwIhQlwIgQhEQhMk/A0hYQDAkdCDh6QBZhTAygCQBRgECbFsIATAqQClGLAdAdQA2BOAjBYQA3CNADCoQACBcg9BKQgLAOgOANQiPCBgPAYQgXAehGDAIgKAVQgtBchEABIgDAAQhRAAhdh4g");
	this.shape_105.setTransform(-22.5,-117.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(100,100,100,0.624)").s().p("AhoOjQg+hLhnioIgHgKIhoiCQgqg/gDh3QgIgphMlhIgQhJQhRlWA4hcQDOkwCLiCQBehYA2gCQBVgDClGFIATAtQCwGoAdAeQA6BTAlBfQA6CVADC0QACBihBBPQgNAPgPAOQiYCJgQAZQgYAfhLDNIgLAXQgvBjhJABIgDAAQhWAAhjiBg");
	this.shape_106.setTransform(-24.2,-125.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(104,104,104,0.596)").s().p("AhxPeQhBhRhtiyIgHgLIhviKQgrhDgEiAQgHgqhQl6IgRhMQhVlsA7hiQDclCCTiJQBkhfA5gCQBZgDCvGgIAVAwQC5HEAfAfQA9BZAmBkQA+CgADC/QACBnhGBUQgOAPgPAPQijCSgQAbQgaAhhQDaIgLAYQgyBphNABIgDAAQhbAAhqiKg");
	this.shape_107.setTransform(-25.9,-133.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(107,107,107,0.573)").s().p("Ah5QZQhFhWhzi+IgIgLIh1iTQgthHgDiHQgHguhUmQIgShRQhZmCA/hnQDqlVCaiRQBphkA9gCQBegDC4G6IAWAzQDDHgAgAiQBBBdAoBqQBBCqACDKQACBuhKBXQgPARgQAQQitCbgRAbQgbAjhUDnIgMAaQg0BvhTAAIgCABQhhAAhviTg");
	this.shape_108.setTransform(-27.6,-142);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(110,110,110,0.545)").s().p("AiCRTQhIhbh5jJIgIgLIh7icQgwhMgDiOQgGgwhZmoIgShVQhdmYBChsQD4loCiiYQBvhqBAgCQBigDDDHUIAWA2QDOH9AgAiQBEBkAqBwQBECyADDWQABB0hOBcQgPASgSARQi3CigRAdQgdAlhYD0IgNAbQg3B1hXABIgDABQhlAAh2idg");
	this.shape_109.setTransform(-29.3,-150);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(114,114,114,0.522)").s().p("AiKSOQhMhgh+jUIgKgMIiBilQgyhPgCiXQgGgyhdm/IgUhaQhhmuBHhwQEFl7CqigQB1hwBCgBQBogDDMHuIAXA5QDYIYAhAlQBIBoAsB3QBHC8ACDgQACB6hTBhQgQATgTARQjBCsgSAeQgdAmheECIgMAcQg7B7hbABIgCAAQhsAAh7ilg");
	this.shape_110.setTransform(-31,-158);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(117,117,117,0.498)").s().p("AiUTJQhOhliFjfIgJgOIiIisQg0hUgCifQgGg0hhnWIgUhfQhlnDBKh2QETmOCxioQB7h1BGgBQBsgDDVIIIAZA8QDiI1AiAmQBLBuAuB8QBKDGACDsQACB/hYBmQgRAUgTASQjLC0gTAfQgfAohiEPIgNAeQg9CChgAAIgCAAQhwAAiDiug");
	this.shape_111.setTransform(-32.6,-166.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(120,120,120,0.471)").s().p("AicUEQhShqiLjrIgKgOIiNi1Qg3hYgCinQgFg3hlnsIgVhkQhqnZBOh7QEhmhC5ivQCBh7BJgBQBwgDDgIiIAZA/QDsJRAjAoQBOBzAxCDQBNDPACD3QABCGhcBqQgSAUgUAUQjVC8gUAgQggAqhmEcIgOAfQhACIhkABIgCAAQh2AAiIi3g");
	this.shape_112.setTransform(-34.3,-174.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(123,123,123,0.447)").s().p("AilU+QhVhviRj2IgKgOIiUi+Qg4hcgCivQgFg4hpoFIgWhpQhunuBSiAQEumzDBi3QCHiBBMgBQB1gCDpI8IAbBCQD2JtAjApQBSB5AyCIQBQDYACEDQABCMhgBvQgSAVgWAUQjfDFgUAhQgiArhqEqIgPAhQhCCOhpABIgCAAQh7AAiPjBg");
	this.shape_113.setTransform(-36,-182.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(127,127,127,0.42)").s().p("AitV6QhZh1iXkBIgLgPQhEhahVhsQg7hhgCi2QgEg7huocIgWhtQhyoEBViFQE8nHDJi/QCNiGBPgBQB5gCDzJWIAcBFQEAKKAkAqQBWB+A0CPQBTDiACEOQABCRhlB0QgTAWgXAVQjpDNgVAjQgiAshwE4QgHARgIARQhFCVhtAAIgCAAQiBAAiUjJg");
	this.shape_114.setTransform(-37.7,-190.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(130,130,130,0.396)").s().p("Ai2W0Qhch6ickLIgMgQIigjQQg9hkgCi+QgDg+hyozIgYhxQh1obBZiJQFJnZDRjHQCSiMBSgBQB/gBD8JwIAdBIQELKlAlAsQBYCDA3CWQBWDrABEZQABCXhpB5QgUAXgYAVQjzDWgVAkQgkAuh0FFIgPAjQhJCbhxABIgCAAQiGAAibjTg");
	this.shape_115.setTransform(-39.4,-198.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(133,133,133,0.373)").s().p("Ai+XvQhgh/iikXIgMgQIimjYQhAhpgBjGQgDhAh2pKIgZh2Qh6owBdiPQFYnsDYjOQCYiSBVgBQCEgBEFKKIAeBLQEVLCAmAtQBcCJA4CbQBZD1ABEkQABCehtB9QgVAYgZAWQj9DfgWAkQglAwh4FSIgQAlQhLChh3ABIgBAAQiLAAihjcg");
	this.shape_116.setTransform(-41.1,-206.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(137,137,137,0.345)").s().p("AjHYqQhjiFiokhIgNgRQhNhmhfh7QhBhtgCjNQgDhDh6phIgZh7Qh+pHBgiTQFln/DhjVQCdiYBZAAQCIgCEPKlIAgBNQEeLfAnAvQBfCNA7CiQBcD+AAEvQACCjhyCDQgWAZgZAXQkIDngWAmQgnAxh9FfIgQAmQhOCoh7ABIgBAAQiQAAiojlg");
	this.shape_117.setTransform(-42.8,-214.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(140,140,140,0.322)").s().p("AjQZlQhmiKivktIgNgSQhPhqhjh/QhEhxgBjVQgChFh/p4IgZiAQiDpcBkiYQFzoTDojdQCkidBcAAQCMgBEZK+IAgBRQEpL6AoAxQBiCTA9CoQBfEHABE7QAACph2CHQgWAagbAXQkRDwgXAnQgoAziBFsIgSAoQhQCuh/AAIgBAAQiWABiujug");
	this.shape_118.setTransform(-44.5,-222.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(143,143,143,0.294)").s().p("AjZafQhpiOi1k5IgNgSQhShuhmiEQhGh1gBjdQgChIiDqPIgaiEQiHpyBoieQGBokDvjlQCqijBfAAQCRgBEjLYIAhBUQEzMXAoAyQBmCYA+CuQBjEQAAFHQABCvh7CMQgXAagcAZQkbD4gYAoQgpA1iGF5QgIAWgKAUQhTC0iEAAIAAAAQicAAi0j3g");
	this.shape_119.setTransform(-46.2,-230.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(146,146,146,0.271)").s().p("AjhbaQhtiTi6lEIgOgTQhWhyhpiIQhIh6gBjlQgBhKiHqmIgciJQiKqIBriiQGPo4D3jsQCwipBhAAQCWgBEtLzIAiBXQE9MyApA0QBqCeBACzQBlEbABFRQAAC2h/CQQgYAbgdAaQklEAgZApQgqA3iKGHIgSAqQhXC7iIAAIAAAAQihAAi6kAg");
	this.shape_120.setTransform(-47.9,-238.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(150,150,150,0.243)").s().p("AjqcVQhwiZjAlPIgPgUQhYh1hsiOQhLh9AAjtQgBhNiLq9IgdiNQiOqeBvinQGcpLD/j0QC1iuBlAAQCbAAE2MMIAjBaQFHNPAqA1QBtCjBDC6QBoEkAAFcQAAC7iDCVQgZAcgdAbQkwEJgZArQgsA4iOGUIgTAsQhaDBiMAAQimAAjBkJg");
	this.shape_121.setTransform(-49.6,-246.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(153,153,153,0.22)").s().p("AgSBBQgJgFgQgMIgRgKQgGgFAAgJQAAgCgNgdQgMgYAJgHQA5gjAUgBQALAAAZAcQAdAiAEACQAWAOAAAUQAAAIgPAHIgaAKQgEACgLAPQgIAJgMAAQgNAAgPgKg");
	this.shape_122.setTransform(-51.3,-254.5,12.806,28.805);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_91}]},14).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.6,-124.1,177,167);


// stage content:
(lib.nitrateadventure_HTML5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.reel1_mc.alpha = 0 ;
		_this.film_mc.alpha = 0 ;
		_this.stop();
	}
	this.frame_1 = function() {
		var _this = this;
		_this.reel1_mc.alpha = 1 ;
		_this.film_mc.alpha = 1 ;
		_this.reel1_mc.gotoAndStop(0);
		_this.film_mc.gotoAndStop(0);
		
		_this.reel2.gotoAndStop(0);
		_this.flicker.gotoAndStop(0);
		_this.switchplate_mc.gotoAndStop(0);
		_this.stop();
		
		console.log("cool");
	}
	this.frame_35 = function() {
		var _this = this;
		_this.stop();
	}
	this.frame_59 = function() {
		var _this = this;
		_this.switchplate_mc.play();
		_this.film_mc.play();
		_this.reel1_mc.play();
		_this.reel2.play();
		_this.flicker.play();
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
	}
	this.frame_89 = function() {
		var _this = this;
		_this.stop();
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		//_this.gotoAndPlay(0);
	}
	this.frame_120 = function() {
		var _this = this;
		
		this.film_mc.gotoAndPlay(10);
		this.stop();
	}
	this.frame_121 = function() {
		var _this = this;
		_this.moonburn.gotoAndStop(0);
	}
	this.frame_135 = function() {
		var _this = this;
		_this.moonburn.gotoAndPlay(0);
		
		_this.stop();
	}
	this.frame_136 = function() {
		var _this = this;
		_this.flicker.gotoAndStop(1);
	}
	this.frame_150 = function() {
		var _this = this;
		
		
		_this.stop();
	}
	this.frame_166 = function() {
		var _this = this;
		
		_this.fire.gotoAndPlay(0);
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(34).call(this.frame_35).wait(24).call(this.frame_59).wait(30).call(this.frame_89).wait(31).call(this.frame_120).wait(1).call(this.frame_121).wait(14).call(this.frame_135).wait(1).call(this.frame_136).wait(14).call(this.frame_150).wait(16).call(this.frame_166).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(223.6,-6.5,0.366,0.366,-40,0,0,0.8,1.7);
	this.___camera___instance.depth = 0;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({regX:1,regY:1.8,scaleX:0.38,scaleY:0.38,rotation:-38.8,x:164.7,y:47.6},1).to({regX:0.6,regY:1.2,scaleX:1,scaleY:1,rotation:0,x:100.4,y:100.5},34).wait(1).to({regX:2.5,regY:2.8,scaleX:0.14,scaleY:0.14,x:115.6,y:183.4},20).wait(11).to({regX:7,regY:8.1,x:116.2,y:184.1},0).to({regX:0.6,regY:1.2,scaleX:1,scaleY:1,x:100.4,y:100.5},22).to({regX:0.8,regY:1.4,scaleX:0.59,scaleY:0.59,x:97.5,y:129.8},31).to({regX:1.1,regY:1.5,scaleX:0.92,scaleY:0.92,x:413.2,y:115.6},15).to({regX:1.2,regY:1.7,scaleX:1.01,scaleY:1.01,x:98.8,y:110.2},15).wait(17));

	// Layer_4
	this.instance = new lib.smoke();
	this.instance.parent = this;
	this.instance.setTransform(105.5,50.7,1,1,0,0,0,-31.9,-56.4);

	this.fire = new lib.fire();
	this.fire.name = "fire";
	this.fire.parent = this;
	this.fire.setTransform(141,87,0.229,0.229,0,0,0,0.5,-159.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},150).to({state:[{t:this.instance},{t:this.fire}]},16).wait(1));

	// moonburn
	this.moonburn = new lib.moonburn();
	this.moonburn.name = "moonburn";
	this.moonburn.parent = this;
	this.moonburn.setTransform(417.4,123.4,0.706,0.743,0,2.3,-5.4,118.7,98.5);

	this.timeline.addTween(cjs.Tween.get(this.moonburn).wait(167));

	// Layer 2
	this.switchplate_mc = new lib.switchplate();
	this.switchplate_mc.name = "switchplate_mc";
	this.switchplate_mc.parent = this;
	this.switchplate_mc.setTransform(115.6,180.6,0.365,0.365,0,0,0,29.6,6.3);

	this.timeline.addTween(cjs.Tween.get(this.switchplate_mc).wait(167));

	// flicker
	this.flicker = new lib.flicker();
	this.flicker.name = "flicker";
	this.flicker.parent = this;
	this.flicker.setTransform(211.2,110.3,1,1,0,0,0,25.2,4.3);

	this.timeline.addTween(cjs.Tween.get(this.flicker).wait(89).to({y:114.3},0).wait(78));

	// reels
	this.reel2 = new lib.rollingreeltakeup();
	this.reel2.name = "reel2";
	this.reel2.parent = this;
	this.reel2.setTransform(36.5,50,0.41,0.41,0,0,0,-0.6,-0.6);

	this.reel1_mc = new lib.rollingreel();
	this.reel1_mc.name = "reel1_mc";
	this.reel1_mc.parent = this;
	this.reel1_mc.setTransform(164.5,48,0.383,0.383);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.reel1_mc,p:{regX:0,regY:0,scaleX:0.383,scaleY:0.383,x:164.5,y:48}},{t:this.reel2,p:{regX:-0.6,regY:-0.6,scaleX:0.41,scaleY:0.41,x:36.5,y:50}}]}).to({state:[{t:this.reel1_mc,p:{regX:-0.1,regY:-0.1,scaleX:0.399,scaleY:0.399,x:160.5,y:48.6}},{t:this.reel2,p:{regX:-0.4,regY:-0.5,scaleX:0.407,scaleY:0.407,x:36.8,y:49.8}}]},89).to({state:[{t:this.reel1_mc,p:{regX:-0.1,regY:-0.1,scaleX:0.399,scaleY:0.399,x:160.5,y:48.6}},{t:this.reel2,p:{regX:-0.4,regY:-0.5,scaleX:0.407,scaleY:0.407,x:36.8,y:49.8}}]},31).to({state:[{t:this.reel1_mc,p:{regX:-0.1,regY:-0.1,scaleX:0.399,scaleY:0.399,x:160.5,y:48.6}},{t:this.reel2,p:{regX:-0.4,regY:-0.5,scaleX:0.407,scaleY:0.407,x:36.8,y:49.8}}]},15).wait(32));

	// film
	this.film_mc = new lib.fillm();
	this.film_mc.name = "film_mc";
	this.film_mc.parent = this;
	this.film_mc.setTransform(98.6,104.7,1,1,0,0,0,69.1,45.1);

	this.timeline.addTween(cjs.Tween.get(this.film_mc).wait(167));

	// Layer_1
	this.instance_1 = new lib.projectorbody("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(114.5,142.5,0.539,0.539,0,0,0,126.6,101.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({startPosition:0},0).wait(31).to({startPosition:0},0).wait(15).to({startPosition:0},0).wait(32));

	// background projector
	this.instance_2 = new lib.backgroundprojector();
	this.instance_2.parent = this;
	this.instance_2.setTransform(81.5,66.3,0.304,0.304,0,0,0,200.5,127.8);
	this.instance_2.filters = [new cjs.BlurFilter(15, 15, 1), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-22, 0, 0, 0))];
	this.instance_2.cache(11,-49,380,354);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(167));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98.4,41.2,499.8,256.5);
// library properties:
lib.properties = {
	id: '350E008266B94054989F0F7014CF6D77',
	width: 200,
	height: 200,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/nitrateadventure_HTML5_atlas_.png?1519146031562", id:"nitrateadventure_HTML5_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['350E008266B94054989F0F7014CF6D77'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Virtual camera API : 

AdobeAn.VirtualCamera = new function() {
	var _camera = new Object();
	function VirtualCamera(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined )
	{
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VirtualCamera.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VirtualCamera.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VirtualCamera.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VirtualCamera.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VirtualCamera.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VirtualCamera.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VirtualCamera.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VirtualCamera.prototype.resetZoom = function() {
	this.setZoom(100);
};

VirtualCamera.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VirtualCamera.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VirtualCamera.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VirtualCamera.prototype.resetRotation = function() {
this.setRotation(0);
};

VirtualCamera.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VirtualCamera.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VirtualCamera.prototype.getZDepth = function() {
	return this.camera.depth;
}
VirtualCamera.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VirtualCamera.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VirtualCamera.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
if(this.camera.pinToObject != undefined) {
this.camera.pinToObject.pinOffsetX = offsetX;
this.camera.pinToObject.pinOffsetY = offsetY;
this.camera.pinToObject.pinOffsetZ = offsetZ;
}
};

VirtualCamera.prototype.unpinCamera = function() {
this.camera.pinToObject = undefined;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VirtualCamera(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
VirtualCamera.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;