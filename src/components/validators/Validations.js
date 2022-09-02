import validator from "validator";

export const isEmail = (em) =>{
    return validator.isEmail(em);
}
export const isName = (nm) =>{
    return validator.isAlpha(nm);
}
export const isMob = (em) =>{
    return validator.isNumeric(em);
}
export const isPasss = (ps) =>{
    return validator.isStrongPassword(ps,{
        minLength:8,minLowercase:1,
        minUppercase:1,minNumbers:1,minSymbols:1
    })
}