import React from 'react';
import Slides from '../slides/Slides'
import Communication from '../communication/Communication'
import Client from "../client/Client";
import Trialframe from "../trialFrame/TrialFrame"
import Medcard from "../medcard/Medcard";
import Recipe from "../recipe/Recipe";
import '../css/global.scss'
import HomeCSS from './home.module.scss';

const Home = () => {
    return (
        <>
            <div className={HomeCSS.header}>
                <h1 style={{position: 'relative', top: '10px'}}>Тренажер оптометриста</h1>
            </div>

            <div id="main" className={HomeCSS.main}>
                <div className={HomeCSS.gridContainer}>
                    <div className={HomeCSS.block}>
                        <Slides/>
                    </div>
                    <div className={HomeCSS.block}>
                        <Communication/>
                    </div>
                    <div className={HomeCSS.block}>
                        <Client/>
                    </div>
                    <div className={HomeCSS.block}>
                        <Trialframe/>
                    </div>
                    <div className={HomeCSS.block}>
                        <Medcard/>
                    </div>
                    <div className={HomeCSS.block}>
                        <Recipe/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
