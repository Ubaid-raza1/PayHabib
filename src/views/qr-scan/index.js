import React, { useState, useRef } from 'react';
import { Box } from '@mui/system';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CustomButton from 'ui-component/custom-button';

const QrScan = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = () => {
    // Add your upload logic here using selectedFile
    console.log('Uploaded file:', selectedFile);
  };

  const hanldeUploadCancel = () => {
    setPreviewUrl(null);
    setSelectedFile(null);
  };

  return (
    <div className="main">
      <h1>QR Scan</h1>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
        <Box
          sx={{
            border: '1px solid ',
            width: { xl: '50%', lg: '50%', md: '100%', sm: '100%', xs: '100%' },
            borderRadius: '5px',
            padding: '20px'
          }}
        >
          <h2>Upload files</h2>
          <Box
            sx={{
              border: '1px dashed #ccc',
              borderRadius: '5px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" style={{ width: '200px', minHeight: '200px', objectFit: 'contain' }} />
            ) : (
              <>
                <CloudUploadIcon fontSize="large" />
                <h2>Drop QR image here</h2>
                <p>Support format: PNG, JPG</p>
                <div>OR</div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <CustomButton variant={'text'} onClick={handleBrowseClick}>
                  Browse files
                </CustomButton>
              </>
            )}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'end', gap: '10px', marginTop: '20px' }} onClick={hanldeUploadCancel}>
            <CustomButton variant={'text'} color="inherit">
              Cancel
            </CustomButton>
            <CustomButton variant={'contained'} onClick={handleUpload} disabled={!selectedFile}>
              Upload
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default QrScan;
