let vowels = ['a','e','i','o','u']


function translate(word) {
    for (let i = 0; i < vowels.length; i++) {
        if (word.substring(0,1) === vowels[i]) {
          return word + 'way'
        } else {
          return word.slice(1) + word.slice(0,1) + 'ay'
        }
    }
}

translate('pig')