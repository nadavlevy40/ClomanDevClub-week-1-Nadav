
const storage=document.getElementsByClassName("number");
const storageUsed=document.getElementsByClassName("gb");
const file=document.getElementById("fileUpload");
const littleStorageNumber=document.getElementsByClassName("startNumber");
const storageBar=document.getElementsByClassName("bar");
file.addEventListener("change",handleFiles,false);
const mbAllowed=10;
let validFormat=true;

function handleFiles(){    
    let mbLeft=10;
    let mbUsed=0;
        if(file.files.length>0){
            for(let i=0 ; i<=file.files.length-1;i++){
                if(file.files.item(i).type!="image/jpeg" && file.files.item(i).type!="image/jpg"
                && file.files.item(i).type!="image/gif"&& file.files.item(i).type!="image/png")
                    validFormat=false;
            }
            if(validFormat==true){
                for(let i =0 ; i<=file.files.length-1;i++){
                    const fSize= ((file.files.item(i).size/1024)/1000);
                    console.log(file.files.item(i).type);
                    console.log(fSize);
                    mbUsed=mbUsed+fSize;
                    mbLeft=mbLeft-fSize;    
                } 
                if(mbUsed>mbAllowed)
                {
                    alert("There is not enough space on the disk!");
                }  
                else{
                mbLeft=parseFloat(mbLeft).toFixed( 3 );
                mbUsed=parseFloat(mbUsed).toFixed(3);
                storage[0].innerHTML=mbLeft;
                storageUsed[0].innerHTML=mbUsed+" MB";
                littleStorageNumber[0].innerHTML=mbUsed+" MB";
                storageBar[0].style.width=(mbUsed*10).toString()+'%'
                }
            }
            else {
                alert("File format isnt supported!");
                validFormat=true;
            }
        }
 }
        
    
