"use strict";
{
	globalThis.C3.Plugins.Massive_Cube_Queues.Exps =
	{
		
		peek(id)
		{
			if((typeof id == 'string')&&(typeof this.queues[id.toString()]!== "undefined")) {
				if(id.length>0) {
					let getqueue = this.queues[id.toString()].peek();
					if(typeof getqueue == 'undefined') { return ""; }
					else { return getqueue; }
				} else {return "";}
			} else {
				return "";
			}
		},
		dequeue(id)
		{
			if((typeof id == 'string')&&(typeof this.queues[id.toString()]!== "undefined")) {
				if(id.length>0) {
					let getqueue = this.queues[id.toString()].dequeue();
					if(typeof getqueue == 'undefined') { return ""; }
					else { return getqueue; }
				} else {return "";}
			} else {
				return "";
			}
		},
		getLength(id)
		{
			if((typeof id == 'string')&&(typeof this.queues[id.toString()]!== "undefined")) {
				if(id.length>0) {
					return this.queues[id.toString()].getLength();
				} else {return 0;}
			} else {
				return 0;
			}
		},
		getAsJson(id) {
			if(typeof id == 'string') {
				if(id.length>0) {
					var data = this.SaveToJson(id);
					return data;
				} else {return "";}
			} else {
				return "";
			}
		}
	};
}