// POST request

const form = document.querySelector('#loginForm')

function sendLoginRequest(form) {
  // Create request
  const request = new XMLHttpRequest()
  request.open("POST", "server.php")
  request.setRequestHeader('Content-type', 'application/json')

  // Data processing
  const formData = new FormData(form)
  const userObj = {}
  formData.forEach((element, index) => {
    userObj[index] = element
  })
  // console.log(userObj)
  const jsonUser = JSON.stringify(userObj)
  // console.log('JSON' + jsonUser);

  // Send request
  request.send(jsonUser)
  
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      const requestObj = JSON.parse(request.response)
      if (requestObj.success) {
        alert('Авторизация прошла успешно!')
      } else {
        alert('Имя пользователя или пароль введены не верно!')
      }
    }
  }
  // request.onload = () => {alert(request.response)}
}

form.addEventListener('submit',(event) => {
  event.preventDefault()
  sendLoginRequest(form)
})