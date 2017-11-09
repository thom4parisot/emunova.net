'use strict';

const $ = require('jquery');

function sanitizeTitle(title){
  return String(title).trim().replace(/^\[.+\] ?/, '');
};

class RemoteContent{
  constructor (url, container) {
    this.url = url;
    this.container = container;
    this.state = 'loading';
  }

  static create (url, container) {
    return new RemoteContent(url, container).update();
  }

  /**
   * Applies all the data to the receivers
   *
   * @param {Array.<Object>} data
   */
  render (data) {
    let offset = 0;

    $(this.container).find('[data-item-limit]').each((i, receiverElement) => {
      const limit = parseInt(receiverElement.getAttribute('data-item-limit'), 10) || 5;

      this.renderReceiver(receiverElement, data.slice(offset, offset+limit));
      offset += limit;
    });
  }

  /**
   * Applies the given data to the receiver.
   *
   * @param {HTMLElement} el
   * @param {Array.<Object>} data
   */
  renderReceiver (el, data) {
    const html = data.map(this.renderItem).join('');

    $(el).html(html);
  }

  /**
   * Applies the given data to a single item element.
   *
   * @param {HTMLElement} item
   * @param {Object} itemData
   */
  renderItem (itemElement) {
    const $item = $(itemElement);
    const title = $item.find('title').text();
    const link = $item.find('link').text();
    const date = new Date($item.find('pubDate').text());
    let dateString = '';

    if ('toLocaleDateString' in date){
      dateString = date.toLocaleDateString('fr', {
        month: 'short',
        day: 'numeric'
      });
    }
    else {
      dateString = (date.getUTCDate()) + '/' + (date.getUTCMonth() + 1);
    }


    return `<dt>${dateString}</dt>
      <dd>
        <a href="${link}" target="_blank" rel="noopener noreferrer">${sanitizeTitle(title)}</a>
      </dd>`;
  }

  /**
   * Updates the progress bar to that given percentage state.
   *
   * @param {Number} percentage
   */
  setProgress (percentage) {
    this.getProgressBarElement().css('width', parseInt(percentage, 10) + '%');
  }

  setState (state, message) {
    $(this.container)
      .removeClass(this.state)
      .addClass(state)

    this.getProgressBarElement()
      .removeClass(`progress-bar-${this.state}`)
      .addClass('progress-bar-'+state)
      .text(message)
      .parent()
        .removeClass('active');

    this.state = state;
  }
  getProgressBarElement () {
    return $(this.container).find('[role="progressbar"]');
  }
  /**
   * Requests new data from the remote source and renders the view.
   */
  update () {
    var request = $.ajax(this.url, {
      crossDomain: true,
      dataType: 'xml',
      timeout: 2*1000,
      type: 'GET'
    });

    request.done((data) => {
      this.setProgress(75);
      this.render([].slice.apply(data.getElementsByTagName('item')));
      this.setState('loaded');
    });

    request.fail(() => {
      this.setProgress(100);
      this.setState('error', 'Une erreur s\'est produite :-(')
    });

    this.setProgress(50);

    return this;
  }
}

module.exports = RemoteContent;
