module.exports = {
  "__version": "5.2.0",
  "DatePicker": {
    "Display": {
      "Should render datepicker": {
        "1": "<input class=\"datepicker-input\"\n  maxlength=\"11\"\n  placeholder=\"Type your date...\"\n  aria-invalid=\"false\"\n  name=\"firstDatePicker\"\n  value=\"\">"
      },
      "Should render placeholder": {
        "1": "<input class=\"datepicker-input\"\n  maxlength=\"11\"\n  placeholder=\"Type your date...\"\n  aria-invalid=\"false\"\n  name=\"firstDatePicker\"\n  value=\"\">"
      }
    },
    "Interaction": {
      "Should work with different date formats": {
        "1": "<input class=\"datepicker-input\"\n  maxlength=\"11\"\n  aria-invalid=\"false\"\n  name=\"secondDatePicker\"\n  value=\"11.11.1111\">",
        "2": "<input class=\"datepicker-input\"\n  maxlength=\"39\"\n  aria-invalid=\"false\"\n  name=\"openedCalendar\"\n  value=\"11-е число  11-го месяца  1111-го года\">"
      }
    }
  },
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
  "CheckBox": {
    "Display": {
      "Should render elements inside the checkbox": {
        "1": "<button type=\"button\"\n  class=\"button-wrapper loading\">isLoading</button>"
      },
      "Should render semi": {
        "1": "<label for=\"checkBoxSemi\"\n  class=\"checkbox-label semi\">isSemi</label>"
      },
      "Should render disabled checkbox": {
        "1": "disabled"
      }
    }
  },
  "DateTimeRange": {
    "Display": {
      "Should render DateTimeRange": {
        "1": "<div class=\"datepicker-wrapper\">\n  <div class=\"datepicker-input-wrapper\"><input class=\"datepicker-input\"\n      maxlength=\"17\"\n      aria-invalid=\"false\"\n      aria-required=\"true\"\n      name=\"DateTimeRange-to\"\n      value=\"15.05.2018 16:30\"><span class=\"datepicker-icons-wrapper\"><span\n        class=\"datepicker-calendar-icon\"></span></span></div>\n</div>"
      }
    }
  },
  "DateTimePicker": {
    "Display": {
      "Should render DateTimePicker": {
        "1": "<input class=\"datepicker-input\"\n  maxlength=\"18\"\n  placeholder=\"datetimepicker\"\n  data-test=\"dp1\"\n  form=\"date-form\"\n  aria-invalid=\"false\"\n  aria-required=\"true\"\n  name=\"datetimepicker\"\n  value=\"23.10.18 14:30:25\">"
      }
    }
  }
}
