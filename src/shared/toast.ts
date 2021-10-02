import pubsub from 'sweet-pubsub';

const show = (toast: ToastType) => pubsub.emit('toast', toast);

const success = (message: string) => show({ type: 'success', message });

const error = (err: string) => {
    show({
        type: 'danger',
        title: 'Error',
        message: err,
        duration: 0,
    });
};

const toast = { show, error, success }

export default toast;