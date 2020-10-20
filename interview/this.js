function Obj() {
  const name = "Fang"
  const getName = function () {
    console.log(this.name)
  }

  return {
    name, getName
  }
}

obj = new Obj()
obj.getName()


var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

pokemon.getPokeName()