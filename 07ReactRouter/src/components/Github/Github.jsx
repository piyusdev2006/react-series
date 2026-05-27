import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router';

function Github() {
    // const data = useLoaderData();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/piyusdev2006')
        .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
        })
    }, [])
  return (
    <div className='text-center bg-gray-100 text-2xl font-medium py-10'>
          Github Followers: {data.followers}
          <img src={data.avatar_url} alt="avatar" className='w-48 h-48 rounded-full mx-auto mt-5' />
    </div>
  )
}

export default Github


// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/piyusdev2006');
//     const data = await response.json();
//     return data;
// }