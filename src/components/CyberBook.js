import React from 'react';

const CyberBook = () => {
  const downloadFile = () => {
    window.location.href =
      'https://docs.google.com/open?id=1UXbAK_L_ruVoeGQSWAoGQV_betqeEhTzVLFMytU6IBQ&authuser=ben%40work.tools&usp=drive_fs';
  };
  return (
    <>
      <div className="backgroundBlue py-8 mt-5 text-center sm:flex sm:justify-center sm:items-center">
        <div className="max-w-6xl px-10 sm:flex sm:justify-between sm:items-center">
          <div className="text-black text-left lg:w-2/3">
            <h1 className="poppins text-3xl font-semibold">Download our cyber security eBook!</h1>
            <p className="poppins mt-5">
              Learn everything you need to keep you, your clients and your company safe with our
              easy-to-follow 12 page eBook
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-end w-full sm:w-1/3">
            <button
              onClick={downloadFile}
              className="mt-5 sm:mt-0 py-3 px-6 headerDownload text-white poppins compliancebuttonborder focus:outline-none"
              type="submit"
            >
              <p>Free Download</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CyberBook;
