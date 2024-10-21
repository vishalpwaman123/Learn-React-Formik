import React from "react";
function useDocumentCount(count) {
  React.useEffect(() => {
    document.title = "Count : " + count;
  }, [count]);
}

export default useDocumentCount;
