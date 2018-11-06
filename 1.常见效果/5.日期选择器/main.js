(function () {

  const datePicker = window.datePicker;

  datePicker.firstRenderUI = function (input) {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const data = datePicker.getMonthData(year, month);
    let ui = `
    <div class="ui-datepicker-header">
    <!-- 手型图标，也可以用 cursor: pointer -->
    <a href="#" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a>
    <a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>
    <span class="ui-datepicker-curr-month">${year}-${month}</span>
    </div>
    <div class="ui-datepicker-body">
      <table>
        <thead>
          <tr>
            <th>日</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
          </tr>
        </thead>
        <tbody>
          <tr>`;
    for (let i = 0; i < data.length; i++) {
      // 使用 data-month 来保存日期所属的月份
      // 可以通过 ele.dataset.month 来取到
      if (data[i].month != data[15].month) {
        ui += `<td class='other-month' data-month='${data[i].month}'>${data[i].date}</td>`
      } else {
        ui += `<td data-month='${data[i].month}'>${data[i].date}</td>`
      }
      if ((i + 1) % 7 == 0) {
        if (i == data.length - 1) {
          ui += '</tr>';
        } else if (i != 0) {
          ui += '</tr> <tr>';
        }
      }
    }
    ui += `
      </tbody>
      </table>
    </div>`;

    const wrapper = document.createElement('div');
    wrapper.className = 'ui-datepicker-wrapper';
    wrapper.innerHTML = ui;
    document.body.appendChild(wrapper);
    const $input = document.querySelector(input);
    bindListener($input);
    let open = false;

    $input.addEventListener('click', function () {
      if (open == false) {
        const left = $input.offsetLeft;
        const top = $input.offsetTop;
        const height = $input.offsetHeight;
        wrapper.style.position = 'absolute';
        wrapper.style.top = `${top + height}px`;
        wrapper.style.left = `${left}px`;
        wrapper.style.display = 'block';
        open = true;
      } else {
        wrapper.style.display = 'none';
        open = false;
      }
    });
  }

  function bindListener($input) {
    const prevBtn = document.getElementsByClassName('ui-datepicker-prev-btn')[0];
    const nextBtn = document.getElementsByClassName('ui-datepicker-next-btn')[0];
    const yearMonth = document.getElementsByClassName('ui-datepicker-curr-month')[0];
    const pickerbody = document.getElementsByClassName('ui-datepicker-wrapper')[0];

    let year = yearMonth.innerHTML.split('-')[0];
    let month = yearMonth.innerHTML.split('-')[1];

    pickerbody.onclick = function (event) {
      if (event.srcElement.nodeName !== 'TD') {
        event.stopPropagation();
        return;
      }
      const selectDay = Number(event.srcElement.innerHTML);
      const selectMonth = Number(event.srcElement.dataset.month);
      let selectYear = Number(year);
      if (month == 1 && selectMonth == 12) {
        selectYear--;
      } else if (month == 12 && selectMonth == 1) {
        selectYear++;
      }
      datePicker.selectDay = {
        year: selectYear,
        month: selectMonth,
        day: selectDay
      }
      $input.value = `${selectYear}-${selectMonth}-${selectDay}`;
    }

    prevBtn.onclick = function () {
      month = month - 1;
      if (month == 0) {
        year = year - 1;
        month = 12;
      }
      yearMonth.innerHTML = `${year}-${month}`;
      datePicker.renderUI(year, month);
    }

    nextBtn.onclick = function () {
      month = Number(month) + 1;
      if (month == 13) {
        year = Number(year) + 1;
        month = 1;
      }
      yearMonth.innerHTML = `${year}-${month}`;
      datePicker.renderUI(year, month);
    }
  }

  datePicker.renderUI = function (year, month) {
    const pickerbody = document.getElementsByClassName('ui-datepicker-body')[0];
    let days = pickerbody.children[0].tBodies[0];

    const data = datePicker.getMonthData(year, month);
    let ui = `<tr>`;
    for (let i = 0; i < data.length; i++) {
      if (data[i].month != data[15].month) {
        ui += `<td class='other-month' data-month='${data[i].month}'>${data[i].date}</td>`
      } else {
        ui += `<td data-month='${data[i].month}'>${data[i].date}</td>`
      }
      if ((i + 1) % 7 == 0) {
        if (i == data.length - 1) {
          ui += '</tr>';
        } else if (i != 0) {
          ui += '</tr> <tr>';
        }
      }
    }
    days.innerHTML = ui;
  }
})()