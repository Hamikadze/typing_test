export default function isEnterKey(letter){
    const enterLetters_eng = "ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+{}|:\"<>?";
    return enterLetters_eng.indexOf(letter) >= 0
};