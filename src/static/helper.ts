export const toggleBodyOverflowHidden = (add: boolean) => {
    let body = document.getElementsByTagName('body')[0];
    if (add) {
        body.classList.add('overflow-hidden');
    } else {
        body.classList.remove('overflow-hidden');
    }
};
