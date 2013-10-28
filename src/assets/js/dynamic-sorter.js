function DynamicSorter(form){
  "use strict";

  this.form = form;

  this.options = {
    target: document.querySelector('[data-sorter="'+ form.getAttribute('data-target') +'"]'),
    targetElements : /col-/
  };
}

DynamicSorter.prototype = {
  buildFilters: function buildFilters(){
    "use strict";
    var filters = {};

    [].slice.call(this.form.elements)
      .map(this.buildFilterForField)
      .filter(function(d){ return d; })
      .forEach(function mergingFilter(filter){
        if (filters[filter.field] === undefined){
          filters[filter.field] = {
            field: filter.field,
            operator: "",
            value: ""
          };
        }

        filters[filter.field].operator += filter.operator;
        filters[filter.field].value += filter.value;

        return filters[filter.field];
      });

    Object.keys(filters).forEach(function(key){
      if (filters[key].value === ""){
        delete filters[key];
      }
    });

    return filters;
  },
  buildFilterForField: function buildFilterForField(el){
    "use strict";
    var field = (el.options && el.selectedIndex >= 0) ? el.options[el.selectedIndex] : el;
    var value = el.name ? field.value : (field.label || field.value);
    var id = el.name || field.name || field.value;
    var operator = field.getAttribute('data-operator') || "";

    if (id.match(/^(.+)-operator$/)) {
      id = RegExp.$1;
      operator = field.value;
      value = "";
    }

    if (!operator && (id === "" || value === "")){
      return null;
    }

    return {
      field: 'data-'+id+'',
      operator: operator,
      value: value
    };
  },
  registerEvents: function registerEvents(){
    "use strict";
    var self = this;

    self.form.addEventListener('change', function(){
      self.updateFieldsVisibility();
      self.updateLabels();
      var filters = self.buildFilters();
      self.filterWith(filters);
    });

    self.form.addEventListener('reset', function(){
      setTimeout(function(){
        self.updateFieldsVisibility();
        self.updateLabels();
        self.filterWith({});
      }, 0);
    });
  },
  updateLabels: function updateLabels(){
    "use strict";

    var $form = $(this.form);

    $form.find('select').each(function(){
      var option = this.options[this.selectedIndex];
      var text;

      if ($(option).parent().is('optgroup') && this.selectedIndex){
        text = [this.options[0].label, option.label].join(' ');
      }
      else {
        text = option.label;
      }

      console.log(this.getAttribute('id'))

      $(this).parent().find('label[for="'+ this.id +'"]').html(text);
    });
  },
  updateFieldsVisibility : function updateFieldsVisibility(){
    "use strict";
    var self = this;

    [].slice.call(self.form.querySelectorAll("[data-visible-if]")).forEach(function(el){
      var id = el.getAttribute('data-visible-if');
      var found = [].slice.call(self.form.querySelectorAll('[name="'+id+'"],[value="'+id+'"]')).some(function(item){
        return (item.value === id && item.selected) || (item.name === id && item.value);
      });

      found ? el.classList.remove('hidden') && el.focus() : el.classList.add('hidden');
    });
  },
  filterWith: function filterWith(filters){
    "use strict";
    var filterClass = this.options.targetElements;
    var filterKeys = Object.keys(filters);

    var toggleElementVisibility = function(el){
      var shouldBeVisible = filterKeys.length ? false : true;

      if (el.className.match(filterClass) || el.nodeName === "TR") {
        shouldBeVisible = filterKeys.every(function(key){
          var filter = filters[key];

          switch(filter.operator){
            case "<": return el.getAttribute(filter.field).toLowerCase() <= filter.value.toLowerCase(); break;
            case ">": return el.getAttribute(filter.field).toLowerCase() >= filter.value.toLowerCase(); break;
            default: return el.getAttribute(filter.field).toLowerCase() === filter.value.toLowerCase(); break;
          }
        });
      }

      shouldBeVisible ? el.classList.remove('sr-only') : el.classList.add('sr-only');
    };

    [].slice.call(this.options.target.children).forEach(toggleElementVisibility);
  }
};