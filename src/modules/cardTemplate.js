const cardConstructor = (name, img, index) => {
  const htmlElement = `<div class="top-background fire">
  <img class="pokemon-img" src="${img}" alt="Bulbasaur"></div>
                <div class="likes">
                    <div class="text-div">
                        <p class="pokemon-text">${name}</p>
                        <div class="pokemon-likes">
                            <p class="pokemon-text">Likes: </p>
                            <p class="pokemon-text">100</p>
                        </div>
                    </div>
                    <i id="likeIcon1" class="far fa-thumbs-up like-btn"></i>
                </div>
                <button id="button${index}" type="submit" class="comment-btn">Comment</button>`;
  return htmlElement;
};

export default cardConstructor;