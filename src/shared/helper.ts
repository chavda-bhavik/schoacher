import { Address } from '@/interfaces';
type stringNumber = string | number;

export const isProduction = process.env.NODE_ENV === 'production';

export const toggleBodyOverflowHidden = (add: boolean) => {
    let body = document.getElementsByTagName('body')[0];
    if (add) {
        body.classList.add('overflow-hidden');
    } else {
        body.classList.remove('overflow-hidden');
    }
};

export const combineAddress = (address: Address | Partial<Address>): string => {
    if (!address) return '';
    let addressValuesArr = [];
    if (address.street1) addressValuesArr.push(address.street1);
    if (address.street2) addressValuesArr.push(address.street2);
    if (address.city) addressValuesArr.push(address.city);
    if (address.state) addressValuesArr.push(address.state);
    if (address.pincode) addressValuesArr.push(address.pincode);
    return addressValuesArr.join(', ');
};

export const arrayValuesCombiner = (...values: stringNumber[]): string => {
    return values.filter((v) => !!v).join(', ');
};

export const removeEmptyUndefiendValues = (obj) => {
    return Object.keys(obj)
        .filter((key) => !!obj[key])
        .reduce((newObj, key) => {
            newObj[key] = obj[key];
            return newObj;
        }, {});
};

export const valueAvailable = (val) => {
    return !!val;
};

export const convertArrayToObj = (
    array: any,
    keyFieldName: string,
    valueFieldName: string
): Record<string | number, string> => {
    return array.reduce((obj, item) => {
        obj[item[keyFieldName]] = item[valueFieldName];
        return obj;
    }, {});
};

export const downloadFile = (fileUrl: string, name: string) => {
    fetch(fileUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/pdf',
        },
    })
        .then((response) => response.blob())
        .then((blob) => {
            // Create blob link to download
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${name}.pdf`);

            // Append to html link element page
            document.body.appendChild(link);

            // Start download
            link.click();

            // Clean up and remove the link
            link.parentNode.removeChild(link);
        });
};

export const generateUniqueString = () => Math.random().toString(36).substr(2);

export const setServerErrors = (errors, setError) => {
    errors.forEach((err) => {
        setError(err.field, { type: 'manual', message: err.message });
    });
};

export function kFormatter(num: number) {
    return Math.abs(num) > 999
        ? (Math.sign(num) * Math.round(Math.abs(num) / 100)) / 10 + 'k'
        : Math.sign(num) * Math.abs(num);
}

export const getLoginUser = (): LocalStorageDecoded => {
    if (typeof window === 'undefined') return null;
    const user = localStorage.getItem('user');
    if (!user) return undefined;
    else return JSON.parse(user);
};

export const pick = (obj, ...keys) =>
    Object.fromEntries(keys.filter((key) => key in obj).map((key) => [key, obj[key]]));

// let inclusivePick = (obj, ...keys) => Object.fromEntries(
// keys.map(key => [key, obj[key]])
// );

export const omit = (obj, ...keys) =>
    Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)));
