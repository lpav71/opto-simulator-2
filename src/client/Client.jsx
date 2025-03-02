import React, {useEffect, useState} from 'react';
import '../css/global.scss'
import ClientCSS from "./client.module.scss";

const Client = () => {
    const [clients, setClients] = useState([]); // Начальное значение - пустой массив
    const [selectedClientId, setSelectedClientId] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [leadingEye, setLeadingEye] = useState('');
    const [visOd, setVisOd] = useState('');
    const [visOs, setVisOs] = useState('');
    const [odSph, setOdSph] = useState('');
    const [odCyl, setOdCyl] = useState('');
    const [odAx, setOdAx] = useState('');
    const [osSph, setOsSph] = useState('');
    const [osCyl, setOsCyl] = useState('');
    const [osAx, setOsAx] = useState('');

    const handleClientChange = (event) => {
        const clientId = event.target.value;
        setSelectedClientId(clientId);

        // Находим клиента по ID и устанавливаем возраст
        const selectedClient = clients.find(client => client.ID === parseInt(clientId));
        if (selectedClient) {
            setAge(selectedClient.Age);
            setGender(selectedClient.Gender);
            setLeadingEye(selectedClient.LeadingEye); // Исправлено: обновляем состояние для leadingEye
            setVisOd(selectedClient.VisOd);
            setVisOs(selectedClient.VisOs);
            setOdSph(selectedClient.OdSph);
            setOdCyl(selectedClient.OdCyl);
            setOdAx(selectedClient.OdAx);
            setOsSph(selectedClient.OsSph);
            setOsCyl(selectedClient.OsCyl);
            setOsAx(selectedClient.OsAx);
        }
    };

    const APIclientsAll = async () => {
        let requestOptions = {
            method: "POST",
            redirect: "follow"
        };

        const response = await fetch("/api/clients/all", requestOptions);
        if (response.ok) {
            let res = await response.json();
            setClients(res);
        }
    }

    useEffect(() => {
        APIclientsAll();
    }, []);

    return (
        <>
            <h4>Пациент</h4>
            <select className="form-select" value={selectedClientId} onChange={handleClientChange}>
                <option value="" disabled>Выберите клиента</option>
                {clients && clients.map(item => (
                    <option key={item.ID} value={item.ID}>{item.FullName}</option>
                ))}
            </select>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex'}}>
                    <label style={{marginTop: '23px', marginRight: '10px'}}>Возраст</label>
                    <input type="text" value={age} readOnly className="form-control mt-3" disabled style={{width: '48px'}}/>
                </div>
                <div style={{display: 'flex'}}>
                    <label style={{marginTop: '23px', marginRight: '10px'}}>Пол</label>
                    <input type="text" value={gender} readOnly className="form-control mt-3" disabled style={{width: '48px'}}/>
                </div>
                <div style={{display: 'flex'}}>
                    <label style={{marginTop: '23px', marginRight: '10px'}}>Ведущий глаз</label>
                    <input type="text" value={leadingEye} readOnly className="form-control mt-3" disabled style={{width: '48px'}}/>
                </div>
            </div>
            <div className={`${ClientCSS.blockClient} mt-5`}>
                <div>
                    <div style={{margin: '20px auto 10px auto'}}>Vis без коррекции:</div>
                    <span>Для дали:</span><br/>
                    <div style={{display: 'flex', gap: '10px'}}>
                        <div>
                            <label className={ClientCSS.clientLabel}>OD</label>
                            <input className={`${ClientCSS.inputMin} form-control`} value={visOd} onChange={handleClientChange}/>
                        </div>
                        <div>
                            <label className={ClientCSS.clientLabel}>OS</label>
                            <input className={`${ClientCSS.inputMin} form-control`} value={visOs} onChange={handleClientChange}/>
                        </div>
                    </div>
                    <div style={{marginTop: '10px'}}>Для близи:</div>
                    <div style={{display: 'flex', gap: '10px'}}>
                        <div>
                            <label className={ClientCSS.clientLabel}>OD</label>
                            <input className={`${ClientCSS.inputMin} form-control`} value={1} readOnly/>
                        </div>
                        <div>
                            <label className={ClientCSS.clientLabel}>OS</label>
                            <input className={`${ClientCSS.inputMin} form-control`} value={1} readOnly/>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{margin: '20px auto 10px auto'}}>Данные рефрактометрии:</div>
                    <table className="table" style={{width: '100%'}}>
                        <thead>
                        <tr>
                            <th>Глаз</th>
                            <th>Shp</th>
                            <th>Cyl</th>
                            <th>Ax</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>OD</td>
                            <td>{odSph}</td>
                            <td>{odCyl}</td>
                            <td>{odAx}</td>
                        </tr>
                        <tr>
                            <td>OS</td>
                            <td>{osSph}</td>
                            <td>{osCyl}</td>
                            <td>{osAx}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Client;