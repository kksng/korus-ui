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
  },
  "DateRange": {
    "Display": {
      "Should render DateRange": {
        "1": "<div class=\"datepicker-wrapper\">\n  <div class=\"datepicker-input-wrapper\"><input class=\"datepicker-input\"\n      maxlength=\"11\"\n      placeholder=\"Type your date...\"\n      aria-invalid=\"false\"\n      name=\"MinMaxDatePicker-to\"\n      value=\"\"><span class=\"datepicker-icons-wrapper\"><span\n        class=\"datepicker-calendar-icon\"></span></span></div>\n  <div class=\"calendar-wrapper visible\">\n    <div class=\"calendar-nav\"><span class=\"calendar-prev-button\"><i\n          class=\"calendar-prev-icon\"></i></span><span class=\"calendar-title\">Май\n        2012</span><span class=\"calendar-next-button disabled-button\"><i\n          class=\"calendar-next-icon\"></i></span></div>\n    <div class=\"calendar-week-days\">\n      <div title=\"Понедельник\"\n        class=\"calendar-date-cell\">Пн</div>\n      <div title=\"Вторник\"\n        class=\"calendar-date-cell\">Вт</div>\n      <div title=\"Среда\"\n        class=\"calendar-date-cell\">Ср</div>\n      <div title=\"Четверг\"\n        class=\"calendar-date-cell\">Чт</div>\n      <div title=\"Пятница\"\n        class=\"calendar-date-cell\">Пт</div>\n      <div title=\"Суббота\"\n        class=\"calendar-date-cell\">Сб</div>\n      <div title=\"Воскресенье\"\n        class=\"calendar-date-cell\">Вс</div>\n    </div>\n    <div class=\"calendar-month-dates\">\n      <div class=\"calendar-dates-row\">\n        <div class=\"calendar-date-cell different-month-date\"\n          title=\"30 апреля 2012\">30</div>\n        <div class=\"calendar-date-cell\"\n          title=\"1 мая 2012\">1</div>\n        <div class=\"calendar-date-cell\"\n          title=\"2 мая 2012\">2</div>\n        <div class=\"calendar-date-cell\"\n          title=\"3 мая 2012\">3</div>\n        <div class=\"calendar-date-cell active\"\n          title=\"4 мая 2012\">4</div>\n        <div class=\"calendar-date-cell disabled-date\">5</div>\n        <div class=\"calendar-date-cell disabled-date\">6</div>\n      </div>\n      <div class=\"calendar-dates-row\">\n        <div class=\"calendar-date-cell disabled-date\">7</div>\n        <div class=\"calendar-date-cell disabled-date\">8</div>\n        <div class=\"calendar-date-cell disabled-date\">9</div>\n        <div class=\"calendar-date-cell disabled-date\">10</div>\n        <div class=\"calendar-date-cell disabled-date\">11</div>\n        <div class=\"calendar-date-cell disabled-date\">12</div>\n        <div class=\"calendar-date-cell disabled-date\">13</div>\n      </div>\n      <div class=\"calendar-dates-row\">\n        <div class=\"calendar-date-cell disabled-date\">14</div>\n        <div class=\"calendar-date-cell disabled-date\">15</div>\n        <div class=\"calendar-date-cell disabled-date\">16</div>\n        <div class=\"calendar-date-cell disabled-date\">17</div>\n        <div class=\"calendar-date-cell disabled-date\">18</div>\n        <div class=\"calendar-date-cell disabled-date\">19</div>\n        <div class=\"calendar-date-cell disabled-date\">20</div>\n      </div>\n      <div class=\"calendar-dates-row\">\n        <div class=\"calendar-date-cell disabled-date\">21</div>\n        <div class=\"calendar-date-cell disabled-date\">22</div>\n        <div class=\"calendar-date-cell disabled-date\">23</div>\n        <div class=\"calendar-date-cell disabled-date\">24</div>\n        <div class=\"calendar-date-cell disabled-date\">25</div>\n        <div class=\"calendar-date-cell disabled-date\">26</div>\n        <div class=\"calendar-date-cell disabled-date\">27</div>\n      </div>\n      <div class=\"calendar-dates-row\">\n        <div class=\"calendar-date-cell disabled-date\">28</div>\n        <div class=\"calendar-date-cell disabled-date\">29</div>\n        <div class=\"calendar-date-cell disabled-date\">30</div>\n        <div class=\"calendar-date-cell disabled-date\">31</div>\n        <div class=\"calendar-date-cell disabled-date\">1</div>\n        <div class=\"calendar-date-cell disabled-date\">2</div>\n        <div class=\"calendar-date-cell disabled-date\">3</div>\n      </div>\n    </div>\n  </div>\n</div>"
      },
      "Should show different required messages": {
        "1": "<div class=\"datepicker-wrapper\">\n  <div class=\"datepicker-input-wrapper danger required\"><input\n      class=\"datepicker-input\"\n      maxlength=\"11\"\n      placeholder=\"ThirdDateRange\"\n      form=\"112\"\n      aria-invalid=\"true\"\n      aria-required=\"true\"\n      name=\"ThirdDateRange-to\"\n      value=\"\"><span class=\"datepicker-icons-wrapper\"><span\n        class=\"datepicker-calendar-icon\"></span></span></div><span\n    class=\"invalid-message-list\"><span class=\"invalid-message-item\">second\n      message</span></span>\n</div>"
      },
      "Should show required message when isRequired": {
        "1": "<div class=\"datepicker-wrapper\">\n  <div class=\"datepicker-input-wrapper danger required\"><input\n      class=\"datepicker-input\"\n      maxlength=\"11\"\n      placeholder=\"Type something...\"\n      form=\"111\"\n      aria-invalid=\"true\"\n      aria-required=\"true\"\n      name=\"secondDatePicker\"\n      value=\"\"><span class=\"datepicker-icons-wrapper\"><span\n        class=\"datepicker-calendar-icon\"></span></span></div><span\n    class=\"invalid-message-list\"><span class=\"invalid-message-item\">required\n      message</span></span>\n</div>"
      }
    }
  },
  "DropDownSelect": {
    "Display": {
      "Should render the component": {
        "1": "<div class=\"dropdownselect-input-wrapper\"><input id=\"DDSBoundingContainerRef\"\n    aria-invalid=\"false\"\n    aria-required=\"false\"\n    autocomplete=\"off\"\n    class=\"dropdownselect-input\"\n    value=\"\"><span class=\"dropdownselect-select-icon closed\"></span></div>"
      },
      "Should render value": {
        "1": "<input id=\"DDSCompareObjectsBy\"\n  aria-invalid=\"false\"\n  aria-required=\"false\"\n  autocomplete=\"off\"\n  class=\"dropdownselect-input\"\n  placeholder=\"\"\n  readonly=\"\"\n  value=\"London\">"
      },
      "Should render data": {
        "1": "<div class=\"suggestion-wrapper visible\">\n  <ul class=\"suggestion-list\">\n    <li class=\"suggestion-item\">Moscow</li>\n    <li class=\"suggestion-item\">Minsk</li>\n    <li class=\"suggestion-item highlighted selected\">London</li>\n    <li class=\"suggestion-item\">Berlin</li>\n    <li class=\"suggestion-item\">Paris</li>\n    <li class=\"suggestion-item\">Stockholm</li>\n    <li class=\"suggestion-item\">Madrid</li>\n    <li class=\"suggestion-item\">Madrid</li>\n  </ul>\n</div>"
      }
    },
    "Should render loader when isLoading": {
      "1": "<div class=\"loader-container\"><span class=\"loader-element\"></span></div>"
    }
  },
  "FileUpload": {
    "Display": {
      "Should render component in controlled mode": {
        "1": "<a class=\"controlled\"\n  aria-invalid=\"false\"><span>Загрузить</span>\n  <div tabindex=\"0\"><input id=\"controlledFileUpload\"\n      accept=\".jpg, .gif, .png, .txt, .jpeg\"\n      type=\"file\"\n      autocomplete=\"off\"\n      tabindex=\"-1\"\n      style=\"display: none;\"></div>\n</a>"
      },
      "Should render customizated component": {
        "1": "<button type=\"button\"\n  aria-invalid=\"false\"\n  class=\"button-wrapper warning custom\"><span>Загрузить?</span>\n  <div tabindex=\"0\"><input id=\"customFileUpload\"\n      accept=\".jpg, .gif, .png\"\n      type=\"file\"\n      autocomplete=\"off\"\n      tabindex=\"-1\"\n      style=\"display: none;\"></div>\n</button>"
      },
      "Should render loading when using isLoading prop": {
        "1": "<a class=\"loaded underlining className\"\n  aria-invalid=\"false\"><span>Идёт загрузка...</span>\n  <div tabindex=\"0\"><input type=\"file\"\n      autocomplete=\"off\"\n      tabindex=\"-1\"\n      style=\"display: none;\"></div>\n</a>"
      }
    }
  }
}
