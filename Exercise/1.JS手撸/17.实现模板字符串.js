function render(str, obj) {
  if (!str || !obj) return '';
  Object.keys(obj).forEach((key) => {
    str = str.replace(new RegExp('{{' + key + '}}', 'g'), obj[key]);
  })
  return str;
}

console.log(render("{{name}}很厉name害{{name}}，才{{age}}岁",  { name: "jawil", age: "15" }))