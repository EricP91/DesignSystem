import '@testing-library/jest-dom/extend-expect';
import { convertARGBToRGBA, isARGBFormat, parseColor } from './colorUtil';

describe('ColorUtil', () => {
  describe('isARGBFormat', () => {
    test('should return true if color is in hex argb format', () => {
      const response = isARGBFormat('#AABBCCDD');
      expect(response).toBeTruthy();
    });

    test('should return false if color is in hex format', () => {
      const response = isARGBFormat('#AABBCC');
      expect(response).toBeFalsy();
    });

    test('should return false if color is in color name format', () => {
      const response = isARGBFormat('red');
      expect(response).toBeFalsy();
    });
  });

  describe('convertARGBToRGBA', () => {
    test('should swap two first characters with two last characters', () => {
      const response = convertARGBToRGBA('#AABBCCDD');
      expect(response.substring(1, 3)).toEqual('BB');
      expect(response.substring(7, 9)).toEqual('AA');
    });
  });

  describe('parseColor', () => {
    test('should return color if color is not argb', () => {
      const color = parseColor('#AABBCCDD');
      expect(color).toEqual('#BBCCDDAA');
    });

    test('should return the same color if color is color name', () => {
      const color = parseColor('red');
      expect(color).toEqual('red');
    });

    test('should return the same color if color is color hex', () => {
      const color = parseColor('#AABBCC');
      expect(color).toEqual('#AABBCC');
    });
  });
});
