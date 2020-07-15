import React, { Component } from "react";
import { createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
export class ReactCropper extends Component {
  cropper = createRef();
  cropImage = () => {
    const { setImage } = this.props;
    if (typeof this.cropper.current.getCroppedCanvas() === "undefined") {
      return;
    }
    this.cropper.current.getCroppedCanvas().toBlob(blob => {
      setImage(blob);
    }, "image/*");
  };
  render() {
    const { imagePreview } = this.props;
    return (
      <div className="cropper-section">
        {" "}
        <Cropper
          ref={this.cropper}
          src={imagePreview}
          // style={{ height: "400", width: "100%" }}
          preview=".img-preview"
          aspectRatio={1}
          viewMode={1}
          dragMode="move"
          guides={false}
          scalable={true}
          cropBoxMovable={true}
          cropBoxResizable={true}
          crop={this.cropImage}
        />
      </div>
    );
  }
}

export default ReactCropper;