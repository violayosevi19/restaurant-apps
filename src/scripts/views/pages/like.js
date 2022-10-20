/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
import FavoritesResto from '../../data/favorites-resto';
import {ListRestoItemTemplate} from '../templates/template-creator';
const Like = {
  async render() {
    return `
    <h1 class="menu-title">Favorites Restaurants</h1>
    <section id="posts" class="content-section">
    </section>`;
  },

  async afterRender() {
    const restos = await FavoritesResto.getAllRestos();
    const restoContainer = document.querySelector('#posts');

    restos.forEach((resto) => {
      restoContainer.innerHTML += ListRestoItemTemplate(resto);
    });

    // let html;
    // if (!restos) {
    //   html = '<div class="restos_not__found">Resto tidak ditemukan</div>';
    // }
  },
};

export default Like;
