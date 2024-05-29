import { AxiosResponse } from 'axios';
import { downloadFile } from './fileHandlers';

describe('fileHandlers', () => {
  describe('downloadFile', () => {
    test('should call set attribute and click and fill link value', () => {
      const url = 'linkTest';
      const name = 'nameTest';
      const mock = { click: jest.fn(), setAttribute: jest.fn(), href: undefined };
      jest.spyOn(document, 'createElement').mockReturnValue(mock);

      downloadFile(url, name);

      expect(mock.href).toEqual(url);
      expect(mock.click).toBeCalled();
      expect(mock.setAttribute).toBeCalledWith('download', name);
    });

    test('should set download attribute with string empty when name is not provided', () => {
      const url = 'linkTest';
      const mock = { click: jest.fn(), setAttribute: jest.fn(), href: undefined };
      jest.spyOn(document, 'createElement').mockReturnValue(mock);

      downloadFile(url);

      expect(mock.setAttribute).toBeCalledWith('download', '');
    });

    test('should call set attribute with data from axios response link value', () => {
      const name = 'nameTest.csv';
      const url = 'testUrl';
      const response: AxiosResponse = {
        data: { size: 1188, type: 'text/csv' },
        status: 200,
        statusText: '',
        headers: {},
        config: {},
      };
      global.URL.createObjectURL = jest.fn().mockReturnValue(url);
      global.URL.revokeObjectURL = jest.fn();
      const mock = { click: jest.fn(), setAttribute: jest.fn(), href: undefined };
      jest.spyOn(document, 'createElement').mockReturnValue(mock);

      downloadFile('', name, response);

      expect(mock.href).toEqual(url);
      expect(mock.click).toBeCalled();
      expect(mock.setAttribute).toBeCalledWith('download', name);
    });
  });
});
