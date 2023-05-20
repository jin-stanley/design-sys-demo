import { useEffect, useState } from "react";

interface MediaQuery {
  query: string;
  matches: boolean;
}

const useMediaQuery = (queries: string[]): MediaQuery[] => {
  const [mediaQueries, setMediaQueries] = useState<MediaQuery[]>([]);

  useEffect(() => {
    const mediaQueryList: MediaQueryList[] = queries.map((query) =>
      window.matchMedia(query)
    );

    const handleMediaQueryChange = (index: number) => {
      setMediaQueries((prevQueries) => {
        const updatedQueries = [...prevQueries];
        updatedQueries[index] = {
          query: mediaQueryList[index].media,
          matches: mediaQueryList[index].matches,
        };
        return updatedQueries;
      });
    };

    const changeListeners = mediaQueryList.map((mediaQuery, index) => {
      const listener = () => handleMediaQueryChange(index);
      mediaQuery.addEventListener("change", listener);
      handleMediaQueryChange(index);
      return { mediaQuery, listener };
    });

    return () => {
      changeListeners.forEach(({ mediaQuery, listener }) =>
        mediaQuery.removeEventListener("change", listener)
      );
    };
  }, [queries]);

  return mediaQueries;
};

export default useMediaQuery;
