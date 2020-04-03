import { useEffect } from 'react'
import _ from 'lodash';

function useOnScrollToBottom(onScroll: () => void) {
  useEffect(() => {
    const handleFetchPostsOnScroll = _.debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        onScroll();
      }
    }, 100);

    window.addEventListener('scroll', handleFetchPostsOnScroll)

    return () => window.removeEventListener('scroll', handleFetchPostsOnScroll);

  }, [onScroll])
}

export default useOnScrollToBottom;
