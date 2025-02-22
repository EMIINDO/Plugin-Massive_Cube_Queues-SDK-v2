"use strict";

{
	globalThis.C3.Plugins.Massive_Cube_Queues.Cnds =
	{
		isEmpty(id)
		{
			if((typeof id == 'string')&&(typeof this.queues[id.toString()]!== "undefined")) {
				if(id.length>0) {
					return this.queues[id.toString()].isEmpty();
				} else {return true;}
			} else {
				return true;
			}
		}
	};
}