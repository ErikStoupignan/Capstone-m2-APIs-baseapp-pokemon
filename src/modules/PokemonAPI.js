class Pokemon {
  async getData(id) {
    const requesting = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    this.data = await requesting.json();
    return this.data;
  }

  async getList() {
    const listrequest = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=60&offset=0');
    this.dataList = await listrequest.json();
    return this.dataList;
  }
}

export default Pokemon;