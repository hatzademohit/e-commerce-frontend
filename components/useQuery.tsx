import React, { useState, useEffect } from "react";

const UseQuery = () => {
    const [data, setData] = useState<any>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json).then((res) => { setData(res); console.log(res) })
        .catch((err) => console.log(err, 'err')
        // .finally(() => setIsLoading(false))
        )
    })

    return { data, isLoading }
}

export default UseQuery