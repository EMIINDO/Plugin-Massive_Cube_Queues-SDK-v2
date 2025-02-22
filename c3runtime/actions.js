"use strict";

{
	globalThis.C3.Plugins.Massive_Cube_Queues.Acts =
	{
		
		createQueue(id)
		{
			if(typeof id == 'string') { 
				if(id.length>0) {
					this.queues[id.toString()] = new Queue();
				}
			}
		},
		enqueue(id,txt)
		{
			if((typeof id == 'string')&&(typeof txt == 'string')) {
				if(id.length>0) {
					this.queues[id.toString()].enqueue(txt.toString());
				}
			}
		},
		deleteQueue(id)
		{
			if((typeof id == 'string')&&(typeof this.queues[id.toString()]!== "undefined")) {
				if(id.length>0) {
					delete this.queues[id.toString()];
				}
			}
		},
		loadFromJSONFile(id,json) {
			if((typeof json == 'string')&&(typeof id == 'string')) {
				if((json.length>0)&&(id.length>0)) {
					this.LoadFromJson(id,json);
				}
			}
		}
	};
}