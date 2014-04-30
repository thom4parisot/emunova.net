(function($){
  function sanitizeTitle(title){
    return ''+title.trim().replace(/^\[.+\] ?/, '');
  };

  function remoteContent(url, container){
    this.url = url;
    this.container = container;
    this.state = 'loading';
  }

  remoteContent.prototype = {
    /**
     * Applies all the data to the receivers
     *
     * @param {Array.<Object>} data
     */
    render: function(data){
      var self = this;
      var offset = 0;

      $(self.container).find('[data-item-limit]').each(function(i, receiverElement){
        var limit = parseInt(receiverElement.getAttribute('data-item-limit'), 10) || 5;

        self.renderReceiver(receiverElement, data.slice(offset, offset+limit));
        offset += limit;
      });
    },
    /**
     * Applies the given data to the receiver.
     *
     * @param {HTMLElement} el
     * @param {Array.<Object>} data
     */
    renderReceiver: function(el, data){
      var html = data.map(this.renderItem).join('');

      $(el).html(html);
    },
    /**
     * Applies the given data to a single item element.
     *
     * @param {HTMLElement} item
     * @param {Object} itemData
     */
    renderItem: function(itemElement){
      var $item = $(itemElement);
      var title = $item.find('title').text();
      var link = $item.find('link').text();
      var date = new Date($item.find('pubDate').text());
      var dateString = '';

      if ('toLocaleDateString' in date){
        dateString = date.toLocaleDateString('fr', {
          month: 'short',
          day: 'numeric'
        });
      }
      else {
        dateString = (date.getUTCDate()) + '/' + (date.getUTCMonth() + 1);
      }


      return '<dt>'+ dateString +'</dt>' +
        '<dd>'+
          '<a href="'+ link +'" target="_blank">'+ sanitizeTitle(title) +'</a>'
        '</dd>';
    },
    /**
     * Updates the progress bar to that given percentage state.
     *
     * @param {Number} percentage
     */
    setProgress: function(percentage){
      this.getProgressBarElement().css('width', parseInt(percentage, 10) + '%');
    },
    setState: function(state, message){
      $(this.container)
        .removeClass(this.state)
        .addClass(state)

      this.getProgressBarElement()
        .removeClass('progress-bar-'+this.state)
        .addClass('progress-bar-'+state)
        .text(message)
        .parent()
          .removeClass('active');

      this.state = state;
    },
    getProgressBarElement: function(){
      return $(this.container).find('[role="progressbar"]');
    },
    /**
     * Requests new data from the remote source and renders the view.
     */
    update: function(){
      var self = this;
      var request = $.ajax(self.url, {
        crossDomain: true,
        dataType: 'xml',
        timeout: 2*1000,
        type: 'GET'
      });

      request.done(function(data){
        self.setProgress(75);
        self.render([].slice.apply(data.getElementsByTagName('item')));
        selt.setState('loaded');
      });

      request.fail(function(){
        self.setProgress(100);
        self.setState('error', 'Une erreur s\'est produite :-(')
      });

      self.setProgress(50);
    }
  };

  remoteContent.create = function createRemoteContent(url, container){
    var container = new remoteContent(url, container);

    container.update();
  };

  $('.rss-content').each(function(i, el){
    remoteContent.create(el.getAttribute('data-source'), el);
  });

})(jQuery);