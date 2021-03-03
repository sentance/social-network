export const required = value => {
    if(value) return undefined;
    return 'Field required'

}

export const maxLengthCreator = (maxLength) => (value)=>{
    if(value.length > maxLength) return `Max length must me ${maxLength} symbols`;
    return undefined

}
export const minLengthCreator = (minLength) => (value)=>{
    if(value.length < minLength) return `Min length must me ${minLength} symbols`;
    return undefined

}
