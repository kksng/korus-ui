module.exports = {
  "AutoComplete": {
    "Display": {
      "Should render placeholder": {
        "1": "<input aria-invalid=\"false\"\n  aria-required=\"true\"\n  autocomplete=\"off\"\n  class=\"autocomplete-input\"\n  form=\"myForm\"\n  name=\"AutoComplete2\"\n  placeholder=\"Type your city...\"\n  value=\"\">"
      },
      "Should render ClearButton": {
        "1": "<i class=\"autocomplete-clear-icon\"></i>"
      },
      "Should render SuggestionList when isOpen": {
        "1": "<ul class=\"suggestion-list\">\n  <li class=\"suggestion-item\">Tokyo</li>\n  <li class=\"suggestion-item\">Delhi</li>\n</ul>"
      },
      "Should render loader when isLoading": {
        "1": "<div class=\"loader-container\"><span class=\"loader-element\"></span></div>"
      },
      "noSuggestionsRender": {
        "Should render defaultMessage": {
          "1": "<div class=\"suggestion-wrapper visible\">\n  <div class=\"nodata\">Ничего не найдено</div>\n</div>"
        },
        "Should render customMessage": {
          "1": "<div class=\"suggestion-wrapper visible\">\n  <div class=\"txt-center inner nodata\">набери что-то, что я знаю</div>\n</div>"
        }
      }
    }
  },
  "__version": "5.2.0"
}
