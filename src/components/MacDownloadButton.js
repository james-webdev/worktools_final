import React from 'react';
import AppleDownload from '../assets/images/appleDownload.png';

const MacDownloadButton = () => {
  const downloadFile = () => {
    window.location.href = 'https://download.worktools.link/GuardianInstaller.pkg';
  };
  return (
    <div className="flex flex-col justify-center items-center ml-20">
      <button className="focus:outline-none" type="button" onClick={downloadFile}>
        <img src={AppleDownload} alt="apple download" style={{ width: 200, marginBottom: 10 }} />
      </button>
      <p className="poppins">Download for Mac</p>
    </div>
  );
};
export default MacDownloadButton;
