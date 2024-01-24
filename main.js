const inputBox=document.getElementById("Text");
const listContainer=document.getElementById("list");

function Add(){
if(inputBox.value===''){
    alert("write something")
}
else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span)
}
inputBox.value="";
saveData()
}
listContainer.addEventListener("click", function(save){
    if(save.target.tagName==="LI"){
        save.target.classList.toggle("checked");
        saveData()
    }
    else if(save.target.tagName==="SPAN"){
save.target.parentElement.remove();
saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showList(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showList()