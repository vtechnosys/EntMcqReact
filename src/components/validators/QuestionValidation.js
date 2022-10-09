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
export const isJobprofile = (jobprofile) =>{
    return validator.isAlpha(jobprofile);
}
export const isHospitalName = (hospitalname) =>{
    return validator.isAlpha(hospitalname);
}
export const isHospitalAddress = (hospitaladdress) =>{
    return validator.isAlpha(hospitaladdress);
}
export const isBankname = (bankname) =>{
    return validator.isAlpha(bankname);
}
export const isAccountHoldername = (accountholder) =>{
    return validator.isAlpha(accountholder);
}
export const isAccountnumber = (accountnumber) =>{
    return validator.isAlpha(accountnumber);
}
export const isIfsccode = (ifsccode) =>{
    return validator.isAlpha(ifsccode);
}
export const isMobilenumber = (contactnumber) =>{
    return validator.isNumeric(contactnumber);
}
export const isPasss = (ps) =>{
    return validator.isStrongPassword(ps,{
        minLength:8,minLowercase:1,
        minUppercase:1,minNumbers:1,minSymbols:1
    })
}