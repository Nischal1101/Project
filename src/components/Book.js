import React from "react";

const Book = () => {
  return (
    <>
      <div className="w-screen h-screen pt-24">
        <iframe
          className="w-full h-full"
          title="myframe"
          src="https://docs.google.com/forms/d/e/1FAIpQLSewjlNSXfBwKFD1T0mfubPM646w1Vbpe4UMI0veQarEbwNWJg/viewform?embedded=true"
          width="640"
          height="956"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
};

export default Book;
