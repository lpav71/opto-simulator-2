import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap'
import '../css/global.scss'
import CommunicationCSS from './communication.module.scss'

const Communication = () => {
    const [questions, setQuestions] = useState([]); // Начальное значение - пустой массив
    const APIcommunicationAll = async () => {
        let requestOptions = {
            method: "POST",
            redirect: "follow"
        };

        const response = await fetch("/api/communication/all", requestOptions);
        if (response.ok) {
            let res = await response.json();
            setQuestions(res);
        }
    }
    useEffect(() => {
        APIcommunicationAll();
    }, []);
    return (
        <>
            <h4>Общение</h4>
            <div className={CommunicationCSS.questionGrid}>
                <label className="mt-1">Врач</label>
                <select className="form-select">
                    {questions && questions.map(item => (
                        <option key={item.id} value={item.id}>{item.question}</option>
                    ))}
                </select>
            </div>
            <div className={CommunicationCSS.questionGrid}>
                <label className="mt-1">Пациент</label>
                <textarea className="form-control mt-2" style={{height: '290px'}}></textarea>
                <div></div>
                <Button variant={"success"} className="opto-button mt-3">Сохранить</Button>
            </div>
        </>
    )
}

export default Communication;