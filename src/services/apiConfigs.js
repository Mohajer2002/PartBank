export const loginConfig = {
  method: 'post',
  url: 'auth/login',
  type: 'login',
  headers: {
    'gateway-token': null
  }
}

export const getDepositAccountConfig = {
  method: 'get',
  url: 'deposit-account'
}
export const deleteDepositAccountConfig = {
  method: 'delete',
  url: 'deposit-account'
}

export const createAccountConfig = {
  method: 'post',
  url: 'deposit-account'
}
export const transactionListConfig = {
  method: 'get',
  url: 'transactions'
}
export const logoutConfig = {
  method: 'post',
  url: 'auth/logout'
}
