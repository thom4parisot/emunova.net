function DynamicSorter(form){
  this.form = form;

  this.options = {
    target: document.querySelector('[data-sorter="'+ form.getAttribute('data-target') +'"]'),
    targetElements : /col-/
  };
}

DynamicSorter.prototype = {
  buildFilters: function buildFilters(){
    var filters = {};

    [].slice.call(this.form)
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
    var self = this;

    self.form.addEventListener('change', function(){
      self.updateFieldsVisibility();
      var filters = self.buildFilters();
      self.filterWith(filters);
    });

    self.form.addEventListener('reset', function(){
      setTimeout(function(){
        self.updateFieldsVisibility();
        self.filterWith({});
      }, 0);
    });
  },
  updateFieldsVisibility : function updateFieldsVisibility(){
    var self = this;

    [].slice.call(self.form.querySelectorAll("[data-visible-if]")).forEach(function(el){
      var id = el.getAttribute('data-visible-if');
      var found = [].slice.call(self.form.querySelectorAll('[name="'+id+'"],[value="'+id+'"]')).some(function(item){
        return (item.value === id && item.selected) || (item.name === id && item.value);
      });

      found ? el.classList.remove('sr-only', 'hidden') && el.focus() : el.classList.add('sr-only');
    });
  },
  filterWith: function filterWith(filters){
    var filterClass = this.options.targetElements;
    var filterKeys = Object.keys(filters);

    console.log(filters);

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