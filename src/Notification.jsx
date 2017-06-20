import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Anchor from '@trendmicro/react-anchor';
import styles from './index.styl';

class Notification extends PureComponent {
    static propTypes = {
        // One of: 'error', 'warning', 'info', 'success'
        type: PropTypes.oneOf([
            '',
            'error',
            'success',
            'warning',
            'info'
        ]),

        // Whether or not the component is visible.
        show: PropTypes.bool,

        // Whether or not the notification is dismissible.
        dismissible: PropTypes.bool,

        // A callback fired when the dismiss icon (x) is clicked.
        onDismiss: PropTypes.func
    };
    static defaultProps = {
        type: '',
        show: true,
        dismissible: true,
        onDismiss: (event) => {}
    };

    render() {
        const { type, show, dismissible, onDismiss, className, children, ...props } = this.props;
        const icon = (
            <i
                className={classNames(
                    styles.icon,
                    {
                        [styles.iconError]: type === 'error',
                        [styles.iconWarning]: type === 'warning',
                        [styles.iconInfo]: type === 'info',
                        [styles.iconSuccess]: type === 'success'
                    }
                )}
            />
        );
        const dismiss = (
            <Anchor
                onClick={onDismiss}
                className={styles.btnDismiss}
            />
        );

        return (
            <div
                {...props}
                className={classNames(
                    className,
                    styles.notification,
                    {
                        [styles.fade]: true,
                        [styles.in]: show,
                        [styles.dismissed]: !show,
                        [styles.error]: type === 'error',
                        [styles.warning]: type === 'warning',
                        [styles.info]: type === 'info',
                        [styles.success]: type === 'success'
                    }
                )}
            >
                {show && icon}
                {dismissible && show && dismiss}
                {show && children}
            </div>
        );
    }
}

export default Notification;
