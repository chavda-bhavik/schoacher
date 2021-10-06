import pubsub from 'sweet-pubsub';

const show = (toast: ToastType) => pubsub.emit('toast', toast);

const success = (message: string) => show({ type: 'success', message });

const info = (message: string) => show({ type: 'info', message });

const error = (err: string) => {
    show({
        type: 'danger',
        message: err
    });
};

const toast = { show, error, success, info }

export default toast;