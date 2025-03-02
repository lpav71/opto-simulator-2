import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import {BsArrowClockwise} from "react-icons/bs";
import '../css/global.scss'
import TrialFrameCSS from "./trialFrame.module.scss"

const TrialFrame = () => {
    const [concaveSphereLenses, setConcaveSphereLenses] = useState('');
    const [concaveCylinderLenses, setConcaveCylinderLenses] = useState('');
    const [showLenses, setShowLenses] = useState(false);
    const [ods, setOds] = useState([0, 0]); // Как массив для od1, od2 и т.д.
    const [oss, setOss] = useState([0, 0]); // Как массив для os1, os2 и т.д.

    const handleCloseLenses = () => setShowLenses(false);
    const handleShowLenses = (side) => {
        setShowLenses(true);
    }

    useEffect(() => {
        APIgetConcaveSphereLenses();
        APIgetConcaveCylinderLenses();
    }, []);

    const APIgetConcaveSphereLenses = async () => {
        const requestOptions = {
            method: "POST", redirect: "follow"
        };

        const response = await fetch("/api/lenses/concave-sphere", requestOptions);
        if (response.ok) {
            let res = await response.json();
            setConcaveSphereLenses(res);
        }
    }

    const APIgetConcaveCylinderLenses = async () => {
        const requestOptions = {
            method: "POST", redirect: "follow"
        };

        const response = await fetch("/api/lenses/concave-cylinder", requestOptions);
        if (response.ok) {
            let res = await response.json();
            setConcaveCylinderLenses(res);
        }
    }

    const choosingLens = (side, lens) => {
        handleCloseLenses();

        const sides = {
            OS: 'os', // Для левой стороны
            OD: 'od'  // Для правой стороны
        };

        if (sides[side]) {
            const sideIndex = side.slice(); // Получаем номер (1, 2, 3 и т.д.)
            console.log(sideIndex, side);
            if (side.startsWith('O')) {
                // window[`set${sides[side] + sideIndex}`](side); // Например, setOs1 или setOd2
            }
        }
    };


    return (<>
        <h4>Пробная оправа</h4>
        <div className={TrialFrameCSS.slides}>
            <img src="../../public/image/opu-01.jpg" height='170' alt=''/>
        </div>
        <div className="d-flex justify-content-between ms-2" style={{width: "93%"}}>
            <h5><BsArrowClockwise/></h5>
            <h5>OD</h5>
            <h5>OS</h5>
            <h5><BsArrowClockwise/></h5>
        </div>
        <div className={TrialFrameCSS.trialFrame}>
            <div className="mb-2">
                <Button variant={"outline-info"} className="me-2" onClick={() => handleShowLenses("OD1")}>0</Button>
                <Button variant={"outline-secondary"} className={TrialFrameCSS.trialFrameButton}>0</Button>
            </div>
            <div>
                <Button variant={"outline-secondary"} className={TrialFrameCSS.trialFrameButton}>0</Button>
                <Button variant={"outline-info"} className="ms-2" onClick={() => handleShowLenses("OS1")}>0</Button>
            </div>
            <div className="mb-2">
                <Button variant={"outline-info"} className="me-2" onClick={() => handleShowLenses("OD")}>0</Button>
                <Button variant={"outline-secondary"} className={TrialFrameCSS.trialFrameButton}>0</Button>
            </div>
            <div>
                <Button variant={"outline-secondary"} className={TrialFrameCSS.trialFrameButton}>0</Button>
                <Button variant={"outline-info"} className="ms-2" onClick={() => handleShowLenses("OS")}>0</Button>
            </div>
            <div className="mb-2">
                <Button variant={"outline-info"} className="me-2" onClick={() => handleShowLenses("OD")}>0</Button>
                <Button variant={"outline-secondary"} className={TrialFrameCSS.trialFrameButton}>0</Button>
            </div>
            <div>
                <Button variant={"outline-secondary"} className={TrialFrameCSS.trialFrameButton}>0</Button>
                <Button variant={"outline-info"} className="ms-2" onClick={() => handleShowLenses("OS")}>0</Button>
            </div>
            <div className="mb-2">
                <Button variant={"outline-info"} className="me-2" onClick={() => handleShowLenses("OD")}>0</Button>
                <Button variant={"outline-secondary"} className={TrialFrameCSS.trialFrameButton}>0</Button>
            </div>
            <div>
                <Button variant={"outline-secondary"} className={TrialFrameCSS.trialFrameButton}>0</Button>
                <Button variant={"outline-info"} className="ms-2" onClick={() => handleShowLenses("OS")}>0</Button>
            </div>
        </div>

        <Modal size='xl' aria-labelledby="contained-modal-title-vcenter" centered show={showLenses} onHide={handleCloseLenses}>
            <Modal.Header closeButton>
                <Modal.Title>Выбор линзы</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{lineHeight: '20px'}}>
                <div style={{display: 'flex', gap: '35px'}}>
                    <div>
                        <h3>Concave Sphere</h3>
                        {concaveSphereLenses && concaveSphereLenses.map((lens, index) => (
                            <div className='d-flex justify-content-between' style={{width: '250px'}} key={index}>
                                <div className={TrialFrameCSS.linsa} onClick={() => choosingLens("OD", lens)}></div>
                                <div>{lens}</div>
                                <div className={TrialFrameCSS.linsa}></div>
                            </div>))}
                    </div>
                    <div>
                        <h3>Concave Cylinder</h3>
                        {concaveCylinderLenses && concaveCylinderLenses.map((lens, index) => (
                            <div className='d-flex justify-content-between' style={{width: '250px'}} key={index}>
                                <div className={TrialFrameCSS.linsa}></div>
                                <div>{lens}</div>
                                <div className={TrialFrameCSS.linsa}></div>
                            </div>))}
                    </div>
                    <div>
                        <h3>Convex Cylinder</h3>
                        {concaveCylinderLenses && concaveCylinderLenses.map((lens, index) => (
                            <div className='d-flex justify-content-between' style={{width: '250px'}} key={index}>
                                <div className={`${TrialFrameCSS.linsa} ${TrialFrameCSS.linsaInactive}`}></div>
                                <div>{lens}</div>
                                <div className={`${TrialFrameCSS.linsa} ${TrialFrameCSS.linsaInactive}`}></div>
                            </div>))}
                    </div>
                    <div>
                        <h3>Convex Sphere</h3>
                        {concaveSphereLenses && concaveSphereLenses.map((lens, index) => (
                            <div className='d-flex justify-content-between' style={{width: '250px'}} key={index}>
                                <div className={`${TrialFrameCSS.linsa} ${TrialFrameCSS.linsaInactive}`}></div>
                                <div>{lens}</div>
                                <div className={`${TrialFrameCSS.linsa} ${TrialFrameCSS.linsaInactive}`}></div>
                            </div>))}
                    </div>
                </div>
                <div className={TrialFrameCSS.linsaAdd}>
                    <div style={{height: '164px'}}>
                        <h5>accessories</h5>
                        <div style={{display: 'flex', gap: '10px'}}>
                            <div className={`${TrialFrameCSS.accessories} ${TrialFrameCSS.accBack}`}>
                                <div className={TrialFrameCSS.rotatedText}>Кр фильтр</div>
                            </div>
                            <div className={`${TrialFrameCSS.accessories} ${TrialFrameCSS.accBack}`}>
                                <div className={TrialFrameCSS.rotatedText}>Зел фильтр</div>
                            </div>
                            <div className={`${TrialFrameCSS.accessories} ${TrialFrameCSS.accBack}`}>
                                <div className={TrialFrameCSS.rotatedText}>Точ диафр</div>
                            </div>
                            <div className={`${TrialFrameCSS.accessories} ${TrialFrameCSS.accBack}`}>
                                <div className={TrialFrameCSS.rotatedText}>Щел диафр</div>
                            </div>
                            <div className={`${TrialFrameCSS.accessories} ${TrialFrameCSS.accBack}`}>
                                <div className={TrialFrameCSS.rotatedText}>Цил Мэдд</div>
                            </div>
                            <div className={`${TrialFrameCSS.accessories} ${TrialFrameCSS.accBack}`}>
                                <div className={TrialFrameCSS.rotatedText}>Окклюдер</div>
                            </div>
                        </div>
                    </div>
                    <div style={{height: '164px'}}>
                        <h5>prisms</h5>
                        <div style={{display: 'flex', gap: '10px'}}>
                            <div className={`${TrialFrameCSS.accessories} ${TrialFrameCSS.linsaInactive}`}></div>
                            <div className={`${TrialFrameCSS.accessories} ${TrialFrameCSS.linsaInactive}`}></div>
                            <div className={`${TrialFrameCSS.accessories} ${TrialFrameCSS.linsaInactive}`}></div>
                            <div className={`${TrialFrameCSS.accessories} ${TrialFrameCSS.linsaInactive}`}></div>
                            <div className={`${TrialFrameCSS.accessories} ${TrialFrameCSS.linsaInactive}`}></div>
                            <div className={`${TrialFrameCSS.accessories} ${TrialFrameCSS.linsaInactive}`}></div>
                        </div>
                    </div>
                    <div className={TrialFrameCSS.crossElements}>
                        <img src="/public/image/lupa.png" className={TrialFrameCSS.imgLupa} alt=""/>
                        <img src="/public/image/lupa.png" className={TrialFrameCSS.imgLupa} alt=""/>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseLenses}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    </>)
}

export default TrialFrame;