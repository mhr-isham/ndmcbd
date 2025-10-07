function showUploadWidget() {
  cloudinary.openUploadWidget(
    {
      cloudName: "mdarafat159",
      uploadPreset: "test_image",
      sources: ["camera", "google_drive", "facebook", "url", "local"],
      googleApiKey: "<image_search_google_api_key>",
      showAdvancedOptions: false,
      showSkipCropButton: false,
      cropping: true,
      multiple: false,
      defaultSource: "local",
    },
    (err, result) => {
      if (!err) {
        result.info.files[0].uploadInfo.secure_url;
      }
    }
  );
}

export default showUploadWidget;
