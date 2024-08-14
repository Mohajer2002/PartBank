export const loginConfig = {
  method: 'post',
  url: 'auth/login',
  type: 'login',
  headers: {
    'gateway-token': null
  }
  //   data: JSON.stringify({
  //     phoneNumber: telInputValue,
  //     password: passwordInputValue
  //   })
}

export const dashboardConfig = {
  method: 'get',
  url: 'deposit-account'
}


export const createAccountConfig = {
  method: 'post',
  url: 'deposit-account'
}