'use strict';

const $ = require('jquery');

module.exports = class DynamicSorter {
  constructor(form) {
    this.form = form;

    this.options = {
      target: document.querySelector('[data-sorter="'+ form.getAttribute('data-target') +'"]'),
      targetElements : /col-/
    };
  }

  registerEvents(){
    this.form.addEventListener('change', () => {
      updateFieldsVisibility(this.form);
      updateLabels(this.form);
      var filters = buildFilters(this.form);
      filterWith(filters, this.options);
    });

    this.form.addEventListener('reset', () => setTimeout(() => {
      updateFieldsVisibility(this.form);
      updateLabels(this.form);
      filterWith({}, this.options);
    }, 0));
  }
}

function buildFilters (form) {
  const filters = {};

  [].slice.call(form.elements)
    .map(buildFilterForField)
    .filter(d => d)
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

  Object.keys(filters).forEach((key) => {
    if (filters[key].value === ""){
      delete filters[key];
    }
  });

  return filters;
}

function buildFilterForField(el){
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
    field: `data-${id}`,
    operator: operator,
    value: value
  };
}

function updateLabels(form){
  const $form = $(form);

  $form.find('select').each(function(){
    const option = this.options[this.selectedIndex];
    let text;

    if ($(option).parent().is('optgroup') && this.selectedIndex){
      text = [this.options[0].label, option.label].join(' ');
    }
    else {
      text = option.label;
    }

    $(this).parent().find('label[for="'+ this.id +'"]').html(text);
  });
}

function updateFieldsVisibility(form){
  [].slice.call(form.querySelectorAll("[data-visible-if]")).forEach(function(el){
    const id = el.getAttribute('data-visible-if');
    const found = [].slice.call(form.querySelectorAll('[name="'+id+'"],[value="'+id+'"]')).some((item) => {
      return (item.value === id && item.selected) || (item.name === id && item.value);
    });

    found ? el.classList.remove('hidden') && el.focus() : el.classList.add('hidden');
  });
}

function filterWith(filters, options){
  var filterClass = options.targetElements;
  var filterKeys = Object.keys(filters);

  const toggleElementVisibility = function(el){
    var shouldBeVisible = filterKeys.length ? false : true;

    if (el.className.match(filterClass) || el.nodeName === "TR") {
      shouldBeVisible = filterKeys.every(key => {
        const filter = filters[key];

        switch(filter.operator){
          case "<": return el.getAttribute(filter.field).toLowerCase() <= filter.value.toLowerCase(); break;
          case ">": return el.getAttribute(filter.field).toLowerCase() >= filter.value.toLowerCase(); break;
          default: return el.getAttribute(filter.field).toLowerCase() === filter.value.toLowerCase(); break;
        }
      });
    }

    shouldBeVisible ? el.classList.remove('sr-only') : el.classList.add('sr-only');
  };

  [].slice.call(options.target.children).forEach(toggleElementVisibility);
}
