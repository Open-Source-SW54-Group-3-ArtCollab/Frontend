import { StorageService } from "../app/shared/service/storage.service";

const storageService = new StorageService();

export const environment ={
  production: false,
  baseUrl: 'https://api-production-5c23.up.railway.app/api/v1',
  localStorage: storageService.setItem('token','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJndWVzdCIsImlhdCI6MTcxOTUwNTczNiwiZXhwIjoxNzIwMTEwNTM2fQ._wGefY1AwUHdFmgvez-EzYetuq5DncEYcx7_2wGQM60cmH-XiHXRmtTaTbe5xh0I'),
}

