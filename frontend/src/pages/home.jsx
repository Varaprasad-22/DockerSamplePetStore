import './home.css'
import pets from "../petData";
import Card from '../components/items';
import {useState, useEffect } from 'react';
import axios from 'axios';
const Home=()=>{

    const [petsdata,setPetsData]=useState([]);

    useEffect(()=>{
        axios.get('/pets/items').then(res=>setPetsData(res.data))
        .catch(err => console.error(err));
    },[]);
    return (
        <div className='home_container'>
            
            <div  className="header">
                <h2 style={{textAlign:"center"}}>Welcome Please Seee Our Pets</h2>
            </div>
            <div className='home_content'>
                {
                    petsdata.map(idx=>(
                        <Card key={idx.id} pet={idx}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;
