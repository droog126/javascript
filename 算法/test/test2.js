var desc = "成都"
const obj = { 
	desc: "深圳", 
	getDesc: () => {
		console.log(desc); //成都
		console.log(this.desc);	//成都
    }
}

obj.getDesc.call({ desc: "北京" });

