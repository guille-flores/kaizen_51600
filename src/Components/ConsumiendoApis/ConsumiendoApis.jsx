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

    return (
        <div>ConsumiendoApis</div>
    )
}

export default ConsumiendoApis