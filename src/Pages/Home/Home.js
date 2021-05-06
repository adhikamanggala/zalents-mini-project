import React from 'react';
import Logo from '../../Assets/Group 10.png';
import './Home.css';

import GroupTask from '../../Components/Group Task/GroupTask'

function Home(){
    return(
        <div className="home">
            <div className="sidebar">
                <img src={Logo} alt="logo"/>
            </div>
            <div className="kanban-board">
                <p className="page-title">Product Roadmap</p>
                <div className="card-row">
                    <GroupTask border={'#EB2F96'} />
                    <GroupTask border={'#7B61FF'} backgroundColor={'#FCFAFD'} TBbackgroundColor={'#F9F0FF'} TBborderColor={'#D3ADF7'} titleTextColor={'#7B61FF'}/>
                    <GroupTask border={'#2F54EB'} backgroundColor={'#F7FAFF'} TBbackgroundColor={'#F0F5FF'} TBborderColor={'#ADC6FF'} titleTextColor={'#2F54EB'}/>
                    <GroupTask border={'#52C41A'} backgroundColor={'#F8FEF1'} TBbackgroundColor={'#F6FFED'} TBborderColor={'#B7EB8F'} titleTextColor={'#52C41A'}/>
                </div>

            </div>
        </div>
    )
}
export default Home;