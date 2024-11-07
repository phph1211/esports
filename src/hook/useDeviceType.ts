import { useEffect, useState } from "react";

const useDeviceType = () => {
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      setIsAndroid(true);
    } else if (
      /iPad|iPhone|iPod/.test(userAgent) &&
      !(window as any).MSStream
    ) {
      setIsIOS(true);
    }
  }, []);

  return { isIOS, isAndroid };
};

export default useDeviceType;
