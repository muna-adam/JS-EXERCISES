

async function fetchdata(){
    console.log("fetch user data")
    // const response= await fetch('https://jsonplaceholder.typicode.com/posts')
    const response= await fetch('data.json')
    const data = response.json();
    console.log("fetched data: ",  data)
}

fetchdata();