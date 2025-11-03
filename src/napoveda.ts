import promptSync from 'prompt-sync';

const prompt = promptSync();

//--------------------------------------------------------------------------------------------------

// pozadame uzivatele o zadani cisla. Q: proc je vysledkem text ?
// nezapomente u promenne VZDY urcovat typ. Jazyk to nevyzaduje, ale ja ano.
// Q: proc je na konci mezera ?
let vstupniText : string = prompt("Zadej cislo: ");

// Pro pripomenuti: zapis podminky, a test zda je text neprazdny, zda v nem neco je. 
// Q: Co kdyz zadam jako text pet mezer ?
if (vstupniText == "") {
    console.log("Konec zadavani");
}

// Zpusob jak zjistit ze nejaky text NENI platne cislo. Hint: toto jsou 2 az 3 napovedy v jednom.
if (Number.isNaN(Number(vstupniText))) {
    console.log(`Zadany text ${vstupniText} neni cislo.`);
}

// Nezapomente, ze promenna typu text ma uzitecne funkce, pristupne pres tecku ("."). 
// CTETE NAPOVEDU pro funkce (CTRL-ENTER).
// Pozor -- length je VLASTNOST a pise se BEZ kulatych zavorek. Jedina vlastnost textu. 
// vsechno ostatni co "umi" text a vidite v napovede jsou FUNKCE - vyvolavaji se pomoci kulatych zavorek ("(", ")").
if (vstupniText.length < 4) {
    console.log("Moc kratky text.");
}

// Q: Proc je parametr "3", kdyz se hovori o 4. znaku ? Bacha na to.
console.log("Ctvrty znak je: " + vstupniText.charAt(3));

// Upravi text - jak ?
console.log(vstupniText.trim());
