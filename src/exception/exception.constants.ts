import { HttpStatus } from '@nestjs/common';
import { IResponseBody } from './exception.interfaces';

export const EXCEPTION_CODE = {
  WRONG_PARAMETER: 'WRONG_PARAMETER',
  INVALID_TOKEN: 'INVALID_TOKEN',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  NOT_MATCHING: 'NOT_MATCHING',
  RECORD_NOT_FOUND: 'RECORD_NOT_FOUND',
  INCORRECT_PASSWORD_LENGTH: 'INCORRECT_PASSWORD_LENGTH',
  EMPTY_USER_ID: 'EMPTY_USER_ID',
  EMPTY_USER_NAME: 'EMPTY_USER_NAME',
  EMPTY_ID_TYPE: 'EMPTY_ID_TYPE',
  EMPTY_ID_VALUE: 'EMPTY_ID_VALUE',
  MUST_BE_STRING: 'MUST_BE_STRING',
  MUST_BE_NUMBER: 'MUST_BE_NUMBER',
  MUST_BE_EMAIL: 'MUST_BE_EMAIL',
};

export const EXCEPTIONS: Record<string, IResponseBody> = {
  WRONG_PARAMETER: {
    resultCode: HttpStatus.BAD_REQUEST,
    resultMsg: '잘못된 파라미터 입니다.',
  },
  INVALID_TOKEN: {
    resultCode: HttpStatus.UNAUTHORIZED,
    resultMsg: '사용할 수 없는 토큰입니다.',
  },
  INTERNAL_SERVER_ERROR: {
    resultCode: HttpStatus.INTERNAL_SERVER_ERROR,
    resultMsg: '알 수 없는 에러입니다.',
  },
  USER_NOT_FOUND: {
    resultCode: HttpStatus.NOT_FOUND,
    resultMsg: '존재하지 않는 사용자 입니다.',
  },
  NOT_MATCHING: {
    resultCode: HttpStatus.BAD_REQUEST,
    resultMsg: '정보가 일치하지 않습니다.',
  },
  RECORD_NOT_FOUND: {
    resultCode: HttpStatus.NOT_FOUND,
    resultMsg: '기록을 찾을 수 없습니다.',
  },
  INCORRECT_PASSWORD_LENGTH: {
    resultCode: HttpStatus.NOT_FOUND,
    resultMsg: '비밀번호 길이는 4 ~ 8 입니다.',
  },
  EMPTY_USER_ID: {
    resultCode: HttpStatus.BAD_REQUEST,
    resultMsg: '이메일이 빠졌습니다.',
  },
  EMPTY_USER_NAME: {
    resultCode: HttpStatus.BAD_REQUEST,
    resultMsg: '이름이 빠졌습니다.',
  },
  MUST_BE_STRING: {
    resultCode: HttpStatus.BAD_REQUEST,
    resultMsg: '이 필드는 String 값이어야 합니다.',
  },
  MUST_BE_EMAIL: {
    resultCode: HttpStatus.BAD_REQUEST,
    resultMsg: '이 필드는 이메일이어야 합니다.',
  },
  MUST_BE_NUMBER: {
    resultCode: HttpStatus.BAD_REQUEST,
    resultMsg: '이 필드는 Number 값이어야 합니다.',
  },
};
