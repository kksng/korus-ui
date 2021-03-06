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
  "DropZone": {
    "Display": {
      "DropZone should be displayed": {
        "1": "<div class=\"dropzone-wrapper required\">\n  <div tabindex=\"0\"\n    class=\"dropzone-file-upload\"><input form=\"dropzone-form\"\n      name=\"uncontrolledWithValidation\"\n      multiple=\"\"\n      type=\"file\"\n      autocomplete=\"off\"\n      tabindex=\"-1\"\n      style=\"display: none;\"><span class=\"dropzone-icon\"></span>\n    <div><span>Перетащите файлы или</span><a>&nbsp;нажмите здесь</a>\n      <div style=\"display: none;\"></div><i class=\"dropzone-hint\"></i>\n    </div>\n  </div>\n</div>"
      },
      "Should render file list": {
        "1": "<ul class=\"rejected-list margin-none\">\n  <li><span class=\"dropzone-rejected-message txt-danger\">'rejected file': -\n      Неизвестная ошибка</span></li>\n</ul>",
        "2": "<ul>\n  <li>\n    <div style=\"display: none;\"></div><a\n      class=\"pointer dropzone-delete-icon-wrapper\"><i\n        class=\"dropzone-delete-icon\"></i></a>\n    <div style=\"display: none;\"></div><a theme=\"dropzone-file-download internal\"\n      download=\"external file\"\n      href=\"external file link\">external file</a>\n  </li>\n</ul>"
      },
      "Should render customize upload button": {
        "1": "<button type=\"button\"\n  class=\"button-wrapper customized-button\">Drop Me</button>"
      },
      "Should render customize description text": {
        "1": "<span class=\"customized-dropzone\">Drop here</span>"
      }
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
  },
  "Input": {
    "Display": {
      "Input should be displayed": {
        "1": "<div class=\"input-wrapper\">\n  <div class=\"input-element-wrapper\"><input id=\"only-numbers\"\n      placeholder=\"only numbers\"\n      aria-invalid=\"false\"\n      class=\"input-element\"\n      value=\"\"></div>\n</div>"
      },
      "isDisabled must set the component to disabled (the component is visible on the form, but it is inactive, there is no way to enter text)": {
        "1": "<div class=\"input-element-wrapper disabled\"><input id=\"isDisabled\"\n    placeholder=\"isDisabled\"\n    aria-invalid=\"false\"\n    class=\"input-element\"\n    disabled=\"\"\n    value=\"\"></div>"
      },
      "Should render component in controlled mode": {
        "1": "<div class=\"input-element-wrapper\"><input id=\"controlledMode\"\n    aria-invalid=\"false\"\n    class=\"input-element\"\n    value=\"Controlled value\"></div>"
      }
    }
  },
  "MaskedInput": {
    "Display": {
      "Should render component without placeholder": {
        "1": "<div class=\"masked-input-wrapper focused\"><input class=\"masked-input-element\"\n    maxlength=\"20\"\n    id=\"MICardNumberControlled\"\n    aria-invalid=\"false\"\n    value=\"____-____-____-____\"></div>"
      },
      "Should render placeholder": {
        "1": "<div class=\"masked-wrapper\">\n  <div class=\"masked-input-wrapper\"><input class=\"masked-input-element\"\n      maxlength=\"15\"\n      placeholder=\"___-___-___ __\"\n      id=\"MIControlledInsurance\"\n      aria-invalid=\"false\"\n      value=\"\"></div>\n</div>"
      },
      "Should render disabled state": {
        "1": "<div class=\"masked-input-wrapper disabled required\"><input\n    class=\"masked-input-element\"\n    maxlength=\"19\"\n    placeholder=\"+7 (___)-___-__-__\"\n    form=\"my-form\"\n    aria-invalid=\"false\"\n    aria-required=\"true\"\n    name=\"MINotControlledPhone\"\n    value=\"\"\n    disabled=\"\"></div>"
      }
    }
  },
  "Slider": {
    "Display": {
      "Should render the component": {
        "1": "<div class=\"slider-container\"\n  style=\"position: relative;\">\n  <div class=\"slider-track active\"\n    style=\"position: absolute; left: 0px; right: 385.5px;\"></div>\n  <div class=\"slider-track\"\n    style=\"position: absolute; left: 385.5px; right: 0px;\"></div>\n  <div class=\"slider-handle slider-handle-0 \"\n    tabindex=\"0\"\n    role=\"slider\"\n    aria-orientation=\"horizontal\"\n    aria-valuenow=\"10\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"20\"\n    style=\"position: absolute; z-index: 1; left: 385.5px;\">\n    <div class=\"tooltip top\">\n      <div class=\"tooltip-arrow\"></div>\n      <div class=\"tooltip-inner\">10</div>\n    </div>\n  </div>\n</div>"
      },
      "Should render disabled state": {
        "1": "<div class=\"slider-container disabled\"\n  style=\"position: relative;\">\n  <div class=\"slider-track active\"\n    style=\"position: absolute; left: 0px; right: 385.5px;\"></div>\n  <div class=\"slider-track\"\n    style=\"position: absolute; left: 385.5px; right: 0px;\"></div>\n  <div class=\"slider-handle slider-handle-0 \"\n    tabindex=\"0\"\n    role=\"slider\"\n    aria-orientation=\"horizontal\"\n    aria-valuenow=\"10\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"20\"\n    style=\"position: absolute; z-index: 1; left: 385.5px;\">\n    <div class=\"tooltip top\">\n      <div class=\"tooltip-arrow\"></div>\n      <div class=\"tooltip-inner\">10</div>\n    </div>\n  </div>\n</div>"
      },
      "Should render if set value": {
        "1": "<div class=\"slider-container\"\n  style=\"position: relative;\">\n  <div class=\"slider-track active\"\n    style=\"position: absolute; left: 0px; right: 693.9px;\"></div>\n  <div class=\"slider-track active\"\n    style=\"position: absolute; left: 77.1px; right: 385.5px;\"></div>\n  <div class=\"slider-track active\"\n    style=\"position: absolute; left: 385.5px; right: 192.75px;\"></div>\n  <div class=\"slider-track\"\n    style=\"position: absolute; left: 578.25px; right: 0px;\"></div>\n  <div class=\"slider-handle slider-handle-0 \"\n    tabindex=\"0\"\n    role=\"slider\"\n    aria-orientation=\"horizontal\"\n    aria-valuenow=\"2\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"20\"\n    style=\"position: absolute; z-index: 1; left: 77.1px;\">\n    <div class=\"tooltip top\">\n      <div class=\"tooltip-arrow\"></div>\n      <div class=\"tooltip-inner\">2</div>\n    </div>\n  </div>\n  <div class=\"slider-handle slider-handle-1 \"\n    tabindex=\"0\"\n    role=\"slider\"\n    aria-orientation=\"horizontal\"\n    aria-valuenow=\"10\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"20\"\n    style=\"position: absolute; z-index: 2; left: 385.5px;\">\n    <div class=\"tooltip top\">\n      <div class=\"tooltip-arrow\"></div>\n      <div class=\"tooltip-inner\">10</div>\n    </div>\n  </div>\n  <div class=\"slider-handle slider-handle-2 \"\n    tabindex=\"0\"\n    role=\"slider\"\n    aria-orientation=\"horizontal\"\n    aria-valuenow=\"15\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"20\"\n    style=\"position: absolute; z-index: 3; left: 578.25px;\">\n    <div class=\"tooltip top\">\n      <div class=\"tooltip-arrow\"></div>\n      <div class=\"tooltip-inner\">15</div>\n    </div>\n  </div>\n</div>"
      }
    }
  },
  "FileList": {
    "Display": {
      "Should render component filelist": {
        "1": "<div class=\"file-list table\">\n  <table>\n    <colgroup>\n      <col style=\"width: 4.4rem;\">\n      <col style=\"width: 6.2rem;\">\n      <col>\n      <col style=\"width: 16rem;\">\n      <col style=\"width: 5rem;\">\n      <col style=\"width: 5rem;\">\n    </colgroup>\n    <tbody>\n      <tr>\n        <td>1</td>\n        <td><i class=\"file-list-icon-1-c\"></i></td>\n        <td>test.dt<div class=\"file-list-subtitle\">Размер файла 123 мб</div>\n        </td>\n        <td>\n          <div class=\"file-list-tag\">Успешно<div class=\"file-list-subtitle\">\n              Тестовое пояснение к статусу</div>\n          </div>\n        </td>\n        <td class=\"with-button\"><button type=\"button\"\n            class=\"button-wrapper blank more\"><i\n              class=\"file-list-download\"></i></button></td>\n        <td class=\"with-button\"><button type=\"button\"\n            class=\"button-wrapper blank more\"><i\n              class=\"file-list-delete\"></i></button></td>\n      </tr>\n      <tr>\n        <td>2</td>\n        <td><i class=\"file-list-icon\"></i></td>\n        <td>test.test<div class=\"file-list-subtitle\">Размер файла 444 мб</div>\n        </td>\n        <td>\n          <div class=\"file-list-tag\">Ошибка<div class=\"file-list-subtitle\">\n              Тестовое пояснение к статусу</div>\n          </div>\n        </td>\n        <td class=\"with-button\"></td>\n        <td class=\"with-button\"><button type=\"button\"\n            class=\"button-wrapper blank more\"><i\n              class=\"file-list-delete\"></i></button></td>\n      </tr>\n      <tr>\n        <td>3</td>\n        <td><i class=\"file-list-icon-csv\"></i></td>\n        <td>test.csv<div class=\"file-list-subtitle\">Размер файла 666 мб</div>\n        </td>\n        <td>\n          <div class=\"file-list-tag success\">Успешно<div\n              class=\"file-list-subtitle\">Тестовое пояснение к статусу</div>\n          </div>\n        </td>\n        <td class=\"with-button\"></td>\n        <td class=\"with-button\"><button type=\"button\"\n            class=\"button-wrapper blank more\"><i\n              class=\"file-list-delete\"></i></button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
      }
    }
  },
  "Password": {
    "Display": {
      "Should render the component": {
        "1": "<div class=\"password-element-wrapper required\"><input id=\"Password\"\n    data-test=\"password\"\n    placeholder=\"Enter your password...\"\n    aria-invalid=\"false\"\n    aria-required=\"true\"\n    class=\"password-input\"\n    form=\"AwesomePassword\"\n    name=\"Password\"\n    type=\"password\"\n    value=\"\"><i class=\"password-is-hidden\"></i></div>"
      },
      "Should render component with default value": {
        "1": "<div class=\"password-element-wrapper\"><input id=\"withDefaultValue\"\n    aria-invalid=\"false\"\n    class=\"password-input\"\n    type=\"password\"\n    value=\"Самый безопасный пароль\"><i class=\"password-is-hidden\"></i></div>"
      },
      "Should render clear button": {
        "1": "<div class=\"password-element-wrapper focused\"><input id=\"lowercase\"\n    aria-invalid=\"false\"\n    class=\"password-input password-input-clearable\"\n    type=\"password\"\n    value=\"hello\"><i class=\"password-clear-icon\"></i><i\n    class=\"password-is-hidden\"></i></div>"
      }
    }
  }
}
