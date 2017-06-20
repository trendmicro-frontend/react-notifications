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
        notification: {
            error: true,
            warning: true,
            info: true
        },
        toastNotification: {
            willDismiss: false,
            dismissTimeout: 5, // 5 seconds
            error: true,
            warning: true,
            info: true,
            success: true
        }
    };

    onDismissNotification = (type) => (event) => {
        this.setState({
            notification: {
                ...this.state.notification,
                [type]: false
            }
        });
    };
    onDismissToastNotification = (type) => (event) => {
        this.setState({
            toastNotification: {
                ...this.state.toastNotification,
                [type]: false
            }
        });
    };

    dismissTimer() {
        setTimeout(() => {
            const { dismissTimeout } = this.state.toastNotification;

            if (dismissTimeout <= 1) {
                this.setState({
                    toastNotification: {
                        ...this.state.toastNotification,
                        willDismiss: false,
                        dismissTimeout: 5,
                        error: false,
                        warning: false,
                        info: false,
                        success: false
                    }
                });
                return;
            }

            this.setState({
                toastNotification: {
                    ...this.state.toastNotification,
                    dismissTimeout: dismissTimeout - 1
                }
            }, () => {
                this.dismissTimer();
            });
        }, 1000);

        this.setState({
            toastNotification: {
                ...this.state.toastNotification,
                willDismiss: true
            }
        });
    }
    render() {
        const name = 'React Notifications';
        const url = 'https://github.com/trendmicro-frontend/react-notifications';
        const { dismissTimeout } = this.state.toastNotification;
        const canDismissNotification = (() => {
            const { error, warning, info } = this.state.notification;

            return error || warning || info;
        })();
        const canDismissToastNotification = (() => {
            const { willDismiss, error, warning, info, success } = this.state.toastNotification;

            if (willDismiss) {
                return false;
            }

            return error || warning || info || success;
        })();

        return (
            <div>
                <Navbar name={name} url={url} />
                <div className="container-fluid" style={{ marginTop: 15 }}>
                    <div className="row">
                        <div className="col-md-12">
                            <Section className="row-md-5">
                                <h3>Notification</h3>
                                <div><b>Error:</b> {'To notify critical issues that require the user\'s immediate attention and action.'}</div>
                                <div><b>Warning:</b> {'To notify potential issues, but users may not need to do anything.'}</div>
                                <div><b>Info:</b> {'To provide users with potentially useful, relevant informational.'}</div>
                                <div style={{ margin: '10px 0' }}>
                                    <Button
                                        btnStyle="flat"
                                        onClick={() => {
                                            this.setState(state => ({
                                                notification: {
                                                    ...state.notification,
                                                    error: true,
                                                    warning: true,
                                                    info: true
                                                }
                                            }));
                                        }}
                                    >
                                        Show Notifications
                                    </Button>
                                    <Button
                                        btnStyle="flat"
                                        disabled={!canDismissNotification}
                                        onClick={() => {
                                            this.setState(state => ({
                                                notification: {
                                                    ...state.notification,
                                                    error: false,
                                                    warning: false,
                                                    info: false
                                                }
                                            }));
                                        }}
                                    >
                                        Dismiss Notifications
                                    </Button>
                                </div>
                                <Notification
                                    show={this.state.notification.error}
                                    type="error"
                                    onDismiss={this.onDismissNotification('error')}
                                >
                                    <div><b>Unable to Deploy Command</b></div>
                                    <div>An internal error has occurred. Try deploying the command later again. If the problem persists, contact your support representative.</div>
                                </Notification>
                                <Notification
                                    show={this.state.notification.warning}
                                    type="warning"
                                    onDismiss={this.onDismissNotification('warning')}
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
                                    show={this.state.notification.info}
                                    type="info"
                                    onDismiss={this.onDismissNotification('info')}
                                >
                                    <span style={{ marginRight: 8 }}>This is an informational notification.</span>
                                    <Anchor>More Information</Anchor>
                                </Notification>
                            </Section>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Section className="row-md-6">
                                <h3>Toast Notification</h3>
                                <div><b>Error:</b> {'To indicate incorrect or unsuccessful user actions.'}</div>
                                <div><b>Warning:</b> {'To indicate unusual user actions.'}</div>
                                <div><b>Info:</b> {'To provide additional information on user-initiated actions.'}</div>
                                <div><b>Success:</b> {'To indicate incorrect or unsuccessful user actions.'}</div>
                                <div style={{ margin: '10px 0' }}>
                                    <Button
                                        btnStyle="flat"
                                        onClick={() => {
                                            this.setState(state => ({
                                                toastNotification: {
                                                    ...state.toastNotification,
                                                    error: true,
                                                    warning: true,
                                                    info: true,
                                                    success: true
                                                }
                                            }));
                                        }}
                                    >
                                        Show Notifications
                                    </Button>
                                    <Button
                                        btnStyle="flat"
                                        disabled={!canDismissToastNotification}
                                        onClick={() => {
                                            this.setState(state => ({
                                                toastNotification: {
                                                    ...state.toastNotification,
                                                    error: false,
                                                    warning: false,
                                                    info: false,
                                                    success: false
                                                }
                                            }));
                                        }}
                                    >
                                        Dismiss Notifications
                                    </Button>
                                    <Button
                                        btnStyle="flat"
                                        disabled={!canDismissToastNotification}
                                        onClick={() => {
                                            this.dismissTimer();
                                        }}
                                    >
                                        Dismiss Notifications in {dismissTimeout} seconds
                                    </Button>
                                </div>
                                <ToastNotification
                                    show={this.state.toastNotification.error}
                                    type="error"
                                    onDismiss={this.onDismissToastNotification('error')}
                                    style={{ width: 320, marginBottom: 10 }}
                                >
                                    Error
                                </ToastNotification>
                                <ToastNotification
                                    show={this.state.toastNotification.warning}
                                    type="warning"
                                    onDismiss={this.onDismissToastNotification('warning')}
                                    style={{ width: 320, marginBottom: 10 }}
                                >
                                    Warning
                                </ToastNotification>
                                <ToastNotification
                                    show={this.state.toastNotification.info}
                                    type="info"
                                    onDismiss={this.onDismissToastNotification('info')}
                                    style={{ width: 320, marginBottom: 10 }}
                                >
                                    Info
                                </ToastNotification>
                                <ToastNotification
                                    show={this.state.toastNotification.success}
                                    type="success"
                                    onDismiss={this.onDismissToastNotification('success')}
                                    style={{ width: 320, marginBottom: 10 }}
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
