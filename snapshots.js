module.exports = {
  "__version": "5.2.0",
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
  "Button": {
    "Display": {
      "Should render button": {
        "1": "<button type=\"button\"\n  id=\"basicButton\"\n  class=\"button-wrapper\">Click!</button>"
      },
      "Should render button when isLoading": {
        "1": "<button type=\"button\"\n  id=\"loadButton\"\n  class=\"button-wrapper loading\">isLoading</button>"
      },
      "Should render button when isDisabled": {
        "1": "<button type=\"button\"\n  id=\"disabledButton\"\n  class=\"button-wrapper disabled\">isDisabled</button>"
      },
      "Should render with form": {
        "1": "<div class=\"input-wrapper\">\n  <div class=\"input-element-wrapper required\"><input placeholder=\"form1 Input1\"\n      aria-invalid=\"false\"\n      aria-required=\"true\"\n      class=\"input-element\"\n      form=\"form1\"\n      name=\"Input1\"\n      value=\"\"></div>\n</div>"
      }
    }
  },
  "ButtonGroup": {
    "Display": {
      "Should render all the buttons in the group": {
        "1": "<button type=\"button\"\n  class=\"button-wrapper button-group-item first last\">one</button>"
      }
    }
  },
}
