const cardConstructor = (name, img, index) => {
  const htmlElement = `<div class="top-background fire">
  <img class="pokemon-img" src="${img}" alt="Bulbasaur"></div>
                <div class="likes">
                    <div class="text-div">
                        <p class="pokemon-text">${name}</p>
                        <div id=likes-container${index} class="pokemon-likes">
                            <p class="pokemon-text">Likes: </p>
                            <p id=counterLikes${index} class="pokemon-text"> 0 </p>
                        </div>
                    </div>

                    <i id="likeIcon${index}" class="far fa-thumbs-up like-btn"></i>

                    <div id='icon-pokeball${index}' class="pokeball display-none">
                        <div class="pokeball__button"></div>
                    </div>
                  
                </div>
                <button id="button${index}" type="submit" class="comment-btn">Comment</button>`;
  return htmlElement;
};

export default cardConstructor;