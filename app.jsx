import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import AppCSS from '/src/css/app.module.css';
import Home from './src/home/Home';

const MasterPage = () => {
    const renderComponent = () => {
        if (document.getElementById('home')) {
            return <Home />;
        }
    };

    return (
        <div style={{margin: 'auto', width: '1880px'}}>
            <div className={AppCSS.gridContainer}>
                <div className={AppCSS.header} style={{width: '1880px'}}>
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                <img src="public/logo.svg" alt="Логотип"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Главная</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Добавить клиента</a>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск"/>
                                    <button className="btn btn-outline-success" type="submit">Поиск</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className={AppCSS.content}>
                    {renderComponent()}
                </div>
            </div>
        </div>
    );
};

// Используем один корневой элемент
const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
root.render(
    <MasterPage/>
);
