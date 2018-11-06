(function() {
  const datePicker = {};

  datePicker.getMonthData = function(year, month) {
    const result = [];
    if (!year || !month) {
      const today = new Date();
      year = today.getFullYear();
      month = today.getMonth() + 1;
    }
    // 这月的第一天
    const firstDay = new Date(year, month - 1, 1);
    // 这月第一天是周几
    const firstWeekDay = firstDay.getDay();
    const lastDay = new Date(year, month, 0);
    const lastWeekDay = lastDay.getDay();
    for (let i = firstWeekDay - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, -i);
      result.push({
        month: month - 1 == 0 ? 12: month - 1,
        date: date.getDate()
      })
    }
    let day = new Date(year, month - 1, 1);
    while (day <= lastDay) {
      result.push({
        month: month,
        date: day.getDate()
      });
      day.setDate(day.getDate() + 1);
    }
    if (lastWeekDay < 6) {
      for (let i = lastWeekDay + 1; i <= 6; i++) {
        result.push({
          month: month + 1 == 13 ? 1 : month + 1,
          date: day.getDate()
        })
        day.setDate(day.getDate() + 1);
      } 
    }
    if (result.length == 35) {
      for (let i = 0; i < 7; i++) {
        result.push({
          month: month + 1 == 13 ? 1 : month + 1,
          date: day.getDate()
        })
        day.setDate(day.getDate() + 1);
      }
    }
    return result;
  }

  window.datePicker = datePicker;
})()