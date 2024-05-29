import * as fs from 'fs';
import * as path from 'path';
import { extractInnerSvgContent, replaceFill } from './svg-converter';

jest.mock('fs', () => ({
  hasOwnProperty: jest.fn(() => true),
  ...jest.requireActual('fs'),
}));

describe('extractInnerSvgContent', () => {
  const readFileSyncSpy = jest.spyOn(fs, 'readFileSync');
  const writeFileSyncSpy = jest.spyOn(fs, 'writeFileSync');

  beforeEach(() => {
    readFileSyncSpy.mockClear();
    writeFileSyncSpy.mockClear();
  });

  it('should extract inner SVG content', () => {
    const svgPath = path.join(__dirname, 'test.svg');
    const expectedContent = '<path d="M10 10" fill="#000000"></path>';
    const svgContent = `<svg>${expectedContent}</svg>`;

    readFileSyncSpy.mockReturnValue(svgContent);

    const result = extractInnerSvgContent(svgPath);

    expect(result).toEqual(expectedContent);
  });

  it('should replace fill attribute with dynamic value', () => {
    const svgContent = '<path d="M10 10" fill="#000000" />';
    const expectedContent = '<path d="M10 10" fill={fill} />';

    const result = replaceFill(svgContent);

    expect(result).toEqual(expectedContent);
  });
});
