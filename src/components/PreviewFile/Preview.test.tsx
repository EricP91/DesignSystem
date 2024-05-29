import React from 'react';
import { render, screen, act, fireEvent } from 'test-utils';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import MPreviewFile from './MPreviewFile';
import PreviewBottomBar from './PreviewBottomBar';
import { PreviewErrorCodes, PreviewType } from './enums';
import { Base64ImagesPreview, VideoPreview } from './types';

const mockResponsePreviewData = {
  fileFormat: 'png',
  data: ['src1', 'src2'],
};

mockAllIsIntersecting(true);

const mockInitialProps = {
  artifactId: 'mockArtifactId',
  artifactName: 'mockArtifactName.pdf',
  previewData: { type: PreviewType.BASE_64_IMAGE, data: ['src1', 'src2'] } as Base64ImagesPreview,
  artifactExtension: 'pdf',
  totalPages: 2,
  onPreviewImageScrolled: jest.fn(),
  onDownloadClick: jest.fn(),
  onDownloadFailed: jest.fn(),
  onClose: jest.fn(),
};

const mockVideoProps = {
  artifactId: 'mockArtifactId',
  artifactName: 'mockArtifactName.pdf',
  previewData: { type: PreviewType.VIDEO, data: 'src', mediaType: 'video/mp4' } as VideoPreview,
  artifactExtension: 'mp4',
  totalPages: 2,
  onPreviewImageScrolled: jest.fn(),
  onDownloadClick: jest.fn(),
  onDownloadFailed: jest.fn(),
  onClose: jest.fn(),
};

