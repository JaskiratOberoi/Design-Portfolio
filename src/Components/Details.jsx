import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function Details() {

    const [content, setContent] = useState("");

    useEffect(() => {
      fetch("Page.md")
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, [content]);
  return (
    <div className='project-details-page'>
        <ReactMarkdown children={content} />
    </div>
  )
}

export default Details