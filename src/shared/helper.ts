import { Address } from '@/interfaces';
type stringNumber = string | number;

export const isProduction = process.env.NODE_ENV === "production";

export const toggleBodyOverflowHidden = (add: boolean) => {
    let body = document.getElementsByTagName('body')[0];
    if (add) {
        body.classList.add('overflow-hidden');
    } else {
        body.classList.remove('overflow-hidden');
    }
};

export const combineAddress = (address: Address): string => {
    if (!address) return '';
    let addressValuesArr = Object.keys(address).reduce((arr, key) => {
        if (address[key]) arr.push(address[key]);
        return arr;
    }, []);
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

export const generateUniqueString = () => Math.random().toString(36).substr(2,);