import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Anchor from '@trendmicro/react-anchor';
import { Button } from '@trendmicro/react-buttons';
import Navbar from './Navbar';
import Section from './Section';
import { Notification, ToastNotification } from '../src';

class App extends React.Component {
    state = {
        error: true,
        warning: true,
        info: true,
        success: true
    };

    onDismiss = (type) => (event) => {
        this.setState({ [type]: false });
    };

    render() {
        const name = 'React Notifications';
        const url = 'https://github.com/trendmicro-frontend/react-notifications';

        return (
            <div>
                <Navbar name={name} url={url} />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12" style={{ margin: '16px 0' }}>
                            <Button
                                btnStyle="flat"
                                onClick={() => {
                                    this.setState(state => ({
                                        error: true,
                                        warning: true,
                                        info: true,
                                        success: true
                                    }));
                                }}
                            >
                                Show Notifications
                            </Button>
                            <Button
                                btnStyle="flat"
                                onClick={() => {
                                    this.setState(state => ({
                                        error: false,
                                        warning: false,
                                        info: false,
                                        success: false
                                    }));
                                }}
                            >
                                Hide Notifications
                            </Button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Section className="row-md-5">
                                <h3>Notification</h3>
                                <div><b>Error:</b> {'To notify critical issues that require the user\'s immediate attention and action.'}</div>
                                <div><b>Warning:</b> {'To notify potential issues, but users may not need to do anything.'}</div>
                                <div><b>Info:</b> {'To provide users with potentially useful, relevant informational.'}</div>
                                <div style={{ marginBottom: 15 }} />
                                <Notification
                                    show={this.state.error}
                                    type="error"
                                    onDismiss={this.onDismiss('error')}
                                >
                                    <div><b>Unable to Deploy Command</b></div>
                                    <div>An internal error has occurred. Try deploying the command later again. If the problem persists, contact your support representative.</div>
                                </Notification>
                                <Notification
                                    show={this.state.warning}
                                    type="warning"
                                    onDismiss={this.onDismiss('warning')}
                                >
                                    <div><b>Your license will expire soon</b></div>
                                    <div>
                                        <span style={{ marginRight: 8 }}>
                                            Your license will expire in 3 days.
                                        </span>
                                        <Button btnSize="xs" btnStyle="flat">Renew Now</Button>
                                    </div>
                                </Notification>
                                <Notification
                                    show={this.state.info}
                                    type="info"
                                    onDismiss={this.onDismiss('info')}
                                >
                                    <span style={{ marginRight: 8 }}>This is an informational notification.</span>
                                    <Anchor>More Information</Anchor>
                                </Notification>
                            </Section>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Section className="row-md-5">
                                <h3>Toast Notification</h3>
                                <div><b>Error:</b> {'To indicate incorrect or unsuccessful user actions.'}</div>
                                <div><b>Warning:</b> {'To indicate unusual user actions.'}</div>
                                <div><b>Info:</b> {'To provide additional information on user-initiated actions.'}</div>
                                <div><b>Success:</b> {'To indicate incorrect or unsuccessful user actions.'}</div>

                                <div style={{ marginBottom: 15 }} />
                                <ToastNotification
                                    show={this.state.error}
                                    type="error"
                                    onDismiss={this.onDismiss('error')}
                                    style={{ width: 320 }}
                                >
                                    Error
                                </ToastNotification>
                                <ToastNotification
                                    show={this.state.warning}
                                    type="warning"
                                    onDismiss={this.onDismiss('warning')}
                                    style={{ width: 320 }}
                                >
                                    Warning
                                </ToastNotification>
                                <ToastNotification
                                    show={this.state.info}
                                    type="info"
                                    onDismiss={this.onDismiss('info')}
                                    style={{ width: 320 }}
                                >
                                    Info
                                </ToastNotification>
                                <ToastNotification
                                    show={this.state.success}
                                    type="success"
                                    onDismiss={this.onDismiss('success')}
                                    style={{ width: 320 }}
                                >
                                    Success
                                </ToastNotification>
                            </Section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