describe('Preview', () => {
  beforeEach(() => {});

  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  it('should render component', async () => {
    let container;
    await act(async () => {
      container = render(<MPreviewFile {...mockInitialProps} />).container;
    });
    expect(container).toBeInTheDocument();
  });

  it('should render preview top bar with evidence name', async () => {
    await act(async () => {
      await render(<MPreviewFile {...mockInitialProps} />);
    });
    const topBar = screen.getByTestId('preview-top-bar');
    expect(topBar).toBeInTheDocument();
    const fileName = screen.getByTestId('preview-file-name');
    expect(fileName.textContent).toEqual(mockInitialProps.artifactName);
  });

  it('should render images', async () => {
    await act(async () => {
      render(<MPreviewFile {...mockInitialProps} />);
    });
    const imageContainer = screen.getByTestId('preview-image-container');
    expect(imageContainer).toBeInTheDocument();
    const images = imageContainer.querySelectorAll('img');
    expect(images.length).toEqual(mockResponsePreviewData.data.length);
  });

  it('should render video', async () => {
    await act(async () => {
      await render(<MPreviewFile {...mockVideoProps} />);
    });
    const videoWrapper = screen.getByTestId('video-wrapper');
    expect(videoWrapper).toBeInTheDocument();
    const video = videoWrapper.querySelector('video');
    expect(video).toBeInTheDocument();
    expect(screen.queryByTestId('print-file-button')).not.toBeInTheDocument();
  });

  it('should render bottom bar', async () => {
    await act(async () => {
      await render(<MPreviewFile {...mockInitialProps} />);
    });
    const bottomBar = screen.getByTestId('preview-bottom-bar');
    expect(bottomBar).toBeInTheDocument();
    expect(bottomBar.textContent).toEqual('Page1/2');
  });

  it('should not render rotate button when file format is not supported', async () => {
    const props = { ...mockInitialProps, artifactExtension: 'pptx' };
    await act(async () => {
      await render(<MPreviewFile {...props} />);
    });
    const rotateImageBtn = screen.queryByTestId('rotate-image-button');
    expect(rotateImageBtn).not.toBeInTheDocument();
  });

  it('should rotate first image when rotate button clicked', async () => {
    await act(async () => {
      await render(<MPreviewFile {...mockInitialProps} />);
    });

    const imageContainer = screen.getByTestId('preview-image-container');
    expect(window.getComputedStyle(imageContainer.querySelector('img') as HTMLElement).transform).toEqual(
      'rotate(0deg)'
    );
    const rotateImageBtn = screen.getByTestId('rotate-image-button');
    await act(async () => {
      fireEvent.click(rotateImageBtn);
    });
    expect(window.getComputedStyle(imageContainer.querySelector('img') as HTMLElement).transform).toEqual(
      'rotate(90deg)'
    );
  });

  it('should show image index on bar', async () => {
    jest.spyOn(window.HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      top: -600,
      bottom: 400,
      height: 1000,
      width: 20,
      x: 0,
      y: 0,
      left: 0,
      right: 0,
      toJSON: jest.fn(),
    });
    await act(async () => {
      await render(<MPreviewFile {...mockInitialProps} />);
    });
    const scrollContainer = screen.getByTestId('preview-scroll-container');
    const images = scrollContainer.querySelectorAll('img');
    images.forEach((image) => {
      image.style.height = '1000px';
    });
    expect(screen.getByTestId('preview-bottom-bar').textContent).toEqual('Page1/2');
  });

  it('should call zoom function with different values', async () => {
    const mockZoomFunction = jest.fn();
    const mockRotateFunction = jest.fn();
    await act(async () => {
      await render(
        <PreviewBottomBar
          currentPage={1}
          totalPages={1}
          onRotateClick={mockRotateFunction}
          onZoomClick={mockZoomFunction}
          labels={{}}
        />
      );
    });
    const zoomInBtn = screen.getByTestId('zoom-image-in');
    const zoomOutBtn = screen.getByTestId('zoom-image-out');
    const zoomResetBtn = screen.getByTestId('zoom-image-reset');
    fireEvent.click(zoomInBtn);

    expect(mockZoomFunction).toHaveBeenCalledWith(0.1);
    fireEvent.click(zoomOutBtn);
    expect(mockZoomFunction).toHaveBeenCalledWith(-0.1);
    fireEvent.click(zoomResetBtn);
    expect(mockZoomFunction).toHaveBeenCalledWith(0);
  });

  it('should call close function on button click', async () => {
    await act(async () => {
      await render(<MPreviewFile {...mockInitialProps} />);
    });
    const closeBtn = screen.getByTestId('close-preview-button');
    expect(closeBtn).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(closeBtn);
    });
    expect(mockInitialProps.onClose).toHaveBeenCalled();
  });

  it('should render not found icon when file not exists', async () => {
    const props = { ...mockInitialProps, errorCode: PreviewErrorCodes.ARTIFACT_NOT_FOUND };
    await act(async () => {
      await render(<MPreviewFile {...props} />);
    });
    const notFoundIcon = screen.getByText('No Preview Available');
    expect(notFoundIcon).toBeInTheDocument();
  });

  it('should render corrupted file icon when file is corrupted', async () => {
    const props = { ...mockInitialProps, errorCode: PreviewErrorCodes.CORRUPTED_FILE };
    await act(async () => {
      await render(<MPreviewFile {...props} />);
    });
    const notFoundIcon = screen.getByText('Corrupted File');
    expect(notFoundIcon).toBeInTheDocument();
  });

  it('should render password icon when file is password protected', async () => {
    const props = { ...mockInitialProps, errorCode: PreviewErrorCodes.DOCUMENT_PASSWORD_PROTECTED };
    await act(async () => {
      await render(<MPreviewFile {...props} />);
    });
    const notFoundIcon = screen.getByText('Preview Password Protected');
    expect(notFoundIcon).toBeInTheDocument();
  });

  it('should could not generate preview icon when invalid file format', async () => {
    const props = { ...mockInitialProps, errorCode: PreviewErrorCodes.UNSUPPORTED_FILE_TYPE };
    await act(async () => {
      await render(<MPreviewFile {...props} />);
    });
    const notFoundIcon = screen.getByText('Could Not Generate Preview');
    expect(notFoundIcon).toBeInTheDocument();
  });

  it('should could not generate preview icon on server error', async () => {
    const props = { ...mockInitialProps, errorCode: PreviewErrorCodes.GENERAL_PREVIEW_ERROR };
    await act(async () => {
      await render(<MPreviewFile {...props} />);
    });
    const notFoundIcon = screen.getByText('Could Not Generate Preview');
    expect(notFoundIcon).toBeInTheDocument();
  });

  it('should call download function on button click', async () => {
    await act(async () => {
      await render(<MPreviewFile {...mockInitialProps} />);
    });
    const downloadBtn = screen.getByTestId('download-file-button');
    expect(downloadBtn).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(downloadBtn);
    });
    expect(mockInitialProps.onDownloadClick).toHaveBeenCalledWith(mockInitialProps.artifactId);
  });

  it('should call download failed function on button click', async () => {
    const error = new Error('error');
    const props = {
      ...mockInitialProps,
      onDownloadClick: () => {
        throw error;
      },
    };
    await act(async () => {
      await render(<MPreviewFile {...props} />);
    });
    const downloadBtn = screen.getByTestId('download-file-button');
    await act(async () => {
      fireEvent.click(downloadBtn);
    });
    expect(mockInitialProps.onDownloadFailed).toHaveBeenCalledWith(mockInitialProps.artifactId, error);
  });

  it('should create html for print preview', async () => {
    await act(async () => {
      await render(<MPreviewFile {...mockInitialProps} />);
    });
    const printBtn = screen.getByTestId('print-file-button');
    expect(printBtn).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(printBtn);
    });
    const iframe = screen.getByTestId('print-iframe');
    expect(iframe).toBeInTheDocument();
  });
});
