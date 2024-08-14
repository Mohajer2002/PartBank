//classes & storages
class BaseStorage {
  getItem() {}
  setItem() {}
  removeItem() {}
  clear() {}
}

class CookieStorage extends BaseStorage {
  getItem(key) {
    const cookieSearchKey = encodeURIComponent(key) + '='
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i]
      while (cookie.charAt(0) === ' ') cookie = cookie.substring(1)
      if (cookie.indexOf(cookieSearchKey) === 0)
        return JSON.parse(
          decodeURIComponent(cookie.substring(cookieSearchKey.length, cookie.length))
        )
    }
    return null
  }

  setItem(key, value) {
    document.cookie =
      encodeURIComponent(key) + '=' + encodeURIComponent(JSON.stringify(value)) + ';path=/'
  }

  removeItem(key) {
    document.cookie = encodeURIComponent(key) + '=; expires=Thu, 01 Jan 1990 00:00:00 GMT;path=/'
  }

  clear() {
    const cookies = document.cookie.split(';')
    for (let cookie of cookies) {
      const [name] = cookie.split('=')
      this.removeItem(name.trim())
    }
  }
}
class Storages extends BaseStorage {
  #storage
  constructor(storageType = 'localStorage') {
    super()
    this.#storage = this.#getStorage(storageType)
  }

  #getStorage(type) {
    switch (type) {
      case 'localStorage':
        return localStorage
      case 'sessionStorage':
        return sessionStorage
      case 'cookie':
        return new CookieStorage()
      default:
        throw new Error('error storage type !!!')
    }
  }

  setItem(key, value) {
    this.#storage.setItem(key, this.encryption(JSON.stringify(value)))
  }

  getItem(key) {
    const hashedValue = this.#storage.getItem(String(key))
    return JSON.parse(this.decryption(hashedValue))
  }

  removeItem(key) {
    this.#storage.removeItem(String(key))
  }

  clear() {
    this.#storage.clear()
  }
}

class Hash extends Storages {
  reverseData(data) {
    return data.split('').reverse().join('')
  }
  encryption(data) {
    return this.reverseData(data)
  }
  decryption(data) {
    return this.reverseData(data)
  }
}

export default Hash
