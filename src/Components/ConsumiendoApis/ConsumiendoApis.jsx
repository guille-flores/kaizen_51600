import { useEffect, useState } from "react"

function ConsumiendoApis() {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        const getData = fetch("https://jsonplaceholder.typicode.com/posts?id=1&id=2&id=3")
        
        getData
            .then((res) => res.json())
            .then((json_res) => setPosts[json_res])
            .catch((e) => console.log("Unresolved: ", e))
    }, [])

    console.log(posts)


    useEffect(()=> {
        const createPost = fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers:{
                "Content-type": "aplication/json"
            },
            body: JSON.stringify({
                userID: 12,
                title: "Prueba GRF de post",
                body: "probando probando desde React"
            })
        })
        
    }, [])

    return (
        <div>ConsumiendoApis</div>
    )
}

export default ConsumiendoApis