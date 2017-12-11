import cx from 'classnames';
import React, { Component } from 'react';
import Notification from './Notification';
import styles from './index.styl';

class ToastNotification extends Component {
    static propTypes = {
        ...Notification.propTypes
    };
    static defaultProps = {
        ...Notification.defaultProps
    };

    render() {
        const { className, ...props } = this.props;

        return (
            <Notification
                {...props}
                className={cx(className, styles.toastNotification)}
            />
        );
    }
}

export default ToastNotification;
