class Planeta {
  constructor(name = "Na") {
    this.name = name;
    this.id = 0;
    this.distance = 0;
    this.size = 0;
  }

  set_Data(id, distance, size) {
    this.id = id;
    this.distance = distance;
    this.size = size;
  }

  get_Data() {
    return [this.id, this.name, this.distance, this.size];
  }


print()
  {
    console.log(this.id, this.name, this.distance, this.size)
  }
}

export default Planeta;