import md5 from "crypto-js/md5";
import sha1 from "crypto-js/sha1";
import sha256 from "crypto-js/sha256";

export const generateHash = (input) => {
  return {
    md5: md5(input).toString(),
    sha1: sha1(input).toString(),
    sha256: sha256(input).toString(),
  };
};