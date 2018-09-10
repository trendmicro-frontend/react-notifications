```jsx
<Notification
    type="error"
    show={true}
    onDismiss={() => {}}
>
    <div><b>Unable to Deploy Command</b></div>
    <div>An internal error has occurred. Try deploying the command later again. If the problem persists, contact your support representative.</div>
</Notification>
```

```jsx
const Button = require('@trendmicro/react-buttons').Button;

<Notification
    type="warning"
    show={true}
    onDismiss={() => {}}
>
    <div><b>Your license will expire soon</b></div>
    <div>
        <span style={{ marginRight: 8 }}>
            Your license will expire in 3 days.
        </span>
        <Button btnSize="xs" btnStyle="flat">Renew Now</Button>
    </div>
</Notification>
```

```jsx
const Anchor = require('@trendmicro/react-anchor');

<Notification
    type="info"
    show={true}
    onDismiss={() => {}}
>
    <span style={{ marginRight: 8 }}>This is an informational notification.</span>
    <Anchor>More Information</Anchor>
</Notification>
```

```jsx
<Notification
    type="success"
    show={true}
    onDismiss={() => {}}
>
    <span style={{ marginRight: 8 }}>This is an success notification.</span>
</Notification>
```