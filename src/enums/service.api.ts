import { CHANGELOG_URL } from '@consts';

enum EApiType {
  CHANGELOG = CHANGELOG_URL
}

enum EApiMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete'
}

export {
  EApiType,
  EApiMethod
};