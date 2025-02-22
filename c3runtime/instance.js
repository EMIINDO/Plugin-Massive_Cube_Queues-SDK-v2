"use strict";

{
	globalThis.C3.Plugins.Massive_Cube_Queues.Instance = class QueuesInstance extends globalThis.ISDKInstanceBase
	{
		constructor()
		{
			super();

            const properties = this._getInitProperties();
			
			this.queues = {};
			
			if (properties)	{}
		}
		
		_release()
		{
			super._release();
		}
		
		_saveToJson(id)
		{
			return this.queues[id.toString()].getjson();
		}
		
		_loadFromJson(id,json)
		{
			if(typeof this.queues[id.toString()] == "undefined") {
				this.queues[id.toString()] = new Queue();
			} else {
				delete this.queues[id.toString()];
				this.queues[id.toString()] = new Queue();
			}
			this.queues[id.toString()].loadjson(json);
		}
	};
}