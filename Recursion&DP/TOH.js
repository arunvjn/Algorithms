const towerOfHanoi = (noOfDisks, source, target, aux) => {
  if(!noOfDisks) return;
  towerOfHanoi(noOfDisks-1, source, aux, target);
  console.log(`Move disk:${noOfDisks} from ${source} to ${target}`);
  towerOfHanoi(noOfDisks-1, aux, target, source);
};

console.log(towerOfHanoi(5, 'Source', 'Target', 'Auxillary'));