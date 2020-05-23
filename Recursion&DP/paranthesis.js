const paranthesis = n => {

  const validP = (str, score) => {
    if(score < 0 || score > n) return;
    if(score === 0 && str.length > 0 && str.length === 2*n) console.log(str);
    if(str.length > 2*n) return;

    validP(str+'(', score + 1);
    validP(str+')', score - 1);

  };

  validP('', 0);

};

console.log(paranthesis(4));