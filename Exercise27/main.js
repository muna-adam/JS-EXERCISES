

function checkingusername(){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            const success= true
            if(success) 
                resolve({username: "muna Adam"})
            else{
                reject("your user name is incorrect")
            }
        }, 2000)
    }

    )
        
}
        


checkingusername()
    .then((data)=>{ console.log("user name", data)})
    .catch((error)=> {console.log(error)})
