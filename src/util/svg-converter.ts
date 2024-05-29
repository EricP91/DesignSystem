import * as fs from 'fs';
import * as path from 'path';
import { ElementNode, RootNode, parse } from 'svg-parser';
import { toHtml } from 'hast-util-to-html';
import { RootContent } from 'hast-util-to-html/lib';

const SVG_FOLDER_PATH = path.join(path.resolve(), 'src/assets/svg');

export function extractInnerSvgContent(svgPath: string): string {
  const svgContent = fs.readFileSync(svgPath, 'utf-8');
  const parsedSvg: RootNode = parse(svgContent);
  const innerContent = (parsedSvg.children[0] as ElementNode).children as RootContent[];
  const innerSvgContent = toHtml(innerContent);

  return innerSvgContent;
}

export function replaceFill(svgContent: string): string {
  return svgContent.replace(/<path([^>]*)fill="[^"]*"/g, `<path$1fill={fill}`);
}

export function generateReactComponent(svgPath: string): void {
  const svgFileName = path.basename(svgPath, path.extname(svgPath));
  const componentName = svgFileName.replace(/\W+/g, '');
  const innerSvgContent = extractInnerSvgContent(svgPath);
  const modifiedSvgContent = replaceFill(innerSvgContent);

  const reactComponentCode = `
    import React from 'react';
    import SvgIcon from '@mui/material/SvgIcon';
    import { SvgIconProps } from 'assets/icons/types';

    export function ${componentName}({fill = '#5E6974', ...props}: SvgIconProps): JSX.Element {
      return (
        <SvgIcon {...props}>
          ${modifiedSvgContent}
        </SvgIcon>
      );
    }
  `;

  const outputFilePath = path.join(SVG_FOLDER_PATH, `${componentName}Icon.tsx`);
  fs.writeFileSync(outputFilePath, reactComponentCode, 'utf-8');

  // eslint-disable-next-line no-console
  console.log(`React component "${componentName}" has been created at ${outputFilePath}`);
}

export function processSvgFilesInFolder(): void {
  const svgFiles = fs.readdirSync(SVG_FOLDER_PATH).filter((file) => path.extname(file) === '.svg');

  svgFiles.forEach((svgFile) => {
    const svgFilePath = path.join(SVG_FOLDER_PATH, svgFile);
    generateReactComponent(svgFilePath);
  });
}

processSvgFilesInFolder();
