import { decode, encode } from 'base-64'

if (!global.btoa || !global.atob) {
  global.btoa = encode
  global.atob = decode
}
