import View from './view.js';
import icons from 'url:../../img/icons.svg';

class BookmarksViews extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No Bookmark yet, find a nice recipe and bookmarked it ;';
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    const id = window.location.hash.slice(1);

    return `
      <li class="preview ${result.id === id ? 'preview__link--active' : ''}">
        <a class="preview__link" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
          </div>
        </a>
      </li>
    `;
  }
}

export default new BookmarksViews();
