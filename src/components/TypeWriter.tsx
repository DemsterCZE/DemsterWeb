import { useEffect, useState } from "react";

interface StringProps {
  title: string;
}

function TypeWriter({ title }: StringProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentText = text;
    let currentLength = currentText.length;

    if (!isDeleting && currentLength < title.length) {
      timeout = setTimeout(() => {
        setText(title.slice(0, currentLength + 1));
      }, 80);
    } else if (isDeleting && currentLength > 0) {
      timeout = setTimeout(() => {
        setText(title.slice(0, currentLength - 1));
      }, 50);
    } else {
      if(isDeleting){
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
      }, 3000); 
    } else{
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
      }, 8000); 
    }
  }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, title]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((showCursor) => !showCursor);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <h1 className='mt-30 mb-30 text-center text-[1rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem] rubik'>
      {text}
      <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </h1>
  );
}

export default TypeWriter;