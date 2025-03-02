import React, {useState} from 'react';
import '../css/global.scss'
import SlidesCSS from "./slides.module.scss"

const Slides = () => {
    const [selectedValue, setSelectedValue] = useState(1); // Начальное значение

    const handleChange = (event) => {
        setSelectedValue(Number(event.target.value)); // Приведение к числу
    };

    // Маппинг значений на изображения
    const imageMap = {
        1 : 'public/image/slides/slide_1.jpg',
        2 : 'public/image/slides/slide_2.jpg',
        3 : 'public/image/slides/slide_3.jpg',
        4 : 'public/image/slides/slide_4.jpg',
        5 : 'public/image/slides/slide_5.jpg',
        6 : 'public/image/slides/slide_6.jpg',
        7 : 'public/image/slides/duo_chrome.jpg',
        8 : 'public/image/slides/radiant_figure.jpg',
        9 : 'public/image/slides/grain_size.jpg',
        10: 'public/image/slides/worth_test.jpg',
        11: 'public/image/slides/schobers_test.jpg',
    };

    return (
        <>
            <h4>Слайды</h4>
            <select className="form-select" onChange={handleChange}>
                <option value={1}>0.05</option>
                <option value={2}>0.1-0.15</option>
                <option value={3}>0.2-0.4</option>
                <option value={4}>0.5-0.7</option>
                <option value={5}>0.8-1</option>
                <option value={6}>1-1.5</option>
                <option value={7}>Дуохромный тест</option>
                <option value={8}>Лучистая фигура</option>
                <option value={9}>Зернистость</option>
                <option value={10}>Тест Уорса</option>
                <option value={11}>Тест Шобера</option>
            </select>
            <div className={SlidesCSS.slides}>
                <img src={imageMap[selectedValue]} height='320' alt="Изображение"/>
            </div>
        </>
    )
}

export default Slides;