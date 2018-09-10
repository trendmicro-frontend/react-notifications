```jsx
<ToastNotification
    type="error"
    show={true}
    onDismiss={() => {}}
>
    Error
</ToastNotification>
```

```jsx
const Button = require('@trendmicro/react-buttons').Button;

<ToastNotification
    type="warning"
    show={true}
    onDismiss={() => {}}
>
    Warning
</ToastNotification>
```

```jsx
const Anchor = require('@trendmicro/react-anchor');

<ToastNotification
    type="info"
    show={true}
    onDismiss={() => {}}
>
    Info
</ToastNotification>
```

```jsx
<ToastNotification
    type="success"
    show={true}
    onDismiss={() => {}}
>
    Success
</ToastNotification>
```

```jsx
const Modal = require('@trendmicro/react-modal');
const Button = require('@trendmicro/react-buttons').Button;

<Modal showOverlay={false}>
    <Modal.Header>
        <ToastNotification
            key={1}
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
            Modal Title
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    </Modal.Body>
    <Modal.Footer>
        <Button btnStyle="primary">Add</Button>
        <Button>Cancel</Button>
    </Modal.Footer>
</Modal>
```