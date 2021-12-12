import React from 'react';
import WindowsDownload from '../assets/images/windowsDownload.png';

const WindowsDownloadButton = () => {
  const downloadFile = () => {
    window.location.href = 'https://download.worktools.link/GuardianInstaller.exe';
  };
  return (
    <div className="flex flex-col justify-center items-center mr-20">
      <button className="focus:outline-none" type="button" onClick={downloadFile}>
        <img
          src={WindowsDownload}
          alt="windows download"
          style={{ width: 200, marginBottom: 10 }}
        />
      </button>
      <p className="poppins">Download for Windows</p>
    </div>
  );
};
export default WindowsDownloadButton;
