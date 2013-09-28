function DynamicSorter(form){
  this.form = form;

  this.options = {
    target: document.querySelector('div[data-sorter="'+ form.getAttribute('data-target') +'"]'),
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
    var value = field.label || field.value;
    var id = el.name || field.name || field.value;
    var operator = "";

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
      var filters = self.buildFilters();
      self.filterWith(filters);
    });

    self.form.addEventListener('reset', function(){
      self.filterWith({});
    });
  },
  filterWith: function filterWith(filters){
    var filterClass = this.options.targetElements;
    var filterKeys = Object.keys(filters);

    var toggleElementVisibility = function(el){
      var shouldBeVisible = filterKeys.length ? false : true;

      if (el.className.match(filterClass)) {
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