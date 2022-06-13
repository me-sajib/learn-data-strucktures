// it's like a key value pair , it's advance to while and for loop. it's more advance version name is hash table dictionary.
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  get(key) {
    return this.items[key];
  }
}

const phone = new Dictionary();
phone.add("rafiq", "01777777777");
phone.add("sabbir", "01777777778");
phone.add("jobbar", "01777777779");
console.log(phone.items);
console.log(phone.get("sabbir"));
