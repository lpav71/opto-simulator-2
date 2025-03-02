import React from 'react';
import '../css/global.scss'
import MedcardCSS from "./medcard.module.scss"

const Medcard = () => {
    const handleMedkartaChange = (event) => {
        const { name, value } = event.target;

        // Проверка, является ли значение числом
        if (!isNaN(value) && value.trim() !== '') {
            console.log(`Поле: ${name}, Значение: ${value}`);
        } else {
            console.log(`Ошибка: Значение в поле ${name} должно быть числом.`);
        }
    };

    return (
        <>
            <h4>Медицинская карта</h4>
            <div className={MedcardCSS.medkartaGrid}>
                {/*Левая колонка*/}
                <div className={MedcardCSS.medkartaLeftBlock}>
                    <div>
                        <div>Сфера после затуманивания</div>
                        <div className={MedcardCSS.medkartaInputBlock}>
                            <div className="d-flex">
                                <label className="mt-2">OD</label>
                                <input name="sphereAfterCloudingOD" onChange={handleMedkartaChange} className={`${MedcardCSS.medkartaInput} form-control`}/>
                            </div>
                            <div className="d-flex">
                                <label className="mt-2">OS</label>
                                <input name="sphereAfterCloudingOS" onChange={handleMedkartaChange} className={`${MedcardCSS.medkartaInput} form-control`}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Осевая проба</div>
                        <div className={MedcardCSS.medkartaInputBlock}>
                            <div className="d-flex">
                                <label className="mt-2">OD</label>
                                <input onChange={handleMedkartaChange} className={`${MedcardCSS.medkartaInput} form-control`}/>
                            </div>
                            <div className="d-flex">
                                <label className="mt-2">OS</label>
                                <input onChange={handleMedkartaChange} className={`${MedcardCSS.medkartaInput} form-control`}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Силовая проба</div>
                        <div className={MedcardCSS.medkartaInputBlock}>
                            <div className="d-flex">
                                <label className="mt-2">OD</label>
                                <input onChange={handleMedkartaChange} className={`${MedcardCSS.medkartaInput} form-control`}/>
                            </div>
                            <div className="d-flex">
                                <label className="mt-2">OS</label>
                                <input onChange={handleMedkartaChange} className={`${MedcardCSS.medkartaInput} form-control`}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Окончательная сфера</div>
                        <div className={MedcardCSS.medkartaInputBlock}>
                            <div className="d-flex">
                                <label className="mt-2">OD</label>
                                <input onChange={handleMedkartaChange} className={`${MedcardCSS.medkartaInput} form-control`}/>
                            </div>
                            <div className="d-flex">
                                <label className="mt-2">OS</label>
                                <input onChange={handleMedkartaChange} className={`${MedcardCSS.medkartaInput} form-control`}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Vis с подобранной коррекцией</div>
                        <div className={MedcardCSS.medkartaInputBlock}>
                            <div className="d-flex">
                                <label className="mt-2">OD</label>
                                <input onChange={handleMedkartaChange} className={`${MedcardCSS.medkartaInput} form-control`}/>
                            </div>
                            <div className="d-flex">
                                <label className="mt-2">OS</label>
                                <input onChange={handleMedkartaChange} className={`${MedcardCSS.medkartaInput} form-control`}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Правая колонка*/}
                <div style={{padding: '0 0 0 20px'}}>
                    <div>Дуохромный тест</div>
                    <div className="d-flex mt-2">
                        <label className="mt-2 me-2">OD</label>
                        <select className="form-select">
                            <option>Лучше на красном</option>
                            <option>Лучше на зеленом</option>
                            <option>Одинаково на красном и зеленом</option>
                        </select>
                    </div>
                    <div className="d-flex mt-2">
                        <label className="mt-2 me-2">OS</label>
                        <select className="form-select">
                            <option>Лучше на красном</option>
                            <option>Лучше на зеленом</option>
                            <option>Одинаково на красном и зеленом</option>
                        </select>
                    </div>
                    <div>Бинокулярный тест</div>
                    <div className="d-flex mt-2">
                        <label className="mt-2 me-2" style={{fontSize: '13px', width: '183px'}}>Vis бинокулярно</label>
                        <input className="form-control"/>
                    </div>
                    <div className="d-flex mt-2">
                        <label className="mt-2 me-2" style={{fontSize: '13px', width: '118px'}}>Тест-Уорс</label>
                        <select className="form-select" style={{width: "259px"}}>
                            <option>4 фигуры (бинокулярное)</option>
                            <option>2 фигуры (монокулярный правый)</option>
                            <option>3 фигуры (бинокулярный левый)</option>
                            <option>5 фигур (одновременное)</option>
                        </select>
                    </div>
                    <div>Тест Фон Грефе</div>
                    <div className="d-flex mt-2">
                        <label className="mt-2 me-2" style={{fontSize: '13px', width: '118px'}}>Нижняя полоса</label>
                        <select className="form-select" style={{width: "259px"}}>
                            <option>Под верхней</option>
                            <option>Смещена вправо</option>
                            <option>Смещена влево</option>
                            <option>Прочее</option>
                        </select>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="discrepancyExceeds"/>
                        <label style={{fontSize: '13px'}} className="form-check-label" htmlFor="discrepancyExceeds">Расхождение превышает ширину полосы</label>
                    </div>
                    <div className="d-flex">
                        <label className="mt-2 me-2" style={{fontSize: '13px', width: '118px'}}>У пациента</label>
                        <select className="form-select" style={{width: "259px"}}>
                            <option>Ортофория</option>
                            <option>Эзофория</option>
                            <option>Экзофория</option>
                            <option>Монокуляроное зрения</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Medcard