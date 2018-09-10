import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-modal/dist/react-modal.css';
import uniqueId from 'lodash/uniqueId';
import React from 'react';
import Anchor from '@trendmicro/react-anchor';
import { Button } from '@trendmicro/react-buttons';
import Modal from '@trendmicro/react-modal';
import { Notification, ToastNotification } from '../src';

export default class Example extends React.Component {
    state = {
        notification: {
            error: true,
            warning: true,
            info: true
        },
        toastNotification: {
            error: true,
            warning: true,
            info: true,
            success: true,
            modal: true
        }
    };

    dismissNotification = (type) => (event) => {
        this.setState({
            notification: {
                ...this.state.notification,
                [type]: false
            }
        });
    };

    dismissToastNotification = (type) => (event) => {
        this.setState({
            toastNotification: {
                ...this.state.toastNotification,
                [type]: false
            }
        });
    };

    render() {
        const canDismissNotification = (() => {
            const { error, warning, info } = this.state.notification;

            return error || warning || info;
        })();
        const canDismissToastNotification = (() => {
            const { error, warning, info, success } = this.state.toastNotification;

            return error || warning || info || success;
        })();

        return (
            <div>
                <div className="container-fluid" style={{ marginTop: 15 }}>
                    <div className="row">
                        <div className="col-sm-6">
                            <div
                                style={{
                                    border: '1px solid #ccc',
                                    padding: '0 20px',
                                    paddingBottom: 20
                                }}
                            >
                                <h2>Notification</h2>
                                <div><b>Error:</b> {'To notify critical issues that require the user\'s immediate attention and action.'}</div>
                                <div><b>Warning:</b> {'To notify potential issues, but users may not need to do anything.'}</div>
                                <div><b>Info:</b> {'To provide users with potentially useful, relevant informational.'}</div>
                                <br />
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
                                        Show All Notifications
                                    </Button>
                                </div>
                                <hr />
                                <h3>Controlled Notification</h3>
                                <div style={{ margin: '10px 0' }}>
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
                                    type="error"
                                    show={this.state.notification.error}
                                    onDismiss={this.dismissNotification('error')}
                                >
                                    <div><b>Unable to Deploy Command</b></div>
                                    <div>An internal error has occurred. Try deploying the command later again. If the problem persists, contact your support representative.</div>
                                </Notification>
                                <Notification
                                    type="warning"
                                    show={this.state.notification.warning}
                                    onDismiss={this.dismissNotification('warning')}
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
                                    type="info"
                                    show={this.state.notification.info}
                                    onDismiss={this.dismissNotification('info')}
                                >
                                    <span style={{ marginRight: 8 }}>This is an informational notification.</span>
                                    <Anchor>More Information</Anchor>
                                </Notification>
                                <hr />
                                <h3>Uncontrolled Notification</h3>
                                <p><b>Note:</b> Always pass a new key while re-rendering uncontrolled notifications.</p>
                                <Notification
                                    key={uniqueId()}
                                    type="error"
                                    onDismiss={() => {
                                        // TODO
                                    }}
                                >
                                    <div><b>Unable to Deploy Command</b></div>
                                    <div>An internal error has occurred. Try deploying the command later again. If the problem persists, contact your support representative.</div>
                                </Notification>
                                <Notification
                                    key={uniqueId()}
                                    type="warning"
                                    onDismiss={() => {
                                        // TODO
                                    }}
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
                                    key={uniqueId()}
                                    type="info"
                                    onDismiss={() => {
                                        // TODO
                                    }}
                                >
                                    <span style={{ marginRight: 8 }}>This is an informational notification.</span>
                                    <Anchor>More Information</Anchor>
                                </Notification>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div
                                style={{
                                    border: '1px solid #ccc',
                                    padding: '0 20px',
                                    paddingBottom: 20
                                }}
                            >
                                <h2>Toast Notification</h2>
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
                                        Show All Toast Notifications
                                    </Button>
                                </div>
                                <hr />
                                <h3>Controlled Toast Notification</h3>
                                <div style={{ margin: '10px 0' }}>
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
                                        Dismiss Toast Notifications
                                    </Button>
                                </div>
                                <ToastNotification
                                    type="error"
                                    show={this.state.toastNotification.error}
                                    onDismiss={this.dismissToastNotification('error')}
                                    style={{ width: 320, marginBottom: 10 }}
                                >
                                    Error
                                </ToastNotification>
                                <ToastNotification
                                    type="warning"
                                    show={this.state.toastNotification.warning}
                                    onDismiss={this.dismissToastNotification('warning')}
                                    style={{ width: 320, marginBottom: 10 }}
                                >
                                    Warning
                                </ToastNotification>
                                <ToastNotification
                                    type="info"
                                    show={this.state.toastNotification.info}
                                    onDismiss={this.dismissToastNotification('info')}
                                    style={{ width: 320, marginBottom: 10 }}
                                >
                                    Info
                                </ToastNotification>
                                <ToastNotification
                                    type="success"
                                    show={this.state.toastNotification.success}
                                    onDismiss={this.dismissToastNotification('success')}
                                    style={{ width: 320, marginBottom: 10 }}
                                >
                                    Success
                                </ToastNotification>
                                <hr />
                                <h3>Uncontrolled Toast Notifications</h3>
                                <p><b>Note:</b> Always pass a new key while re-rendering uncontrolled toast notifications.</p>
                                <ToastNotification
                                    key={uniqueId()}
                                    type="error"
                                    onDismiss={() => {
                                        // TODO
                                    }}
                                    style={{ width: 320, marginBottom: 10 }}
                                >
                                    Error
                                </ToastNotification>
                                <ToastNotification
                                    key={uniqueId()}
                                    type="warning"
                                    style={{ width: 320, marginBottom: 10 }}
                                >
                                    Warning
                                </ToastNotification>
                                <ToastNotification
                                    key={uniqueId()}
                                    type="info"
                                    style={{ width: 320, marginBottom: 10 }}
                                >
                                    Info
                                </ToastNotification>
                                <ToastNotification
                                    key={uniqueId()}
                                    type="success"
                                    style={{ width: 320, marginBottom: 10 }}
                                >
                                    Success
                                </ToastNotification>
                                <hr />
                                <h4>Modal Notification</h4>
                                <Modal showOverlay={false}>
                                    <Modal.Header>
                                        <ToastNotification
                                            key={uniqueId()}
                                            type="success"
                                            style={{
                                                position: 'absolute',
                                                top: 8,
                                                left: '50%',
                                                transform: 'translateX(-50%)'
                                            }}
                                        >
                                            2 items added successfully.
                                        </ToastNotification>
                                        <Modal.Title>
                                            Add Exception
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button btnStyle="primary">Add</Button>
                                        <Button>Cancel</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
