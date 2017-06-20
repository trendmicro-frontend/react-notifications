import classNames from 'classnames';
import React, { PureComponent } from 'react';
import Notification from './Notification';
import styles from './index.styl';

class ToastNotification extends PureComponent {
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
                className={classNames(className, styles.toastNotification)}
            />
        );
    }
}

export default ToastNotification;
