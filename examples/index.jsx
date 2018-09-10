import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-modal/dist/react-modal.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Example from './Example';
import Navbar from './Navbar';

class Index extends React.Component {
    render() {
        const name = 'React Navs';
        const url = 'https://github.com/trendmicro-frontend/react-notifications';
        return (
            <div>
                <Navbar name={name} url={url} />
                <Example />
            </div>
        );
    }
}


ReactDOM.render(
    <Index />,
    document.getElementById('container')
);
