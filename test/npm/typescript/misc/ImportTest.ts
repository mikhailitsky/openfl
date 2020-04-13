import * as openfl from "openfl";
// import * as geom from "openfl/geom";
// import { Rectangle as Rectangle2 } from "openfl/geom";
import * as geom from "openfl/geom/index";
import { Rectangle as Rectangle2 } from "openfl/geom/index";
import Rectangle from "openfl/geom/Rectangle";
import * as assert from "assert";


describe("TypeScript | Imports", function ()
{


	it("test", function ()
	{

		// console.log (openfl);
		// console.log (geom);
		// console.log (Rectangle);

		assert(Rectangle);
		assert.equal(openfl.geom.Rectangle, Rectangle);
		assert.equal(geom.Rectangle, Rectangle);
		assert.equal(Rectangle2, Rectangle);

	});


});
