const popupConstructor = (name, img, type, weight,
  length, hability) => {
  const htmlElement = `
    <div class="container-card">

            <div class="container-wrap">
                    <div class="card-top ${type}">
                        <span id="xmodal" class="x-close">&#88;</span>
                        <img class="img-card" src="${img}" alt="picture of ${name}">
                        <h2 class="name-pokemon-card">${name}</h2>
                    </div>

                    <ul class="features-card">
                        <li>Type: ${type}</li>
                        <li>Weight: ${weight}</li>
                        <li>Length: ${length}</li>
                        <li>Ability: ${hability}</li>
                    </ul>
                    
                    <div class="comments-section">
                        <span class="title-comments">Comments</span>
                        <ul id="comments-list" class="comments-list">
                        </ul>
                    </div>
                

                    <form id="form-popUP-Menu" class="form-comments" action="#">
                    </form>
            </div>

        </div>
    `;
  return htmlElement;
};

export default popupConstructor;