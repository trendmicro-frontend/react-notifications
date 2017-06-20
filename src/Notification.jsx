import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Anchor from '@trendmicro/react-anchor';
import styles from './index.styl';

class Notification extends PureComponent {
    static propTypes = {
        show: PropTypes.bool,
        type: PropTypes.oneOf([
            '',
            'error',
            'success',
            'warning',
            'info'
        ]),
        dismissable: PropTypes.bool,
        onDismiss: PropTypes.func
    };
    static defaultProps = {
        show: true,
        type: '',
        dismissable: true,
        onDismiss: (event) => {}
    };

    render() {
        const { show, type, dismissable, onDismiss, className, children, ...props } = this.props;
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
                {dismissable && show && dismiss}
                {show && children}
            </div>
        );
    }
}

export default Notification;
