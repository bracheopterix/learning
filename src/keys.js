var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {  // iteraiting in clothigItem object, each iteration creating temporal variable key for each parameter one by one
    console.log(key, ":", clothingItem[key])     // printing key name, ':' and clothingItem.keyname
}

