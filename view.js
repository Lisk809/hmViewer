try{
var hmUI={}
function setLocation(ele, obj){
	ele.style.position="absolute";
        ele.style.top=`${obj.x}px`;
        ele.style.left=`${obj.y}px`;
	return ele
}
hmUI.widget={
    "TEXT":{
	view: (obj) => {
	let para = document.createElement("p")
	let text=document.createTextNode(obj.text)
	para.appendChild(text)
        para=setLocation(para, obj)
	para.style.color=obj.color || "white"
	para.style["font-size"]=obj["text_size"]
	document.body.appendChild(para)
	},
	params: ["x", "y", "text"]
    },
    "IMG":{
	view:(obj) => {
	let img = document.createElement('img');
	img.src = obj.src;
	img=setLocation(img, obj)
	document.body.appendChild(img)
	},
	params: ["x", "y", "src"]
    }
}
hmUI.createWidget=(id, obj)=>{
		id.view(obj)
}
hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 100,
                            y: 200,
                            text: 'a',
			    text_size: 30
})
hmUI.createWidget(hmUI.widget.IMG, {
	                            x: 45,
	                            y: 200,
	                            src: 'logo.png',
})
} catch(e){
	                document.write(e.toString())
	                }
