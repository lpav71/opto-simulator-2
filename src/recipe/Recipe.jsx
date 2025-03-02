import React from 'react';
import {Button} from 'react-bootstrap'
import '../css/global.scss'

const Recipe = () => {
    return (
        <>
            <h4>Рецепт</h4>
            <div style={{height: '320px'}}></div>
            <div className="d-flex justify-content-between">
                <div>
                    <ol style={{fontSize: '13px'}}>
                        <li>Выберите номер пациента</li>
                        <li>Проведите тесты и заполните карты</li>
                        <li>Запоните и проверьте рецепт</li>
                    </ol>
                </div>
                <div>
                    <Button className="opto-button">Проверить рецепт</Button>
                </div>
            </div>
        </>
    )
}

export default Recipe;