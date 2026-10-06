function App() {
    const [wiadomosc, setWiadomosc] = React.useState('');
    const [status, setStatus] = React.useState('Środowisko gotowe');

    const obslugaKlikniecia = () => {
        setWiadomosc('Aplikacja React działa poprawnie z osobnego pliku JS!');
    };

    return React.createElement(
        'div',
        { className: 'container' },
        React.createElement('h1', null, 'Projekt Praktyki'),
        React.createElement('p', { className: 'status' }, 'Status: ', React.createElement('b', null, status)),
        React.createElement(
            'div',
            { className: 'box' },
            React.createElement('h3', null, 'Test działania skryptu:'),
            React.createElement(
                'button',
                { className: 'btn', onClick: obslugaKlikniecia },
                'Kliknij tutaj'
            ),
            wiadomosc && React.createElement('p', { className: 'wynik' }, wiadomosc)
        )
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));