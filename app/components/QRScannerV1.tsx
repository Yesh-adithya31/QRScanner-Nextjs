import { useEffect, useRef } from "react";
import { BrowserQRCodeReader } from "@zxing/browser";

const QRScannerV1: React.FC<{ onScan: (data: string) => void }> = ({
  onScan,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const constraints: MediaStreamConstraints = {
      video: { facingMode: "environment" },
      audio: false,
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });

    const scanQRCode = () => {
      const video = videoRef.current;
      if (!video) return;

      video.addEventListener("play", () => {
        const codeReader = new BrowserQRCodeReader();
        const scan = async () => {
          if (!video) return;
          try {
            const result = await codeReader.decodeOnceFromVideoElement(video);
            // Handle the decoded content as needed
            if (result) {
              console.log("QR Code Content:", result.getText());
              onScan(result.getText()); // Pass the scanned data to a callback
            }
          } catch (error) {
            // Handle decoding errors
            console.error("QR Code Decoding Error:", error);
          }

          requestAnimationFrame(scan);
        };

        requestAnimationFrame(scan);
      });
    };

    scanQRCode();
  }, [onScan]); // Include onScan in the dependencies to prevent stale closures

  return (
    <div className="bg-white max-h-screen overflow-hidden flex items-center justify-center">
      <video ref={videoRef} autoPlay playsInline className="w-screen"></video>
      <div className="overlay absolute flex items-center justify-center">
        <img
          src="/images/scaneframe.png"
          alt="Overlay"
          className="overlay-image h-100"
        />
      </div>
    </div>
  );
};

export default QRScannerV1;
