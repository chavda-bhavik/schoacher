import { Address } from "@/interfaces";
type stringNumber = string | number;

export const toggleBodyOverflowHidden = (add: boolean) => {
    let body = document.getElementsByTagName('body')[0];
    if (add) {
        body.classList.add('overflow-hidden');
    } else {
        body.classList.remove('overflow-hidden');
    }
};

export const combineAddress = (address: Address): string => {
    if (!address) return "";
    let addressValuesArr = Object.keys(address).reduce((arr, key) => {
        if (address[key]) arr.push(address[key]);
        return arr;
    }, []);
    return addressValuesArr.join(', ');
}

export const arrayValuesCombiner = (...values: stringNumber[]): string => {
    return values.filter(v => !!v).join(', ');
}