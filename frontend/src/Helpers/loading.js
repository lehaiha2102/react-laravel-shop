import { useEffect, useState } from "react";

export function LoadingHelper(initialLoadingState, loadingTime) {
  const [isLoading, setIsLoading] = useState(initialLoadingState);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);
  }, []);

  return isLoading;
}
