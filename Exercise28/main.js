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

async function displayusername(){
    
    try{
        const user = await checkingusername()
        console.log(user)
    }
    catch(error){
        console.log(error)
     }
}

displayusername();





   
        
        
        
