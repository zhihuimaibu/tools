import { JSEncrypt } from "jsencrypt";

export const encryptValue = function(key,value) {
    const encrypt = new JSEncrypt()
    encrypt.setPublicKey(key);
    return encrypt.encrypt(value);
}