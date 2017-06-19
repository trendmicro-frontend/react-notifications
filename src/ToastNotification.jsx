import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Notification from './Notification';
import styles from './index.styl';

class ToastNotification extends PureComponent {
    static propTypes = {
        ...Notification.propTypes,
        dismissTimeout: PropTypes.number
    };
    static defaultProps = {
        ...Notification.defaultProps,
        dismissTimeout: 0
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
