# react-notifications [![build status](https://travis-ci.org/trendmicro-frontend/react-notifications.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-notifications) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-notifications/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-notifications?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-notifications.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-notifications/)

React Notifications

Demo: https://trendmicro-frontend.github.io/react-notifications

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-notifications](https://github.com/trendmicro-frontend/react-notifications):

  ```
  npm install --save react @trendmicro/react-notifications
  ```

2. At this point you can import `@trendmicro/react-notifications` and its styles in your application as follows:

  ```js
  import { Notification, ToastNotification } from '@trendmicro/react-notifications';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-notifications/dist/react-notifications.css';
  ```

## Usage

### Notification

```js
const { dismissed } = this.state;

<Notification
    show={!dismissed}
    type="error"
    onDismiss={event => {
        this.setState({ dismissed: true });
    }}
/>
```

### Toast Notification

```js
const { dismissed } = this.state;

<ToastNotification
    show={!dismissed}
    type="warning"
    onDismiss={event => {
        this.setState({ dismissed: true });
    }}
/>
```

## API

### Properties

Name        | Type     | Default | Description 
:---------- | :--------| :------ | :----------
type        | String   | ''      | One of: 'error', 'warning', 'info', 'success'
show        | Boolean  | true    | Whether or not the component is visible.
dismissible | Boolean  | true    | Whether or not the notification is dismissible.
onDismiss   | Function |         | A callback fired when the dismiss icon (x) is clicked.

## License

MIT
