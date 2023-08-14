// Excuse Generator
let pronoun = ['the','our','your','his','her'];
let adjectives = ['great', 'big','small','tall','ugly'];
let noums = ['puedes','mantecom','anana','tiger','panda'];
let extentions = ['.es','.com','.na','.org','.net'];

for(let i = 0; i < pronoun.length; i++){
    //console.log(pronoun[i]);
    for (const adj of adjectives) {
        noums.forEach(noum => {
            for (const ext of extentions){          
                if(noum.slice(-1 * (ext.length-1)) == ext.slice(1)){
                    console.log(noum.slice(0,noum.length-ext.length+1) + ext);
                }else{
                    console.log(pronoun[i] + adj + noum + ext);
                }
            }
            
        });
    }
}