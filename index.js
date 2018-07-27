var recipes = new Object({ omelette: 'eggs' })

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, { [key]: value });

}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
  return recipes;
}

function deleteFromObjectByKey(recipes, key){
  delete recipes.key;
  return recipes;
  1 = undefined
}


function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key] = value;
  return recipes;
}

