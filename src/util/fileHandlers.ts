import { AxiosResponse } from 'axios';

export function downloadFile(url = '', name = '', response?: AxiosResponse): void {
  const link = document.createElement('a');
  let href = '';

  if (url) {
    link.href = url;
  } else if (response) {
    href = URL.createObjectURL(response.data);
    link.href = href;
  }

  link.setAttribute('download', name);
  link.click();

  if (response && !url) {
    URL.revokeObjectURL(href);
  }
}
