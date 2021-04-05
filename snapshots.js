module.exports = {
  "__version": "5.2.0",
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
  }
}
