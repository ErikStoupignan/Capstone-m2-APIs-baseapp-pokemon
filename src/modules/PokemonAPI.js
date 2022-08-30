class Pokemon {

  async getData(id) {
    const requesting = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await requesting.json();
    return data;
    }
}
export default Pokemon;