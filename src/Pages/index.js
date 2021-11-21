import React, { useState } from 'react'
import InfoSection from '../components/Info';
import { dataObject1, dataObject2 } from '../components/Info/Data';
import Landing from '../components/Landing';
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import { Central } from './PageElement';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Central>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />   
        <Landing />
        <InfoSection {...dataObject1}/>
        <InfoSection {...dataObject2}/>
        </Central>
    )
}

export default Home
