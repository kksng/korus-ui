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
  }
}
